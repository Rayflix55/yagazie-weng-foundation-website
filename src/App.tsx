import { useCallback, useEffect, useState } from "react";
import { cn } from "./utils/cn";
import { Loader, AnnouncementBar, Nav, ClosingFooter } from "./components/chrome";
import type { Page } from "./components/primitives";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Join from "./pages/Join";
import Donate from "./pages/Donate";

const SEO: Record<
  Page,
  {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    ogUrl: string;
    ogImage: string;
    robots: string;
    schema: Record<string, unknown>;
  }
> = {
  home: {
    title: "Yagazie Weng Umezurike Foundation for the Deaf | Deaf NGO in Nigeria",
    description:
      "Yagazie Weng Umezurike Foundation for the Deaf is a Nigerian NGO empowering the deaf and disability community through advocacy, education, sign language accessibility, and social inclusion.",
    keywords:
      "deaf, yagazie, yagazie weng, yagazie weng umezurike, disability, deaf foundations in nigeria, deaf NGO, deaf foundation Nigeria, disability advocacy, deaf education, sign language, accessibility, hard of hearing, disability inclusion",
    canonical: "https://yagaziewengfoundationforthedeaf.org/",
    ogUrl: "https://yagaziewengfoundationforthedeaf.org/",
    ogImage: "https://yagaziewengfoundationforthedeaf.org/img/Yagazie-Logo.png",
    robots: "index, follow",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Yagazie Weng Umezurike Foundation for the Deaf",
      url: "https://yagaziewengfoundationforthedeaf.org/",
      description:
        "Yagazie Weng Umezurike Foundation for the Deaf is a Nigerian NGO empowering the deaf and disability community through advocacy, education, sign language accessibility, and social inclusion.",
    },
  },
  about: {
    title: "About Us || Yagazie Weng Umezurike Foundation for the Deaf | Deaf NGO in Nigeria",
    description:
      "Yagazie Weng Umezurike Foundation for the Deaf is a Nigerian NGO empowering the deaf and disability community through advocacy, education, sign language accessibility, and social inclusion.",
    keywords:
      "deaf, yagazie, yagazie weng, yagazie weng umezurike, disability, deaf foundations in nigeria, deaf NGO, deaf foundation Nigeria, disability advocacy, deaf education, sign language, accessibility, hard of hearing, disability inclusion",
    canonical: "https://yagaziewengfoundationforthedeaf.org/About-Us-Page/about-us.html",
    ogUrl: "https://yagaziewengfoundationforthedeaf.org/About-Us-Page/about-us.html",
    ogImage: "https://yagaziewengfoundationforthedeaf.org/img/Yagazie-Logo.png",
    robots: "index, follow",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Us - Yagazie Weng Umezurike Foundation",
      url: "https://yagaziewengfoundationforthedeaf.org/About-Us-Page/about-us.html",
      mainEntity: {
        "@type": "Organization",
        name: "Yagazie Weng Umezurike Foundation for the Deaf",
        url: "https://yagaziewengfoundationforthedeaf.org",
      },
      description:
        "Meet our board of directors, executive team, and learn the story behind the Yagazie Weng Umezurike Foundation for the Deaf.",
    },
  },
  work: {
    title: "Our Work || Yagazie Weng Umezurike Foundation for the Deaf | Deaf NGO in Nigeria",
    description:
      "A deaf-focused NGO in Nigeria advocating for disability rights, accessibility, and deaf education.",
    keywords:
      "deaf, yagazie, yagazie weng, yagazie weng umezurike, disability, deaf foundations in nigeria, deaf NGO, deaf foundation Nigeria, disability advocacy, deaf education, sign language, accessibility, hard of hearing, disability inclusion",
    canonical: "https://yagaziewengfoundation.org/Our-Work-Page/our-work.html",
    ogUrl: "https://yagaziewengfoundation.org/Our-Work-Page/our-work.html",
    ogImage: "https://yagaziewengfoundationforthedeaf.org/img/Yagazie-Logo.png",
    robots: "index, follow",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Yagazie Weng Umezurike Foundation for the Deaf",
      url: "https://yagaziewengfoundation.org",
      description: "A deaf-focused NGO in Nigeria advocating for disability rights, deaf education, accessibility, and empowerment.",
      areaServed: ["Abuja", "Lagos", "Enugu", "Northern Nigeria"],
      sameAs: [
        "https://facebook.com/share/1CFK4sE49g/",
        "https://instagram.com/yagazie_weng_foundation",
      ],
      founder: { "@type": "Person", name: "Sylvester Umezurike Ekeoma" },
    },
  },
  join: {
    title: "Join Us - Volunteer & Partner | Yagazie Weng Foundation for the Deaf",
    description:
      "Join the Yagazie Weng Umezurike Foundation as a volunteer or partner. Make a tangible difference in the lives of Deaf individuals across Nigeria.",
    keywords:
      "volunteer deaf Nigeria, partner with NGO, deaf volunteer opportunities, disability NGO partnership, sign language volunteer",
    canonical: "https://yagaziewengfoundationforthedeaf.org/Join-Us-Page/join-us.html",
    ogUrl: "https://yagaziewengfoundationforthedeaf.org/Join-Us-Page/join-us.html",
    ogImage: "https://yagaziewengfoundationforthedeaf.org/img/Yagazie-Logo.png",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Join Us - Volunteer & Partnership Opportunities",
      url: "https://yagaziewengfoundationforthedeaf.org/Join-Us-Page/join-us.html",
      description:
        "Volunteer or partner with the Yagazie Weng Umezurike Foundation for the Deaf to create meaningful impact.",
      isPartOf: {
        "@type": "Organization",
        name: "Yagazie Weng Umezurike Foundation for the Deaf",
        url: "https://yagaziewengfoundationforthedeaf.org",
      },
    },
  },
  donate: {
    title: "Donate — Yagazie Weng Umezurike Foundation for the Deaf",
    description:
      "Support the Yagazie Weng Umezurike Foundation for the Deaf. Your donation funds hearing aids, sign language education, advocacy and economic inclusion for the Deaf community in Nigeria.",
    keywords:
      "donate deaf nigeria, support deaf ngo, yagazie weng foundation donate, deaf charity nigeria",
    canonical: "https://yagaziewengfoundationforthedeaf.org/donate",
    ogUrl: "https://yagaziewengfoundationforthedeaf.org/donate",
    ogImage: "https://yagaziewengfoundationforthedeaf.org/img/Yagazie-Logo.png",
    robots: "index, follow",
    schema: {
      "@context": "https://schema.org",
      "@type": "DonateAction",
      name: "Donate to Yagazie Weng Umezurike Foundation for the Deaf",
      description:
        "Support the Yagazie Weng Umezurike Foundation for the Deaf with a direct bank transfer.",
      recipient: {
        "@type": "NGO",
        name: "Yagazie Weng Umezurike Foundation for the Deaf",
        url: "https://yagaziewengfoundationforthedeaf.org",
      },
    },
  },
};

function parseHash(): { page: Page; anchor?: string } {
  const h = window.location.hash.replace(/^#\/?/, "");
  const [page, anchor] = h.split("/");
  if (page === "about" || page === "work" || page === "join" || page === "donate")
    return { page, anchor };
  return { page: "home", anchor };
}

function setMetaById(id: string, value: string) {
  const el = document.getElementById(id);
  if (el) el.setAttribute("content", value);
}

function setLinkById(id: string, value: string) {
  const el = document.getElementById(id) as HTMLLinkElement | null;
  if (el) el.href = value;
}

function setSchema(id: string, data: Record<string, unknown>) {
  const el = document.getElementById(id);
  if (el) el.textContent = JSON.stringify(data);
}

export default function App() {
  const [route, setRoute] = useState<{ page: Page; anchor?: string }>(() =>
    typeof window === "undefined" ? { page: "home" } : parseHash()
  );
  const [ready, setReady] = useState(false);
  const [barOpen, setBarOpen] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 1150);
    return () => window.clearTimeout(t);
  }, []);

  const go = useCallback((page: Page, anchor?: string) => {
    setRoute((prev) => {
      const same = prev.page === page && prev.anchor === anchor;
      if (!same)
        window.history.pushState({}, "", `#/${page}${anchor ? `/${anchor}` : ""}`);
      return { page, anchor };
    });
  }, []);

  useEffect(() => {
    const onPop = () => setRoute(parseHash());
    window.addEventListener("popstate", onPop);
    window.addEventListener("hashchange", onPop);
    return () => {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("hashchange", onPop);
    };
  }, []);

  useEffect(() => {
    const meta = SEO[route.page];
    document.title = meta.title;
    setMetaById("meta-description", meta.description);
    setMetaById("meta-keywords", meta.keywords);
    setMetaById("meta-robots", meta.robots);
    setMetaById("og-title", meta.title);
    setMetaById("og-description", meta.description);
    setMetaById("og-image", meta.ogImage);
    setMetaById("og-url", meta.ogUrl);
    setMetaById("twitter-title", meta.title);
    setMetaById("twitter-description", meta.description);
    setMetaById("twitter-image", meta.ogImage);
    setLinkById("canonical-link", meta.canonical);
    setLinkById("alt-en", "https://yagaziewengfoundationforthedeaf.org/");
    setLinkById("alt-default", "https://yagaziewengfoundationforthedeaf.org/");
    setSchema("page-schema", meta.schema);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => {
      if (route.anchor) {
        const el = document.getElementById(route.anchor);
        if (el) {
          el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 60);
    return () => window.clearTimeout(t);
  }, [route]);

  const isDonate = route.page === "donate";

  return (
    <>
      <a
        href="#main"
        className="sr-only fixed left-3 top-3 z-[100] rounded-[4px] bg-mint px-4 py-2 text-[15px] font-medium text-paper focus:not-sr-only"
      >
        Skip to main content
      </a>

      <Loader done={ready} />
      <AnnouncementBar open={barOpen} onClose={() => setBarOpen(false)} go={go} />
      <Nav page={route.page} go={go} barOpen={barOpen} />

      <main id="main" className={cn("transition-[padding] duration-500", barOpen && "pt-12")}>
        {route.page === "home"   && <Home   go={go} />}
        {route.page === "about"  && <About  go={go} />}
        {route.page === "work"   && <Work   go={go} />}
        {route.page === "join"   && <Join   go={go} />}
        {route.page === "donate" && <Donate go={go} />}
      </main>

      {/* hide the generic closing CTA footer on the donate page — it already has its own call to action */}
      {!isDonate && <ClosingFooter go={go} home={route.page === "home"} />}
      {isDonate  && <ClosingFooter go={go} home={false} />}
    </>
  );
}
