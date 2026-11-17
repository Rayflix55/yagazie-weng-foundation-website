import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Sparkles, Hand, AudioLines } from "lucide-react";
import { cn } from "../utils/cn";
import {
  Reveal,
  Eyebrow,
  It,
  MintButton,
  MintOutlineButton,
  CORNER_FADE,
  STORIES_RADIAL,
  LAGOON_FADE,
  type Go,
} from "../components/primitives";
import { RingStats, PartnerMarquee, Avatar } from "../components/widgets";
import {
  MISSION_DOORS,
  NEW_SERVICES,
  BENTO_TILES,
  HOME_RINGS,
  AUDIENCE_ROWS,
  PARTNER_MARKS,
  STORIES,
} from "../data/content";

/* ============ bento tile graphics ============ */
function ChipStack() {
  const chips = ["NSL", "ASL", "Interpreting", "Deaf culture"];
  return (
    <div className="flex flex-col items-start gap-2" aria-hidden>
      {chips.map((c, i) => (
        <span key={c} style={{ marginLeft: `${i * 14}px` }} className="rounded-full border border-mint/40 px-4 py-1.5 text-[12px] font-medium tracking-[0.08em] text-mint">
          {c}
        </span>
      ))}
    </div>
  );
}

function WireGlobe() {
  return (
    <div className="relative h-[120px]" aria-hidden>
      <svg viewBox="0 0 140 120" fill="none" className="h-full">
        <circle cx="60" cy="60" r="46" stroke="#b6ecff" strokeOpacity="0.7" strokeDasharray="3 5" />
        <ellipse cx="60" cy="60" rx="46" ry="18" stroke="#b6ecff" strokeOpacity="0.5" strokeDasharray="3 5" />
        <ellipse cx="60" cy="60" rx="20" ry="46" stroke="#b6ecff" strokeOpacity="0.5" strokeDasharray="3 5" />
        <circle cx="96" cy="34" r="3" fill="#00a8e8" />
        <circle cx="30" cy="78" r="3" fill="#00a8e8" />
      </svg>
      <span className="absolute left-[88px] top-2 rounded-full border border-paper/25 bg-paper/10 px-2.5 py-1 text-[10px] tracking-wide text-paper">Abuja</span>
      <span className="absolute left-0 top-[70px] rounded-full border border-paper/25 bg-paper/10 px-2.5 py-1 text-[10px] tracking-wide text-paper">Lagos</span>
    </div>
  );
}

function Bubbles() {
  return (
    <div className="flex items-end gap-3" aria-hidden>
      <span className="grid h-14 w-14 place-items-center rounded-[10px] rounded-bl-[2px] border border-forest/25 text-forest">
        <Hand className="h-6 w-6" strokeWidth={1.5} />
      </span>
      <span className="grid h-14 w-14 place-items-center rounded-[10px] rounded-br-[2px] bg-forest/90 text-mint">
        <AudioLines className="h-6 w-6" strokeWidth={1.5} />
      </span>
    </div>
  );
}

function DashedDevice() {
  return (
    <svg viewBox="0 0 150 110" fill="none" className="h-[110px]" aria-hidden>
      <rect x="6" y="14" width="100" height="66" rx="6" stroke="#00a8e8" strokeOpacity="0.65" strokeDasharray="4 5" />
      <rect x="112" y="34" width="32" height="54" rx="5" stroke="#00a8e8" strokeOpacity="0.45" strokeDasharray="4 5" />
      <circle cx="56" cy="47" r="12" stroke="#9fdff6" strokeOpacity="0.7" strokeDasharray="3 4" />
      <path d="M30 96h52" stroke="#9fdff6" strokeOpacity="0.5" strokeDasharray="4 5" />
      <circle cx="56" cy="47" r="2.5" fill="#00a8e8" />
    </svg>
  );
}

function TileGraphic({ kind }: { kind: string }) {
  if (kind === "forest-chips") return <ChipStack />;
  if (kind === "radial-globe") return <WireGlobe />;
  if (kind === "lagoon") return <Bubbles />;
  if (kind === "pine-device") return <DashedDevice />;
  if (kind === "forest-tags")
    return (
      <div className="flex flex-wrap items-center gap-2" aria-hidden>
        {["NCPWD", "FCT UBEB", "Special needs depts"].map((t) => (
          <span key={t} className="rounded-[4px] border border-mint/30 px-3 py-1.5 text-[12px] text-mint/90">
            {t}
          </span>
        ))}
      </div>
    );
  return (
    <div className="flex items-center gap-2" aria-hidden>
      <span className="grid h-14 w-14 place-items-center rounded-full border border-mint/30">
        <Sparkles className="h-6 w-6 text-mint" strokeWidth={1.5} />
      </span>
      <span className="h-[7px] w-[7px] rounded-full bg-mint" />
      <span className="h-[7px] w-[7px] rounded-full bg-seafoam/60" />
      <span className="h-[7px] w-[7px] rounded-full bg-seafoam/30" />
    </div>
  );
}

const TILE_HOVER =
  "h-full transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5";

function tileSurface(kind: string) {
  if (kind === "radial-globe") return { background: STORIES_RADIAL };
  if (kind === "lagoon") return { background: LAGOON_FADE };
  if (kind === "pine-device") return { background: "#0b5f83" };
  return { background: "#003459" };
}

/* ============ hero ============ */
function Hero({ go, animateOnLoad }: { go: Go; animateOnLoad: boolean }) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (imgRef.current) imgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.16}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" aria-label="Welcome" className="bg-forest p-3">
      <div className="relative min-h-[92svh] overflow-hidden rounded-[12px] md:min-h-[700px] xl:min-h-[96svh]">
        <div ref={imgRef} className="absolute -inset-y-[10%] inset-x-0 will-change-transform">
          <img
            src="/img/yaga-4.jpg"
            alt="Deaf children and community members gathered together at an inclusive event"
            fetchPriority="high"
            className="warm-img h-full w-full scale-[1.05] object-cover"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(1,25,20,0.28), transparent 30%), linear-gradient(72deg, rgba(1,25,20,0.74) 8%, rgba(1,25,20,0.2) 48%, transparent 70%), radial-gradient(120% 90% at 0% 100%, rgba(1,25,20,0.62), transparent 55%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 p-6 pb-10 md:p-[56px] md:pb-[64px]">
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]">
            <div className="max-w-3xl pr-0 md:pr-40 lg:pr-0">
              <Reveal delay={80} animateOnLoad={animateOnLoad}>
                <Eyebrow tone="mint" className="mb-6">Deaf-focused NGO · Abuja · Nigeria</Eyebrow>
              </Reveal>
              <Reveal as="h1" delay={180} animateOnLoad={animateOnLoad} className="text-[clamp(30px,4vw,56px)] font-light leading-[0.98] tracking-[-0.045em] text-paper">
                Yagazie Weng Umezurike Foundation for the Deaf
              </Reveal>
              <Reveal delay={280} animateOnLoad={animateOnLoad} className="mt-5 max-w-xl font-serif text-[clamp(21px,2.4vw,32px)] italic leading-[1.2] text-mint">
                A Voice for Every Sign, Hope for Every Hand.
              </Reveal>
              <Reveal delay={380} animateOnLoad={animateOnLoad} className="t-subtitle mt-5 max-w-xl text-paper/85">
                We are a deaf-focused NGO committed to disability inclusion,
                accessibility, and sign language advocacy for the Deaf and hard of
                hearing community in Nigeria.
              </Reveal>
              <Reveal delay={480} animateOnLoad={animateOnLoad} className="mt-8 flex flex-wrap gap-4">
                <MintButton href="#our-work-section" onClick={(e) => { e.preventDefault(); go("home", "our-work-section"); }} arrow>
                  Our Mission
                </MintButton>
                <MintOutlineButton href="#donate" onClick={(e) => { e.preventDefault(); go("home", "donate"); }}>
                  Support Our Cause
                </MintOutlineButton>
              </Reveal>
            </div>
            <Reveal delay={320} animateOnLoad={animateOnLoad} className="absolute right-5 top-[14%] w-20 md:right-8 md:top-[18%] md:w-32 lg:right-[5%] lg:top-[16%] lg:w-[24%] lg:max-w-[300px]">
              <img
                src="/img/Yagazie-Logo.png"
                alt="Yagazie Weng Umezurike Foundation for the Deaf"
                fetchPriority="high"
                className="h-auto w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
              />
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="flex h-9 w-9 animate-bounce items-center justify-center rounded-full border border-mint/40 [animation-duration:2.4s]">
            <ChevronDown className="h-4 w-4 text-mint" strokeWidth={1.8} aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ photo cards ============ */
function PhotoCard({
  item,
  i,
  badge,
  tall,
  onClick,
}: {
  item: { img: string; alt: string; title: string; caption: string; dot?: string };
  i: number;
  badge?: boolean;
  tall?: boolean;
  onClick?: () => void;
}) {
  return (
    <Reveal delay={i * 110} className="group">
      <button
        onClick={onClick}
        className={cn(
          "relative block w-full overflow-hidden rounded-[8px] text-left",
          tall ? "h-[420px] md:h-[520px]" : "h-[360px] md:h-[400px]"
        )}
      >
        <img
          src={item.img}
          alt={item.alt}
          loading="lazy"
          className="warm-img absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div aria-hidden className="absolute inset-0" style={{ background: CORNER_FADE }} />
        {badge ? (
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-[4px] bg-pine px-3 py-2">
            <span className="h-[6px] w-[6px] rounded-full bg-mint" aria-hidden />
            <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-mint">New</span>
          </div>
        ) : (
          <div className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-paper/40 bg-paper/10 backdrop-blur-sm">
            <span className="h-[10px] w-[10px] rounded-full" style={{ background: item.dot }} aria-hidden />
          </div>
        )}
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="t-card text-paper">{item.title}</h3>
          <p className="mt-2 max-w-[270px] text-[14px] leading-[1.45] text-paper/75">{item.caption}</p>
        </div>
      </button>
    </Reveal>
  );
}

/* ============ audiences rows ============ */
function AudienceRows({ go }: { go: Go }) {
  const [active, setActive] = useState(0);
  return (
    <div className="mt-10">
      {AUDIENCE_ROWS.map((r, i) => {
        const isActive = active === i;
        return (
          <button
            key={r.label}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => go(r.page, r.anchor)}
            className="group relative flex w-full items-center justify-between gap-6 border-b border-mint/15 py-5 text-left"
          >
            <span className={cn("text-[21px] font-light leading-[1.2] tracking-[-0.01em] transition-colors duration-300 md:text-[24px]", isActive ? "text-mint" : "text-paper/85")}>
              {r.label}
            </span>
            <ArrowRight className={cn("h-5 w-5 shrink-0 transition-all duration-300", isActive ? "translate-x-1 text-mint" : "text-paper/40")} strokeWidth={1.6} aria-hidden />
            <span aria-hidden className={cn("absolute -bottom-px left-0 h-px w-full origin-left bg-mint transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]", isActive ? "scale-x-100" : "scale-x-0")} />
          </button>
        );
      })}
    </div>
  );
}

/* ============ page ============ */
export default function Home({ go, animateOnLoad }: { go: Go; animateOnLoad: boolean }) {
  return (
    <>
      <Hero go={go} animateOnLoad={animateOnLoad} />

      {/* mission statement + doors */}
      <section id="our-work-section" aria-label="Our mission" className="bg-forest px-3 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow tone="mint" center>Our reason for being</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={120} className="t-heading mt-6 text-paper">
            No child hidden behind closed doors. No gesture ignored. Every deaf child{" "}
            <It>thriving.</It>
          </Reveal>
          <Reveal delay={260} className="t-lead mx-auto mt-7 max-w-2xl text-paper/65">
            Born from one family's journey across four countries and countless hospital
            corridors, YWUF fights for the visibility, education and dignity of deaf
            children in Nigeria — with their families beside them.
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MISSION_DOORS.map((d, i) => (
            <PhotoCard key={d.title} item={d} i={i} tall onClick={() => go("about", "story")} />
          ))}
        </div>

        {/* new initiatives */}
        <div className="mt-24 flex items-end justify-between md:mt-28">
          <Reveal>
            <Eyebrow tone="mint">This season</Eyebrow>
            <h3 className="t-section mt-4 text-paper">
              New ways <It>in.</It>
            </h3>
          </Reveal>
          <Reveal delay={150} className="hidden md:block">
            <button
              onClick={() => go("work")}
              className="group inline-flex items-center gap-1.5 text-[16px] font-medium text-mint underline-offset-4 hover:underline"
            >
              See our work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} aria-hidden />
            </button>
          </Reveal>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {NEW_SERVICES.map((s, i) => (
            <PhotoCard key={s.title} item={s} i={i} badge onClick={() => go("about", "story")} />
          ))}
        </div>
      </section>

      {/* bento — what we do */}
      <section aria-label="What we do" className="mx-3 rounded-[12px] bg-linen md:mx-12">
        <div className="px-6 py-16 md:px-12 md:py-20 lg:px-16">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow tone="teal">What we do</Eyebrow>
              </Reveal>
              <Reveal as="h2" delay={120} className="t-section mt-5 text-forest">
                One foundation. <It>Every barrier</It> addressed.
              </Reveal>
            </div>
            <Reveal delay={220} className="t-lead max-w-md text-forest/70">
              Advocacy, family support, education and medical guidance — designed as one
              joined-up journey, not a maze of referrals.
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {BENTO_TILES.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 90}>
                <div className={cn("flex min-h-[300px] flex-col justify-between rounded-[8px] p-8", TILE_HOVER)} style={tileSurface(t.kind)}>
                  <TileGraphic kind={t.kind} />
                  <div>
                    <h3 className={cn("t-card", t.kind === "lagoon" ? "text-forest" : "text-paper")}>{t.title}</h3>
                    <p className={cn("mt-2 text-[14px] leading-[1.5]", t.kind === "lagoon" ? "text-forest/70" : t.kind === "radial-globe" ? "text-paper/75" : "text-paper/65")}>
                      {t.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* full-bleed story quote + rings */}
      <section aria-label="Impact">
        <div className="relative mx-3 h-[64vh] min-h-[460px] overflow-hidden rounded-[8px] md:mx-12">
          <img src="/img/yaga-7.jpg" alt="Barr. Nehemiah Danjuma at his Call to Bar celebration" loading="lazy" className="warm-img absolute inset-0 h-full w-full object-cover" />
          <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(65deg, rgba(1,25,20,0.8) 5%, rgba(1,25,20,0.25) 55%, transparent 80%), linear-gradient(180deg, transparent 55%, rgba(1,25,20,0.55))" }} />
          <div className="absolute inset-x-0 bottom-0 p-7 md:p-14">
            <Reveal>
              <Eyebrow tone="mint" className="mb-5">A moment we will never forget</Eyebrow>
            </Reveal>
            <Reveal as="blockquote" delay={140}>
              <p className="max-w-2xl text-[clamp(20px,2.6vw,30px)] font-light leading-[1.3] tracking-[-0.48px] text-paper">
                "When Barr. Nehemiah Danjuma was called to the Bar, the room rose — hands
                high, waving. The first Deaf lawyer from Northern Nigeria, celebrated in
                sign applause."
              </p>
              <footer className="mt-5 text-[14px] leading-5 text-paper/70">
                Barr. Nehemiah Danjuma — a milestone we are proud to stand behind
              </footer>
            </Reveal>
          </div>
        </div>

        <div className="relative z-10 mx-3 -mt-14 rounded-[24px] bg-linen md:mx-12 md:-mt-20">
          <div className="px-6 py-16 md:px-14 md:py-20">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Reveal>
                  <Eyebrow tone="teal">Where love became logistics</Eyebrow>
                </Reveal>
                <Reveal as="h2" delay={120} className="t-section mt-5 text-forest">
                  A mission you can <It>measure.</It>
                </Reveal>
              </div>
              <Reveal delay={220} className="max-w-sm text-[16px] leading-[1.5] text-forest/65">
                Numbers that started with one boy, 795 grams of determination — and grew
                into a national movement.
              </Reveal>
            </div>
            <RingStats stats={HOME_RINGS} idPrefix="home" />
          </div>
        </div>
      </section>

      {/* audiences + partners */}
      <section aria-label="Who we work with" className="bg-forest px-3 py-24 md:px-12 md:py-[120px]">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow tone="mint">Whoever you are</Eyebrow>
            </Reveal>
            <Reveal as="h2" delay={120} className="t-heading mt-6 max-w-xl text-paper">
              There is a way in — <It>your way in.</It>
            </Reveal>
            <Reveal delay={240} className="t-lead mt-7 max-w-md text-paper/65">
              Whether you're raising a deaf child, running a school, shaping policy or
              leading a company — the door is open, and someone here has stood exactly
              where you stand.
            </Reveal>
            <Reveal delay={340}>
              <AudienceRows go={go} />
            </Reveal>
          </div>

          <Reveal delay={200} className="relative min-h-[540px] overflow-hidden rounded-[8px] bg-[#00243f] lg:min-h-full">
            <img src="/img/yaga-3.jpg" alt="International Women's Day 2026 with the Abuja Association of the Deaf" loading="lazy" className="warm-img absolute inset-0 h-full w-full object-contain" />
            <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(120% 90% at 0% 100%, rgba(37,31,25,0.7), transparent 55%)" }} />
            <div className="absolute bottom-6 left-6 flex max-w-[290px] items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-paper/40 bg-paper/10 backdrop-blur-sm">
                <span className="h-[8px] w-[8px] rounded-full bg-mint" aria-hidden />
              </span>
              <p className="text-[13px] leading-[1.45] text-paper/80">
                Deaf women lead — with the Abuja Association of the Deaf.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 md:mt-28">
          <Reveal>
            <Eyebrow tone="mint" center>Alongside us</Eyebrow>
          </Reveal>
          <PartnerMarquee marks={PARTNER_MARKS} />
        </div>
      </section>

      {/* stories teaser */}
      <section aria-label="Success stories" className="mx-3 overflow-hidden rounded-[24px] md:mx-12" style={{ background: STORIES_RADIAL }}>
        <div className="px-6 py-20 md:px-14 md:py-24">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Reveal>
                <Eyebrow tone="mint">Proof in people</Eyebrow>
              </Reveal>
              <Reveal as="h2" delay={120} className="t-heading mt-6 text-paper">
                In their own <It>words.</It>
              </Reveal>
            </div>
            <Reveal delay={300}>
              <button onClick={() => go("work", "impact")} className="group inline-flex items-center gap-1.5 text-[16px] font-medium text-mint underline-offset-4 hover:underline">
                More stories of what access unlocks
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} aria-hidden />
              </button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {STORIES.slice(1).map((s, i) => (
              <Reveal key={s.name} delay={i * 120}>
                <article className="flex h-full flex-col rounded-[8px] bg-mist p-8 md:p-10">
                  <div className="flex items-center gap-4">
                    <Avatar initials={s.initials} compact className="rounded-full" />
                    <div>
                      <p className="text-[15px] font-medium text-forest">{s.name}</p>
                      <p className="text-[14px] font-light text-quiet">{s.byline}</p>
                    </div>
                  </div>
                  <blockquote className="mt-6 text-[19px] leading-[1.5] tracking-[-0.3px] text-quote md:text-[21px]">
                    {s.quote}
                  </blockquote>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
