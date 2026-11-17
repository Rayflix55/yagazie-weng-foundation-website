import { useState } from "react";
import { Megaphone, HeartHandshake, Handshake, Hand, Quote } from "lucide-react";
import { Reveal, Eyebrow, It, type Go } from "../components/primitives";
import { PageHero, SheetHead, GallerySlider, Avatar, BioModal } from "../components/widgets";
import { ED_MESSAGE, ED_QUOTE, TIMELINE, MISSION_CARDS, STORY_QUOTE, BOARD, TEAM, ABOUT_GALLERY, type BoardMember } from "../data/content";

const MISSION_ICONS = { Megaphone, HeartHandshake, Handshake, Hand };

/* ---------------- ED message ---------------- */
function DirectorMessage() {
  return (
    <section id="message" aria-label="Message from the Executive Director" className="mx-3 rounded-[24px] bg-linen md:mx-12">
      <div className="grid gap-12 px-6 py-16 md:px-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow tone="teal">From our desk</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={120} className="t-section mt-5 text-forest">
            Message from the Executive <It>Director.</It>
          </Reveal>
          <Reveal delay={220} className="mt-8 border-l-2 border-mint pl-6">
            <p className="font-serif text-[clamp(20px,2vw,26px)] italic leading-[1.35] text-cteal">
              “{ED_QUOTE}”
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-8 flex items-center gap-4">
            <Avatar
              initials="SU"
              photo="/img/Mr-Umezi-2.JPG"
              name="Sylvester Ekeoma Umezurike"
              compact
              className="rounded-full"
            />
            <div>
              <p className="text-[15px] font-medium text-forest">Sylvester Ekeoma Umezurike</p>
              <p className="text-[14px] font-light text-quiet">Founder & Executive Director</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180} className="rounded-[12px] bg-mist p-7 md:p-11">
          <Quote className="h-7 w-7 text-cteal" strokeWidth={1.5} aria-hidden />
          <div className="mt-6 space-y-5">
            {ED_MESSAGE.map((p, i) => (
              <p key={i} className="text-[16px] leading-[1.7] text-quote/90 md:text-[17px]">
                {p}
              </p>
            ))}
            <p className="pt-2 text-[16px] leading-[1.7] text-quote/90">
              Together, we can unlock the full potential of disability inclusion and build
              a more equitable future for all. Thank you for your interest in YWUF — we
              look forward to meaningful collaboration.
            </p>
            <p className="font-serif italic text-[19px] text-forest">Yours sincerely,</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- origin timeline ---------------- */
function Timeline() {
  return (
    <section id="story" aria-label="Our story" className="bg-forest px-3 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow tone="mint" center>Our story</Eyebrow>
        </Reveal>
        <Reveal as="h2" delay={120} className="t-heading mt-6 text-paper">
          From 795 grams <It>to a foundation.</It>
        </Reveal>
        <Reveal delay={240} className="t-lead mx-auto mt-6 max-w-2xl text-paper/65">
          We, Sylvester and Eunice Umezurike, are the parents and co-founders of this
          Foundation. Our journey began with the birth of our son — and became a mission
          for every deaf child in Nigeria.
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div aria-hidden className="absolute bottom-6 left-[13px] top-2 w-px bg-gradient-to-b from-mint/60 via-mint/25 to-transparent" />
        {TIMELINE.map((t, i) => (
          <Reveal key={t.title} delay={i * 60} className="relative pb-12 pl-12 last:pb-0">
            <span aria-hidden className="absolute left-[7px] top-[7px] grid h-[15px] w-[15px] place-items-center">
              <span className="h-[9px] w-[9px] rounded-full bg-mint" />
              <span className="absolute h-[15px] w-[15px] animate-ping rounded-full border border-mint/40 [animation-duration:2.6s]" />
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <h3 className="t-card text-paper">{t.title}</h3>
              <span className="rounded-full border border-mint/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-mint">
                {t.year}
              </span>
              <span className="rounded-full border border-paper/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-paper/60">
                {t.place}
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-paper/70">{t.body}</p>
          </Reveal>
        ))}
      </div>

      {/* mission cards */}
      <div className="mt-24 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MISSION_CARDS.map((m, i) => {
          const Icon = MISSION_ICONS[m.icon];
          return (
            <Reveal key={m.title} delay={i * 100}>
              <div className="h-full rounded-[8px] bg-pine p-8 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-mint/30">
                  <Icon className="h-5 w-5 text-mint" strokeWidth={1.6} aria-hidden />
                </span>
                <h3 className="mt-6 text-[20px] font-normal leading-[1.25] text-paper">{m.title}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.55] text-paper/65">{m.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* closing quote */}
      <Reveal delay={120} className="mx-auto mt-24 max-w-4xl text-center">
        <p className="font-serif text-[clamp(24px,3.4vw,38px)] italic leading-[1.3] text-paper">
          “{STORY_QUOTE}”
        </p>
        <p className="mt-6 text-[13px] font-medium uppercase tracking-[0.16em] text-seafoam">
          Our founding promise
        </p>
      </Reveal>

      <div className="mt-24">
        <GallerySlider slides={ABOUT_GALLERY} id="gallery" />
      </div>
    </section>
  );
}

/* ---------------- board ---------------- */
function BoardCard({ m, i, onOpen }: { m: BoardMember; i: number; onOpen: (m: BoardMember) => void }) {
  return (
    <Reveal delay={i * 80}>
      <article className="group h-full overflow-hidden rounded-[8px] bg-paper">
        <div className="p-3 pb-0">
          <Avatar
            initials={m.initials}
            photo={m.photo}
            name={m.name}
            className="transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
          />
        </div>
        <div className="p-6">
          <h3 className="text-[18px] font-medium leading-[1.3] tracking-[-0.2px] text-forest">{m.name}</h3>
          <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.12em] text-cteal">{m.role}</p>
          <p className="mt-3 text-[14px] leading-[1.55] text-quiet">{m.short}</p>
          {m.full && (
            <button
              onClick={() => onOpen(m)}
              className="mt-5 rounded-[4px] border border-cteal px-4 py-2 text-[14px] font-medium leading-none text-cteal transition-colors duration-300 hover:bg-cteal hover:text-paper"
            >
              Read full bio
            </button>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function Board() {
  const [selected, setSelected] = useState<BoardMember | null>(null);
  return (
    <section id="board" aria-label="Board of Directors" className="mx-3 rounded-[24px] bg-linen md:mx-12">
      <div className="px-6 py-16 md:px-14 md:py-20">
        <SheetHead
          eyebrow="Governance"
          title={<>Board of <It>Trustees.</It></>}
          lead="A multidisciplinary Board of Trustees guides our strategy — law, medicine, special education, construction and enterprise — with lived experience at the helm."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {BOARD.map((m, i) => (
            <BoardCard key={m.name} m={m} i={i} onOpen={setSelected} />
          ))}
        </div>
      </div>
      <BioModal member={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

/* ---------------- team ---------------- */
function Team({ go }: { go: Go }) {
  return (
    <section id="team" aria-label="Our team" className="bg-forest px-3 py-20 md:px-12 md:py-28">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <Reveal>
            <Eyebrow tone="mint">The people behind the pixels & the paperwork</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={120} className="t-section mt-5 text-paper">
            Our dedicated <It>team.</It>
          </Reveal>
        </div>
        <Reveal delay={220} className="max-w-sm text-[16px] leading-[1.5] text-paper/60">
          Small team, enormous commitment — every skill volunteered moves a deaf child
          closer to visibility.
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {TEAM.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <article className="flex h-full flex-col items-start gap-6 rounded-[8px] bg-pine p-8 sm:flex-row sm:items-center">
              <Avatar initials={t.initials} photo={t.photo} name={t.name} compact className="h-20 w-20 rounded-full" />
              <div>
                <h3 className="t-card text-paper">{t.name}</h3>
                <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.12em] text-mint">{t.role}</p>
                <p className="mt-3 max-w-md text-[14px] leading-[1.55] text-paper/65">{t.short}</p>
              </div>
            </article>
          </Reveal>
        ))}
        <Reveal delay={160}>
          <div className="flex h-full flex-col justify-center rounded-[8px] border border-dashed border-mint/30 p-8 text-left">
            <p className="t-card text-paper">Your name here?</p>
            <p className="mt-2 max-w-md text-[14px] leading-[1.55] text-paper/60">
              We are always looking for interpreters, educators, health workers, designers
              and organisers. Bring your craft — we will put it to work for inclusion.
            </p>
            <button
              onClick={() => go("join", "volunteer")}
              className="mt-6 self-start rounded-[4px] border border-mint px-5 py-2.5 text-[14px] font-medium leading-none text-mint transition-colors duration-300 hover:bg-mint hover:text-forest"
            >
              Volunteer with us
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function About({ go, animateOnLoad }: { go: Go; animateOnLoad: boolean }) {
  return (
    <>
      <section aria-label="About us" className="bg-forest p-3 pb-0">
        <PageHero
          animateOnLoad={animateOnLoad}
          img="/img/pic-4.jpeg"
          alt="A father and his young daughter practicing a sign together at a sunlit window"
          objectPosition="center 28%"
          fullImage
          eyebrow="About YWUF — founded by parents, for every family"
          title={<>A son's journey became a nation's <It>mission.</It></>}
          lead="The Yagazie Weng Umezurike Foundation for the Deaf was conceived from lived experience — navigating deafness, extreme prematurity and disability across healthcare systems and cultures — so that other families would never have to walk it alone."
        />
      </section>
      <div className="flex flex-col gap-4 pt-4 md:gap-6 md:pt-6">
        <DirectorMessage />
        <Timeline />
        <Board />
        <Team go={go} />
      </div>
    </>
  );
}
