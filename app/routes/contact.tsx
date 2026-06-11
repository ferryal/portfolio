import { Link } from "@remix-run/react";
import { Icon } from "@iconify/react";
import type { MetaFunction } from "@remix-run/node";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { useRole } from "~/lib/role";

export const meta: MetaFunction = () => [
  { title: "Contact — Ferryal Fajar" },
  { name: "description", content: "Get in touch with Ferryal Fajar — available for projects and collaborations." },
];

const channels = [
  { label: "Email",      value: "ferryalmfajar@gmail.com",              href: "mailto:ferryalmfajar@gmail.com",              icon: "lucide:mail",     accent: "from-blue-500/20 to-cyan-500/20",   iconColor: "text-cyan-400"  },
  { label: "LinkedIn",   value: "linkedin.com/in/ferryalfajar",          href: "https://www.linkedin.com/in/ferryalfajar",    icon: "lucide:linkedin", accent: "from-blue-600/20 to-blue-400/20",   iconColor: "text-blue-400"  },
  { label: "GitHub",     value: "github.com/ferryal",                    href: "https://github.com/ferryal",                  icon: "lucide:github",   accent: "from-white/10 to-white/5",          iconColor: "text-white"     },
  { label: "Twitter / X",value: "@iyalion",                              href: "https://twitter.com/iyalion",                 icon: "lucide:twitter",  accent: "from-sky-500/20 to-blue-500/20",    iconColor: "text-sky-400"   },
];

export default function Contact() {
  const role = useRole();

  const tagline =
    role === "frontend"
      ? "Whether you need a React/TypeScript expert or want to chat about frontend architecture — I'd love to connect."
      : "Whether you have a project in mind or just want to connect — I'd love to hear from you. Let's build something great together.";

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-24">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center mb-6">
            <Icon icon="lucide:mail" width={14} height={14} className="text-white/60" />
            <span className="text-xs text-white/70">Let's Connect</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            Ready to work together?
          </h1>
          <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto">{tagline}</p>
        </div>

        {/* Primary email CTA */}
        <div className="border-gradient before:rounded-3xl bg-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-xl text-center mb-12">
          <div className="text-5xl mb-4">✉️</div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Send me an email</h2>
          <p className="text-white/60 mb-8 text-sm">The fastest way to start a conversation. I usually reply within 24 hours.</p>
          <a
            href="mailto:ferryalmfajar@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full px-8 py-3.5 hover:opacity-90 transition shadow-[0_4px_40px_rgba(56,189,248,0.3)]"
          >
            ferryalmfajar@gmail.com
            <Icon icon="lucide:arrow-right" width={16} height={16} />
          </a>
        </div>

        {/* Channel cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {channels.map(({ label, value, href, icon, accent, iconColor }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-start gap-4 border-gradient before:rounded-2xl bg-white/5 hover:bg-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center`}>
                <Icon icon={icon} width={24} height={24} className={iconColor} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-white/50 mb-0.5">{label}</p>
                <p className="font-medium text-white text-sm mb-1 truncate">{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Location & availability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <div className="border-gradient before:rounded-2xl bg-white/5 rounded-2xl p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-3">
              <Icon icon="lucide:map-pin" width={16} height={16} className="text-white/50" />
              <span className="text-xs text-white/50 uppercase tracking-widest">Location</span>
            </div>
            <p className="font-medium">Indonesia</p>
            <p className="text-sm text-white/50 mt-1">WIB (UTC+7) · Open to remote</p>
          </div>
          <div className="border-gradient before:rounded-2xl bg-white/5 rounded-2xl p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-3">
              <Icon icon="lucide:clock" width={16} height={16} className="text-white/50" />
              <span className="text-xs text-white/50 uppercase tracking-widest">Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <p className="font-medium">Open to opportunities</p>
            </div>
            <p className="text-sm text-white/50 mt-1">Freelance · Contract · Full-time</p>
          </div>
        </div>

        {/* Explore more */}
        <div className="text-center">
          <p className="text-white/40 text-sm mb-4">Explore more</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[["projects","Projects"],["about","About"],["skills","Skills"],["experience","Experience"]].map(([to, label]) => (
              <Link key={to} to={`/${to}`} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-4 py-2 transition">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
