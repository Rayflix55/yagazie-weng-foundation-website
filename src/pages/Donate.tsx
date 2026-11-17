import { useState } from "react";
import { ArrowLeft, Check, Copy, Landmark, ArrowRight, Mail, Phone } from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal, Eyebrow, It, MintButton, type Go } from "../components/primitives";
import { CONTACT } from "../data/content";

/* ─── bank accounts data ──────────────────────────────────────── */
type Account = {
  id: string;
  bank: string;
  accountName: string;
  accountNumber: string;
  type: string;
  currency: string;
};

const ACCOUNTS: Account[] = [
  {
    id: "zenith",
    bank: "Zenith Bank",
    accountName: "Yagazie Weng Umezurike Foundation for the Deaf",
    accountNumber: "1229563894",
    type: "Current Account",
    currency: "NGN",
  },
  {
    id: "gtbank",
    bank: "GTBank",
    accountName: "Yagazie Weng Umezurike Foundation for the Deaf",
    accountNumber: "0837201945",
    type: "Current Account",
    currency: "NGN",
  },
  {
    id: "firstbank",
    bank: "First Bank of Nigeria",
    accountName: "Yagazie Weng Umezurike Foundation for the Deaf",
    accountNumber: "3124567890",
    type: "Savings Account",
    currency: "NGN",
  },
];

/* ─── copy-to-clipboard button ───────────────────────────────── */
function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col gap-3 border-b border-forest/[0.08] py-5 last:border-0 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-quiet">
          {label}
        </p>
        <p className="mt-1 font-mono text-[18px] font-light leading-tight text-forest">
          {value}
        </p>
      </div>
      <button
        onClick={copy}
        className={cn(
          "t-btn inline-flex shrink-0 items-center justify-center gap-2 rounded-[4px] border px-5 py-[9px] text-[15px] transition-colors duration-300",
          copied
            ? "border-jade bg-jade/10 text-jade"
            : "border-cteal bg-transparent text-cteal hover:bg-cteal/8"
        )}
      >
        {copied ? (
          <>
            <Check className="h-[15px] w-[15px]" strokeWidth={2} />
            Copied
          </>
        ) : (
          <>
            <Copy className="h-[15px] w-[15px]" strokeWidth={1.8} />
            Copy
          </>
        )}
      </button>
    </div>
  );
}

/* ─── account selector card ──────────────────────────────────── */
function AccountCard({
  acc,
  selected,
  onSelect,
}: {
  acc: Account;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "group relative flex w-full flex-col gap-4 rounded-[8px] p-6 text-left transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
        selected
          ? "bg-forest text-paper"
          : "bg-mist text-forest hover:-translate-y-1"
      )}
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "grid h-11 w-11 place-items-center rounded-[6px]",
            selected ? "bg-mint/15" : "bg-ringsand"
          )}
        >
          <Landmark
            className={cn("h-5 w-5", selected ? "text-mint" : "text-cteal")}
            strokeWidth={1.5}
          />
        </span>
        {/* active indicator dot */}
        <span
          className={cn(
            "h-[8px] w-[8px] rounded-full transition-all duration-300",
            selected ? "bg-mint" : "bg-transparent border border-forest/20"
          )}
          aria-hidden
        />
      </div>

      <div>
        <p
          className={cn(
            "text-[20px] font-light leading-[1.2]",
            selected ? "text-paper" : "text-forest"
          )}
        >
          {acc.bank}
        </p>
        <p
          className={cn(
            "mt-1 text-[14px]",
            selected ? "text-paper/60" : "text-quiet"
          )}
        >
          {acc.type} · {acc.currency}
        </p>
      </div>

      {!selected && (
        <span
          aria-hidden
          className="absolute right-4 top-1/2 -translate-y-1/2 text-cteal/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cteal"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </span>
      )}
    </button>
  );
}

/* ─── main page ──────────────────────────────────────────────── */
export default function Donate({ go }: { go: Go }) {
  const [selectedId, setSelectedId] = useState<string>(ACCOUNTS[0].id);
  const selected = ACCOUNTS.find((a) => a.id === selectedId)!;

  return (
    <>
      {/* Forest Canopy hero panel */}
      <section
        aria-label="Donate to YWUF"
        className="bg-forest px-3 pb-0 pt-3"
      >
        <div className="relative overflow-hidden rounded-t-[12px] px-6 pb-14 pt-20 md:px-14 md:pt-28">
          {/* decorative curves */}
          <svg
            aria-hidden
            className="pointer-events-none absolute right-8 top-8 hidden opacity-40 lg:block"
            width="260"
            height="220"
            viewBox="0 0 260 220"
            fill="none"
          >
            <path
              d="M4 216 C 68 160, 90 96, 158 80 S 244 28, 256 4"
              stroke="#00a8e8"
              strokeOpacity="0.6"
              strokeWidth="1"
              pathLength={1}
              className="draw-curve"
            />
            <circle cx="256" cy="4" r="3.5" fill="#00a8e8" />
            <path
              d="M30 220 C 84 184, 120 142, 174 128"
              stroke="#9fdff6"
              strokeOpacity="0.4"
              strokeWidth="1"
              pathLength={1}
              className="draw-curve"
            />
            <circle cx="174" cy="128" r="3" fill="#9fdff6" />
          </svg>

          <Reveal>
            <Eyebrow tone="mint" className="mb-5">
              Direct bank transfer
            </Eyebrow>
          </Reveal>

          <Reveal as="h1" delay={120} className="t-heading max-w-2xl text-paper">
            Give with intention.
            <br />
            Give with <It>impact.</It>
          </Reveal>

          <Reveal delay={280} className="t-lead mt-6 max-w-xl text-paper/65">
            100% of every naira goes directly to hearing aids, sign language
            education, advocacy and economic inclusion for the Deaf community
            in Nigeria.
          </Reveal>

          {/* trust row */}
          <Reveal delay={380} className="mt-10 flex flex-wrap gap-6">
            {[
              "100% to local projects",
              "Transparent reporting",
              "Board-verified",
            ].map((t) => (
              <span
                key={t}
                className="flex items-center gap-2 text-[14px] text-paper/70"
              >
                <span className="h-[6px] w-[6px] rounded-full bg-mint" aria-hidden />
                {t}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Linen inset — accounts + details */}
      <section className="mx-3 rounded-b-[12px] bg-linen md:mx-3">
        <div className="grid gap-10 px-6 py-14 md:px-14 md:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] lg:gap-16">

          {/* left — account selector */}
          <div>
            <Reveal>
              <Eyebrow tone="teal" className="mb-6">
                Choose an account
              </Eyebrow>
            </Reveal>
            <div className="flex flex-col gap-3">
              {ACCOUNTS.map((acc, i) => (
                <Reveal key={acc.id} delay={i * 70}>
                  <AccountCard
                    acc={acc}
                    selected={acc.id === selectedId}
                    onSelect={() => setSelectedId(acc.id)}
                  />
                </Reveal>
              ))}
            </div>
          </div>

          {/* right — account details */}
          <Reveal delay={120}>
            <div className="rounded-[8px] bg-paper p-8 md:p-10">
              {/* header */}
              <div className="flex items-center gap-4 border-b border-forest/[0.08] pb-7">
                <span className="grid h-12 w-12 place-items-center rounded-[6px] bg-ringsand">
                  <Landmark className="h-5 w-5 text-cteal" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-[22px] font-light text-forest">
                    {selected.bank}
                  </p>
                  <p className="text-[14px] text-quiet">
                    {selected.type} · {selected.currency}
                  </p>
                </div>
              </div>

              {/* fields */}
              <div className="mt-2">
                <CopyField label="Account Name" value={selected.accountName} />
                <CopyField label="Account Number" value={selected.accountNumber} />
                <CopyField label="Bank" value={selected.bank} />
              </div>

              {/* steps */}
              <div className="mt-8 rounded-[4px] bg-linen p-6">
                <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-cteal">
                  How to complete your donation
                </p>
                <ol className="mt-4 space-y-3">
                  {[
                    "Transfer any amount using your banking app or at your bank branch.",
                    `Send your receipt to ${CONTACT.email} with your name.`,
                    "We will confirm receipt and send a thank-you within one working day.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.6] text-forest/70">
                      <span className="mt-[5px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cteal/30 text-[11px] font-medium text-cteal">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* contact strip */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 text-[14px] text-quiet transition-colors hover:text-cteal"
                >
                  <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  {CONTACT.email}
                </a>
                <a
                  href="tel:+2348163691700"
                  className="inline-flex items-center gap-2 text-[14px] text-quiet transition-colors hover:text-cteal"
                >
                  <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Forest footer band — back nav + reassurance */}
      <section className="bg-forest px-3 py-20 md:px-12">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow tone="mint" className="mb-5">
                Thank you
              </Eyebrow>
            </Reveal>
            <Reveal as="p" delay={120} className="t-section text-paper">
              Every donation, large or small, is a hand raised for a child
              who cannot yet <It>raise their own.</It>
            </Reveal>
          </div>
          <Reveal delay={240} className="flex flex-wrap gap-4">
            <MintButton
              href="#"
              onClick={(e) => { e.preventDefault(); go("home"); }}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-[16px] w-[16px]" strokeWidth={1.8} />
              Back to home
            </MintButton>
            <button
              onClick={() => go("join", "volunteer")}
              className="t-btn inline-flex items-center gap-2 rounded-[4px] border border-mint/40 bg-transparent px-6 py-[10px] text-mint/80 transition-colors hover:border-mint hover:text-mint"
            >
              Volunteer instead
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
