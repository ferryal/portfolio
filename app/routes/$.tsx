import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  throw new Response("Not Found", { status: 404 });
}

export default function SplatRoute() {
  return null;
}
