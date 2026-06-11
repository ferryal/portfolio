import { Icon } from "@iconify/react";
import type { MetaFunction } from "@remix-run/node";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { useRole, skillsByRole, type SkillCategory } from "~/lib/role";

export const meta: MetaFunction = () => [
  { title: "Skills — Ferryal Fajar" },
  { name: "description", content: "Full-stack toolkit: Frontend, Backend, and Cloud & DevOps skills." },
];

function SkillCard({ name, icon, color }: { name: string; icon: string; color: string }) {
  return (
    <div className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default">
      <div
        className="transition-transform duration-300 group-hover:scale-110"
        style={{ color }}
      >
        <Icon icon={icon} width={40} height={40} />
      </div>
      <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const role = useRole();

  const categories: SkillCategory[] = skillsByRole[role];

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center mb-6">
            <Icon icon="lucide:code-2" width={14} height={14} className="text-white/60" />
            <span className="text-xs text-white/70">Tech Stack</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">Skills & Tools</h1>
          <p className="text-base md:text-lg text-white/60 max-w-2xl">
            {role === "frontend"
              ? "My deep frontend expertise plus the backend and DevOps skills that make me effective across the full product lifecycle."
              : "The full-stack toolkit I use to build, ship, and scale web products — from pixel to production."}
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {categories.map((cat, catIdx) => (
            <div key={cat.title}>
              {/* Category header */}
              <div className="flex items-start gap-4 mb-8">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${cat.accentGradient} border ${cat.accentBorder} flex items-center justify-center`}
                >
                  <Icon icon={cat.headerIcon} width={20} height={20} className={cat.headerIconColor} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-2xl md:text-3xl font-semibold">{cat.title}</h2>
                    {/* Badge: core vs also-proficient for frontend role */}
                    {role === "frontend" && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${
                        catIdx === 0
                          ? "bg-violet-500/15 border-violet-500/30 text-violet-300"
                          : "bg-white/5 border-white/10 text-white/40"
                      }`}>
                        {catIdx === 0 ? "Core expertise" : "Also proficient"}
                      </span>
                    )}
                    {role === "fullstack" && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-medium border bg-violet-500/15 border-violet-500/30 text-violet-300">
                        {catIdx === 0 ? "Frontend" : catIdx === 1 ? "Backend" : "DevOps"}
                      </span>
                    )}
                  </div>
                  <p className="text-white/60 text-sm md:text-base">{cat.description}</p>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-3">
                {cat.skills.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 border-gradient before:rounded-2xl bg-white/5 rounded-2xl p-8 md:p-10 text-center backdrop-blur-xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Always learning</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-6">
            The web moves fast. I stay current with the ecosystem to ensure every project uses the best available patterns and tools.
          </p>
          <a
            href="mailto:ferryalmfajar@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full px-6 py-3 hover:opacity-90 transition"
          >
            Let's work together
            <Icon icon="lucide:arrow-right" width={16} height={16} />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
