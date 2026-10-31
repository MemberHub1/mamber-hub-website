// School Management System: WhatsApp alert to the owner when a school submits
// a subscription payment (EasyPaisa / JazzCash Transaction ID).
//
// The app calls this right after saving the payment. To stop spam, the message
// text is built only from the school's own licence record in Firestore, which
// is read with the caller's Firebase sign-in token (so only the principal of
// that school can trigger it), and only for a payment submitted in the last
// 10 minutes.
//
// Setup (Cloudflare Pages → Settings → Variables and Secrets, Production):
//   CALLMEBOT_APIKEY  the key CallMeBot sent to the owner's WhatsApp (secret)
//   NOTIFY_PHONE      optional, default +923187630194
//   ADMIN_URL         optional, default https://mamber-hub-website.pages.dev/school-admin/

const PROJECT = "school-management-system-d3e44";
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", ...CORS } });

const str = (f) => (f && (f.stringValue ?? f.integerValue ?? f.doubleValue)) ?? "";

export function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS });
}

export async function onRequestPost({ request, env }) {
  const auth = request.headers.get("Authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  let uid = "";
  try { uid = String((await request.json()).uid || ""); } catch { /* bad body */ }
  if (!token || !/^[A-Za-z0-9]{10,64}$/.test(uid)) return json({ ok: false, error: "bad_request" }, 400);

  // Read the school's licence as that principal (Firestore rules allow only them).
  const res = await fetch(
    `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/licenses/${uid}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) return json({ ok: false, error: "not_allowed" }, 403);
  const fields = (await res.json()).fields || {};
  const p = (fields.payment && fields.payment.mapValue && fields.payment.mapValue.fields) || null;
  if (!p || str(p.status) !== "pending") return json({ ok: false, error: "no_pending_payment" }, 409);

  const submittedAt = Date.parse((p.submittedAt && p.submittedAt.timestampValue) || "");
  if (!submittedAt || Date.now() - submittedAt > 10 * 60 * 1000) return json({ ok: false, error: "too_old" }, 409);

  // Send each payment only once (per Cloudflare location) even if the app retries.
  const cache = caches.default;
  const onceKey = new Request(`https://notify.invalid/${uid}/${submittedAt}`);
  if (await cache.match(onceKey)) return json({ ok: true, duplicate: true });

  if (!env.CALLMEBOT_APIKEY) return json({ ok: false, error: "not_configured" }, 503);

  const school = str(fields.schoolName) || "School";
  const email = str(fields.principalEmail);
  const adminUrl = env.ADMIN_URL || "https://mamber-hub-website.pages.dev/school-admin/";
  const text = [
    "💰 *New School Management payment*",
    `School: ${school}`,
    `Principal: ${email}`,
    `${str(p.method)} TID: ${str(p.trxId)}`,
    `From: ${str(p.sender)}`,
    `Amount: Rs. ${str(p.amount) || 1500}`,
    "",
    `Check it and activate: ${adminUrl}`,
  ].join("\n");

  const phone = env.NOTIFY_PHONE || "+923187630194";
  const sendUrl = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(env.CALLMEBOT_APIKEY)}`;
  const sent = await fetch(sendUrl);
  if (!sent.ok) return json({ ok: false, error: "send_failed" }, 502);

  await cache.put(onceKey, new Response("1", { headers: { "Cache-Control": "max-age=86400" } }));
  return json({ ok: true });
}
