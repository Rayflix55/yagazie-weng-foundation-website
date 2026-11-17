import { useState, type ReactNode } from "react";
import {
  X,
  Menu,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { cn } from "../utils/cn";
import { Wordmark, Eyebrow, It, JadeButton, Reveal, LIME_AURORA, type Page, type Go } from "./primitives";
import { DonateBlock } from "./widgets";
import { ORG, CONTACT, SOCIALS } from "../data/content";

/* ---------------- brand icons (inline SVG, currentColor) ---------------- */
const FB = () => (
  <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="currentColor" aria-hidden>
    <path d="M13.5 21.9v-7.1h2.4l.4-2.9h-2.8V10c0-.8.3-1.4 1.5-1.4h1.4V6c-.3 0-1.2-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2.2H8.4v2.9h2.3v7.1z" />
  </svg>
);
const IG = () => (
  <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);
const XICON = () => (
  <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
  </svg>
);
const WA = () => (
  <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
    <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" strokeLinejoin="round" />
    <path d="M9.2 8.6c.2-.4.6-.5.8-.5h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.5l-.5.5c-.1.1-.2.3-.1.5.4.8 1.7 2 2.7 2.5.2.1.4 0 .5-.1l.5-.6c.2-.2.3-.2.6-.1l1.5.8c.2.1.3.3.3.5-.1.7-.7 1.3-1.4 1.4-.8.1-1.7-.1-3-.9-1.6-1-2.7-2.6-3.1-3.7-.3-.8-.3-1.4.1-1.8z" fill="currentColor" stroke="none" />
  </svg>
);
const YT = () => (
  <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
    <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
    <path d="M10.2 9.2v5.6l4.9-2.8z" fill="currentColor" stroke="none" />
  </svg>
);
const LI = () => (
  <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="currentColor" aria-hidden>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9z" />
  </svg>
);

/* ---------------- social icon map ---------------- */
const SOCIAL_ICONS: Record<string, ReactNode> = {
  facebook: <FB />,
  instagram: <IG />,
  twitter: <XICON />,
  whatsapp: <WA />,
  youtube: <YT />,
  linkedin: <LI />,
};

/* ---------------- loader ---------------- */
export function Loader({ done }: { done: boolean }) {
  return (
    <div
      aria-hidden={done}
      className={cn(
        "fixed inset-0 z-[120] grid place-items-center transition-opacity duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
        done ? "pointer-events-none opacity-0" : "opacity-100"
      )}
      style={{ background: "linear-gradient(135deg, #007ea7 0%, #00a8e8 100%)" }}
    >
      <div className="flex flex-col items-center gap-6">
        <img
          src="/img/Yagazie-Nav-Logo.png"
          alt="Yagazie Weng Umezurike Foundation for the Deaf"
          width="120"
          height="120"
          className="h-[120px] w-[120px] object-contain"
        />
        <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.22em] text-white/90">
          Loading
          <span className="animate-pulse">...</span>
        </p>
      </div>
    </div>
  );
}

/* ---------------- announcement bar ---------------- */
export function AnnouncementBar({
  open,
  onClose,
  go,
}: {
  open: boolean;
  onClose: () => void;
  go: Go;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-x-0 top-0 z-[55] flex h-12 items-center justify-center bg-linen px-12 text-center shadow-annbar">
      <p className="text-[15px] leading-6 text-forest">
        The National Commission for Persons with Disabilities has endorsed our mission.{" "}
        <button
          onClick={() => go("work", "advocacy")}
          className="font-medium text-forest underline decoration-cteal decoration-1 underline-offset-4 transition-colors hover:text-cteal"
        >
          See the partnership
        </button>
      </p>
      <button
        onClick={onClose}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-[4px] p-1.5 text-forest/70 transition-colors hover:text-forest"
      >
        <X className="h-4 w-4" strokeWidth={1.8} />
      </button>
    </div>
  );
}

/* ---------------- nav data ---------------- */
type DropSpec = { label: string; page: Page; items: { label: string; anchor: string }[] };

const DROPS: DropSpec[] = [
  {
    label: "About Us",
    page: "about",
    items: [
      { label: "Message from the Executive Director", anchor: "message" },
      { label: "Our Story", anchor: "story" },
      { label: "Board of Directors", anchor: "board" },
      { label: "Our Team", anchor: "team" },
    ],
  },
  {
    label: "Our Work",
    page: "work",
    items: [
      { label: "Advocacy", anchor: "advocacy" },
      { label: "Our Impact", anchor: "impact" },
    ],
  },
  {
    label: "Join Us",
    page: "join",
    items: [
      { label: "Volunteer", anchor: "volunteer" },
      { label: "Partner with Us", anchor: "partner" },
    ],
  },
];

const DESKTOP_LINKS: { label: string; page: Page; anchor?: string }[] = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about" },
  { label: "Our Work", page: "work" },
  { label: "Join Us", page: "join" },
  { label: "Contact", page: "home", anchor: "contact" },
];

/* donate nav button routes to page not modal */

/* ---------------- nav ---------------- */
export function Nav({ page, go, barOpen }: { page: Page; go: Go; barOpen: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        style={{ top: barOpen ? 63 : 15 }}
        className="fixed inset-x-0 z-50 px-4 md:px-6"
      >
        <nav
          aria-label="Primary"
          className="relative mx-auto flex h-[74px] max-w-[1060px] items-center justify-between gap-6 rounded-full border border-white/[0.16] bg-[#00243f]/78 px-3 pl-5 shadow-[0_10px_40px_rgba(0,20,40,0.35)] backdrop-blur-2xl backdrop-saturate-150 md:h-[82px] md:pl-7"
        >
          {/* wordmark */}
          <button
            onClick={() => go("home")}
            aria-label="Yagazie Weng Foundation — home"
            className="shrink-0"
          >
            <Wordmark tone="white" />
          </button>

          {/* desktop links — single readable row */}
          <div className="hidden items-center gap-8 lg:flex">
            {DESKTOP_LINKS.map((link) => {
              const active = page === link.page && !link.anchor;
              return (
                <button
                  key={`${link.page}-${link.label}`}
                  onClick={() => go(link.page, link.anchor)}
                  className={cn(
                    "relative py-2 text-[16px] font-semibold leading-none tracking-[-0.1px] transition-colors duration-300",
                    active ? "text-white" : "text-white/85 hover:text-white"
                  )}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute inset-x-0 -bottom-[3px] h-[2px] rounded-full bg-mint"
                      aria-hidden
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => go("donate")}
              className="hidden rounded-full bg-mint px-6 py-3 text-[15px] font-bold leading-none text-forest transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 lg:inline-flex"
            >
              Donate Now
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="rounded-full border border-white/15 p-2.5 text-white/90 transition-colors hover:text-white lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[85] flex flex-col overflow-y-auto bg-forest px-6 py-6 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between">
          <Wordmark tone="white" />
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="rounded-[4px] border border-mint/30 p-2 text-mint"
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>

        <div className="mt-12 flex flex-col">
          <MobileLink label="Home" onClick={() => { go("home"); closeMenu(); }} />
          {DROPS.map((d) => (
            <div key={d.label} className="border-b border-mint/15">
              <button
                onClick={() => setOpenSection(openSection === d.label ? null : d.label)}
                aria-expanded={openSection === d.label}
                className="flex w-full items-center justify-between py-5 text-left text-[30px] font-light leading-none text-paper"
              >
                {d.label}
                <ChevronDown
                  className={cn("h-5 w-5 text-mint transition-transform duration-300", openSection === d.label && "rotate-180")}
                  strokeWidth={1.8}
                  aria-hidden
                />
              </button>
              <div className={cn("grid transition-all duration-400", openSection === d.label ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0")}>
                <div className="overflow-hidden">
                  <button
                    onClick={() => { go(d.page); closeMenu(); }}
                    className="block py-2 pl-4 text-[16px] font-medium text-mint"
                  >
                    Overview
                  </button>
                  {d.items.map((it) => (
                    <button
                      key={it.anchor}
                      onClick={() => { go(d.page, it.anchor); closeMenu(); }}
                      className="block py-2 pl-4 text-left text-[16px] text-paper/75"
                    >
                      {it.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <MobileLink label="Contact" onClick={() => { go(page, "contact"); closeMenu(); }} />
        </div>

        <div className="mt-8 flex gap-3 pb-6">
          <button
            onClick={() => { go("donate"); closeMenu(); }}
            className="t-btn flex-1 rounded-[4px] border border-mint bg-mint px-6 py-3 text-forest"
          >
            Donate Now
          </button>
          <button
            onClick={() => { go("join"); closeMenu(); }}
            className="t-btn flex-1 rounded-[4px] border border-mint px-6 py-3 text-mint"
          >
            Join Us
          </button>
        </div>
      </div>
    </>
  );
}

function MobileLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="border-b border-mint/15 py-5 text-left text-[30px] font-light leading-none text-paper"
    >
      {label}
    </button>
  );
}

/* ---------------- closing CTA + footer ---------------- */
export function ClosingFooter({ go, home = false }: { go: Go; home?: boolean }) {
  return (
    <section className="mx-3 mb-3 overflow-hidden rounded-[24px] bg-oat md:mx-12 md:mb-6">
      {/* aurora CTA */}
      <div className="relative px-6 pb-16 pt-20 text-center md:pt-24">
        <div
          aria-hidden
          className="aurora absolute left-1/2 top-8 aspect-square w-[min(700px,90vw)] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
          style={{ background: LIME_AURORA }}
        />
        <div className="relative">
          <Reveal>
            <Eyebrow tone="teal" center>
              {home ? "Give today" : "Stand with us"}
            </Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={120} className="t-section mt-6 text-forest">
            {home ? (
              <>
                Help us make every child
                <br />
                <It>seen and heard.</It>
              </>
            ) : (
              <>
                Inclusion is not a favour —
                <br />
                it is <It>a right.</It>
              </>
            )}
          </Reveal>
          <Reveal delay={260} className="t-lead mx-auto mt-7 max-w-lg text-forest/75">
            Partner with us to deepen impact, volunteer your expertise, or support our
            initiatives as we make inclusion a lived reality — not just an aspiration.
          </Reveal>

          {home ? (
            <Reveal delay={380}>
              <DonateBlock go={go} />
            </Reveal>
          ) : (
            <Reveal delay={380} className="mt-10 flex flex-wrap justify-center gap-3">
              <JadeButton href="#" onClick={(e) => { e.preventDefault(); go("join", "volunteer"); }} arrow>
                Volunteer with us
              </JadeButton>
              <JadeButton href="#" onClick={(e) => { e.preventDefault(); go("donate"); }}>
                Donate now
              </JadeButton>
            </Reveal>
          )}
        </div>
      </div>

      {/* forest footer panel */}
      <footer id="contact" className="relative rounded-t-[24px] bg-forest px-6 pb-9 pt-14 md:px-12 md:pt-[72px] lg:px-14">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* brand + socials */}
          <Reveal className="lg:col-span-4">
            <Wordmark tone="white" size="lg" />
            <p className="mt-5 max-w-xs text-[15px] leading-[1.6] text-paper/60">{ORG.mission}</p>
            <p className="mt-6 text-[13px] font-medium uppercase tracking-[0.14em] text-seafoam">
              Connect with us
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-paper/15 text-paper/75 transition-colors duration-300 hover:border-mint/50 hover:text-mint"
                >
                  {SOCIAL_ICONS[s.icon]}
                </a>
              ))}
            </div>
          </Reveal>

          {/* navigate */}
          <Reveal delay={90} className="lg:col-span-2">
            <h3 className="text-[13px] font-medium uppercase tracking-[0.12em] text-seafoam">Navigate</h3>
            <ul className="mt-5">
              {(
                [
                  ["Home", "home"],
                  ["About Us", "about"],
                  ["Our Work", "work"],
                  ["Join Us", "join"],
                ] as [string, Page][]
              ).map(([label, p]) => (
                <li key={p}>
                  <button
                    onClick={() => go(p)}
                    className="block py-[7px] text-[14px] leading-[1.2] tracking-[-0.32px] text-paper/85 transition-colors duration-300 hover:text-mint"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => go("donate")}
                  className="block py-[7px] text-[14px] leading-[1.2] tracking-[-0.32px] text-mint transition-colors duration-300 hover:text-paper"
                >
                  Donate Now
                </button>
              </li>
            </ul>
          </Reveal>

          {/* focus areas */}
          <Reveal delay={160} className="lg:col-span-2">
            <h3 className="text-[13px] font-medium uppercase tracking-[0.12em] text-seafoam">Focus areas</h3>
            <ul className="mt-5">
              {[
                ["Advocacy & visibility", "work", "advocacy"],
                ["Deaf education", "about", "story"],
                ["Family support", "about", "story"],
                ["Our impact", "work", "impact"],
              ].map(([label, p, a]) => (
                <li key={label}>
                  <button
                    onClick={() => go(p as Page, a)}
                    className="block py-[7px] text-left text-[14px] leading-[1.2] tracking-[-0.32px] text-paper/85 transition-colors duration-300 hover:text-mint"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* contact */}
          <Reveal delay={230} className="lg:col-span-4">
            <h3 className="text-[13px] font-medium uppercase tracking-[0.12em] text-seafoam">
              Contact information
            </h3>
            <ul className="mt-5 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-mint/25 text-mint">
                  <Mail className="h-[15px] w-[15px]" strokeWidth={1.8} aria-hidden />
                </span>
                <div>
                  <p className="text-[13px] uppercase tracking-[0.08em] text-paper/50">Email</p>
                  <a href={`mailto:${CONTACT.email}`} className="mt-0.5 block text-[15px] text-paper/90 transition-colors hover:text-mint">
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-mint/25 text-mint">
                  <Phone className="h-[15px] w-[15px]" strokeWidth={1.8} aria-hidden />
                </span>
                <div>
                  <p className="text-[13px] uppercase tracking-[0.08em] text-paper/50">Phone & WhatsApp</p>
                  <a href="tel:+2348163691700" className="mt-0.5 block text-[15px] text-paper/90 transition-colors hover:text-mint">
                    {CONTACT.phone}
                  </a>
                  <p className="text-[13px] text-paper/45">{CONTACT.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-mint/25 text-mint">
                  <MapPin className="h-[15px] w-[15px]" strokeWidth={1.8} aria-hidden />
                </span>
                <div>
                  <p className="text-[13px] uppercase tracking-[0.08em] text-paper/50">Office address</p>
                  <p className="mt-0.5 text-[15px] leading-[1.5] text-paper/85">
                    {CONTACT.address.join(", ")}
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col gap-5 border-t border-paper/10 pt-7 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-xl text-[13px] leading-[1.6] text-paper/50">
            © 2026 Yagazie Weng Umezurike Foundation For The Deaf. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-serif italic text-[15px] text-mint/90">{ORG.tagline}</span>
          </div>
        </div>
      </footer>
    </section>
  );
}

export { ArrowRight };
