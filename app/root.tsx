import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
  Link,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Icon } from "@iconify/react";
import { RoleContext, type Role } from "~/lib/role";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const path = url.pathname.toLowerCase();

  // Security check: detect hacker scans, directory traversal, or known exploit paths
  const suspiciousPaths = [
    "/wp-admin",
    "/admin",
    "/.env",
    "/.git",
    "/xmlrpc.php",
    "/phpinfo",
    "/etc/passwd",
    "/cgi-bin",
    "/setup.php",
    "/config.php",
    "/composer.json",
    "/package.json",
    "/hacker",
  ];

  const isSuspicious =
    suspiciousPaths.some((p) => path.includes(p)) ||
    url.search.includes("../") ||
    url.search.includes("etc/passwd") ||
    url.search.includes("wp-admin");

  if (isSuspicious) {
    throw new Response("Not Found", { status: 404 });
  }

  const raw = process.env.PORTFOLIO_ROLE ?? "fullstack";
  const role: Role = raw === "frontend" ? "frontend" : "fullstack";
  return { role };
}

/** HTML shell only — no loader data access here */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        className="antialiased text-white bg-black"
        style={{ fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" }}
      >
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/** Root route — wraps every page with the role context */
export default function App() {
  const { role } = useLoaderData<typeof loader>();
  return (
    <RoleContext.Provider value={role}>
      <Outlet />
    </RoleContext.Provider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center">
      <div className="max-w-md w-full border border-white/10 bg-white/5 rounded-2xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 mb-6">
          <Icon icon={is404 ? "lucide:shield-alert" : "lucide:alert-triangle"} width={32} height={32} />
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          {is404 ? "404 Not Found" : "An Error Occurred"}
        </h1>
        
        <p className="text-white/60 text-sm mb-6 leading-relaxed">
          {is404 
            ? "The page you are looking for does not exist or has been hidden for security reasons." 
            : "Something went wrong. Please try again later."}
        </p>

        <Link 
          to="/" 
          className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-white/30 ring-1 text-sm font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full px-6 py-2.5 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)] w-full"
        >
          <span className="z-[1] flex items-center gap-1.5 justify-center">
            <Icon icon="lucide:arrow-left" width={16} height={16} />
            Back to Home
          </span>
          <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: "linear-gradient(45deg,rgba(56,189,248,.8) 0%,rgba(99,102,241,.8) 50%,rgba(168,85,247,.8) 100%)" }} />
        </Link>
      </div>
    </div>
  );
}
