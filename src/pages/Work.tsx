import { Reveal, Eyebrow, It, CORNER_FADE, type Go } from "../components/primitives";
import { PageHero, GallerySlider, RingStats, Avatar } from "../components/widgets";
import { ADVOCACY_CARDS, WORK_GALLERY, WORK_STATS, STORIES } from "../data/content";

/* ---------------- advocacy cards ---------------- */
function AdvocacyCard({ c, i }: { c: (typeof ADVOCACY_CARDS)[number]; i: number }) {
  const flip = i % 2 === 1;
  return (
    <Reveal delay={i * 60}>
      <article className="grid overflow-hidden rounded-[8px] bg-pine/60 md:grid-cols-2">
        <div className={`relative min-h-[280px] overflow-hidden bg-forest md:min-h-[400px] ${flip ? "md:order-2" : ""}`}>
          <img
            src={c.img}
            alt={c.alt}
            loading="lazy"
            className="warm-img absolute inset-0 h-full w-full object-contain"
          />
          <div aria-hidden className="absolute inset-0" style={{ background: CORNER_FADE }} />
        </div>
        <div className={`flex flex-col justify-center p-8 md:p-12 ${flip ? "md:order-1" : ""}`}>
          <h3 className="t-card text-paper md:text-[28px]">{c.title}</h3>
          <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-paper/70">{c.body}</p>
          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            {c.stats.map(([num, label]) => (
              <div key={label} className="rounded-[4px] border border-mint/25 px-4 py-3.5">
                <dt className="order-2 mt-1 text-[12px] uppercase tracking-[0.08em] text-paper/55">{label}</dt>
                <dd className="text-[17px] font-medium leading-[1.25] text-mint">{num}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
    </Reveal>
  );
}

export default function Work({ go }: { go: Go }) {
  return (
    <>
      <section aria-label="Our work" className="bg-forest p-3 pb-0">
        <PageHero
          img="/img/ad.webp"
          alt="Disability rights advocates holding signs at a public rally"
          objectFit="contain"
          fullImage
          eyebrow="Our Work"
          title="Advocacy"
          lead="Championing advocacy, empowerment, education, and inclusive opportunities for Deaf persons and the wider disability community."
        />
      </section>

      <div className="flex flex-col gap-4 pt-4 md:gap-6 md:pt-6">
        {/* advocacy */}
        <section id="advocacy" aria-label="Advocacy" className="bg-forest px-3 py-20 md:px-12 md:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow tone="mint">Advocacy</Eyebrow>
            </Reveal>
            <Reveal as="h2" delay={120} className="t-heading mt-6 text-paper">
              Our Advocacy Work
            </Reveal>
            <Reveal delay={240} className="t-lead mt-7 max-w-2xl text-paper/65">
              We work with government institutions, educational bodies, and civil society to
              eliminate stigma and create pathways to meaningful contribution in nation
              building.
            </Reveal>
          </div>

          <div className="mt-14 flex flex-col gap-4 md:gap-6">
            {ADVOCACY_CARDS.map((c, i) => (
              <AdvocacyCard key={c.title} c={c} i={i} />
            ))}
          </div>

          <div className="mt-16">
            <GallerySlider slides={WORK_GALLERY} id="work-gallery" />
          </div>
        </section>

        {/* impact */}
        <section id="impact" aria-label="Our impact" className="mx-3 rounded-[24px] bg-linen md:mx-12">
          <div className="px-6 py-16 md:px-14 md:py-20">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Reveal>
                  <Eyebrow tone="teal">Our impact</Eyebrow>
                </Reveal>
                <Reveal as="h2" delay={120} className="t-section mt-5 text-forest">
                  Building a society where disability is never a barrier to opportunity.
                </Reveal>
              </div>
              <Reveal delay={220} className="max-w-sm text-[16px] leading-[1.5] text-forest/65">
                Through advocacy, education, and strategic partnerships with organizations
                like NCPWD, we are creating meaningful change for the Deaf community and
                persons with disabilities across Nigeria.
              </Reveal>
            </div>

            <RingStats stats={WORK_STATS} idPrefix="work" />

            {/* stories */}
            <div className="mt-20">
              <Reveal>
                <Eyebrow tone="teal">Why it matters</Eyebrow>
              </Reveal>
              <Reveal as="h3" delay={100} className="t-section mt-4 text-forest">
                Success, <It>signed.</It>
              </Reveal>
              <div className="mt-10 grid gap-4 lg:grid-cols-3">
                {STORIES.map((s, i) => (
                  <Reveal key={s.name} delay={i * 110}>
                    <article className="flex h-full flex-col rounded-[8px] bg-mist p-7 md:p-8">
                      <div className="flex items-center gap-4">
                        <Avatar initials={s.initials} compact className="rounded-full" />
                        <div>
                          <p className="text-[15px] font-medium leading-tight text-forest">{s.name}</p>
                          <p className="mt-0.5 text-[13px] font-light leading-tight text-quiet">{s.byline}</p>
                        </div>
                      </div>
                      <blockquote className="mt-6 flex-1 text-[17px] leading-[1.55] tracking-[-0.2px] text-quote/90">
                        {s.quote}
                      </blockquote>
                      <span className="mt-6 h-px w-12 bg-cteal/40" aria-hidden />
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={140} className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-[8px] bg-forest p-8 md:p-10">
                <p className="max-w-xl text-[20px] font-light leading-[1.4] text-paper">
                  Every partnership adds a wheel to this movement.{" "}
                  <span className="text-mint">Yours could be next.</span>
                </p>
                <button
                  onClick={() => go("join", "partner")}
                  className="t-btn rounded-[4px] border border-mint px-6 py-[10px] text-mint transition-colors duration-300 hover:bg-mint/10"
                >
                  Explore partnership
                </button>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
