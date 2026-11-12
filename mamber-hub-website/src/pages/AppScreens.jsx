import React from "react";
import {
  Bell, Menu, Users, ShieldCheck, AlertTriangle, Coins, UserPlus, CreditCard, PlayCircle,
  BarChart3, CheckCircle2, UploadCloud, Megaphone, Home, User, Hourglass, Copy, Share2,
  MessageCircle, Facebook, Instagram, Music2, Send, Filter, Crown, Gift,
  HelpCircle, Wallet, ArrowLeft, Clock, Link2, Play, Check
} from "lucide-react";

/*
 * HTML copies of real Mamber Hub app screens (Nov 2026 design).
 * Sample names and numbers only — no real member data.
 */

const LOGO = "/assets/mamber-hub-logo.png";

export function Phone({ children, className = "", label }) {
  return (
    <figure className={`ax-phone ${className}`}>
      <div className="ax-screen">
        <div className="ax-status">
          <span>12:14</span>
          <span className="ax-status-icons"><i /><i /><b>78</b></span>
        </div>
        {children}
      </div>
      {label && <figcaption>{label}</figcaption>}
    </figure>
  );
}

function BottomNav({ items, active }) {
  return (
    <div className="ax-nav">
      {items.map(([Icon, text]) => (
        <span key={text} className={text === active ? "on" : ""}>
          <Icon size={13} />
          <small>{text}</small>
        </span>
      ))}
    </div>
  );
}

const MEMBER_NAV = [[Home, "Home"], [PlayCircle, "Videos"], [User, "Profile"]];
const ADMIN_NAV = [[Home, "Home"], [Users, "Members"], [Check, "Payments"], [PlayCircle, "Videos"], [BarChart3, "Reports"]];

function Tile({ icon: Icon, label, tone }) {
  return (
    <div className="ax-tile">
      <span className={`ax-tile-icon ${tone}`}><Icon size={13} /></span>
      <small>{label}</small>
    </div>
  );
}

function PageHead({ title, sub, right }) {
  return (
    <div className="ax-head ax-head-page">
      <span className="ax-round"><ArrowLeft size={12} /></span>
      <div>
        <strong>{title}</strong>
        {sub && <small>{sub}</small>}
      </div>
      {right}
    </div>
  );
}

/* ---------------- Member home ---------------- */
export function MemberHomeScreen() {
  return (
    <>
      <div className="ax-head">
        <div className="ax-topbar">
          <span className="ax-round"><Menu size={12} /></span>
          <span className="ax-brand"><img src={LOGO} alt="" /><span><b>Mamber Hub</b><small>Members Together, Growth Forever</small></span></span>
          <span className="ax-round ax-bell"><Bell size={12} /><i>2</i></span>
        </div>
        <p className="ax-hello">Welcome Back!</p>
        <p className="ax-name">Ali Raza <em>Active Member</em></p>
      </div>
      <div className="ax-body ax-lift">
        <div className="ax-plan">
          <div>
            <small>Current Plan</small>
            <b>Monthly Subscription</b>
            <small>Valid Till: 05 Dec 2026</small>
          </div>
          <em>Active</em>
        </div>
        <p className="ax-section">Quick Overview</p>
        <div className="ax-overview">
          <p><b>6</b><small>Total Payments</small></p>
          <p><b>6</b><small>Paid Months</small></p>
          <p><b>05 Dec</b><small>Next Payment</small></p>
        </div>
        <p className="ax-section">Quick Actions</p>
        <div className="ax-grid">
          <Tile icon={PlayCircle} label="Watch Videos" tone="violet" />
          <Tile icon={Wallet} label="My Payments" tone="green" />
          <Tile icon={User} label="My Profile" tone="sky" />
          <Tile icon={Share2} label="Invite Friends" tone="green" />
          <Tile icon={Megaphone} label="Announcements" tone="amber" />
          <Tile icon={HelpCircle} label="Help & Support" tone="pink" />
        </div>
        <div className="ax-premium">
          <Crown size={13} />
          <div><b>Upgrade to Premium</b><small>Ad-free videos and a better experience.</small></div>
        </div>
      </div>
      <BottomNav items={MEMBER_NAV} active="Home" />
    </>
  );
}

/* ---------------- Admin dashboard ---------------- */
export function AdminDashboardScreen() {
  return (
    <>
      <div className="ax-head">
        <div className="ax-topbar">
          <span className="ax-round"><Menu size={12} /></span>
          <span className="ax-brand"><img src={LOGO} alt="" /><span><b>Mamber Hub</b><small>Admin Dashboard</small></span></span>
          <span className="ax-round"><Bell size={12} /></span>
        </div>
        <p className="ax-hello">Welcome back, Admin! 👑</p>
        <p className="ax-note">You have 3 members with pending payments.</p>
      </div>
      <div className="ax-body ax-lift">
        <div className="ax-stats">
          <div className="ax-stat"><span className="ax-dot violet"><Users size={10} /></span><small>Total Members</small><b>128</b></div>
          <div className="ax-stat"><span className="ax-dot green"><ShieldCheck size={10} /></span><small>Paid Members</small><b className="g">104</b></div>
          <div className="ax-stat"><span className="ax-dot red"><AlertTriangle size={10} /></span><small>Due Members</small><b className="r">24</b></div>
          <div className="ax-stat"><span className="ax-dot amber"><Coins size={10} /></span><small>Total Collection</small><b className="p">Rs. 48,600</b><em>This month: Rs. 9,300</em></div>
        </div>
        <p className="ax-section">Quick Actions <span>Manage</span></p>
        <div className="ax-grid">
          <Tile icon={UserPlus} label="Add Member" tone="violet" />
          <Tile icon={CreditCard} label="Payments" tone="green" />
          <Tile icon={Play} label="Videos" tone="sky" />
          <Tile icon={BarChart3} label="Reports" tone="orange" />
          <Tile icon={CheckCircle2} label="Verify" tone="green" />
          <Tile icon={UploadCloud} label="Upload" tone="violet" />
        </div>
      </div>
      <BottomNav items={ADMIN_NAV} active="Home" />
    </>
  );
}

/* ---------------- Notifications ---------------- */
const NOTES = [
  { icon: CheckCircle2, tone: "green", title: "Payment approved", text: "Your payment is verified. All videos are open now.", time: "2m" },
  { icon: PlayCircle, tone: "violet", title: "New Video: Weekly Session", text: "A new video has been uploaded. Tap to watch.", time: "1h" },
  { icon: Clock, tone: "amber", title: "Subscription ending soon", text: "Your plan ends in 4 days. Renew to keep watching.", time: "3h" },
  { icon: Megaphone, tone: "orange", title: "Announcement", text: "Live Q&A this Friday at 9 PM. Join on time!", time: "1d" },
  { icon: MessageCircle, tone: "sky", title: "Admin Reply", text: "We fixed the video issue. Please check again.", time: "2d" },
  { icon: PlayCircle, tone: "violet", title: "New Video: Getting Started", text: "Start here — a short tour of Mamber Hub.", time: "3d" },
  { icon: Gift, tone: "green", title: "Welcome to Mamber Hub", text: "Share your referral code MBR0123 with friends.", time: "5d" },
];

export function NotificationsScreen() {
  return (
    <>
      <PageHead title="Notifications" sub="5 new updates" />
      <div className="ax-body">
        {NOTES.map(({ icon: Icon, tone, title, text, time }) => (
          <div className="ax-note-card" key={title}>
            <span className={`ax-dot ${tone}`}><Icon size={11} /></span>
            <div><b>{title}</b><small>{text}</small></div>
            <em>{time}</em>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------------- Payment verification ---------------- */
export function VerifyPaymentScreen() {
  return (
    <>
      <PageHead title="Payment Status" sub="Monthly Subscription" />
      <div className="ax-body ax-center">
        <span className="ax-big-icon"><Hourglass size={22} /></span>
        <b className="ax-title">Plan active</b>
        <small className="ax-muted">Google Play confirmed your payment. All member videos are open.</small>
        <div className="ax-receipt">
          <p><span>Status</span><em className="paid">Active</em></p>
          <p><span>Plan</span><b>Basic · monthly</b></p>
          <p><span>Amount</span><b>Rs. 300</b></p>
          <p><span>Paid with</span><b>Google Play</b></p>
          <p><span>Renews</span><b>06 Dec 2026</b></p>
        </div>
        <div className="ax-button">Go to Dashboard</div>
        <div className="ax-button ghost">Contact Support</div>
      </div>
    </>
  );
}

/* ---------------- Refer & Earn ---------------- */
export function ReferScreen() {
  return (
    <>
      <PageHead title="Refer Friends" sub="Invite your friends to Mamber Hub" />
      <div className="ax-body">
        <div className="ax-card ax-center">
          <small className="ax-muted">Your Referral Code</small>
          <b className="ax-code">MBR0123 <Copy size={11} /></b>
          <em className="ax-pill">Friends joined: 6</em>
        </div>
        <div className="ax-card">
          <small className="ax-muted">Your invite link</small>
          <p className="ax-link"><Link2 size={11} /> play.google.com/…mamberhub.app&amp;ref=MBR0123</p>
        </div>
        <p className="ax-section">Share via</p>
        <div className="ax-share">
          <span><i className="green"><MessageCircle size={12} /></i>WhatsApp</span>
          <span><i className="blue"><Facebook size={12} /></i>Facebook</span>
          <span><i className="pink"><Instagram size={12} /></i>Instagram</span>
          <span><i className="dark"><Music2 size={12} /></i>TikTok</span>
          <span><i className="violet"><Share2 size={12} /></i>Other Apps</span>
          <span><i className="amber"><Copy size={12} /></i>Copy</span>
        </div>
      </div>
    </>
  );
}

/* ---------------- Report chat ---------------- */
export function ReportChatScreen() {
  return (
    <>
      <PageHead title="Video not loading" sub="Chat with Admin" right={<em className="ax-chip">Replied</em>} />
      <div className="ax-body ax-chat">
        <div className="ax-bubble me"><small>You • Report</small>Video not loading<br />The weekly session video keeps buffering.<em>10:02 AM</em></div>
        <div className="ax-bubble other"><small>Admin (Mamber Hub)</small>Thanks for telling us. We are checking it now.<em>10:05 AM</em></div>
        <div className="ax-bubble other"><small>Admin (Mamber Hub)</small>Fixed! Please open the video again.<em>10:20 AM</em></div>
        <div className="ax-bubble me"><small>You</small>Working now, thank you!<em>10:22 AM</em></div>
      </div>
      <div className="ax-input"><span>Type a message…</span><i><Send size={11} /></i></div>
    </>
  );
}

/* ---------------- Collection analytics (admin) ---------------- */
export function CollectionScreen() {
  const rows = [
    ["Ali Raza", "Basic · TID 85384288", "Rs. 300", "Paid"],
    ["Sara Khan", "Premium · TID 64862486", "Rs. 600", "Paid"],
    ["Usman Ali", "Basic · TID 96425718", "Rs. 300", "Pending"],
    ["Hina Noor", "Premium · TID 56863489", "Rs. 600", "Paid"],
  ];
  return (
    <>
      <div className="ax-head ax-head-page tall">
        <span className="ax-round"><ArrowLeft size={12} /></span>
        <div><strong>Collection Analytics</strong><small>Every payment and the money collected</small></div>
      </div>
      <div className="ax-body ax-lift">
        <div className="ax-card">
          <small className="ax-muted">Collection · This Month</small>
          <b className="ax-amount">Rs. 9,300</b>
          <small className="ax-violet">All time collection: Rs. 48,600</small>
          <div className="ax-trio">
            <p><small>Paid</small><b className="g">21</b></p>
            <p><small>Pending</small><b className="o">3</b></p>
            <p><small>Rejected</small><b className="r">1</b></p>
          </div>
        </div>
        <div className="ax-chips"><em className="on">This Month</em><em>Last Month</em><em>This Year</em></div>
        <p className="ax-section">Transaction History <span><Filter size={9} /> Latest</span></p>
        {rows.map(([name, sub, amount, state]) => (
          <div className="ax-row" key={name}>
            <span className={`ax-dot ${state === "Paid" ? "green" : "orange"}`}>
              {state === "Paid" ? <Check size={10} /> : <Hourglass size={10} />}
            </span>
            <div><b>{name}</b><small>{sub}</small></div>
            <p><b>{amount}</b><em className={state === "Paid" ? "paid" : "pending"}>{state}</em></p>
          </div>
        ))}
      </div>
      <BottomNav items={ADMIN_NAV} active="" />
    </>
  );
}

/* ---------------- Subscription plans ---------------- */
export function PlansScreen() {
  return (
    <>
      <PageHead title="Choose a Plan" sub="Unlock all member videos" />
      <div className="ax-body">
        <div className="ax-plan-card">
          <div><b>Basic</b><small>All member videos · with ads</small></div>
          <p><b>Rs. 300</b><small>/ month</small></p>
        </div>
        <div className="ax-plan-card premium">
          <em><Crown size={9} /> Best experience</em>
          <div><b>Premium</b><small>Everything in Basic · no ads</small></div>
          <p><b>Rs. 600</b><small>/ month</small></p>
        </div>
        <div className="ax-card">
          <small className="ax-muted">Pay securely with</small>
          <p className="ax-pay"><b>Google Play</b></p>
          <small className="ax-muted">Renews monthly · cancel any time in Play Store.</small>
        </div>
        <div className="ax-button"><Gift size={11} /> Continue</div>
      </div>
    </>
  );
}

export const SCREENS = [
  { id: "home", label: "Member Home", Screen: MemberHomeScreen },
  { id: "plans", label: "Plans", Screen: PlansScreen },
  { id: "verify", label: "Plan Status", Screen: VerifyPaymentScreen },
  { id: "notes", label: "Notifications", Screen: NotificationsScreen },
  { id: "refer", label: "Invite Friends", Screen: ReferScreen },
  { id: "chat", label: "Help Chat", Screen: ReportChatScreen },
  { id: "admin", label: "Admin Dashboard", Screen: AdminDashboardScreen },
  { id: "collection", label: "Collection Analytics", Screen: CollectionScreen },
];

