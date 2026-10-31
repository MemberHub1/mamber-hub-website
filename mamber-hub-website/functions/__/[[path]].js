// School Management System: Google sign-in through this website's own domain.
//
// Firebase Authentication serves its sign-in helper pages at /__/auth/* and
// /__/firebase/* on the project's firebaseapp.com domain. Modern browsers block
// the redirect sign-in flow when that helper runs on a different site from the
// page, so we forward /__/* on mamber-hub-website.pages.dev to Firebase
// (Firebase's documented "reverse proxy" option). No secrets are involved.

const FIREBASE_AUTH_ORIGIN = "https://school-management-system-d3e44.firebaseapp.com";

export async function onRequest({ request }) {
  const url = new URL(request.url);
  const target = FIREBASE_AUTH_ORIGIN + url.pathname + url.search;

  const headers = new Headers(request.headers);
  headers.delete("host");

  const upstream = await fetch(target, {
    method: request.method,
    headers,
    body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
    redirect: "manual",
  });

  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: upstream.headers,
  });
}
