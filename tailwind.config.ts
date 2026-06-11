import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial"],
      },
      keyframes: {
        fadeSlideIn: {
          "0%": { opacity: "0", transform: "translateY(30px)", filter: "blur(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0px)" },
        },
        portraitFall: {
          "0%": { opacity: "0", transform: "translateY(-200px) scale(0.5) rotate(-10deg)", filter: "blur(4px)" },
          "60%": { opacity: "1", transform: "translateY(8px) scale(1.05) rotate(2deg)", filter: "blur(0px)" },
          "80%": { transform: "translateY(-4px) scale(0.98) rotate(-1deg)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1) rotate(0deg)", filter: "blur(0px)" },
        },
        wordReveal: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-30% 0" },
          "100%": { backgroundPosition: "130% 0" },
        },
        ctaPulse: {
          "0%": { textShadow: "0 0 0 rgba(255,255,255,0)" },
          "70%": { textShadow: "0 0 24px rgba(255,255,255,.25)" },
          "100%": { textShadow: "0 0 0 rgba(255,255,255,0)" },
        },
        ctaFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-1.5px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
