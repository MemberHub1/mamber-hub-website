// Central place for all external links used on the website.
// Every GitHub release must attach the app as "MamberHub.apk" so this link
// always downloads the newest version.
export const APK_URL =
  "https://github.com/MemberHub1/mamber-hub-website/releases/latest/download/MamberHub.apk";

export const APP_VERSION = "1.0.4";
export const APP_SIZE = "40 MB";
export const MIN_ANDROID = "Android 8.0+";

// Membership plans (same as the app's Subscription screen).
export const PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: 300,
    days: 30,
    tagline: "Everything you need to start watching.",
    features: [
      "All member videos",
      "Member dashboard & profile",
      "Your own referral code",
      "App notifications",
      "Includes ads",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 600,
    days: 30,
    badge: "Best experience",
    tagline: "The full Mamber Hub experience, without ads.",
    features: [
      "Everything in Basic",
      "No ads anywhere in the app",
      "Uninterrupted, ad-free videos",
    ],
  },
];

export const SUPPORT_EMAIL = "supportmemberhub@gmail.com";
export const SUPPORT_PHONE = "+923187630194";
export const WHATSAPP_URL = "https://wa.me/923187630194";

export const SOCIAL_LINKS = [
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/mamber_hub/" },
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61595549139451" },
  { key: "whatsapp", label: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029Vb8gwbm4yltS5a7z6j2k" },
  { key: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@mamberhubofficial" },
];
