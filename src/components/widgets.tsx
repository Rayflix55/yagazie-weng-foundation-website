import { useEffect, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "../utils/cn";
import { Eyebrow, It, Reveal, useInView, CORNER_FADE, JadeButton } from "./primitives";
// data imports for components that need them are imported locally

/* colour palette for initials avatars — unique per member */
const AVATAR_PALETTES = [
  { from: "rgb(0,52,89)",   to: "rgb(0,126,167)",  dot: "#00a8e8" },
  { from: "rgb(13,52,110)", to: "rgb(41,98,255)",  dot: "#8bd9ff" },
  { from: "rgb(50,20,80)",  to: "rgb(100,40,140)", dot: "#c084fc" },
  { from: "rgb(100,30,10)", to: "rgb(160,50,20)",  dot: "#fb923c" },
  { from: "rgb(3,64,120)",  to: "rgb(0,168,232)",  dot: "#a5e8ff" },
  { from: "rgb(80,20,60)",  to: "rgb(140,40,100)", dot: "#f9a8d4" },
  { from: "rgb(10,50,80)",  to: "rgb(20,100,140)", dot: "#93c5fd" },
  { from: "rgb(60,40,10)",  to: "rgb(120,80,20)",  dot: "#fcd34d" },
];

function avatarPalette(initials: string) {
  const idx = (initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % AVATAR_PALETTES.length;
  return AVATAR_PALETTES[idx];
}

/* ---------------- avatar — rich monogram tile, real photo when supplied ---------------- */
export function Avatar({
  initials,
  photo,
  name,
  className,
  compact = false,
}: {
  initials: string;
  photo?: string;
  name?: string;
  className?: string;
  compact?: boolean;
}) {
  const [imgErr, setImgErr] = useState(false);
  const showPhoto = photo && !imgErr;
  const p = avatarPalette(initials);

  if (showPhoto) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[8px]",
          compact ? "h-14 w-14" : "aspect-square w-full",
          className
        )}
      >
        <img
          src={photo}
          alt={name ?? initials}
          onError={() => setImgErr(true)}
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-[8px]",
        compact ? "h-14 w-14" : "aspect-square w-full",
        className
      )}
      style={{ background: `radial-gradient(130% 130% at 20% 10%, ${p.to}, ${p.from} 70%)` }}
      aria-label={name ?? initials}
      role="img"
    >
      {/* decorative geometric shapes */}
      {!compact && (
        <>
          <div
            aria-hidden
            className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20"
            style={{ background: p.dot }}
          />
          <div
            aria-hidden
            className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full opacity-15"
            style={{ background: p.dot }}
          />
          <svg className="absolute inset-0 h-full w-full opacity-25" aria-hidden>
            <circle cx="85%" cy="88%" r="16%" fill="none" stroke={p.dot} strokeWidth="1" strokeDasharray="3 6" />
            <circle cx="15%" cy="12%" r="10%" fill="none" stroke={p.dot} strokeWidth="1" strokeDasharray="2 4" />
          </svg>
        </>
      )}
      {/* initials */}
      <span
        aria-hidden
        className={cn(
          "relative z-10 font-serif italic leading-none",
          compact ? "text-[22px]" : "text-[clamp(42px,5vw,68px)]"
        )}
        style={{ color: p.dot }}
      >
        {initials}
      </span>
      {/* subtle name label at bottom for non-compact */}
      {!compact && (
        <span
          aria-hidden
          className="absolute bottom-0 left-0 right-0 py-2 text-center text-[10px] font-medium uppercase tracking-[0.18em] opacity-50"
          style={{ color: p.dot, background: `${p.from}99` }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}

/* ---------------- outcome ring stats ---------------- */
export type Stat = { value: number; num: string; caption: ReactNode; small?: boolean };

function Ring({ stat, id }: { stat: Stat; id: string }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.4);
  const R = 76;
  const C = 2 * Math.PI * R;
  return (
    <div ref={ref} className="relative h-[172px] w-[172px]" role="img" aria-label={stat.num}>
      <svg width="172" height="172" viewBox="0 0 172 172" className="h-full w-full">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#007ea7" />
            <stop offset="100%" stopColor="#00a8e8" />
          </linearGradient>
        </defs>
        <circle cx="86" cy="86" r={R} fill="none" stroke="#e5ded4" strokeWidth="11" />
        <circle
          cx="86"
          cy="86"
          r={R}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth="11"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={inView ? C * (1 - stat.value / 100) : C}
          transform="rotate(-90 86 86)"
          className="ring-arc"
        />
      </svg>
      <span
        className={cn(
          "absolute inset-0 grid place-items-center px-3 text-center font-light leading-none tracking-[-0.01em] text-forest",
          stat.small ? "text-[34px]" : "text-[54px]"
        )}
      >
        {stat.num}
      </span>
    </div>
  );
}

export function RingStats({ stats, idPrefix }: { stats: Stat[]; idPrefix: string }) {
  return (
    <div className="mt-14 grid grid-cols-1 divide-y divide-[rgba(34,34,34,0.1)] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
      {stats.map((s, i) => (
        <Reveal
          key={s.num}
          delay={i * 120}
          className="flex flex-col items-center gap-7 px-4 py-10 text-center lg:py-2"
        >
          <Ring stat={s} id={`${idPrefix}-ring-${i}`} />
          <p className="max-w-[240px] text-[16px] font-light leading-[1.5] text-forest/75">
            {s.caption}
          </p>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- gallery slider ---------------- */
export type Slide = { img: string; alt: string; caption: string };

export function GallerySlider({ slides, id }: { slides: Slide[]; id: string }) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((p) => (p + d + slides.length) % slides.length);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = window.setInterval(() => go(1), 6000);
    return () => window.clearInterval(t);
  }, [i]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id={id}>
      <div className="relative h-[420px] overflow-hidden rounded-[8px] md:h-[560px]">
        {slides.map((s, idx) => (
          <div
            key={s.img + idx}
            aria-hidden={idx !== i}
            className={cn(
              "absolute inset-0 bg-forest transition-opacity duration-1000 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
              idx === i ? "opacity-100" : "opacity-0"
            )}
          >
            <img
              src={s.img}
              alt={s.alt}
              loading="lazy"
              className="warm-img h-full w-full object-contain"
            />
            <div aria-hidden className="absolute inset-0" style={{ background: CORNER_FADE }} />
            <p className="absolute bottom-6 left-6 max-w-md text-[15px] leading-[1.5] text-paper/90">
              <span className="mr-2 inline-block h-[8px] w-[8px] rounded-full bg-mint align-middle" aria-hidden />
              {s.caption}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-[8px] rounded-full transition-all duration-400",
                idx === i ? "w-7 bg-mint" : "w-[8px] bg-paper/25 hover:bg-paper/50"
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="grid h-11 w-11 place-items-center rounded-full border border-mint/40 text-mint transition-colors duration-300 hover:bg-mint hover:text-forest"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next photo"
            className="grid h-11 w-11 place-items-center rounded-full border border-mint/40 text-mint transition-colors duration-300 hover:bg-mint hover:text-forest"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- bio modal ---------------- */
export function BioModal({
  member,
  onClose,
}: {
  member: { name: string; role: string; initials: string; full?: string[]; photo?: string; bioPhoto?: string } | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!member) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [member, onClose]);

  if (!member) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name} — full biography`}
      className="fixed inset-0 z-[90] grid place-items-center bg-forest/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[86vh] w-full max-w-2xl overflow-y-auto rounded-[12px] bg-mist p-7 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close biography"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-forest hover:text-paper"
        >
          <X className="h-4 w-4" strokeWidth={2} />
        </button>
        <div className="flex items-center gap-5">
          <Avatar initials={member.initials} photo={member.bioPhoto ?? member.photo} name={member.name} compact className="h-16 w-16 rounded-full" />
          <div>
            <h3 className="t-card text-forest">{member.name}</h3>
            <p className="mt-1 text-[14px] font-medium uppercase tracking-[0.1em] text-cteal">
              {member.role}
            </p>
          </div>
        </div>
        <div className="mt-7 space-y-5">
          {member.full?.map((p, i) => (
            <p key={i} className="text-[16px] leading-[1.65] text-quote/90">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- partner marquee ---------------- */
export function PartnerMarquee({ marks }: { marks: { t: string; c: string }[] }) {
  return (
    <div className="marquee relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex" aria-hidden={copy === 1}>
            {marks.map((l, i) => (
              <div key={`${copy}-${i}`} className="flex h-20 items-center border-l border-mint/15 px-10">
                <span className={cn("whitespace-nowrap text-[21px] text-paper/85", l.c)}>{l.t}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- compact page hero (subpages) ---------------- */
export function PageHero({
  img,
  alt,
  eyebrow,
  title,
  lead,
  objectPosition = "center",
  objectFit = "cover",
  fullImage = false,
}: {
  img: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  fullImage?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[12px] ${fullImage ? "aspect-[4/2] min-h-[80vh]" : "min-h-[62vh]"}`}>
      <img
        src={img}
        alt={alt}
        className={`warm-img absolute inset-0 h-full w-full ${objectFit === "contain" ? "object-contain" : "object-cover"}`}
        style={{ objectPosition }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(72deg, rgba(1,25,20,0.8) 8%, rgba(1,25,20,0.25) 55%, transparent 78%), radial-gradient(120% 90% at 0% 100%, rgba(1,25,20,0.6), transparent 55%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 p-6 pb-9 md:p-[52px]">
        <Reveal>
          <Eyebrow tone="mint" className="mb-5">
            {eyebrow}
          </Eyebrow>
        </Reveal>
        <Reveal as="h1" delay={140} className="t-heading max-w-[16ch] text-paper">
          {title}
        </Reveal>
        {lead && (
          <Reveal delay={300} className="t-lead mt-6 max-w-xl text-paper/85">
            {lead}
          </Reveal>
        )}
      </div>
    </div>
  );
}

/* ---------------- (donate page lives at pages/Donate.tsx) ---------------- */

/* ---------------- donate block — navigates to full page ---------------- */
export function DonateBlock({ go }: { go: import("./primitives").Go }) {
  return (
    <div id="donate" className="mx-auto mt-14 max-w-xl text-center">
      <p className="t-lead text-forest/70">
        Your donation funds hearing aids, sign language education, advocacy and
        economic inclusion for the Deaf community in Nigeria.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <JadeButton
          href="#"
          onClick={(e) => { e.preventDefault(); go("donate"); }}
          arrow
          className="bg-forest border-forest text-mint hover:bg-forest/90 hover:border-forest/90"
        >
          Donate now
        </JadeButton>
      </div>
      <p className="mt-5 text-[13px] leading-[1.5] text-forest/55">
        Direct bank transfer · 100% of funds go to local projects
      </p>
    </div>
  );
}

/* ---------------- section shell helpers ---------------- */
export function Sheet({
  children,
  tone = "linen",
  className,
}: {
  children: ReactNode;
  tone?: "linen" | "oat" | "mist";
  className?: string;
}) {
  return (
    <section
      className={cn(
        "mx-3 rounded-[24px] md:mx-12",
        tone === "linen" && "bg-linen",
        tone === "oat" && "bg-oat",
        tone === "mist" && "bg-mist",
        className
      )}
    >
      <div className="px-6 py-16 md:px-14 md:py-20">{children}</div>
    </section>
  );
}

export function SheetHead({
  eyebrow,
  title,
  lead,
  center = false,
  tone = "teal",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
  tone?: "teal" | "mint";
}) {
  const darkText = tone === "teal";
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <Reveal>
        <Eyebrow tone={tone} center={center}>
          {eyebrow}
        </Eyebrow>
      </Reveal>
      <Reveal as="h2" delay={120} className={cn("t-section mt-5", darkText ? "text-forest" : "text-paper")}>
        {title}
      </Reveal>
      {lead && (
        <Reveal delay={240} className={cn("t-lead mt-6 max-w-xl", center && "mx-auto", darkText ? "text-forest/70" : "text-paper/70")}>
          {lead}
        </Reveal>
      )}
    </div>
  );
}

export { It };
