import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
  type MouseEventHandler,
} from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../utils/cn";

/* ---------------- routing types ---------------- */
export type Page = "home" | "about" | "work" | "join" | "donate";
export type Go = (page: Page, anchor?: string) => void;

/* ---------------- in-view hook ---------------- */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          setInView(e.isIntersecting);
        });
      },
      { threshold, rootMargin: "0px 0px -6% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

/* ---------------- scroll reveal wrapper ---------------- */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("rv", inView && "rv-in", className)}
    >
      {children}
    </Tag>
  );
}

/* ---------------- eyebrow marker ---------------- */
export function Eyebrow({
  children,
  tone = "mint",
  center = false,
  className,
}: {
  children: ReactNode;
  tone?: "mint" | "teal";
  center?: boolean;
  className?: string;
}) {
  const color = tone === "mint" ? "text-mint" : "text-cteal";
  const dot = tone === "mint" ? "bg-mint" : "bg-cteal";
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-[13px] font-medium uppercase tracking-[0.14em]",
        color,
        center && "justify-center",
        className
      )}
    >
      <span className={cn("h-[7px] w-[7px] rounded-full", dot)} aria-hidden />
      {children}
    </p>
  );
}

/* ---------------- wordmark ---------------- */
export function Wordmark({
  tone = "teal",
  size = "md",
}: {
  tone?: "teal" | "white";
  size?: "md" | "lg";
}) {
  const logoSize = size === "lg" ? 52 : 36;
  return (
    <span className="inline-flex items-center gap-3">
      {/* Official circular logo — gradient ring with ILY hand sign */}
      <span
        className="inline-flex shrink-0 rounded-full"
        style={{ width: logoSize, height: logoSize }}
      >
        <img
          src="/img/Yagazie-Nav-Logo.png"
          alt=""
          width={logoSize}
          height={logoSize}
          className="h-full w-full object-contain"
        />
      </span>
      <span className="inline-flex flex-col">
        <span
          className={cn(
            "inline-flex items-baseline font-semibold leading-none tracking-[-0.5px]",
            size === "lg" ? "text-[26px]" : "text-[18px]",
            tone === "teal" ? "text-cteal" : "text-paper"
          )}
        >
          Yagazie Weng
        </span>
        <span
          className={cn(
            "mt-1 font-normal uppercase tracking-[0.14em]",
            size === "lg" ? "text-[11px]" : "text-[9px]",
            tone === "teal" ? "text-cteal/70" : "text-seafoam"
          )}
        >
          Foundation for the Deaf
        </span>
      </span>
    </span>
  );
}

/* ---------------- buttons ---------------- */
type BtnProps = {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler;
  arrow?: boolean;
  className?: string;
};

function BtnInner({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      {children}
      {arrow && (
        <ArrowRight
          className="h-[18px] w-[18px] transition-transform duration-300 ease-out group-hover:translate-x-1"
          strokeWidth={1.8}
          aria-hidden
        />
      )}
    </>
  );
}

export function MintButton({ children, href = "#", onClick, arrow, className }: BtnProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "t-btn group inline-flex items-center gap-2 rounded-[4px] border border-mint bg-mint px-6 py-[10px] text-forest transition-colors duration-300 hover:bg-[#78f2b4]",
        className
      )}
    >
      <BtnInner arrow={arrow}>{children}</BtnInner>
    </a>
  );
}

export function MintOutlineButton({ children, href = "#", onClick, arrow, className }: BtnProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "t-btn group inline-flex items-center gap-2 rounded-[4px] border border-mint bg-transparent px-6 py-[10px] text-mint transition-colors duration-300 hover:bg-mint/10",
        className
      )}
    >
      <BtnInner arrow={arrow}>{children}</BtnInner>
    </a>
  );
}

export function JadeButton({ children, href = "#", onClick, arrow, className }: BtnProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "t-btn group inline-flex items-center gap-2 rounded-[4px] border border-jade bg-jade px-6 py-[10px] text-paper transition-colors duration-300 hover:border-[#02a889] hover:bg-[#02a889]",
        className
      )}
    >
      <BtnInner arrow={arrow}>{children}</BtnInner>
    </a>
  );
}

/* ---------------- serif italic accent ---------------- */
export function It({ children }: { children: ReactNode }) {
  return <span className="t-accent">{children}</span>;
}

/* ---------------- gradient surfaces ---------------- */
export const STORIES_RADIAL =
  "radial-gradient(circle at 50% 90%, rgba(0, 168, 232, 0.48), rgb(0, 126, 167) 42%, rgb(0, 52, 89))";
export const LAGOON_FADE = "linear-gradient(rgb(0, 168, 232), rgb(245, 247, 250))";
export const LIME_AURORA = "linear-gradient(rgb(194, 233, 251), rgb(0, 168, 232))";
export const CORNER_FADE =
  "radial-gradient(130% 100% at 0% 100%, rgba(0,52,89,0.9) 0%, rgba(0,52,89,0.42) 34%, transparent 62%)";
