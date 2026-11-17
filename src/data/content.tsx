/* All real content for the Yagazie Weng Umezurike Foundation for the Deaf (YWUF) */

export const ORG = {
  name: "Yagazie Weng Umezurike Foundation for the Deaf",
  short: "YWUF",
  tagline: "Creating a world where every sign is heard and every hand is seen.",
  mission:
    "Dedicated to empowering the Deaf community and persons with disabilities through advocacy, education, sign language accessibility, and inclusive opportunities across Nigeria.",
};

export const CONTACT = {
  email: "yagaziewengfoundation@gmail.com",
  phone: "+234 816 369 1700",
  hours: "Available Mon–Fri, 9AM–5PM",
  address: ["203B The District by Dantata", "Ahmadu Bello Way, Gwarinpa", "Abuja, Nigeria"],
};

export const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com/share/1CFK4sE49g/", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com/yagazie_weng_foundation", icon: "instagram" },
  { label: "Twitter / X", href: "https://twitter.com/yagazieweng", icon: "twitter" },
  { label: "WhatsApp", href: "https://wa.me/2348163691700", icon: "whatsapp" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "LinkedIn", href: "https://linkedin.com/company/yagazie-weng", icon: "linkedin" },
];

/* ---------------- Home ---------------- */

export const MISSION_DOORS = [
  {
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80",
    alt: "African children gathered together outdoors",
    dot: "#007ea7",
    title: "Families first",
    caption: "Standing with parents from the first screening — guidance, sign and solidarity.",
  },
  {
    img: "https://images.unsplash.com/photo-1567057420215-0afa9aa9253a?auto=format&fit=crop&w=1200&q=80",
    alt: "African schoolchildren writing in notebooks in a classroom",
    dot: "#00a8e8",
    title: "Deaf education",
    caption: "Education support and sign access so no child is left out of the lesson.",
  },
  {
    img: "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?auto=format&fit=crop&w=1200&q=80",
    alt: "Maasai community members gathered outdoors",
    dot: "#f2b169",
    title: "Collaboration",
    caption: "Hands joined with government, NGOs and professionals who share the mission.",
  },
  {
    img: "https://images.unsplash.com/photo-1627423896085-e3e694d88e40?auto=format&fit=crop&w=1200&q=80",
    alt: "African students raising their hands in a classroom",
    dot: "#8fc7ff",
    title: "Visibility",
    caption: "Advocacy that brings deaf children out from behind closed doors — onto every stage.",
  },
];

export const NEW_SERVICES = [
  {
    img: "https://images.unsplash.com/photo-1639432040760-147300164f50?auto=format&fit=crop&w=1200&q=80",
    alt: "An African man communicating with a hand gesture",
    title: "Sign language accessibility",
    caption: "Interpreting pathways and sign-friendly spaces for schools, clinics and families.",
  },
  {
    img: "https://images.unsplash.com/photo-1473594659356-a404044aa2c2?auto=format&fit=crop&w=1200&q=80",
    alt: "An African mother carrying her baby on her back outdoors",
    title: "Family beginnings programme",
    caption: "Walking with families of newly diagnosed deaf children — from NICU to first day of school.",
  },
  {
    img: "https://images.unsplash.com/photo-1725245997915-f9ef3912267f?auto=format&fit=crop&w=1200&q=80",
    alt: "African women gathered together for a shared prayer",
    title: "Community & belonging",
    caption: "Gatherings, mentorship and Deaf-led circles where sign is simply the language of the room.",
  },
];

export const BENTO_TILES = [
  {
    kind: "forest-chips",
    title: "Advocacy & visibility",
    text: "Championing the inclusion of deaf children in every room where decisions are made.",
  },
  {
    kind: "radial-globe",
    title: "Family & medical navigation",
    text: "From newborn screening to cochlear care — the roadmap we wished someone had handed us.",
  },
  {
    kind: "lagoon",
    title: "Sign language in classrooms",
    text: "Supporting schools and teachers so lessons land in a language deaf children can own.",
  },
  {
    kind: "pine-device",
    title: "Direct support for children",
    text: "Education, medical support and empowerment, working with deaf children one-to-one.",
  },
  {
    kind: "forest-tags",
    title: "Government partnership",
    text: "Embedding deaf expertise inside public education and disability frameworks.",
  },
  {
    kind: "forest-spark",
    title: "Deaf women's empowerment",
    text: "Entrepreneurship, visibility and leadership — with the Abuja Association of the Deaf.",
  },
] as const;

export const HOME_RINGS = [
  {
    value: 100,
    num: "2",
    caption: <>government partnerships — <b className="font-medium text-forest">NCPWD and FCT&nbsp;UBEB</b> — turning policy into classrooms.</>,
  },
  {
    value: 66,
    num: "4",
    caption: <>countries shaped our journey — <b className="font-medium text-forest">the UK, Nigeria, the USA and Mexico.</b></>,
  },
  {
    value: 25,
    num: "25",
    caption: <>weeks. That is how early Yagazie arrived — <b className="font-medium text-forest">and how fierce this mission became.</b></>,
  },
  {
    value: 33,
    num: "795g",
    caption: <>his birth weight. <b className="font-medium text-forest">Small beginnings.</b> Unstoppable outcomes.</>,
  },
];

export const AUDIENCE_ROWS = [
  { label: "Deaf children & their families", page: "about" as const, anchor: "story" },
  { label: "Schools & educators", page: "work" as const, anchor: "advocacy" },
  { label: "Government & policymakers", page: "work" as const, anchor: "advocacy" },
  { label: "NGOs & professionals", page: "join" as const, anchor: "partner" },
  { label: "Corporate partners", page: "join" as const, anchor: "partner" },
];

export const PARTNER_MARKS = [
  { t: "NCPWD", c: "text-[17px] font-medium tracking-[0.24em]" },
  { t: "FCT UBEB", c: "font-semibold tracking-[0.1em]" },
  { t: "Abuja Association of the Deaf", c: "font-serif italic text-[23px]" },
  { t: "Hayat Int'l School", c: "font-light tracking-[0.04em]" },
  { t: "LEXINGTON", c: "text-[17px] font-medium tracking-[0.22em]" },
  { t: "Zankli Medical Centre", c: "font-normal tracking-[-0.3px]" },
];

/* ---------------- Success stories ---------------- */

export const STORIES = [
  {
    quote:
      "Barr. Nehemiah Danjuma became the first Deaf Lawyer from Northern Nigeria. This milestone is a testament to the limitless possibilities that exist when Persons With Disabilities are empowered to thrive and contribute meaningfully to nation building.",
    name: "Barr. Nehemiah Danjuma",
    byline: "Deaf Lawyer, Northern Nigeria",
    initials: "ND",
  },
  {
    quote:
      "Yagazie didn't just pass through school, he made history there. Medals, trophies, and unforgettable wins in every competition he represented us in. That's the mark of a true legend.",
    name: "Master Yagazie Weng Umezurike",
    byline: "Foundation Namesake & Inspiration",
    initials: "YW",
  },
  {
    quote:
      "Deaf women possess immense, transformative potential that must be harnessed. We must embrace entrepreneurship and boost our productivity as pathways to self-reliance and economic independence.",
    name: "Mrs. Jumai Hosea",
    byline: "Women Leader, Abuja Association of the Deaf",
    initials: "JH",
  },
];

/* ---------------- About ---------------- */

export const ED_MESSAGE = [
  "Welcome to the Yagazie Weng Umezurike Foundation for the Deaf (YWUF) — where empowerment meets inclusion.",
  "At YWUF, we are driven by an unwavering commitment to disability rights and a bold vision of a world where every individual, regardless of ability, has the opportunity to thrive. Guided by a multidisciplinary Board of Trustees, our work focuses on breaking systemic barriers, challenging harmful stereotypes, and expanding opportunities for persons with disabilities.",
  "We invite you to be part of this transformative journey. Partner with us to deepen impact, volunteer your expertise to advance inclusive solutions, or support our initiatives as we work to make inclusion not just an aspiration, but a lived reality.",
];

export const ED_QUOTE =
  "True inclusion happens when we stop trying to make Deaf people fit into a hearing world and start creating a world that works for everyone.";

export const TIMELINE = [
  {
    place: "London, United Kingdom",
    year: "2012",
    title: "Born at 25 weeks, 795 grams",
    body: "Yagazie Weng Umezurike arrived extremely early. Managed first at the Royal Free Hospital, then at Queen Charlotte and Chelsea Hospital — a specialist centre for high-risk, extremely premature births — he was admitted straight to the Neonatal Intensive Care Unit. For three months, dedicated medical teams fought tirelessly for him. We, his parents, prayed just as fiercely.",
  },
  {
    place: "London, United Kingdom",
    year: "2012",
    title: "Three surgeries — then a diagnosis",
    body: "After Whittington Hospital came referrals to Great Ormond Street Hospital, where three surgical procedures corrected multiple subglottic cysts and a narrowing airway. Before discharge, Yagazie failed the mandatory newborn hearing screening. At the Nuffield Hearing and Speech Centre (UCLH), he was diagnosed with Auditory Neuropathy Spectrum Disorder.",
  },
  {
    place: "Abuja, Nigeria",
    year: "2013",
    title: "Coming home",
    body: "We returned to Nigeria, where finding appropriate care for a child with complex needs became its own education. At Zankli Medical Centre, Abuja, Dr. (Mrs.) Afolayan continued Yagazie's care — and we saw, first-hand, what families without options are forced to face.",
  },
  {
    place: "New York, USA",
    year: "The years after",
    title: "Profound, bilateral — and boundless",
    body: "An auditory assessment at NewYork-Presbyterian Weill Cornell Medical Center confirmed profound bilateral hearing loss. We accepted that our son's life would not follow a typical path — and resolved it would be fulfilling, joyful and limitless instead. Yagazie later underwent cochlear implant surgery: several hours in theatre, and a major milestone in his communication journey.",
  },
  {
    place: "Three countries",
    year: "School years",
    title: "An education without borders",
    body: "Hayat International School (Abuja) · The Lexington School for the Deaf (Queens, New York) · CAM 48 Polanco (Mexico City). Every system taught us what inclusion costs — and what it gives back.",
  },
  {
    place: "Abuja, Nigeria",
    year: "Today",
    title: "The Foundation",
    body: "YWUF was conceived from everything we lived as parents navigating deafness, extreme prematurity and disability across many systems and cultures. Our mission: amplify the voices of less privileged deaf children — those whose gestures are ignored, who are hidden by stigma — and ensure no child is silenced by circumstance.",
  },
];

export const MISSION_CARDS = [
  {
    icon: "Megaphone",
    title: "Advocacy",
    text: "Advocate for the visibility and inclusion of deaf children in all aspects of society.",
  },
  {
    icon: "HeartHandshake",
    title: "Support families",
    text: "Stand with families lacking resources and access to quality care and education.",
  },
  {
    icon: "Handshake",
    title: "Collaboration",
    text: "Partner with individuals, government agencies, NGOs and professionals.",
  },
  {
    icon: "Hand",
    title: "Direct impact",
    text: "Work directly with deaf children to provide education, medical support and empowerment.",
  },
] as const;

export const STORY_QUOTE =
  "The Yagazie Weng Umezurike Foundation exists to ensure that no child is silenced by circumstance, and that every deaf child is given the opportunity to thrive, be seen, and be heard in their own unique way.";

export type BoardMember = {
  name: string;
  role: string;
  short: string;
  full?: string[];
  initials: string;
  photo?: string;
  bioPhoto?: string;
};

export const BOARD: BoardMember[] = [
  {
    name: "Sylvester Ekeoma Umezurike",
    role: "Founder & Executive Director",
    short:
      "A passionate advocate for disability rights, inclusion and equal opportunity.",
    full: [
      "Mr. Sylvester Ekeoma Umezurike is a passionate advocate for disability rights, inclusion, and equal opportunity.",
      "His commitment to promoting dignity and visibility for persons with disabilities has driven his active participation in advocacy initiatives, community programs, and inclusive sports events across Mexico City (Mexico), New York (USA), and Nigeria.",
      "Through these engagements, Mr. Umezurike has worked to challenge stereotypes, promote accessibility, and showcase the abilities and potential of individuals with disabilities. His advocacy is rooted in lived experience and guided by a strong belief that inclusion strengthens communities and societies.",
      "In recognition of his impact, he has received multiple awards for youth development, community leadership, and community building — reflecting his dedication to empowering underserved populations and fostering inclusive environments.",
      "He currently serves as Co-Founder of the Yagazie Weng Umezurike Foundation for the Deaf, where he continues to champion the rights, education, and inclusion of deaf children and persons with disabilities.",
    ],
    initials: "SU",
    photo: "/img/Mr-Umezi-2.JPG",
    bioPhoto: "/img/Mr-Umezi.jpeg",
  },
  {
    name: "Imoh Valentine Abiaesse",
    role: "President",
    short:
      "A legal practitioner called to the Nigerian Bar in 1992 — over three decades in litigation, corporate practice and human rights advocacy.",
    initials: "IA",
    photo: "/img/Mr-Imoh.JPG",
  },
  {
    name: "Eunice Garos Philips-Umezurike",
    role: "Co-Founder",
    short:
      "A literary enthusiast and dedicated disability advocate, championing sign language as a vital tool for inclusion and communication.",
    full: [
      "Eunice Philips-Umezurike is a literary enthusiast and a dedicated disability advocate with a deep passion for the promotion and normalization of sign language as a vital tool for inclusion and communication.",
      "Her work is driven by a strong belief that language access is a fundamental human right and that sign language plays a critical role in empowering deaf individuals and communities.",
      "Through advocacy, awareness initiatives, and community engagement, Eunice actively supports efforts that advance inclusive education, communication access, and social integration for persons with hearing loss, especially children.",
      "Her commitment is rooted in both professional interest and lived experience, shaping her compassionate and impactful approach to advocacy.",
      "As Co-Founder of the Yagazie Weng Umezurike Foundation for the Deaf, Eunice continues to champion visibility, education, and equal opportunities for deaf children and their families.",
    ],
    initials: "EP",
    photo: "/img/Mrs-Umezi.JPG",
  },
  {
    name: "Okoroafor Alexander Uchechukwu",
    role: "Board Member",
    short:
      "Special Education teacher, disability rights advocate and sign language interpreter based in Abuja — consulting on inclusive education, community development, SRHR and disability advocacy.",
    initials: "OA",
    photo: "/img/Uche-Alex.jpeg",
  },
  {
    name: "Bob Chukwuemeka",
    role: "Board Member",
    short: "Building contractor, and art & history enthusiast.",
    initials: "BC",
    photo: "/img/Mr-Bob.jpeg",
  },
  {
    name: "Chidiebere David Okpulo",
    role: "Board Member",
    short: "Business leader — realtors, managers and developers.",
    initials: "CO",
    photo: "/img/Mr-David.jpeg",
  },
  {
    name: "Dr. Chinelo Nnedi Egwu",
    role: "Board Member",
    short:
      "A clinical academic and GP whose career is shaped by a deep commitment to equity, community health and evidence-driven practice.",
    full: [
      "Dr Chinelo Nnedi Egwu is a clinical academic and General Practice physician whose career has been shaped by a deep commitment to equity, community health, and evidence-driven practice.",
      "Based in the United Kingdom, she brings over ten years of experience working across West Africa and the UK — contributing to clinical strategic information systems, public health implementation science, and the strengthening of primary care.",
      "Chinelo's work sits at the intersection of frontline clinical practice and research. In her primary care role, she is known for a compassionate, whole-person approach that centres patients' lived experiences and the broader social forces that influence their health.",
      "Her clinical insight enriches her research, which focuses on population health, health inequalities, and the structural determinants that shape wellbeing long before patients enter the consulting room.",
      "Across her career, Chinelo has collaborated with government bodies, public health agencies, universities and community organisations to improve the way health systems capture, understand, and respond to population health data.",
    ],
    initials: "CE",
    photo: "/img/Mrs-chinelu.jpeg",
  },
];

export const TEAM = [
  {
    name: "Akpe (Rayflix) Samuel",
    role: "Website Developer",
    short:
      "A web developer with 2+ years of experience and a passion for creating dynamic, responsive websites.",
    initials: "AS",
    photo: "/img/rayflix.png",
  },
];

export const ABOUT_GALLERY = Array.from({ length: 25 }, (_, index) => {
  const photoNumber = index + 1;

  return {
    img: `/img/pic-${photoNumber}.jpeg`,
    alt: `Slideshow picture ${photoNumber}`,
    caption: "Slideshow pictures",
  };
});

/* ---------------- Work ---------------- */

export const ADVOCACY_CARDS = [
  {
    img: "/img/yaga-1.jpg",
    alt: "NCPWD endorsement and partnership meeting",
    title: "NCPWD Strategic Partnership & Endorsement",
    body: "The National Commission for Persons with Disabilities (NCPWD) has endorsed our vision and pledged full support for our programmes. Through this partnership, we collaborate on inclusive education, disability rights, and sustainable development initiatives across Nigeria, building a society where disability is never a barrier to opportunity.",
    stats: [
      ["NCPWD", "Government endorsement"],
      ["Chief Ayuba Burki Gufwan", "Executive Secretary"],
    ],
  },
  {
    img: "/img/yaga-2.jpg",
    alt: "FCT UBEB partnership for inclusive education",
    title: "Government Partnership: FCT UBEB",
    body: "We partner with the FCT Universal Basic Education Board (UBEB) to enhance inclusive education for deaf and hard-of-hearing students in Abuja. This collaboration integrates our specialized expertise into government-led educational frameworks through the FCT UBEB's Special Needs Department, representing a shift from policy to actionable implementation.",
    stats: [
      ["FCT UBEB", "Direct partnership"],
      ["Lady Florence Dawon", "Acting Executive Chairman"],
    ],
  },
  {
    img: "/img/yaga-3.jpg",
    alt: "International Women's Day 2026 - Abuja Association of the Deaf",
    title: "Deaf Women Empowerment & Advocacy",
    body: "Our Founder and CEO, Mr. Sylvester Umezurike, champions the visibility and empowerment of Deaf women through partnerships with the Abuja Association of the Deaf. We believe inclusion is a right, not a favor, and support Deaf women as they embrace entrepreneurship and shatter societal barriers with resilience.",
    stats: [
      ["Abuja Association", "Community partnership"],
      ["Women-centred", "Empowerment focus"],
    ],
  },
];

export const WORK_GALLERY = [
  { img: "/img/yaga-5.jpg", alt: "Women's Empowerment Event - International Women's Day 2026", caption: "Women's Empowerment & Community Outreach" },
  { img: "/img/yaga-6.jpg", alt: "Policy Roundtable Discussion with NCPWD - Abuja", caption: "NCPWD Courtesy Visit - Abuja" },
  { img: "/img/yaga-7.jpg", alt: "Barr. Nehemiah Danjuma's Call To Bar", caption: "Barr. Nehemiah Danjuma's Call To Bar" },
];

export const WORK_STATS = [
  {
    value: 100,
    num: "2",
    caption: <>Government Partnerships (<b className="font-medium text-forest">NCPWD, FCT UBEB</b>)</>,
  },
  {
    value: 70,
    num: "Abuja",
    small: true,
    caption: <>Primary Focus Area</>,
  },
  {
    value: 85,
    num: "Many",
    small: true,
    caption: <>Multi-Stakeholder Collaboration Model</>,
  },
  {
    value: 100,
    num: "All",
    small: true,
    caption: <>Deaf &amp; PWDs Community Served</>,
  },
];

/* ---------------- Join ---------------- */

export const VOLUNTEER_BENEFITS = [
  { icon: "Heart", title: "Personal growth", text: "Develop new skills and gain valuable experience working with the Deaf community." },
  { icon: "Users", title: "Community impact", text: "Directly impact lives and contribute to meaningful social change in Nigeria." },
  { icon: "Award", title: "Recognition", text: "Receive certificates, references, and opportunities for leadership roles." },
  { icon: "Network", title: "Networking", text: "Connect with like-minded individuals and professionals in the disability sector." },
] as const;

export const AVAILABILITY = ["Weekends Only", "Weekdays Only", "Flexible", "Full Time"];

export const ROLES = [
  "Sign Language Teaching",
  "Advocacy & Awareness",
  "Event Coordination",
  "Fundraising",
  "Administrative Support",
  "Other",
];

export const PARTNERSHIPS = [
  {
    img: "/img/stage-work.jpg",
    alt: "Colleagues in a warm meeting, one signing",
    title: "Corporate partnership",
    body: "Align your corporate social responsibility goals with our mission — through sponsorship, employee volunteering and cause-related engagement.",
    benefits: ["CSR fulfilment and brand enhancement", "Employee engagement opportunities", "Positive public relations impact", "Tax benefits and incentives"],
  },
  {
    img: "/img/service-relay.jpg",
    alt: "A video call connecting two people through an interpreter",
    title: "NGO collaboration",
    body: "Join forces with us on specific projects or campaigns. We collaborate with fellow NGOs to maximise impact, share resources, and create comprehensive solutions for the Deaf community.",
    benefits: ["Shared resources and expertise", "Joint advocacy and campaigning", "Research and data sharing", "Capacity-building opportunities"],
  },
  {
    img: "/img/stage-school.jpg",
    alt: "A classroom with a student signing alongside an interpreter",
    title: "Education partnership",
    body: "Work with us to promote inclusive education. We partner with schools, colleges and universities on Deaf-friendly policies, curriculum support and accessibility initiatives.",
    benefits: ["Inclusive education programmes", "Teacher training workshops", "Accessibility audits", "Student exchange programmes"],
  },
];
