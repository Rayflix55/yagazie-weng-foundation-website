import { useEffect, useState, type FormEvent } from "react";
import { Heart, Users, Award, Network, ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal, Eyebrow, It, type Go } from "../components/primitives";
import { PageHero, PartnerMarquee, SheetHead } from "../components/widgets";
import { VOLUNTEER_BENEFITS, AVAILABILITY, ROLES, PARTNERSHIPS, PARTNER_MARKS, CONTACT } from "../data/content";

const BENEFIT_ICONS = { Heart, Users, Award, Network };

/* ---------------- shared field styles ---------------- */
const FIELD =
  "w-full rounded-none border-0 border-b border-forest/25 bg-transparent py-3 text-[16px] text-forest placeholder:text-forest/40 transition-colors duration-300 focus:border-cteal focus:outline-none";
const LABEL = "mb-1 block text-[13px] font-medium uppercase tracking-[0.1em] text-forest/60";

/* ---------------- volunteer form ---------------- */
function VolunteerForm() {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const application = [
      `Full name: ${formData.get("fullName")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone")}`,
      `Location: ${formData.get("location")}`,
      `Skills & experience:\n${formData.get("skills")}`,
      `Availability: ${formData.get("availability")}`,
      `Preferred role: ${formData.get("role")}`,
    ].join("\n\n");
    const subject = encodeURIComponent("Volunteer application — YWUF");
    const body = encodeURIComponent(application);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={submit} className="rounded-[8px] bg-mist p-7 md:p-10">
      <h3 className="t-card text-forest">Volunteer application</h3>
      <p className="mt-2 text-[14px] leading-[1.6] text-forest/60">
        Tell us who you are and how you would like to help. Submitting opens an email
        addressed to {CONTACT.email}; review and send it in your email app to complete
        your application.
      </p>
      <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={LABEL}>Full name *</label>
          <input id="fullName" name="fullName" required placeholder="Enter your full name" className={FIELD} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className={LABEL}>Email address *</label>
          <input id="email" name="email" type="email" required placeholder="Enter your email" className={FIELD} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="phone" className={LABEL}>Phone number *</label>
          <input id="phone" name="phone" type="tel" required placeholder="Enter your phone number" className={FIELD} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="location" className={LABEL}>Location *</label>
          <input id="location" name="location" required placeholder="Enter your city / state" className={FIELD} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="skills" className={LABEL}>Skills & experience *</label>
          <textarea id="skills" name="skills" rows={3} required placeholder="Tell us about your skills, experience, and why you want to volunteer" className={cn(FIELD, "resize-y")} />
        </div>
        <div>
          <label htmlFor="availability" className={LABEL}>Availability *</label>
          <select id="availability" name="availability" required defaultValue="" className={cn(FIELD, "cursor-pointer")}>
            <option value="" disabled>Select availability</option>
            {AVAILABILITY.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="role" className={LABEL}>Preferred role *</label>
          <select id="role" name="role" required defaultValue="" className={cn(FIELD, "cursor-pointer")}>
            <option value="" disabled>Select role</option>
            {ROLES.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="t-btn mt-10 inline-flex items-center gap-2 rounded-[4px] border border-jade bg-jade px-8 py-[12px] text-paper transition-colors duration-300 hover:border-[#02a889] hover:bg-[#02a889]"
      >
        Email application
      </button>
    </form>
  );
}

/* ---------------- section sub-nav ---------------- */
function SubNav() {
  const [active, setActive] = useState<"volunteer" | "partner">("volunteer");
  useEffect(() => {
    const v = document.getElementById("volunteer");
    const p = document.getElementById("partner");
    if (!v || !p) return;
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id as "volunteer" | "partner")),
      { rootMargin: "-40% 0px -50% 0px" }
    );
    obs.observe(v);
    obs.observe(p);
    return () => obs.disconnect();
  }, []);

  const jump = (id: "volunteer" | "partner") =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="pointer-events-none sticky top-[88px] z-40 mx-3 flex justify-center md:mx-12">
      <nav aria-label="Sections" className="pointer-events-auto flex overflow-hidden rounded-[4px] bg-paper shadow-navcard">
        {(["volunteer", "partner"] as const).map((id) => (
          <button
            key={id}
            onClick={() => jump(id)}
            aria-current={active === id}
            className={cn(
              "flex items-center gap-2 px-6 py-3.5 text-[15px] font-medium capitalize leading-none transition-colors duration-300",
              active === id ? "bg-forest text-mint" : "text-moss hover:text-cteal"
            )}
          >
            {id === "volunteer" ? <Users className="h-4 w-4" strokeWidth={1.8} aria-hidden /> : <Heart className="h-4 w-4" strokeWidth={1.8} aria-hidden />}
            {id === "volunteer" ? "Volunteer" : "Partner with us"}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default function Join({
  animateOnLoad,
}: {
  go: Go;
  animateOnLoad: boolean;
}) {
  return (
    <>
      <section aria-label="Join us" className="bg-forest p-3 pb-0">
        <PageHero
          animateOnLoad={animateOnLoad}
          img="/img/vol.webp"
          alt="Volunteers working together to support the Deaf community"
          fullImage
          eyebrow="Join the movement"
          title={<>Give time. Give skill. <It>Give voice.</It></>}
          lead="Join our team of dedicated volunteers — or partner with us as an organisation — and make a tangible difference in the lives of Deaf individuals across Nigeria."
        />
      </section>

      <SubNav />

      {/* volunteer */}
      <section id="volunteer" aria-label="Volunteer with us" className="-mt-6 mx-3 rounded-[24px] bg-linen md:mx-12">
        <div className="px-6 pb-16 pt-24 md:px-14 md:pb-20">
          <SheetHead
            eyebrow="Volunteer with us"
            title={<>Make a difference <It>today.</It></>}
            lead="Our volunteers are the heartbeat of the foundation. Whether you have a few hours a week or want to lead a long-term project, your skills and passion help us reach more Deaf individuals and build inclusive communities."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VOLUNTEER_BENEFITS.map((b, i) => {
              const Icon = BENEFIT_ICONS[b.icon];
              return (
                <Reveal key={b.title} delay={i * 90}>
                  <div className="h-full rounded-[8px] bg-paper p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-cteal/25 bg-mist">
                      <Icon className="h-5 w-5 text-cteal" strokeWidth={1.6} aria-hidden />
                    </span>
                    <h3 className="mt-5 text-[18px] font-medium tracking-[-0.2px] text-forest">{b.title}</h3>
                    <p className="mt-2 text-[14px] leading-[1.55] text-quiet">{b.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120} className="mt-6">
            <VolunteerForm />
          </Reveal>
        </div>
      </section>

      {/* partner */}
      <section id="partner" aria-label="Partner with us" className="bg-forest px-3 py-20 md:px-12 md:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow tone="mint">Partner with us</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={120} className="t-heading mt-6 text-paper">
            Join forces. Multiply <It>the impact.</It>
          </Reveal>
          <Reveal delay={240} className="t-lead mt-7 max-w-2xl text-paper/65">
            We welcome partnerships with organisations, corporations and institutions that
            share our vision for an inclusive society.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {PARTNERSHIPS.map((p, i) => (
            <Reveal key={p.title} delay={i * 110} className="group">
              <article className="flex h-full flex-col overflow-hidden rounded-[8px] bg-pine/60">
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    className="warm-img h-full w-full object-cover transition-transform duration-[1400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="t-card text-paper">{p.title}</h3>
                  <p className="mt-3 flex-1 text-[14px] leading-[1.65] text-paper/70">{p.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-paper/80">
                        <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-mint" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`${p.title} enquiry — YWUF`)}`}
                    className="group/link mt-7 inline-flex items-center gap-1.5 self-start text-[15px] font-medium text-mint underline-offset-4 hover:underline"
                  >
                    Start a conversation
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" strokeWidth={1.8} aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 md:mt-28">
          <Reveal>
            <Eyebrow tone="mint" center>Alongside valued partners & allies</Eyebrow>
          </Reveal>
          <PartnerMarquee marks={PARTNER_MARKS} />
          <Reveal className="mt-8 text-center">
            <p className="text-[13px] leading-[1.6] text-paper/45">
              From classrooms that shaped our son to the institutions shaping policy — we
              move together.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
