import { Link, useLocation } from "@remix-run/react";
import { useState } from "react";
import { Icon } from "@iconify/react";

const navLinks = [
  { to: "/projects",   label: "Projects"    },
  { to: "/about",      label: "About"       },
  { to: "/skills",     label: "Skills"      },
  { to: "/experience", label: "Experience"  },
  { to: "/contact",    label: "Contact"     },
];

export function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed z-20 bg-black/50 w-full top-0 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-5 border-b border-white/[0.06]">

          <Link to="/" className="text-xl font-semibold tracking-tight hover:opacity-80 transition">
            Ferryal Fajar
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Icon icon={open ? "lucide:x" : "lucide:menu"} width={20} height={20} />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-white/70">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`hover:text-white transition ${pathname === to ? "text-white font-medium" : ""}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <a
            href="mailto:ferryalmfajar@gmail.com"
            className="hidden md:inline-flex group min-w-[120px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 border-gradient hover:text-white gap-2 text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full px-5 py-2.5 relative backdrop-blur-xl items-center justify-center"
          >
            Hire Me
            <Icon icon="lucide:arrow-right" width={16} height={16} />
          </a>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-80" : "max-h-0"}`}>
          <div className="flex flex-col py-4 space-y-1 border-b border-white/10">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-2 py-3 text-base rounded-lg hover:bg-white/5 transition ${pathname === to ? "text-white font-medium" : "text-white/70"}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href="mailto:ferryalmfajar@gmail.com"
              className="mt-2 inline-flex items-center justify-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3"
            >
              Hire Me <Icon icon="lucide:arrow-right" width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
