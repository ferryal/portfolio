import { useEffect, useRef } from "react";
import { Link } from "@remix-run/react";
import { Icon } from "@iconify/react";
import type { MetaFunction } from "@remix-run/node";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { useRole, heroContent } from "~/lib/role";

export const meta: MetaFunction = () => [
  { title: "Ferryal Fajar — Senior Engineer" },
  { name: "description", content: "Experienced Engineer with 7+ years building web applications end-to-end." },
];

const carouselProjects = [
  { img: "/images/projects/dagangan_cms/cover.png",       tags: "TypeScript • Next.js", title: "CMS Dashboard Dagangan",    subtitle: "Internal content management for tracking & operations" },
  { img: "/images/projects/dagangan_belanja/cover.png",   tags: "PWA • Next.js",        title: "Retail Platform Dagangan",  subtitle: "PWA for retail & minimarket owners to place orders"   },
  { img: "/images/projects/amartha_marketplace/cover.png",tags: "React • JavaScript",   title: "P2P Platform Amartha",      subtitle: "Peer-to-peer platform connecting micro-SME investors"  },
  { img: "/images/projects/fingular/cover.png",           tags: "TypeScript • Next.js", title: "Fingular — BNPL Platform",  subtitle: "Global neobank and Buy Now Pay Later (BNPL) platform" },
  { img: "/images/projects/sophiie_ai/cover.png",         tags: "AI • Integration",     title: "Sophiie AI — JMS Platform", subtitle: "AI-powered job management system integration layer"    },
];

const teaserCards = [
  { to: "/about",      label: "About",      emoji: "👋", desc: "Who I am, how I work, what drives me"  },
  { to: "/skills",     label: "Skills",     emoji: "⚡", desc: "Full stack toolkit — FE, BE, DevOps"   },
  { to: "/experience", label: "Experience", emoji: "🏢", desc: "7+ years across 6 companies"           },
  { to: "/contact",    label: "Contact",    emoji: "✉️", desc: "Let's build something together"        },
];

export default function Index() {
  const role = useRole();
  const hero = heroContent[role];
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = carouselRef.current;
    if (!scroller) return;
    const cards = Array.from(scroller.querySelectorAll("article")) as HTMLElement[];

    function centerSlide(c: HTMLElement, s: HTMLElement, b: ScrollBehavior = "auto") {
      c.scrollTo({ left: s.offsetLeft - (c.clientWidth - s.clientWidth) / 2, behavior: b });
    }
    function setActiveCard() {
      let closest = { el: null as HTMLElement | null, dist: Infinity, idx: -1 };
      cards.forEach((card, idx) => {
        const r = card.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - window.innerWidth / 2);
        if (d < closest.dist) closest = { el: card, dist: d, idx };
      });
      cards.forEach((card) => {
        const active = card === closest.el;
        card.style.transform = active ? "scale(1)" : "scale(0.94)";
        card.style.transition = "transform 400ms cubic-bezier(.2,.8,.2,1), opacity 400ms";
        card.style.opacity = active ? "1" : "0.55";
        card.querySelectorAll<HTMLElement>(".js-prev,.js-next").forEach(btn => {
          btn.classList.toggle("hidden", !active);
          btn.classList.toggle("flex", active);
        });
      });
      return closest.idx;
    }
    function goTo(i: number) {
      centerSlide(scroller!, cards[Math.max(0, Math.min(cards.length - 1, i))], "smooth");
    }

    const onClick = (e: MouseEvent) => {
      const t = e.target as Element;
      const i = setActiveCard();
      if (t.closest(".js-prev")) goTo(i - 1);
      if (t.closest(".js-next")) goTo(i + 1);
    };
    let raf: number | null = null;
    const onScroll = () => { if (raf) return; raf = requestAnimationFrame(() => { setActiveCard(); raf = null; }); };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const i = setActiveCard();
      e.key === "ArrowLeft" ? goTo(i - 1) : goTo(i + 1);
    };

    scroller.addEventListener("click", onClick);
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", setActiveCard);
    window.addEventListener("keydown", onKey);
    requestAnimationFrame(() => { centerSlide(scroller, cards[1] || cards[0], "auto"); setActiveCard(); });

    return () => {
      scroller.removeEventListener("click", onClick);
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setActiveCard);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      {/* Spline background */}
      <div className="aura-background-component top-0 w-full -z-10 absolute h-screen hue-rotate-15 blur-sm">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <iframe
            src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW"
            style={{ border: "none" }}
            width="100%"
            height="100%"
            title="Background animation"
          />
        </div>
      </div>

      <div className="gradient-blur"><div /><div /><div /><div /></div>

      <Nav />

      <div className="overflow-hidden relative">
        {/* ── Hero ── */}
        <section className="min-h-screen flex flex-col section-visible text-center pt-0 pr-6 pb-24 pl-6 relative items-center justify-center xl:pt-0 xl:pb-0">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 backdrop-blur-sm text-white/80 ring-1 ring-white/10">
            <Icon icon="lucide:sparkles" width={16} height={16} className="text-violet-300" />
            <span>{hero.badge}</span>
          </div>

          <h1
            className="leading-[0.95] font-semibold text-white tracking-tight mt-0 mb-0 pt-24 pb-12"
            style={{ animation: "titleEmergence 1.8s ease-out both" }}
          >
            <span className="block text-[10vw] sm:text-7xl lg:text-8xl flex items-center justify-center gap-4 sm:gap-6">
              <img
                src="/images/me.png"
                alt="Ferryal Fajar"
                className="w-[10vw] h-[10vw] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] rounded-full object-cover border-2 border-white/20 shadow-2xl"
                style={{ animation: "portraitFall 1.2s cubic-bezier(0.34,1.56,0.64,1) 0.8s both" }}
              />
              {hero.lines[0]}
            </span>
            <span className="block text-[10vw] sm:text-7xl lg:text-8xl text-white/80 animate-shimmer-mask [--shine:220%]">
              {hero.lines[1]}
            </span>
            <span className="block text-[10vw] sm:text-7xl lg:text-8xl">{hero.lines[2]}</span>
          </h1>

          <p
            className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 type-words is-in"
            style={{ "--stagger": "0.2s", "--dur": "2s", "--ease": "ease-in-out", "--delay": "0.4s" } as React.CSSProperties}
          >
            {hero.subtitle.map((word, i) => (
              <span key={i} className="w" style={{ "--i": i } as React.CSSProperties}>{word}&nbsp;</span>
            ))}
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              to="/projects"
              className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-[#ffffff]/30 ring-1 text-base font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)]"
              style={{ zIndex: 2 }}
            >
              <span className="z-[1] group-hover:translate-x-1 transition-transform duration-300 relative">
                {hero.cta}
              </span>
              <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: "linear-gradient(45deg,rgba(56,189,248,.8) 0%,rgba(99,102,241,.8) 50%,rgba(168,85,247,.8) 100%)" }} />
            </Link>
            <div className="inline-block group relative">
              <a
                href="mailto:ferryalmfajar@gmail.com"
                className="inline-flex min-w-[120px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 relative backdrop-blur-xl items-center justify-center"
              >
                Hire Me
              </a>
              <span aria-hidden className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(60% 100% at 50% 50%,rgba(139,92,246,.55),rgba(139,92,246,.28) 35%,transparent 70%)", filter: "blur(10px) saturate(120%)" }} />
            </div>
          </div>

          <div
            className="flex flex-wrap text-xs text-white/60 mt-8 pt-24 pb-24 gap-x-6 gap-y-6 items-center justify-center"
            style={{ animation: "fadeSlideIn 0.5s ease-in-out 0.5s both" }}
          >
            {hero.stats.map(({ icon, text }) => (
              <span key={text} className="inline-flex items-center gap-1.5">
                <Icon icon={icon} width={16} height={16} />{text}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* ── Featured Work Carousel ── */}
      <div className="relative mt-4 mb-16">
        <div className="container max-w-7xl mx-auto px-6 mb-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Featured Work</h2>
          <p className="text-base text-white/60 mt-2">A curated selection of projects across fintech, logistics, and AI.</p>
        </div>
        <div className="relative">
          <div
            ref={carouselRef}
            id="work-carousel"
            className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:gap-8 md:pt-8 md:px-8 pt-4 pr-8 pb-6 pl-8 gap-x-6"
          >
            {carouselProjects.map((p, i) => (
              <article
                key={i}
                className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 bg-neutral-900/40"
                style={{ transform: "scale(0.94)", opacity: "0.55", transition: "transform 400ms cubic-bezier(0.2,0.8,0.2,1), opacity 400ms" }}
              >
                <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p className="text-xs text-white/70 mb-2">{p.tags}</p>
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">{p.title}</h3>
                      <p className="text-sm md:text-base text-white/70">{p.subtitle}</p>
                    </div>
                    <Link to="/projects" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2">
                      <Icon icon="lucide:arrow-up-right" width={20} height={20} />
                    </Link>
                  </div>
                </div>
                <button className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white hidden">
                  <Icon icon="lucide:chevron-left" width={20} height={20} />
                </button>
                <button className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white hidden">
                  <Icon icon="lucide:chevron-right" width={20} height={20} />
                </button>
              </article>
            ))}
          </div>
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
        <div className="text-center mt-8">
          <Link to="/projects" className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3">
            View All Projects <Icon icon="lucide:arrow-right" width={16} height={16} />
          </Link>
        </div>
      </div>

      {/* ── Quick-nav teaser cards ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {teaserCards.map(({ to, label, emoji, desc }) => (
            <Link
              key={to}
              to={to}
              className="group border-gradient before:rounded-2xl bg-white/5 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{emoji}</div>
              <h3 className="font-semibold text-white mb-1">{label}</h3>
              <p className="text-xs text-white/60">{desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs text-violet-400 group-hover:gap-2 transition-all">
                View <Icon icon="lucide:arrow-right" width={12} height={12} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
