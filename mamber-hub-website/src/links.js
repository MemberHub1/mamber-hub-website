// Central place for all external links used on the website.

export const COMPANY_NAME = "Mamber Digital Solutions";
// Company logo (Mamber Digital Solutions logo kit, public/assets/brand/).
export const COMPANY_LOGO = "/assets/brand/header-logo.png";            // light backgrounds
export const COMPANY_LOGO_WHITE = "/assets/brand/header-logo-white.png"; // dark header / footer
export const COMPANY_LOGO_STACKED = "/assets/brand/logo-stacked.png";

// School Management System
// The Windows installer is attached to a fixed GitHub release tag (school-v1.0.3)
// that is NOT marked "latest", so the Mamber Hub "latest" APK link keeps working.
export const SCHOOL_VERSION = "1.0.3";
export const SCHOOL_WIN_SIZE = "131 MB";
export const SCHOOL_WIN_URL =
  "https://github.com/MemberHub1/mamber-hub-website/releases/download/school-v1.0.3/School-Management-System-Setup-1.0.3.exe";
export const SCHOOL_WEB_URL = "/school-app/";
export const SCHOOL_ICON = "/assets/school-logo-192.jpg";
export const SCHOOL_LOGO_WIDE = "/assets/school-logo.jpg";
// Windows installer 1.0.3 (subscription page, teacher login, email sign-in, 7-day demo) is published on GitHub.
export const SCHOOL_WIN_READY = true;
// 7-day free demo, then a monthly subscription (School Management only).
export const SCHOOL_DEMO_DAYS = 7;
export const SCHOOL_PRICE_PKR = 1500;
export const SCHOOL_PAY_NUMBER = "0316-7630171"; // EasyPaisa and JazzCash
// Every GitHub release must attach the app as "MamberHub.apk" so this link
// always downloads the newest version.
export const APK_URL =
  "https://github.com/MemberHub1/mamber-hub-website/releases/latest/download/MamberHub.apk";

export const APP_VERSION = "1.0.6";
export const APP_SIZE = "40 MB";
export const MIN_ANDROID = "Android 8.0+";

// Google Play: paste the Play Store link here once the app is published.
// While it is empty the site offers the APK download; when it is filled in,
// every Download button opens Google Play instead.
export const PLAY_STORE_URL = "";
export const DOWNLOAD_URL = PLAY_STORE_URL || APK_URL;
export const DOWNLOAD_LABEL = PLAY_STORE_URL ? "Get it on Google Play" : "Download APK";

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

export const WEBSITE_URL = "https://mamber-hub-website.pages.dev/";

// Mamber Digital Solutions accounts (same links as the app's Support page).
export const SOCIAL_LINKS = [
  { key: "whatsapp", label: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029Vb8gwbm4yltS5a7z6j2k" },
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/share/18pKxuso9s/" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/mamberdigitalsolutions/" },
  { key: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@mamberhubofficial" },
];

// Qissabaaz (short-drama app, Android). Same plans, policies and delete page as the app.
// QZ_PLAY_URL: paste the Play Store link once the app is live (until then the page shows
// "Coming soon on Google Play"). QZ_APK_URL: only a Play-signed APK (Play Console → App bundle
// explorer → Download signed universal APK), attached to a GitHub release as Qissabaaz.apk.
export const QZ_NAME = "Qissabaaz";
export const QZ_LOGO = "/assets/qissabaaz-logo.png";
export const QZ_BANNER = "/assets/qissabaaz-banner.jpg";
export const QZ_VERSION = "0.8.0";
export const QZ_PLAY_URL = "";
export const QZ_APK_URL = "";
export const QZ_DELETE_URL = "https://drama-app-api.supportmemberhub.workers.dev/account/delete";
export const QZ_PLANS = [
  { id: "free", name: "Free", price: 0, tagline: "Start watching right away, no account needed.",
    features: ["First episodes of every drama", "Like, comment and share", "Includes ads"] },
  { id: "basic", name: "Basic", price: 599, tagline: "Every episode of every drama.",
    features: ["All episodes of all dramas", "My List and watch history", "Includes ads"] },
  { id: "premium", name: "Premium", price: 999, badge: "3 days free", tagline: "Everything, with no ads.",
    features: ["All episodes of all dramas", "No ads anywhere", "3-day free trial for new subscribers"] },
];
