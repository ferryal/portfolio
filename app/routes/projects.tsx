import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import type { MetaFunction } from "@remix-run/node";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { useRole, type Role } from "~/lib/role";

export const meta: MetaFunction = () => [
  { title: "Projects — Ferryal Fajar" },
  { name: "description", content: "Projects built across fintech, e-commerce, logistics, AI, and enterprise platforms." },
];

// ─── Types ────────────────────────────────────────────────────────────────────

type Project = {
  name: string;
  company: string;
  slug: string;
  url?: string;
  description: string;   // short — shown on card
  detail: string[];      // paragraphs — shown in modal
  highlights: string[];
  techstack: string[];
  detailImage?: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

function getProjects(role: Role): Project[] {
  const fs = role === "fullstack";

  return [
    {
      name: "CMS Dashboard Dagangan",
      company: "Dagangan",
      slug: "dagangan_cms",
      url: "https://cms.dagangan.com/",
      description: "Internal CMS dashboard for the Dagangan operations team to track, assign, and manage content across the platform.",
      detail: [
        "Dagangan's CMS Dashboard was built to empower operations teams to track orders, assign tasks, and create and manage content across the platform at scale. The system was architected with GraphQL for efficient, precise data fetching — minimising over-fetching across complex internal workflows.",
        fs
          ? "On the backend, Node.js, Express.js, and NestJS were used to build robust APIs with PostgreSQL for persistence and Redis caching to optimise response times under load. Transaction isolation levels and connection pooling were implemented to handle high-traffic e-commerce operations safely."
          : "Code quality and reliability were central: SonarQube was integrated for static analysis on every pull request, and Datadog APM was configured for production monitoring and alerting. Comprehensive test coverage was maintained using Jest and React Testing Library throughout the product lifecycle.",
        "The deployment pipeline was managed end-to-end with monitoring via APM Datadog, ensuring the operations team always had a stable, observable platform to work from.",
      ],
      highlights: fs
        ? [
            "Developed frontend features using React, Next.js, TypeScript and GraphQL",
            "Built backend APIs using Node.js, Express.js, and NestJS with PostgreSQL",
            "Implemented Redis caching to optimise API response times and reduce database load",
            "Managed deployment pipelines with monitoring via APM Datadog and SonarQube",
            "Ensured comprehensive test coverage using Jest for both frontend and backend code",
          ]
        : [
            "Built the internal dashboard UI with TypeScript, Next.js, and GraphQL",
            "Integrated SonarQube for static code analysis and Datadog APM for production alerting",
            "Managed frontend deployment to production environments",
            "Ensured unit test coverage with React Testing Library and Jest",
          ],
      techstack: fs
        ? ["TypeScript", "Next.js", "GraphQL", "Node.js", "NestJS", "PostgreSQL", "Redis", "SonarQube", "Datadog"]
        : ["TypeScript", "Next.js", "GraphQL", "SonarQube", "Datadog", "Jest"],
    },
    {
      name: "Retail Platform Dagangan",
      company: "Dagangan",
      slug: "dagangan_belanja",
      url: "https://belanja.dagangan.com/",
      description: "PWA platform for retail and minimarket owners to place orders from the nearest hub for swift delivery.",
      detail: [
        "Dagangan's retail platform is a Progressive Web App enabling minimarket and retail store owners across rural Indonesia to browse products and place orders from the nearest Dagangan distribution hub — getting daily necessities delivered quickly and affordably.",
        "The app was built as a PWA with offline support via service workers and push notifications for order status updates — critical for users in areas with unstable connectivity. Performance was optimised through lazy loading, code splitting, and strategic caching strategies.",
        fs
          ? "The frontend architecture was migrated from a monolithic structure to a micro frontend using Webpack Module Federation, while the backend services were refactored into microservices using NestJS, TypeScript, and GraphQL. Redis caching and PostgreSQL connection pooling were implemented to handle high-traffic concurrent order processing safely."
          : "The architecture was refactored from a monolith to micro frontend using Webpack Module Federation, enabling independent team deployments. Alerting was implemented with Datadog APM to trace performance and errors in production, and SonarQube enforced code quality across every PR.",
      ],
      highlights: fs
        ? [
            "Developed mobile web app features with React, Next.js, TypeScript",
            "Architected micro frontend solutions with Webpack Module Federation",
            "Refactored monolithic backend services into microservices using NestJS, TypeScript, and GraphQL",
            "Implemented Redis caching and PostgreSQL connection pooling for high-traffic operations",
            "Built distributed caching for session management and API response caching under concurrent user loads",
          ]
        : [
            "Built retail PWA with offline support, service workers, and push notifications",
            "Architected micro frontend using Webpack Module Federation",
            "Refactored monolith into micro frontend with Next.js, TypeScript, React-i18n, AgGrid, and GraphQL",
            "Implemented APM Datadog alerting for production performance monitoring",
            "Ensured unit test coverage with React Testing Library and Jest",
          ],
      techstack: ["TypeScript", "Next.js", "Redux", "PWA", "Webpack", "GraphQL", ...(fs ? ["Node.js", "NestJS", "PostgreSQL", "Redis"] : [])],
    },
    {
      name: "Sales & Driver Platform (Pandawa)",
      company: "Dagangan",
      slug: "dagangan_pandawa",
      url: "https://pandawa.dagangan.com/",
      description: "Pandawa — internal ops platform for tracking sales activities, wholesale transactions, and last-mile driver dispatch.",
      detail: [
        "Pandawa is Dagangan's internal operations platform for the sales and logistics workforce. It enables sales representatives to track their activities across regions, process wholesale transactions, and gives dispatch managers the tools to assign drivers for delivering orders from Dagangan's nearest hub directly to end users.",
        "Built as a Progressive Web App, the platform is optimised for mobile use in the field — where sales reps and drivers operate away from desktops. TypeScript, Next.js, and Redux provide a robust, predictable architecture for managing complex order state across multiple user roles (sales, dispatch, driver).",
      ],
      highlights: [
        "Built sales tracking dashboard for field operations teams",
        "Implemented driver dispatch and assignment workflows",
        "Deployed as a Progressive Web App for mobile-first field use",
        "Built with TypeScript, Next.js, and Redux for predictable state management",
        "Managed deployment and ensured unit test coverage",
      ],
      techstack: ["TypeScript", "Next.js", "Redux", "PWA"],
    },
    {
      name: "Company Site Dagangan",
      company: "Dagangan",
      slug: "dagangan",
      url: "https://dagangan.com/",
      description: "The trusted tech-enabled rural commerce platform providing daily necessities at affordable prices to rural communities.",
      detail: [
        "Dagangan is the trusted tech-enabled rural commerce platform that provides access to daily necessities at affordable prices to rural communities across Indonesia. The company site serves as the primary public presence — communicating Dagangan's mission, business model, and hub-based distribution network to partners, retailers, and investors.",
        "Built with TypeScript, Next.js, and Strapi as the headless CMS, the site enables marketing and content teams to update pages, articles, and assets without engineering involvement. Full server-side rendering ensures strong SEO performance and fast initial load times — critical for serving users across Indonesia's diverse connectivity landscape.",
      ],
      highlights: [
        "Built the public-facing company and marketing site",
        "Integrated Strapi headless CMS for content team self-service",
        "Implemented server-side rendering for SEO performance",
        "Managed deployment pipeline to production",
      ],
      techstack: ["TypeScript", "Next.js", "Strapi"],
    },
    {
      name: "UI Component Library Dagangan",
      company: "Dagangan",
      slug: "dagangan_npm",
      url: "https://www.npmjs.com/package/@dagangan/react-components",
      description: "Internal React component library published to npm — used across all Dagangan frontend products for design consistency.",
      detail: [
        "@dagangan/react-components is an internal UI component library built to enforce design consistency across all Dagangan frontend products — the retail PWA, CMS dashboard, Pandawa, and company site. Prior to the library, duplicate components with subtle inconsistencies existed across teams; this library eliminated that entirely.",
        "Built with TSDX for TypeScript-first package development, each component was documented interactively with Storybook and visually tested with Chromatic for automated regression testing on every pull request. Publishing to NPM allowed each product team to pull versioned updates independently, decoupling design system releases from product releases — a significant improvement in team scalability.",
      ],
      highlights: [
        "Developed and maintained in-house UI component library with Storybook and Chromatic",
        "Published as @dagangan/react-components to NPM for cross-team consumption",
        "Enforced design consistency across all Dagangan frontend products",
        "Set up Chromatic for automated visual regression testing on every PR",
        "Built with TSDX for TypeScript-first package development",
      ],
      techstack: ["TypeScript", "TSDX", "Storybook", "Chromatic", "NPM"],
    },
    {
      name: "Admin Dashboard Virgo",
      company: "Capital Net Indonesia",
      slug: "virgo",
      url: "https://virgoku.id/",
      description: "Admin dashboard for Capital Net Indonesia's Virgo digital wallet — payment, remittance, and loyalty points management.",
      detail: [
        "Capital Net Indonesia's Virgo is a digital wallet platform providing financial services including payment, money transfer, remittance, and loyalty points. The admin dashboard was built to give operations teams full visibility and control over transaction monitoring, user management, and remittance workflows.",
        fs
          ? "On the full-stack side, RESTful APIs were built with Node.js and Express.js backed by PostgreSQL for transaction data persistence — implementing authentication and authorisation for cash-in/cash-out monitoring. The frontend was built with React, Redux, and TypeScript for complex, multi-step financial transaction state management."
          : "The dashboard frontend was built with React, Redux, and TypeScript — handling complex state management for multi-step financial transaction flows, remittance monitoring views, and user administration interfaces.",
        "Code quality was enforced through unit testing with Jest and Enzyme, and the platform was deployed to production with full operational handoff.",
      ],
      highlights: fs
        ? [
            "Developed web platform for digital remittance monitoring using React, Redux, TypeScript",
            "Built backend services with Node.js and Express.js + PostgreSQL for transaction processing",
            "Implemented RESTful APIs for cash-in/cash-out monitoring with authentication and authorisation",
            "Handled production deployment and code quality through unit testing with Jest and Enzyme",
          ]
        : [
            "Built admin dashboard UI for digital wallet transaction monitoring",
            "Implemented complex Redux state management for multi-step financial flows",
            "Ensured code quality through unit testing with Jest and Enzyme",
            "Handled production deployment",
          ],
      techstack: ["TypeScript", "React", "Next.js", "Redux", ...(fs ? ["Node.js", "Express.js", "PostgreSQL"] : [])],
    },
    {
      name: "Company Site Virgo",
      company: "Capital Net Indonesia",
      slug: "virgo",
      url: "https://virgoku.id/",
      description: "Marketing site for the Virgo digital wallet showcasing payment, remittance, and loyalty points services.",
      detail: [
        "The Virgo company site serves as the public face of Capital Net Indonesia's digital wallet product — communicating its financial services to potential users and business partners across Indonesia.",
        "The site showcases Virgo's core offerings: domestic and international money transfer, remittance services, payment solutions, and a loyalty points ecosystem. Built with TypeScript, Next.js, and Redux — with a focus on responsive design and fast load times for mobile-first users in Indonesia.",
      ],
      highlights: [
        "Built public marketing site for the Virgo digital wallet product",
        "Implemented responsive design for all device sizes",
        "Built with TypeScript, Next.js for performance and SEO",
      ],
      techstack: ["TypeScript", "Next.js", "Redux"],
    },
    {
      name: "E-Commerce Platform HIJUP",
      company: "HIJUP",
      slug: "hijup",
      url: "https://www.hijup.com/",
      description: "HIJUP.com — the world's first Islamic fashion e-commerce for Muslim women globally.",
      detail: [
        "HIJUP.com is the world's first Islamic fashion e-commerce, built with an online mall concept providing a wide range of products from Indonesian Islamic fashion designers. The platform serves Muslim women globally with clothing, hijab, headscarf, accessories, and more — from curated Indonesian designers.",
        fs
          ? "As a freelance engineer, I redesigned the e-commerce interface using React and TypeScript with GraphQL integration, improving the order flow experience by optimising GraphQL queries and implementing more efficient backend data fetching. I collaborated with the backend team to enhance API performance and implement new product features across the platform."
          : "As a freelance engineer, I delivered a major redesign of the entire web interface to improve usability, performance, and visual consistency. The frontend was rebuilt using Next.js, React, and TypeScript following component-driven architecture and modern best practices.",
        "Particular attention was paid to the order flow and checkout experience to improve conversion rates. Performance was optimised using Next.js SSR and static generation where applicable — delivering fast, SEO-friendly product pages to a global Muslim fashion audience.",
      ],
      highlights: fs
        ? [
            "Redesigned e-commerce interface using React and TypeScript with GraphQL integration",
            "Improved order flow by optimising GraphQL queries and backend data fetching",
            "Collaborated with backend team to enhance API performance and implement new features",
          ]
        : [
            "Delivered a major redesign of the HIJUP web interface for usability and performance",
            "Built scalable frontend features with Next.js, React, and TypeScript",
            "Improved end-to-end order flow and checkout for conversion and reliability",
            "Optimised performance and SEO using Next.js SSR and static generation",
            "Consumed and managed GraphQL API data with efficient state handling",
          ],
      techstack: ["TypeScript", "React", "Next.js", "GraphQL"],
    },
    {
      name: "P2P Lending Platform Amartha",
      company: "Amartha Mikro Fintek",
      slug: "amartha_marketplace",
      url: "https://dashboard.amartha.com/preview-marketplace",
      description: "Peer-to-peer lending marketplace connecting micro and SME business partners with investors across Indonesia.",
      detail: [
        "Amartha is a leading microfinance technology platform with a mission of realising shared prosperity through digital financial infrastructure for Indonesia's grassroots economy. Established in 2010, Amartha connects rural micro-enterprises — predominantly run by strong women — with investors who fund their working capital loans.",
        "The P2P lending marketplace is the core product: connecting investors with verified borrowers through a transparent, OJK-regulated platform. I developed features for the investor web platform using JavaScript, React, Redux, and React-i18n for internationalisation. Key contributions included a full design revamp of the investor portal and building an OJK compliance dashboard for ISO certification.",
        "I researched and rewrote legacy code patterns for maintainability, maintained comprehensive test coverage with Jest and React Testing Library, and managed production deployments using Jenkins CI/CD.",
      ],
      highlights: [
        "Developed features for the investor web platform using JavaScript, React, Redux, and React-i18n",
        "Built design revamp for the investor portal",
        "Developed OJK compliance dashboard for ISO certificate requirements",
        "Researched and rewrote legacy code patterns for maintainability",
        "Covered unit tests using Jest and React Testing Library",
        "Managed frontend deployments to production using Jenkins",
      ],
      techstack: ["JavaScript", "React", "Redux", "React-i18n", "Jest", "Jenkins"],
    },
    {
      name: "Company Site Amartha",
      company: "Amartha Mikro Fintek",
      slug: "amartha",
      url: "https://amartha.com/",
      description: "Amartha's company site — Indonesia's leading microfinance technology platform for the grassroots economy.",
      detail: [
        "Amartha is a leading microfinance technology platform established in 2010, with a mission of realising shared prosperity through digital financial infrastructure for Indonesia's grassroots economy. The platform connects rural micro-enterprises run by strong women with access to affordable capital at scale.",
        "I developed features for Amartha's internal CMS platform using Angular, and maintained the WordPress-based marketing site for content team use. The public company site was built with React, Redux, and GSAP for smooth, animated brand storytelling — conveying Amartha's social impact mission powerfully to investors, partners, and the public.",
        "Production deployments were managed via Jenkins CI/CD, with unit test coverage maintained across the codebase using Jest and React Testing Library.",
      ],
      highlights: [
        "Developed features for the internal CMS web platform using Angular",
        "Built the public company site with React, Redux, and GSAP animations for brand storytelling",
        "Maintained WordPress-based marketing site for content teams",
        "Managed production deployments using Jenkins CI/CD",
        "Covered unit tests using Jest and React Testing Library",
      ],
      techstack: ["React", "Redux", "GSAP", "Angular", "WordPress", "Jenkins"],
    },
    {
      name: "Company Site Tuntun Sekuritas",
      company: "Tuntun Sekuritas",
      slug: "tuntun",
      url: "https://tuntun.co.id/",
      description: "Tuntun Sekuritas — Indonesian securities company site covering trading, asset management, and investment advisory.",
      detail: [
        "Tuntun Sekuritas is an Indonesian securities company established in 1999, with Antai Securities Hong Kong as controlling shareholder — holding securities trading, asset management, and investment advisory licenses from the SFC Hong Kong. The Antai core team brings over 4.3 billion USD of investment experience in Asian and North American markets.",
        fs
          ? "I led development of 3 core trading platform modules — building the company site frontend alongside Node.js/Express backend APIs. Database schemas were designed and data migration strategies implemented using PostgreSQL, improving operational efficiency by 45% on the AOP (Admin Operations Platform) module."
          : "I led development of 3 core trading platform modules using React, Craco, Redux, React Query, and Ant Design UI components. The company site and trading modules were built to be high-performance and professional — serving financial services audiences with demanding UX expectations.",
        "Most of Tuntun's employees are graduates of well-known universities in Indonesia and abroad, and the company's core tech team members hold CFA, CTA, WPPE, and WMI qualifications.",
      ],
      highlights: fs
        ? [
            "Led development of 3 core trading platform modules with React frontend and Node.js/Express APIs",
            "Designed database schemas and data migration strategies using PostgreSQL",
            "Built high-performance company site for financial services audiences",
          ]
        : [
            "Led development of 3 core trading platform modules using React, Craco, Redux, React Query, Ant Design",
            "Built responsive, high-performance company site for financial services audiences",
            "Delivered consistent UI across Indonesian, English, and Mandarin interfaces",
          ],
      techstack: ["React", "Next.js", "Redux", "GSAP", ...(fs ? ["Node.js", "Express.js", "PostgreSQL"] : ["Ant Design", "React Query"])],
    },
    {
      name: "LCMP — Language Content Management",
      company: "Tuntun Sekuritas",
      slug: "tuntun_lcmp",
      url: "https://tuntun.co.id/",
      description: "Multi-language content platform supporting Indonesian, English, and Mandarin — reduced deployment time by 70%.",
      detail: [
        "The Language Content Management Platform (LCMP) was built for Tuntun Sekuritas to enable real-time, dynamic management of multi-language content across the trading platform — supporting Indonesian, English, and Mandarin for a diverse international user base.",
        fs
          ? "Built as a full-stack application with React/Redux frontend and Node.js/PostgreSQL backend, the LCMP reduced content deployment time by 70% by eliminating engineering involvement in routine content updates. Database schemas were designed for content versioning and multi-language state management, and backend APIs were built for real-time content delivery across markets."
          : "Built with React, Craco, Redux, and React Query for real-time content synchronisation, the LCMP empowered the content team to update copywriting, localised text, and page sections instantly — reducing deployment time by 70% and eliminating routine engineering bottlenecks.",
        "The platform supported real-time preview of localised content before publishing — enabling the team to validate multi-language copy across all three languages simultaneously.",
      ],
      highlights: fs
        ? [
            "Built full-stack LCMP with React/Redux frontend and Node.js/PostgreSQL backend",
            "Reduced content deployment time by 70%",
            "Supported multi-language content: Indonesian, English, and Mandarin",
            "Designed PostgreSQL schemas for content versioning and multi-language management",
            "Implemented real-time content preview before publishing",
          ]
        : [
            "Built LCMP for dynamic multi-language content management with real-time copywriting",
            "Reduced content deployment time by 70% through streamlined content workflows",
            "Supported Indonesian, English, and Mandarin across the trading platform",
            "Built with React, Craco, Redux, and React Query for real-time data synchronisation",
          ],
      techstack: ["React", "Redux", "TypeScript", ...(fs ? ["Node.js", "PostgreSQL", "Express.js"] : ["React Query", "Craco"])],
    },
    {
      name: "Trauma & Empathy",
      company: "Freelance",
      slug: "traumaempathy",
      url: "https://traumaandempathy.com/",
      description: "Research-driven platform exploring the shared relationship between childhood trauma and empathy.",
      detail: [
        "Trauma & Empathy is a technology platform with a mission to foster understanding of the relationship between childhood trauma and empathy through digital engagement and community support. The platform was built for researchers, practitioners, and individuals exploring trauma-informed approaches to mental health and human connection.",
        "Built with React, Next.js, Redux, and TypeScript — with thoughtful attention to accessible, privacy-conscious UX design appropriate for a sensitive and deeply personal subject matter. Server-side rendering ensures fast, SEO-optimised delivery of educational and resource content to users seeking support.",
      ],
      highlights: [
        "Built research-driven platform for trauma and empathy awareness",
        "Prioritised accessible, empathetic UX design for a sensitive subject matter",
        "Implemented privacy-conscious data handling and content moderation",
        "Built with TypeScript, React, Next.js, and Redux for type-safe, maintainable code",
      ],
      techstack: ["TypeScript", "React", "Next.js", "Redux"],
    },
    {
      name: "Fingular — BNPL & Digital Lending",
      company: "Fingular",
      slug: "fingular",
      url: "https://fingular.com/",
      description: "Global neobank and Buy Now Pay Later (BNPL) platform offering seamless, automated, and paperless consumer financing.",
      detail: [
        "Fingular is a global neobank and digital-first lending platform designed to provide accessible financial services to underserved populations. A core component of the platform is its Buy Now Pay Later (BNPL) system, which provides flexible installment-based money management and consumer financing integrated directly into merchant ecosystems.",
        fs
          ? "Built as a scalable full-stack application, the platform leverages Next.js and TypeScript on the frontend, and Node.js with NestJS and PostgreSQL on the backend. It utilizes a microservices architecture with Redis session management and database transaction handling (such as row-level locking) to support high-concurrency loan processing and real-time loan tracking."
          : "The frontend was architected using Next.js, TypeScript, and Feature-Sliced Design (FSD) to maintain a highly modular and testable codebase. It integrates TanStack Query for efficient server state management and WebSockets for real-time tracking of loan applications, credit approvals, and payment scheduling.",
        "To ensure high reliability in financial transactions, the platform maintained a strict 95% test coverage goal using Jest and React Testing Library/integration tests, and was deployed using Docker on Google Cloud Platform (GCP) and Google Cloud Run."
      ],
      highlights: fs
        ? [
            "Led full-stack development using Next.js, TypeScript, Node.js, NestJS, and PostgreSQL",
            "Designed and implemented RESTful APIs and GraphQL endpoints for loan tracking and BNPL",
            "Built microservices architecture with Redis session management and event-driven queues",
            "Handled high-concurrency loan applications using PostgreSQL row-level locking",
            "Maintained 95% test coverage using Jest and automated integration testing",
            "Managed deployments via Docker, GCP, and Google Cloud Run with CI/CD"
          ]
        : [
            "Led frontend architecture using Next.js, TypeScript, and Feature-Sliced Design (FSD)",
            "Implemented real-time loan status tracking and credit scoring UI using WebSockets",
            "Optimized frontend data fetching and caching using TanStack Query",
            "Achieved 95% test coverage using Jest and React Testing Library",
            "Managed end-to-end localization workflows using Lokalise.com",
            "Optimized performance with lazy loading, code splitting, and PWA integration"
          ],
      techstack: ["TypeScript", "React", "Next.js", "TanStack Query", "GraphQL", "WebSockets", "Docker", "GCP", ...(fs ? ["Node.js", "NestJS", "PostgreSQL", "Redis"] : ["PWA", "Lokalise"])],
    },
    {
      name: "Sophiie AI — JMS Integration",
      company: "Fingular",
      slug: "sophiie_ai",
      url: "https://www.sophiie.ai/",
      description: "AI-powered integration layer connecting ServiceM8, Simpro, and Jobber for intelligent job management automation.",
      detailImage: "/images/projects/sophiie_ai/sophiie.png",
      detail: [
        "Sophiie AI is an intelligent integration platform connecting leading job management systems — ServiceM8, Simpro, and Jobber — into a unified, AI-powered workflow engine. It automates job scheduling, dispatch assignment, and cross-platform reporting with intelligent data synchronisation, eliminating manual overhead across disconnected tools.",
        fs
          ? "Built with an event-driven architecture using TypeScript, React/Next.js for the frontend and Node.js backend APIs. The integration layer handles real-time bi-directional data sync across JMS platforms, AI-driven job assignment logic, automated reporting pipelines, and notification workflows across all connected systems."
          : "The frontend features complex multi-platform data visualisation, AI recommendation interfaces, and real-time job status tracking across ServiceM8, Simpro, and Jobber — built with Next.js and TypeScript for a type-safe, performant UI that handles data from multiple JMS sources simultaneously.",
      ],
      highlights: fs
        ? [
            "Built AI-powered integration layer connecting ServiceM8, Simpro, and Jobber",
            "Designed event-driven, RESTful APIs for intelligent job scheduling and dispatch automation",
            "Implemented real-time bi-directional data sync across JMS platforms",
            "Integrated AI capabilities for intelligent job assignment and dispatch optimisation",
            "Built with TypeScript across the full stack for type safety",
          ]
        : [
            "Built complex multi-platform data visualisation interface for 3 JMS systems",
            "Developed AI recommendation interfaces for job assignment",
            "Implemented real-time job status tracking across ServiceM8, Simpro, and Jobber",
            "Built with Next.js and TypeScript for performant, type-safe UI",
          ],
      techstack: ["TypeScript", "React", "Next.js", ...(fs ? ["Node.js", "AI Integration", "REST API"] : [])],
    },
    {
      name: "AnchorWorx — HRMS & Learning",
      company: "Fingular",
      slug: "anchorworx",
      url: "https://anchorworx.com/",
      description: "Comprehensive HRMS with job application tracking and an integrated training course platform for employee development.",
      detail: [
        "AnchorWorx is a comprehensive Human Resources Management System designed to streamline the complete employee lifecycle — from job application and onboarding through compliance training and ongoing development.",
        "The platform features two core modules: an end-to-end Applicant Tracking System (ATS) for HR teams to manage postings, applications, interviews, and offers; and an integrated Learning Management System (LMS) with course authoring, completion tracking, certification management, and compliance reporting.",
        fs
          ? "Built full-stack with TypeScript, React/Next.js frontend and Node.js backend with PostgreSQL — covering the complete data model for HR workflows, application state management, course content delivery, and employee records with role-based access control."
          : "Built with TypeScript and React/Next.js — featuring complex HR workflow UIs, course authoring interfaces, employee progress dashboards, and compliance reporting views with a focus on clean, intuitive UX for non-technical HR users.",
      ],
      highlights: fs
        ? [
            "Built comprehensive ATS with end-to-end job application tracking",
            "Developed integrated LMS with course authoring and completion tracking",
            "Implemented Node.js backend APIs with PostgreSQL for HR data management",
            "Built compliance reporting and certification management modules",
            "Designed scalable full-stack architecture with TypeScript throughout",
          ]
        : [
            "Built HRMS frontend with complex job application tracking workflows",
            "Developed integrated LMS UI with course authoring and progress tracking",
            "Implemented employee development dashboards and compliance reporting views",
            "Built with Next.js and TypeScript for maintainable, scalable UI",
          ],
      techstack: ["TypeScript", "React", "Next.js", ...(fs ? ["Node.js", "PostgreSQL"] : [])],
    },
  ];
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d0d0d] border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "fadeSlideIn 0.25s ease-out both" }}
      >
        {/* Cover */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl bg-white/5">
          <img
            src={project.detailImage || `/images/projects/${project.slug}/cover.png`}
            alt={project.name}
            className="w-full h-full object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
          <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/60 backdrop-blur hover:bg-black/80 border border-white/20 transition">
            <Icon icon="lucide:x" width={18} height={18} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <p className="text-xs text-violet-400 font-medium mb-1">{project.company}</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">{project.name}</h2>
            </div>
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-3 py-2 transition">
                Visit <Icon icon="lucide:arrow-up-right" width={12} height={12} />
              </a>
            )}
          </div>

          {/* Short description */}
          <p className="text-white/50 text-sm mb-5 leading-relaxed">{project.description}</p>

          {/* Detailed paragraphs */}
          <div className="mb-6 space-y-3">
            {project.detail.map((para, i) => (
              <p key={i} className="text-white/75 leading-relaxed text-sm md:text-base">{para}</p>
            ))}
          </div>

          {/* Key contributions */}
          <div className="mb-6">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Key Contributions</p>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-white/70">
                  <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-violet-400" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.techstack.map((tech) => (
                <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <button onClick={onClick} className="group text-left rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] w-full">
      <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
        <img
          src={`/images/projects/${project.slug}/cover.png`}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/15 backdrop-blur rounded-full px-4 py-2 text-sm font-medium border border-white/20 flex items-center gap-2">
            <Icon icon="lucide:zoom-in" width={14} height={14} /> View Details
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs text-violet-400 font-medium mb-1">{project.company}</p>
        <h3 className="text-base font-semibold text-white mb-2 line-clamp-1">{project.name}</h3>
        <p className="text-xs text-white/60 line-clamp-2 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.techstack.slice(0, 4).map((tech) => (
            <span key={tech} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/10">{tech}</span>
          ))}
          {project.techstack.length > 4 && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/10">+{project.techstack.length - 4}</span>
          )}
        </div>
      </div>
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Projects() {
  const role = useRole();
  const projects = getProjects(role);
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="mb-12">
          <div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center mb-6">
            <Icon icon="lucide:gallery-horizontal" width={14} height={14} className="text-white/60" />
            <span className="text-xs text-white/70">All Projects</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">Selected Work</h1>
          <p className="text-base md:text-lg text-white/60 max-w-2xl">
            {role === "frontend"
              ? "Frontend projects built with React, TypeScript, and modern web technologies — click any card to see the full story."
              : "End-to-end projects across fintech, e-commerce, logistics, AI, and enterprise — click any card to see the full story."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={`${project.slug}-${project.name}`} project={project} onClick={() => setSelected(project)} />
          ))}
        </div>
      </main>
      <Footer />
      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
