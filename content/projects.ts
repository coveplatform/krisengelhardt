export type MockStyle = {
  /** Page background of the redesigned site */
  bg: string;
  /** Main text colour */
  fg: string;
  /** Brand accent used for buttons */
  accent: string;
  /** Text colour on the accent */
  onAccent: string;
  /** Secondary panel colour */
  panel: string;
  display: "sans" | "serif" | "condensed";
  headline: string;
  cta: string;
  nav: string[];
};

type Shot = { src: string; alt: string; width: number; height: number };

export type Project = {
  slug: string;
  title: string;
  /** Short line under the title, e.g. "Website redesign + ecommerce". */
  type: string;
  year: string;
  /** Paragraph shown on the homepage card. */
  summary: string;
  /** Longer paragraphs for the project page. */
  description: string[];
  tags: string[];
  /** Live site, shown as a "Visit site" link. */
  url?: string;
  /** Marks redesign proposals (not yet live) so the project page can say so. */
  concept: boolean;
  /** Desktop screenshot in /public/work, 16:10. Taller shots are cropped to the top. */
  image?: Shot;
  /** Mobile screenshot shown overlapping the desktop one. */
  mobileImage?: Shot;
  /** Drawn preview used when there are no screenshots. */
  mock?: MockStyle;
};

const desktop = (file: string, alt: string): Shot => ({
  src: `/work/${file}`,
  alt,
  width: 1440,
  height: 900,
});

const mobile = (file: string, alt: string): Shot => ({
  src: `/work/${file}`,
  alt,
  width: 390,
  height: 844,
});

export const projects: Project[] = [
  {
    slug: "florist-redesign",
    title: "Melbourne Florist",
    type: "Website redesign + ecommerce",
    year: "2026",
    summary:
      "Redesign and redevelopment of an established Melbourne florist website, improving the visual design, mobile experience, ordering flow and WooCommerce setup.",
    description: [
      "An established florist delivering across Melbourne’s north, whose website had fallen behind the quality of their flowers.",
      "The redesign gives the site a cleaner visual identity, a properly mobile-first layout and a simpler ordering flow, with the WooCommerce store rebuilt and tidied so it’s easier to order from and easier to manage.",
    ],
    tags: ["Website Design", "WooCommerce", "Development"],
    concept: true,
    image: desktop("florist-desktop.jpg", "Florist website redesign homepage on desktop"),
    mobileImage: mobile("florist-mobile.jpg", "Florist website redesign product page on mobile"),
  },
  {
    slug: "party-store-redesign",
    title: "Party & Balloon Store",
    type: "Website redesign",
    year: "2026",
    summary:
      "A redesign for a Melbourne balloon and party retailer with several stores, bringing shopping, styling packages, hire and a party planner into one clear, mobile-friendly site.",
    description: [
      "A balloon and party retailer selling supplies, styling and hire from several stores across Melbourne. Their existing site made it hard to see everything they offer.",
      "The redesign organises the business around what customers are planning: occasions, ready-made decor packages, a party gallery with “get this look”, product pages with pickup or delivery, a step-by-step party planner and store pages with live opening hours.",
    ],
    tags: ["Web Design", "Ecommerce UX", "Front-end"],
    concept: true,
    image: desktop("party-store-desktop.jpg", "Party store website redesign homepage on desktop"),
    mobileImage: mobile("party-store-mobile.jpg", "Party store website redesign on mobile"),
  },
  {
    slug: "chauffeur-redesign",
    title: "Private Chauffeur Service",
    type: "Website redesign",
    year: "2026",
    summary:
      "A modern redesign for a Melbourne chauffeur business, focused on clearer navigation, stronger presentation and making it much quicker to book.",
    description: [
      "A private chauffeur service in Melbourne covering airport transfers, corporate travel, weddings and events. The existing site didn’t match the premium service behind it.",
      "The redesign gives the business a much stronger first impression, simplifies the navigation and puts booking front and centre, with a booking bar, address autocomplete and a short step-by-step quote flow.",
    ],
    tags: ["UI Design", "Web Design", "Front-end"],
    concept: true,
    image: desktop("chauffeur-desktop.jpg", "Chauffeur website redesign homepage on desktop"),
    mobileImage: mobile("chauffeur-mobile.jpg", "Chauffeur website redesign on mobile"),
  },
  {
    slug: "mixreflect",
    title: "MixReflect",
    type: "Software product",
    year: "2026",
    summary:
      "A web app that tells musicians whether a track is ready to release, combining measured audio analysis with feedback from a room of real listeners.",
    description: [
      "MixReflect gives musicians a straight answer before they release: paste a SoundCloud, YouTube or audio link and get a verdict, from “not ready” to “release ready”, with scores for hook strength, production, retention and more.",
      "Behind it is an audio analysis service that measures the track itself (tempo, key, loudness, energy and structure) so the report is grounded in the audio rather than guesswork, plus a paid listening room where real people hear the track too.",
    ],
    tags: ["Product Design", "Full-stack", "Audio Analysis"],
    url: "https://www.mixreflect.com",
    concept: false,
    image: desktop("mixreflect-desktop.jpg", "MixReflect homepage on desktop"),
    mobileImage: mobile("mixreflect-mobile.jpg", "MixReflect on mobile"),
  },
  {
    slug: "drift",
    title: "Drift",
    type: "Software product",
    year: "2026",
    summary:
      "A tool that runs a YouTube channel on autopilot: it writes, voices, edits and posts videos, then learns what the audience clicks on to make more of it.",
    description: [
      "Drift is a do-it-for-me YouTube studio for people who want a channel but not a production hobby. They say what the channel is about, connect YouTube and turn on autopilot.",
      "From there it runs the whole production line: topic research, a retention-first script, neural voiceover, stock footage and animated infographics, captions, music, a thumbnail and a scheduled upload, week after week. It tracks how each video performs and feeds that back into what it makes next.",
      "It’s a full multi-customer product, with Google sign-in, Stripe subscriptions and a deliberately simple dashboard that exposes three controls and hides everything else until it’s needed.",
    ],
    tags: ["Product Design", "Full-stack", "AI Automation"],
    url: "https://itsdrift.xyz",
    concept: false,
    image: desktop("drift-desktop.jpg", "Drift homepage on desktop"),
    mobileImage: mobile("drift-mobile.jpg", "Drift on mobile"),
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
