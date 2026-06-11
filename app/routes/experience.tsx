import { Link } from "@remix-run/react";
import { Icon } from "@iconify/react";
import type { MetaFunction } from "@remix-run/node";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { useRole, experienceByRole, type ExperienceEntry } from "~/lib/role";

export const meta: MetaFunction = () => [
  { title: "Experience — Ferryal Fajar" },
  { name: "description", content: "7+ years of engineering across fintech, e-commerce, logistics, and healthcare." },
];

export default function Experience() {
  const role = useRole();

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-24">

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center mb-6">
            <Icon icon="lucide:workflow" width={14} height={14} className="text-white/60" />
            <span className="text-xs text-white/70">Work Experience</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">Career Journey</h1>
          <p className="text-base md:text-lg text-white/60 max-w-2xl">
            {role === "frontend"
              ? "7+ years of frontend engineering — building UIs that scale, perform, and feel great to use."
              : "7+ years of fullstack engineering across fintech, e-commerce, logistics, and healthcare — from junior to senior."}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* <div className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-500/0 hidden md:block" /> */}

          <div className="space-y-6">
            {experienceByRole[role].map((entry: ExperienceEntry, i: number) => (
              <div key={`${entry.company}-${i}`} className="relative flex gap-5 items-start">
                {/* Logo */}
                {(() => {
                  const darkBg = ["Capital Net Indonesia", "HIJUP"].includes(entry.company);
                  return (
                    <div className={`flex-shrink-0 z-10 w-16 h-16 rounded-full ring-1 ring-white/15 flex items-center justify-center overflow-hidden ${darkBg ? "bg-black" : "bg-white"}`}>
                      {entry.logo ? (
                        <img
                          src={entry.logo}
                          alt={entry.company}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            const el = e.currentTarget as HTMLImageElement;
                            el.style.display = "none";
                            if (el.parentElement) {
                              el.parentElement.className = "flex-shrink-0 z-10 w-16 h-16 rounded-full ring-1 ring-white/15 bg-white/10 flex items-center justify-center";
                              el.parentElement.innerHTML = `<span class="text-base font-bold text-white">${i + 1}</span>`;
                            }
                          }}
                        />
                      ) : (
                        <span className="text-base font-bold text-white/60">{i + 1}</span>
                      )}
                    </div>
                  );
                })()}

                {/* Card */}
                <div className="flex-1 border-gradient before:rounded-2xl bg-white/5 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h2 className="text-xl font-semibold tracking-tight">{entry.role}</h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-violet-400 font-medium text-sm">{entry.company}</span>
                        <span className="text-white/30">·</span>
                        <span className="text-xs text-white/50 bg-white/5 rounded-full px-2 py-0.5">{entry.location}</span>
                      </div>
                    </div>
                    <span className="text-xs text-white/50 whitespace-nowrap mt-1 font-medium">{entry.period}</span>
                  </div>

                  <ul className="space-y-1.5 mb-5">
                    {entry.highlights.map((h: string) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-violet-400" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {entry.techstack.map((tech: string) => (
                      <span key={tech} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-black bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full px-6 py-3 hover:opacity-90 transition"
          >
            See my projects
          </Link>
          <a
            href="mailto:ferryalmfajar@gmail.com"
            className="inline-flex items-center justify-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3"
          >
            Get in touch <Icon icon="lucide:arrow-right" width={16} height={16} />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
