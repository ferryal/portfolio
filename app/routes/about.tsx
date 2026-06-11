import { useEffect } from "react";
import { Link } from "@remix-run/react";
import { Icon } from "@iconify/react";
import type { MetaFunction } from "@remix-run/node";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { useRole, aboutSlides } from "~/lib/role";

export const meta: MetaFunction = () => [
  { title: "About — Ferryal Fajar" },
  { name: "description", content: "Senior Engineer with 7+ years building scalable web applications." },
];

const images = [
  "/images/me.png",
  "/images/projects/dagangan_cms/cover.png",
  "/images/projects/sophiie_ai/cover.png",
  "/images/projects/anchorworx/cover.png",
];

const values = [
  { emoji: "🎯", title: "Product thinking",      desc: "Code is a means to an end. I think in terms of user impact and business outcomes, not just technical implementations." },
  { emoji: "🔍", title: "Attention to detail",   desc: "Pixel-perfect UIs, consistent API contracts, comprehensive tests — quality shows in every layer of the stack." },
  { emoji: "🤝", title: "Collaboration",          desc: "The best products are built by teams. I communicate clearly, review constructively, and mentor where I can." },
  { emoji: "📈", title: "Continuous growth",      desc: "The web evolves fast. I stay current with the ecosystem and apply new patterns where they genuinely add value." },
];

export default function About() {
  const role = useRole();
  const slides = aboutSlides[role];

  useEffect(() => {
    const section = document.getElementById("about-scroll-section");
    if (!section) return;
    const scroller = section.querySelector("#aboutScroll") as HTMLElement;
    if (!scroller) return;
    const slideEls = Array.from(scroller.querySelectorAll(".about-content-item")) as HTMLElement[];
    const imageEls = Array.from(section.querySelectorAll(".about-image")) as HTMLElement[];
    let current = 0;
    imageEls.forEach((img, i) => img.classList.toggle("active", i === 0));
    slideEls.forEach((s, i) => s.classList.toggle("active", i === 0));

    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const idx = slideEls.indexOf(visible.target as HTMLElement);
      if (idx === -1 || idx === current) return;
      slideEls[current].classList.remove("active");
      slideEls[idx].classList.add("active");
      const out = imageEls[current], inc = imageEls[idx];
      out.classList.remove("active");
      out.style.transform = "translateY(-24px)"; out.style.opacity = "0";
      inc.style.transform = "translateY(24px)";  inc.style.opacity = "0";
      requestAnimationFrame(() => {
        inc.classList.add("active");
        inc.style.transform = "translateY(0)"; inc.style.opacity = "1";
      });
      current = idx;
    }, { root: scroller, threshold: [0.4, 0.7] });

    slideEls.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const stats =
    role === "frontend"
      ? [{ value: "7+", label: "Years FE experience" }, { value: "50+", label: "Components shipped" }, { value: "6+", label: "Products" }, { value: "∞", label: "Pull requests" }]
      : [{ value: "7+", label: "Years experience" }, { value: "15+", label: "Projects shipped" }, { value: "6+", label: "Companies" }, { value: "2+", label: "Countries served" }];

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">

        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center mb-6">
            <span className="text-xs text-white/70">About Me</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            {role === "frontend" ? "Hi, I'm Ferryal — Frontend Engineer 👋" : "Hi, I'm Ferryal Fajar 👋"}
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed">
            {role === "frontend"
              ? "Senior Frontend Engineer with 7+ years crafting exceptional user interfaces with React and TypeScript. I build UIs that are fast, accessible, and delightful to use."
              : "Experienced Fullstack Engineer with 7+ years building web applications end-to-end. Adept at crafting intuitive UIs, scalable backend services, and API integrations."}
          </p>
        </div>

        {/* Scroll-synced section */}
        <div id="about-scroll-section" className="grid gap-10 lg:grid-cols-12 items-start mb-24">
          <div className="lg:col-span-5 relative overflow-hidden rounded-2xl" style={{ height: "560px" }}>
            <div className="about-image-container absolute inset-0">
              {images.map((src, i) => (
                <img key={i} src={src} alt={`Ferryal ${i + 1}`} className="about-image w-full h-full object-cover absolute inset-0 rounded-2xl" />
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div id="aboutScroll" className="h-[560px] overflow-y-auto snap-y snap-mandatory pr-1">
              {slides.map((slide, i) => (
                <article key={i} className="about-content-item snap-start min-h-[560px] flex items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur mb-5">
                      <span className="text-xs text-white/70">{slide.badge}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tight mb-6">{slide.heading}</h2>
                    <p className="text-base text-white/70 leading-relaxed mb-4">{slide.body1}</p>
                    <p className="text-base text-white/70 leading-relaxed">{slide.body2}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">How I work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map(({ emoji, title, desc }) => (
              <div key={title} className="border-gradient before:rounded-2xl bg-white/5 rounded-2xl p-6 backdrop-blur-xl">
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="text-base font-semibold mb-2">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map(({ value, label }) => (
            <div key={label} className="border-gradient before:rounded-2xl bg-white/5 rounded-2xl p-6 text-center backdrop-blur-xl">
              <p className="text-3xl md:text-4xl font-semibold text-white mb-1">{value}</p>
              <p className="text-xs text-white/60">{label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="mailto:ferryalmfajar@gmail.com" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-black bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full px-6 py-3 hover:opacity-90 transition">
            Get in touch
          </a>
          <Link to="/experience" className="inline-flex items-center justify-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3">
            See my experience <Icon icon="lucide:arrow-right" width={16} height={16} />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
