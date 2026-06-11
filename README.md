# Ferryal Fajar — Developer Portfolio

A premium, interactive, and responsive developer portfolio showcasing projects across fintech, AI integrations, PWA platforms, and enterprise solutions. Built using modern web technologies, the application supports a dynamic environment-driven role configuration (Frontend vs. Fullstack context) and includes robust security mitigations to protect against common hacking probes.

## 🚀 Tech Stack

- **Framework:** [Remix](https://remix.run/) / [React Router v7](https://reactrouter.com/) (Vite-based)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Vanilla CSS transitions
- **Icons:** `@iconify/react`
- **Build Tool:** Vite

---

## 🎨 Architecture & Dynamic Role Context

The portfolio features a unified codebase that shifts its focus (hero headers, project details, work highlights, and skills display) based on the target role profile context:

- **Frontend Specialist Role:** Highlights UI engineering, Core Web Vitals, module federation, design systems, Jest/React Testing Library, and state management.
- **Fullstack Engineer Role:** Emphasizes Node.js backend services, NestJS microservices, REST/GraphQL APIs, database queries (PostgreSQL/MongoDB), Redis caching, and DevOps (Docker, GCP, AWS).

This is toggled server-side using the `PORTFOLIO_ROLE` environment variable:
- `PORTFOLIO_ROLE=frontend`
- `PORTFOLIO_ROLE=fullstack`

---

## 🔒 Security Features

Built with security in mind, the portfolio includes active mitigations to block malicious requests and prevent information leakage:

1. **Exploit & Vulnerability Scanner Interception**:
   The root loader monitors incoming request paths and search queries. It checks for directory traversal (`../`) and patterns associated with hacking scans (such as `/wp-admin`, `/.env`, `/.git`, `/phpinfo`, `etc/passwd`, `/xmlrpc.php`, `/cgi-bin`, etc.) and immediately terminates requests with a clean 404 response.
   
2. **Splat Route Catch-All**:
   An unmatched route handler (`app/routes/$.tsx`) cleanly intercepts dead URLs.

3. **Graceful Error Isolation (Stack Trace Protection)**:
   A custom, dark glassmorphic `ErrorBoundary` catches route errors and hides technical tracebacks or package internals. Attackers and regular users see a uniform, polished security-themed 404 layout instead of debug details.

---

## 🛠️ Development Setup

### Prerequisites

- Node.js (v20+ recommended)
- `pnpm` (package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ferryal/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create your `.env` configuration:
   ```bash
   cp .env.example .env
   ```
   Define your default context inside `.env`:
   ```env
   PORTFOLIO_ROLE=frontend # Or "fullstack"
   ```

### Command Reference

- **Development Server:**
  ```bash
  pnpm dev
  ```
- **Production Build:**
  ```bash
  pnpm build
  ```
- **Production Run:**
  ```bash
  pnpm start
  ```

---

## 📂 Project Assets & Image Assets Reference

Images for featured projects are organized dynamically based on their respective slugs inside the public folder:

- `/public/images/projects/fingular/cover.png` - Fingular BNPL & Digital Lending
- `/public/images/projects/sophiie_ai/cover.png` & `/sophiie.png` - Sophiie AI Integration (Card & Modal)
- `/public/images/projects/anchorworx/cover.png` - AnchorWorx HRMS & Learning
- `/public/images/projects/dagangan_cms/cover.png` - Dagangan CMS
- `/public/images/projects/dagangan_belanja/cover.png` - Dagangan Retail PWA

*All core favicons (`apple-touch-icon.png`, `favicon-32x32.png`, `favicon-16x16.png`, and `site.webmanifest`) are served directly from the root `public/` directory.*
