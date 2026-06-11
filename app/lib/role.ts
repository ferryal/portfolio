import { createContext, useContext } from "react";

// ─── Role type ────────────────────────────────────────────────────────────────

export type Role = "frontend" | "fullstack";

export const RoleContext = createContext<Role>("fullstack");
export const useRole = () => useContext(RoleContext);

// ─── Hero content ─────────────────────────────────────────────────────────────

export const heroContent = {
  frontend: {
    badge: "Senior Frontend Engineer",
    lines: ["Crafting", "exceptional UI", "experiences"],
    subtitle: [
      "Specializing", "in", "React,", "TypeScript,", "and",
      "modern", "frontend", "architecture.", "Building", "interfaces",
      "that", "are", "fast,", "accessible,", "and", "delightful.",
    ],
    stats: [
      { icon: "lucide:clock", text: "7+ Years FE" },
      { icon: "lucide:layers", text: "50+ Components" },
      { icon: "lucide:briefcase", text: "6+ Products" },
    ],
    cta: "View Projects",
  },
  fullstack: {
    badge: "Senior Fullstack Engineer",
    lines: ["Crafting", "scalable web", "experiences"],
    subtitle: [
      "Specializing", "in", "modern", "React", "architectures,",
      "Node.js", "backends,", "and", "API-driven", "systems.",
      "Building", "web", "apps", "that", "are", "fast,", "reliable,",
      "and", "built", "to", "scale.",
    ],
    stats: [
      { icon: "lucide:clock", text: "7+ Years Experience" },
      { icon: "lucide:briefcase", text: "15+ Projects" },
      { icon: "lucide:users", text: "6+ Companies" },
    ],
    cta: "View Projects",
  },
} as const;

// ─── Meta content ─────────────────────────────────────────────────────────────

export const metaContent = {
  frontend: {
    home: {
      title: "Ferryal Fajar — Senior Frontend Engineer",
      description: "Senior Frontend Engineer with 7+ years building exceptional user interfaces with React and TypeScript.",
    },
    about: {
      title: "About — Ferryal Fajar | Frontend Engineer",
      description: "Senior Frontend Engineer specializing in React, TypeScript, and modern frontend architecture.",
    },
    skills: {
      title: "Skills — Ferryal Fajar | Frontend Toolkit",
      description: "Deep frontend expertise: React, TypeScript, Next.js, Tailwind CSS, and the modern web platform.",
    },
    experience: {
      title: "Experience — Ferryal Fajar | Frontend Career",
      description: "7+ years of frontend engineering across fintech, e-commerce, and enterprise products.",
    },
    projects: {
      title: "Projects — Ferryal Fajar | Frontend Work",
      description: "A showcase of frontend projects built with React, TypeScript, and modern web technologies.",
    },
    contact: {
      title: "Contact — Ferryal Fajar | Frontend Engineer",
      description: "Get in touch with Ferryal Fajar — Senior Frontend Engineer available for React and TypeScript projects.",
    },
  },
  fullstack: {
    home: {
      title: "Ferryal Fajar — Senior Fullstack Engineer",
      description: "Experienced Fullstack Engineer with 7+ years building web applications end-to-end with React and Node.js.",
    },
    about: {
      title: "About — Ferryal Fajar | Fullstack Engineer",
      description: "Senior Fullstack Engineer building scalable web products from UI to API to deployment.",
    },
    skills: {
      title: "Skills — Ferryal Fajar | Full-Stack Toolkit",
      description: "Full-stack expertise: React, TypeScript, Node.js, GraphQL, AWS, Docker, and more.",
    },
    experience: {
      title: "Experience — Ferryal Fajar | Fullstack Career",
      description: "7+ years of fullstack engineering across fintech, e-commerce, logistics, and healthcare.",
    },
    projects: {
      title: "Projects — Ferryal Fajar | Fullstack Work",
      description: "End-to-end projects: fintech platforms, AI integrations, Buy Now Pay Later (BNPL) platforms, and enterprise HRMS.",
    },
    contact: {
      title: "Contact — Ferryal Fajar | Fullstack Engineer",
      description: "Get in touch with Ferryal Fajar — Senior Fullstack Engineer available for end-to-end web projects.",
    },
  },
} as const;

// ─── About slides ─────────────────────────────────────────────────────────────

export const aboutSlides = {
  frontend: [
    {
      badge: "About Me",
      heading: "Building interfaces users love",
      body1: "I'm Ferryal Fajar, a Senior Frontend Engineer with 7+ years crafting exceptional user interfaces. I specialize in React and TypeScript, bringing designs to life with pixel-perfect precision.",
      body2: "From component architecture to Core Web Vitals optimization, I obsess over the details that separate a good UI from a great one.",
    },
    {
      badge: "React & TypeScript",
      heading: "Deep mastery of the React ecosystem",
      body1: "Hooks, context, concurrent features, performance patterns, and testing. I build React applications that scale to enterprise size while staying maintainable and joyful to work in.",
      body2: "Redux, React Query, Zustand — I choose the right state solution for each problem and architect it for long-term maintainability.",
    },
    {
      badge: "TypeScript First",
      heading: "Type-safe by default, confident by design",
      body1: "Every line typed, every edge case handled. TypeScript expertise across large codebases with complex types, strict configurations, and zero compromise on type safety.",
      body2: "Well-typed code is self-documenting code. It enables confident refactoring, better tooling, and fewer runtime surprises in production.",
    },
    {
      badge: "Performance & A11y",
      heading: "Fast and accessible is not optional",
      body1: "Core Web Vitals, lazy loading, code splitting, virtualization — I optimize at every level to ensure every user gets the fastest possible experience.",
      body2: "Accessibility is non-negotiable. I implement ARIA correctly, support keyboard navigation, and ensure every user — regardless of ability — has an excellent experience.",
    },
  ],
  fullstack: [
    {
      badge: "About Me",
      heading: "Building digital products that matter",
      body1: "I'm Ferryal Fajar, a Fullstack Engineer with 7+ years of experience building web applications end-to-end. I architect both the frontend and backend of products that scale in the real world.",
      body2: "From fintech platforms to AI-powered integrations, I bring technical expertise and product thinking to every project. Companies like Amartha, Dagangan, Fingular, and Healthmetrics.",
    },
    {
      badge: "Frontend Excellence",
      heading: "Delivering exceptional user interfaces",
      body1: "Deep expertise in React, TypeScript, and modern frontend tooling. I build accessible, performant, and maintainable UIs that delight users and scale with product growth.",
      body2: "Next.js, Tailwind CSS, Redux, and component-driven design — I stay current so your product always uses the best available patterns.",
    },
    {
      badge: "Backend Engineering",
      heading: "Scalable APIs and backend services",
      body1: "Node.js, REST, and GraphQL APIs engineered for real-world scale. From database schema design to cloud deployment, I own the full backend lifecycle.",
      body2: "AWS, Docker, and CI/CD pipelines ensure your services are reliable, observable, and ready for production traffic — not just demos.",
    },
    {
      badge: "Full-Stack Leadership",
      heading: "End-to-end ownership of products",
      body1: "Technical architecture, code reviews, and mentoring junior engineers. I bring leadership alongside hands-on engineering to deliver complete solutions.",
      body2: "From discovery and planning to deployment and iteration — I align technical decisions with business goals to ship products that last.",
    },
  ],
} as const;

// ─── Skills ──────────────────────────────────────────────────────────────────

type SkillItem = { name: string; icon: string; color: string };
export type SkillCategory = {
  title: string;
  label: string;
  description: string;
  accentGradient: string;
  accentBorder: string;
  headerIcon: string;
  headerIconColor: string;
  skills: SkillItem[];
};

export const skillsByRole: Record<Role, SkillCategory[]> = {
  // ── Frontend mode: FE is core, BE/DevOps shown as "also proficient" ──────────
  frontend: [
    {
      title: "Frontend",
      label: "Core expertise",
      description: "Languages, frameworks, and tooling for crafting modern user interfaces.",
      accentGradient: "from-violet-500/20 to-fuchsia-500/20",
      accentBorder: "border-violet-500/20",
      headerIcon: "lucide:code-2",
      headerIconColor: "text-violet-300",
      skills: [
        { name: "TypeScript",      icon: "logos:typescript-icon",   color: "#3178C6" },
        { name: "JavaScript",      icon: "logos:javascript",         color: "#F7DF1E" },
        { name: "React",           icon: "logos:react",              color: "#61DAFB" },
        { name: "Next.js",         icon: "logos:nextjs-icon",        color: "#ffffff" },
        { name: "Angular",         icon: "logos:angular-icon",       color: "#DD0031" },
        { name: "Nuxt.js",         icon: "logos:nuxt-icon",          color: "#00DC82" },
        { name: "Tailwind CSS",    icon: "logos:tailwindcss-icon",   color: "#06B6D4" },
        { name: "Redux",           icon: "logos:redux",              color: "#764ABC" },
        { name: "TanStack Query",  icon: "logos:react-query-icon",   color: "#FF4154" },
        { name: "GraphQL",         icon: "logos:graphql",            color: "#E10098" },
        { name: "PWA",             icon: "logos:pwa",                color: "#5A0FC8" },
        { name: "Vite",            icon: "logos:vitejs",             color: "#646CFF" },
        { name: "Webpack",         icon: "logos:webpack",            color: "#8DD6F9" },
        { name: "Sass",            icon: "logos:sass",               color: "#CC6699" },
        { name: "Jest",            icon: "logos:jest",               color: "#C21325" },
        { name: "Storybook",       icon: "logos:storybook-icon",     color: "#FF4785" },
      ],
    },
    {
      title: "Backend & APIs",
      label: "Also proficient",
      description: "Server-side technologies I work with regularly on full-product builds.",
      accentGradient: "from-cyan-500/20 to-blue-500/20",
      accentBorder: "border-cyan-500/20",
      headerIcon: "lucide:server",
      headerIconColor: "text-cyan-300",
      skills: [
        { name: "Node.js",    icon: "logos:nodejs-icon",    color: "#339933" },
        { name: "Express.js", icon: "logos:express",        color: "#ffffff" },
        { name: "NestJS",     icon: "logos:nestjs",         color: "#E0234E" },
        { name: "MongoDB",    icon: "logos:mongodb-icon",   color: "#47A248" },
        { name: "Prisma",     icon: "logos:prisma",         color: "#5A67D8" },
        { name: "Redis",      icon: "logos:redis",          color: "#DC382D" },
        { name: "Strapi",     icon: "logos:strapi-icon",    color: "#8C4BCA" },
      ],
    },
    {
      title: "Cloud & DevOps",
      label: "Tools",
      description: "Cloud platforms, CI/CD, and monitoring tools for reliable deployments.",
      accentGradient: "from-emerald-500/20 to-teal-500/20",
      accentBorder: "border-emerald-500/20",
      headerIcon: "lucide:cloud",
      headerIconColor: "text-emerald-300",
      skills: [
        { name: "AWS EC2",        icon: "logos:aws",               color: "#FF9900" },
        { name: "GCP",            icon: "logos:google-cloud",       color: "#4285F4" },
        { name: "Docker",         icon: "logos:docker-icon",        color: "#2496ED" },
        { name: "Jenkins",        icon: "logos:jenkins",            color: "#D33833" },
        { name: "Git",            icon: "logos:git-icon",           color: "#F05032" },
        { name: "GitHub",         icon: "logos:github-icon",        color: "#ffffff" },
        { name: "SonarQube",      icon: "logos:sonarqube",          color: "#4E9BCD" },
        { name: "Datadog",        icon: "logos:datadog",            color: "#632CA6" },
      ],
    },
  ],

  // ── Fullstack mode: FE + BE are EQUAL core, with real-time & architecture ──
  fullstack: [
    {
      title: "Frontend",
      label: "Frontend",
      description: "Languages, frameworks, and tooling for building modern, performant user interfaces.",
      accentGradient: "from-violet-500/20 to-fuchsia-500/20",
      accentBorder: "border-violet-500/20",
      headerIcon: "lucide:code-2",
      headerIconColor: "text-violet-300",
      skills: [
        { name: "TypeScript",      icon: "logos:typescript-icon",   color: "#3178C6" },
        { name: "JavaScript",      icon: "logos:javascript",         color: "#F7DF1E" },
        { name: "React",           icon: "logos:react",              color: "#61DAFB" },
        { name: "Next.js",         icon: "logos:nextjs-icon",        color: "#ffffff" },
        { name: "Angular",         icon: "logos:angular-icon",       color: "#DD0031" },
        { name: "Nuxt.js",         icon: "logos:nuxt-icon",          color: "#00DC82" },
        { name: "Redux",           icon: "logos:redux",              color: "#764ABC" },
        { name: "TanStack Query",  icon: "logos:react-query-icon",   color: "#FF4154" },
        { name: "GraphQL",         icon: "logos:graphql",            color: "#E10098" },
        { name: "Tailwind CSS",    icon: "logos:tailwindcss-icon",   color: "#06B6D4" },
        { name: "PWA",             icon: "logos:pwa",                color: "#5A0FC8" },
        { name: "Vite",            icon: "logos:vitejs",             color: "#646CFF" },
        { name: "Sass",            icon: "logos:sass",               color: "#CC6699" },
        { name: "Jest",            icon: "logos:jest",               color: "#C21325" },
        { name: "Storybook",       icon: "logos:storybook-icon",     color: "#FF4785" },
      ],
    },
    {
      title: "Backend",
      label: "Backend",
      description: "Server-side technologies for scalable APIs, databases, and real-time systems.",
      accentGradient: "from-cyan-500/20 to-blue-500/20",
      accentBorder: "border-cyan-500/20",
      headerIcon: "lucide:server",
      headerIconColor: "text-cyan-300",
      skills: [
        { name: "Node.js",      icon: "logos:nodejs-icon",    color: "#339933" },
        { name: "NestJS",       icon: "logos:nestjs",         color: "#E0234E" },
        { name: "Express.js",   icon: "logos:express",        color: "#ffffff" },
        { name: "PostgreSQL",   icon: "logos:postgresql",     color: "#4169E1" },
        { name: "MongoDB",      icon: "logos:mongodb-icon",   color: "#47A248" },
        { name: "Redis",        icon: "logos:redis",          color: "#DC382D" },
        { name: "Prisma",       icon: "logos:prisma",         color: "#5A67D8" },
        { name: "GraphQL",      icon: "logos:graphql",        color: "#E10098" },
        { name: "WebSocket",    icon: "logos:socket-io",      color: "#010101" },
        { name: "Pusher.js",    icon: "simple-icons:pusher",  color: "#300D4F" },
        { name: "Strapi",       icon: "logos:strapi-icon",    color: "#8C4BCA" },
      ],
    },
    {
      title: "Cloud & DevOps",
      label: "Cloud & DevOps",
      description: "Cloud infrastructure, containerization, CI/CD, and production monitoring.",
      accentGradient: "from-emerald-500/20 to-teal-500/20",
      accentBorder: "border-emerald-500/20",
      headerIcon: "lucide:cloud",
      headerIconColor: "text-emerald-300",
      skills: [
        { name: "AWS EC2",          icon: "logos:aws",              color: "#FF9900" },
        { name: "GCP",              icon: "logos:google-cloud",      color: "#4285F4" },
        { name: "Google Cloud Run", icon: "logos:google-cloud",      color: "#4285F4" },
        { name: "Docker",           icon: "logos:docker-icon",       color: "#2496ED" },
        { name: "Jenkins",          icon: "logos:jenkins",           color: "#D33833" },
        { name: "Git",              icon: "logos:git-icon",          color: "#F05032" },
        { name: "GitHub",           icon: "logos:github-icon",       color: "#ffffff" },
        { name: "SonarQube",        icon: "logos:sonarqube",         color: "#4E9BCD" },
        { name: "Datadog",          icon: "logos:datadog",           color: "#632CA6" },
      ],
    },
  ],
};

// ─── Experience data (per resume) ─────────────────────────────────────────────

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  highlights: string[];
  techstack: string[];
};

export const experienceByRole: Record<Role, ExperienceEntry[]> = {

  // ── Sourced from resume-fullstack.md ─────────────────────────────────────────
  fullstack: [
    {
      company: "Healthmetrics",
      role: "Senior Fullstack Engineer",
      period: "Mar 2025 — Present",
      location: "Hybrid",
      logo: "/images/hms.png",
      highlights: [
        "Led fullstack development of core web applications using Next.js, TypeScript, Node.js, and PostgreSQL, delivering highly responsive and scalable solutions",
        "Architected and implemented RESTful APIs and GraphQL endpoints using NestJS and Express.js for seamless frontend-backend integration",
        "Designed database schemas and optimized queries in PostgreSQL, implementing Redis caching for improved performance",
        "Integrated real-time functionalities using WebSocket and Pusher.js for document uploads, approvals, and secure in-app chat features",
        "Developed SaaS rent system for AFI Axa Financial Indonesia with multi-tenant architecture, handling both frontend UI and backend services",
        "Managed full deployment pipeline with Docker and CI/CD on AWS EC2, Google Cloud Platform (GCP), and Google Cloud Run",
        "Enhanced application monitoring with Datadog APM and ensured code quality through SonarQube analysis and comprehensive testing",
        "Implemented database transaction handling and optimistic locking in PostgreSQL to ensure data consistency under concurrent operations",
        "Optimized API performance for high-traffic scenarios using Redis caching, connection pooling, and horizontal scaling on GCP",
      ],
      techstack: ["Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis", "WebSocket", "Pusher.js", "Docker", "AWS EC2", "GCP"],
    },
    {
      company: "Fingular",
      role: "Senior Fullstack Engineer",
      period: "Jul 2024 — Mar 2025",
      location: "Remote",
      logo: "/images/fingular.svg",
      highlights: [
        "Led full-stack development with Next.js, TypeScript, TanStack Query for frontend and Node.js, NestJS, PostgreSQL for backend services",
        "Designed and implemented RESTful APIs and GraphQL endpoints for loan management system with real-time tracking capabilities",
        "Built microservices architecture using NestJS with PostgreSQL database and Redis for session management and caching",
        "Implemented Feature-Sliced Design (FSD) architecture improving maintainability and team collaboration",
        "Achieved 95% test coverage using Jest and React Testing Library for frontend, and integration tests for backend APIs",
        "Managed production deployments using Docker, GCP, and Google Cloud Run with CI/CD pipeline automation",
        "Handled concurrent loan application processing with PostgreSQL row-level locking and event-driven architecture using NestJS queues",
        "Designed scalable architecture supporting 10,000+ concurrent users with Redis session management and database query optimization",
      ],
      techstack: ["Next.js", "TypeScript", "TanStack Query", "Node.js", "NestJS", "PostgreSQL", "Redis", "GraphQL", "Docker", "GCP"],
    },
    {
      company: "Tuntun Sekuritas",
      role: "Fullstack Engineer",
      period: "Apr 2024 — Aug 2024",
      location: "Onsite",
      logo: "/images/tuntun.png",
      highlights: [
        "Led development of 3 core trading platform modules with React frontend and Node.js/Express backend APIs",
        "Built LCMP (Language Content Management Platform) with full-stack implementation using React, Redux frontend and Node.js/PostgreSQL backend, reducing content deployment time by 70%",
        "Developed AOP (Admin Operations Platform) internal dashboard with real-time analytics, implementing backend services with Express.js and PostgreSQL, improving operational efficiency by 45%",
        "Created Individual Stock H5 webview with optimized mobile API endpoints, increasing mobile engagement by 35%",
        "Designed database schemas and implemented data migration strategies for trading platform using PostgreSQL",
      ],
      techstack: ["React", "Redux", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    },
    {
      company: "Dagangan Karya Indonesia",
      role: "Fullstack Engineer",
      period: "Dec 2021 — Apr 2024",
      location: "Remote",
      logo: "/images/dagangan.png",
      highlights: [
        "Developed features for mobile web app and internal monitoring platform using React, Next.js, TypeScript on frontend",
        "Built backend APIs using Node.js, Express.js, and NestJS with PostgreSQL database for data persistence",
        "Implemented Redis caching layer to optimize API response times and reduce database load",
        "Architected micro frontend solutions with Webpack Module Federation and corresponding backend microservices",
        "Refactored monolithic services into microservices architecture using NestJS, TypeScript, and GraphQL",
        "Managed deployment pipelines to production and implemented monitoring with APM Datadog and SonarQube",
        "Ensured comprehensive testing coverage using Jest for both frontend and backend code",
        "Implemented transaction isolation levels and database connection pooling in PostgreSQL to handle high-traffic e-commerce operations",
        "Built distributed caching system with Redis for session management and API response caching under concurrent user loads",
      ],
      techstack: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "Express.js", "PostgreSQL", "Redis", "GraphQL", "Docker"],
    },
    {
      company: "Capital Net Indonesia",
      role: "Fullstack Engineer",
      period: "May 2021 — Dec 2021",
      location: "Hybrid",
      logo: "/images/logos/virgo.png",
      highlights: [
        "Developed web platform for digital remittance monitoring using React, Redux, TypeScript on frontend",
        "Built backend services using Node.js and Express.js with PostgreSQL for transaction processing and reporting",
        "Implemented RESTful APIs for cash in/cash out monitoring with proper authentication and authorization",
        "Handled deployment to production environment and ensured code quality through unit testing with Jest and Enzyme",
      ],
      techstack: ["React", "Redux", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Jest"],
    },
    {
      company: "HIJUP",
      role: "Freelance Fullstack Engineer",
      period: "Jun 2021 — Jan 2022",
      location: "Remote",
      logo: "/images/logos/hijup.webp",
      highlights: [
        "Redesigned e-commerce interface using React and TypeScript with GraphQL integration",
        "Improved order flow experience by optimizing GraphQL queries and implementing efficient backend data fetching",
        "Collaborated with backend team to enhance API performance and implement new features",
      ],
      techstack: ["React", "TypeScript", "GraphQL", "Next.js"],
    },
    {
      company: "Amartha Mikro Fintek",
      role: "Software Engineer Frontend",
      period: "Apr 2018 — Apr 2021",
      location: "Hybrid",
      logo: "/images/logos/amartha.png",
      highlights: [
        "Developing features web platform investor using JavaScript, React, Redux, Node.js, React-i18n",
        "Developing features to web platform internal CMS using Angular",
        "Developing design revamp web platform investor",
        "Research pattern & rewrite code on web platform investor",
        "Developing dashboard demo OJK to comply ISO certificates",
        "Help handle deployment frontend to production using Jenkins",
        "Maintain company site using WordPress",
        "Coverage unit test using jest & react testing library",
      ],
      techstack: ["JavaScript", "React", "Redux", "Node.js", "Angular", "Jest"],
    },
  ],

  // ── Sourced from resume-frontend.md ──────────────────────────────────────────
  frontend: [
    {
      company: "Healthmetrics",
      role: "Senior Front End Engineer",
      period: "Mar 2025 — Present",
      location: "Hybrid",
      logo: "/images/hms.png",
      highlights: [
        "Lead frontend development of core web applications using Next.js, TypeScript, and TanStack Query, delivering highly responsive and scalable user experiences",
        "Integrated real-time functionalities with WebSocket and Pusher.js for seamless document uploads, approvals, and secure in-app chat features",
        "Developed a SaaS rent system for client AFI Axa Financial Indonesia, enabling efficient management of operational workflows and multi-tenant architecture",
        "Designed and implemented billing validation workflows that minimized financial discrepancies and improved revenue reliability",
        "Managed deployment pipelines with Docker and CI/CD, handling deployments on AWS EC2, Google Cloud Platform (GCP), and Google Cloud Run (GCR)",
        "Enhanced application performance monitoring and debugging with Datadog APM, resulting in proactive issue resolution and improved stability",
        "Ensured code quality and maintainability through extensive static analysis using SonarQube and rigorous unit/integration testing",
      ],
      techstack: ["Next.js", "TypeScript", "TanStack Query", "WebSocket", "Pusher.js", "Docker", "AWS EC2", "GCP", "Datadog", "SonarQube"],
    },
    {
      company: "Fingular",
      role: "Senior Front End Engineer",
      period: "Jul 2024 — Mar 2025",
      location: "Remote",
      logo: "/images/fingular.svg",
      highlights: [
        "Led frontend development initiatives for core web applications, architecting scalable solutions using Next.js, TypeScript, and TanStack Query (React Query) for efficient data fetching and state management",
        "Designed and implemented real-time features such as loan status tracking and personalized financial recommendations using WebSockets and GraphQL",
        "Adopted and implemented the Feature-Sliced Design (FSD) architecture to structure frontend applications, improving maintainability, scalability, and team collaboration",
        "Achieved and maintained 95% test coverage goal using React Testing Library and Jest, ensuring code reliability and reducing production bugs",
        "Managed end-to-end localization workflows using Lokalise.com and oversaw production deployments using Docker, GCP, and Google Cloud Run (GCR)",
        "Optimized application performance through lazy loading, code splitting, and Progressive Web Application (PWA) implementation",
      ],
      techstack: ["Next.js", "TypeScript", "TanStack Query", "WebSockets", "GraphQL", "Jest", "React Testing Library", "Docker", "GCP", "PWA"],
    },
    {
      company: "Tuntun Sekuritas",
      role: "Senior Front End Engineer",
      period: "Apr 2024 — Aug 2024",
      location: "Onsite",
      logo: "/images/tuntun.png",
      highlights: [
        "Led development of 3 core trading platform modules using React, Craco, Redux, React Query, and Ant Design UI components",
        "Built LCMP (Language Content Management Platform) for dynamic multi-language content management across Indonesian, English, and Mandarin with real-time copywriting capabilities, reducing content deployment time by 70%",
        "Built comprehensive AOP (Admin Operations Platform) internal dashboard providing real-time trading analytics, user management, and compliance monitoring tools, improving operational efficiency by 45%",
        "Developed Individual Stock H5 webview application for optimized mobile trading experience with responsive design and native app integration, increasing mobile user engagement by 35%",
      ],
      techstack: ["React", "Craco", "Redux", "React Query", "Ant Design", "TypeScript"],
    },
    {
      company: "Dagangan Karya Indonesia",
      role: "Front End Engineer",
      period: "Dec 2021 — Apr 2024",
      location: "Remote",
      logo: "/images/dagangan.png",
      highlights: [
        "Developing features mobile web app & internal platform monitoring using React, Next.js, TypeScript",
        "Managing the deployment of frontend code to production environments",
        "Ensuring unit test coverage with React Testing Library & Jest",
        "Developing and maintaining an in-house UI library using Storybook and Chromatic, including publishing updates to NPM packages",
        "Architecting micro frontend solutions utilizing Webpack Module Federation",
        "Refactoring monolithic services into micro frontend using Next.js, TypeScript, React-i18n, AgGrid & GraphQL",
        "Implementing effective alerting mechanisms with APM Datadog to meticulously trace performance and errors",
        "Ensuring code quality through analysis with SonarQube",
      ],
      techstack: ["React", "Next.js", "TypeScript", "Storybook", "Chromatic", "Webpack", "GraphQL", "Datadog", "SonarQube"],
    },
    {
      company: "HIJUP",
      role: "Freelance Front End Engineer",
      period: "Jun 2021 — Jan 2022",
      location: "Remote",
      logo: "/images/logos/hijup.webp",
      highlights: [
        "Developed and delivered a major redesign of the HIJUP web interface to improve usability, performance, and visual consistency",
        "Built and maintained scalable front-end features using Next.js, React, and TypeScript, following modern best practices and component-driven architecture",
        "Improved end-to-end order flow and checkout experience, focusing on conversion, reliability, and user experience",
        "Consumed and managed data from GraphQL APIs, ensuring efficient data fetching and state handling",
        "Optimized performance and SEO through Next.js features such as server-side rendering (SSR) and static generation where applicable",
      ],
      techstack: ["Next.js", "React", "TypeScript", "GraphQL", "SSR"],
    },
    {
      company: "Amartha Mikro Fintek",
      role: "Software Engineer Frontend",
      period: "Apr 2018 — Apr 2021",
      location: "Hybrid",
      logo: "/images/logos/amartha.png",
      highlights: [
        "Developing features web platform investor using JavaScript, React, Redux, Node.js, React-i18n",
        "Developing features to web platform internal CMS using Angular",
        "Developing design revamp web platform investor",
        "Research pattern & rewrite code on web platform investor",
        "Developing dashboard demo OJK to comply ISO certificates",
        "Help handle deployment frontend to production using Jenkins",
        "Maintain company site using WordPress",
        "Coverage unit test using jest & react testing library",
      ],
      techstack: ["JavaScript", "React", "Redux", "Angular", "Jest", "React Testing Library", "Jenkins"],
    },
  ],
};
