import { Link } from "@remix-run/react";
import { Icon } from "@iconify/react";

const socials = [
  { href: "https://www.linkedin.com/in/ferryalfajar", icon: "lucide:linkedin",  label: "LinkedIn" },
  { href: "https://github.com/ferryal",               icon: "lucide:github",    label: "GitHub"   },
  { href: "https://twitter.com/iyalion",              icon: "lucide:twitter",   label: "Twitter"  },
  { href: "mailto:ferryalmfajar@gmail.com",           icon: "lucide:mail",      label: "Email"    },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="z-10 relative border-t border-white/[0.06] mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="text-lg font-semibold block mb-3">Ferryal Fajar</Link>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Senior Fullstack Engineer building scalable web applications end-to-end.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10"
                >
                  <Icon icon={icon} width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Pages</h3>
            <ul className="space-y-3">
              {[["projects","Projects"],["about","About"],["skills","Skills"],["experience","Experience"],["contact","Contact"]].map(([to, label]) => (
                <li key={to}>
                  <Link to={`/${to}`} className="text-sm text-white/60 hover:text-white transition">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Expertise</h3>
            <ul className="space-y-3">
              {["Frontend Development","Backend Engineering","Full-Stack Dev","Architecture","Consulting"].map((item) => (
                <li key={item}>
                  <Link to="/skills" className="text-sm text-white/60 hover:text-white transition">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <Icon icon="lucide:mail" width={16} height={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:ferryalmfajar@gmail.com" className="hover:text-white transition break-all">
                  ferryalmfajar@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <Icon icon="lucide:map-pin" width={16} height={16} className="mt-0.5 flex-shrink-0" />
                <span>Indonesia</span>
              </li>
              <li className="mt-2">
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition">
                  Get in touch <Icon icon="lucide:arrow-right" width={14} height={14} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-xs text-white/50">© {year} Ferryal Fajar. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/60">
            <Link to="/projects"   className="hover:text-white transition">Projects</Link>
            <Link to="/about"      className="hover:text-white transition">About</Link>
            <Link to="/contact"    className="hover:text-white transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
