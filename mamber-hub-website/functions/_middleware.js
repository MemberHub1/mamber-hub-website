// Site-wide SEO for https://mamberdigitalsolutions.com (runs on every request).
//
// 1. Host: the custom domain is the one canonical site. Requests to the old
//    mamber-hub-website.pages.dev address and to www.mamberdigitalsolutions.com
//    get a permanent (301) redirect to https://mamberdigitalsolutions.com.
//    Paths in NO_REDIRECT keep answering on every host (Firebase sign-in helper,
//    API functions, school apps, verification files), because apps and sign-in
//    flows call them directly.
// 2. Head: every known page gets its own title, description, canonical and
//    Open Graph tags in the server HTML, so Google and link-preview bots see
//    them without running JavaScript.
// 3. Unknown paths answer with a real 404 and noindex instead of the app
//    shell with status 200 (soft 404).

const SITE = "https://mamberdigitalsolutions.com";
const OLD_HOSTS = ["mamber-hub-website.pages.dev", "www.mamberdigitalsolutions.com"];

const NO_REDIRECT = [
  "/__/",
  "/api/",
  "/school-app",
  "/school-admin",
  "/assets/",
  "/google",
  "/favicon",
  "/app-ads.txt",
  "/robots.txt",
  "/sitemap.xml",
];

const PAGES = {
  "/": {
    title: "Mamber Digital Solutions | Mamber Hub & School Management System, Lahore",
    description:
      "Mamber Digital Solutions, Lahore: Mamber Hub membership app for Android and School Management System for private schools (Windows and web), with a 7-day free demo.",
  },
  "/about": {
    title: "About Mamber Digital Solutions | Software Company in Lahore",
    description:
      "Mamber Digital Solutions is a software company in Lahore that builds Mamber Hub, the School Management System and more apps.",
  },
  "/contact": {
    title: "Contact Mamber Digital Solutions | Lahore",
    description:
      "Contact Mamber Digital Solutions in Lahore on WhatsApp at 0318-7630194 or by email at supportmemberhub@gmail.com.",
  },
  "/mamber-hub": {
    title: "Mamber Hub Membership App | Mamber Digital Solutions",
    description:
      "Mamber Hub is the member app by Mamber Digital Solutions. Sign up with your Gmail and watch member videos with a monthly plan from Rs 300.",
  },
  "/school-management": {
    title: "School Management System for Private Schools | Mamber Digital Solutions",
    description:
      "Bilingual Urdu and English school management system for private schools: admissions, attendance, timetable, exams, fees and reports. 7-day free demo, Rs 1500 a month.",
  },
  "/school-management/privacy-policy": {
    title: "School Management Privacy Policy | Mamber Digital Solutions",
    description: "Privacy policy for the School Management System by Mamber Digital Solutions.",
  },
  "/qissabaaz": {
    title: "Qissabaaz Short Drama App | Mamber Digital Solutions",
    description:
      "Qissabaaz is a short-drama app by Mamber Digital Solutions. Watch the first episodes of every drama free, and get all episodes with a Basic or Premium plan.",
  },
  "/qissabaaz/privacy-policy": {
    title: "Qissabaaz Privacy Policy | Mamber Digital Solutions",
    description: "Privacy policy for the Qissabaaz short-drama app by Mamber Digital Solutions.",
  },
  "/qissabaaz/terms": {
    title: "Qissabaaz Terms and Conditions | Mamber Digital Solutions",
    description: "Terms and conditions for using the Qissabaaz short-drama app by Mamber Digital Solutions.",
  },
  "/qissabaaz/child-safety": {
    title: "Qissabaaz Child Safety Standards | Mamber Digital Solutions",
    description: "Child safety standards for the Qissabaaz short-drama app by Mamber Digital Solutions.",
  },
  "/qissabaaz/delete-account": {
    title: "Delete Your Qissabaaz Account | Mamber Digital Solutions",
    description: "How to delete your Qissabaaz account and data, in the app or on this page.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Mamber Digital Solutions",
    description: "Privacy policy of Mamber Digital Solutions, Lahore, for its apps and website.",
  },
  "/terms": {
    title: "Terms and Conditions | Mamber Digital Solutions",
    description: "Terms and conditions for using the apps and website of Mamber Digital Solutions, Lahore.",
  },
  "/delete-account": {
    title: "Delete Your Mamber Hub Account | Mamber Digital Solutions",
    description: "How to delete your Mamber Hub account and data, in the app or on this page.",
  },
};

const NOT_FOUND = {
  title: "Page not found | Mamber Digital Solutions",
  description: "This page does not exist. Go to the Mamber Digital Solutions home page.",
  noindex: true,
};

const isExcluded = (pathname) => NO_REDIRECT.some((prefix) => pathname.startsWith(prefix));

const normalisePath = (pathname) =>
  pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

function rewriteHead(response, meta, canonical, status) {
  const robots = meta.noindex ? "noindex, nofollow" : "index, follow";
  const rewritten = new HTMLRewriter()
    .on("title", { element: (el) => el.setInnerContent(meta.title) })
    .on('meta[name="description"]', { element: (el) => el.setAttribute("content", meta.description) })
    .on('meta[name="robots"]', { element: (el) => el.setAttribute("content", robots) })
    .on('link[rel="canonical"]', { element: (el) => el.setAttribute("href", canonical) })
    .on('meta[property="og:title"]', { element: (el) => el.setAttribute("content", meta.title) })
    .on('meta[property="og:description"]', { element: (el) => el.setAttribute("content", meta.description) })
    .on('meta[property="og:url"]', { element: (el) => el.setAttribute("content", canonical) })
    .transform(response);

  const headers = new Headers(rewritten.headers);
  headers.delete("content-length");
  return new Response(rewritten.body, { status, headers });
}

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const excluded = isExcluded(url.pathname);

  // 1. Old host and www: permanent redirect to the custom domain.
  if (
    OLD_HOSTS.includes(url.hostname) &&
    !excluded &&
    (request.method === "GET" || request.method === "HEAD")
  ) {
    return Response.redirect(SITE + url.pathname + url.search, 301);
  }

  const response = await next();
  if (excluded) return response;

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) return response;

  // 2. Known pages: their own head tags.
  const path = normalisePath(url.pathname);
  const meta = PAGES[path];
  if (meta) {
    const canonical = path === "/" ? `${SITE}/` : `${SITE}${path}`;
    return rewriteHead(response, meta, canonical, response.status);
  }

  // 3. Unknown pages: real 404 with noindex. Files (with an extension) pass through.
  if (/\.[a-z0-9]+$/i.test(url.pathname)) return response;
  const status = response.status === 200 ? 404 : response.status;
  return rewriteHead(response, NOT_FOUND, `${SITE}/`, status);
}
