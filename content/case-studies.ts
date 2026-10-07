// Extra content for each project page: the problem, key decisions and the screenshot gallery.
// Images live in /public/work/<slug>/.

export type Figure = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type CaseStudy = {
  /** One or two sentences on what wasn't working. */
  problem: string;
  decisions: { title: string; body: string }[];
  /** The full homepage, cut into columns (top to bottom). */
  homepage: Figure[];
  /** Inner pages and key screens, 1440×900. */
  pages: Figure[];
  /** Phone screens, 780×1688 (390×844 at 2x). */
  phones: Figure[];
};

const slices = (slug: string, heights: number[], label: string): Figure[] =>
  heights.map((height, i) => ({
    src: `/work/${slug}/full-${i + 1}.jpg`,
    alt: `${label} homepage, part ${i + 1} of ${heights.length}`,
    width: 720,
    height,
  }));

const page = (slug: string, file: string, caption: string): Figure => ({
  src: `/work/${slug}/${file}.jpg`,
  alt: caption,
  width: 1440,
  height: 900,
  caption,
});

const phone = (slug: string, file: string, caption: string): Figure => ({
  src: `/work/${slug}/${file}.jpg`,
  alt: `${caption} on a phone`,
  width: 780,
  height: 1688,
  caption,
});

export const caseStudies: Record<string, CaseStudy> = {
  "florist-redesign": {
    problem:
      "Flower orders are usually urgent and usually made on a phone, but the existing site looked dated, was awkward on mobile and made ordering harder than it needed to be.",
    decisions: [
      {
        title: "Shop by occasion first",
        body: "Most people know why they’re buying before they know what. Birthday, sympathy, new baby and more sit right under the hero.",
      },
      {
        title: "Delivery timing up front",
        body: "The same-day cut-off is in the top bar and on every product, answering the most common question before anyone has to call.",
      },
      {
        title: "Simpler product pages",
        body: "Size, optional extras with clear prices, and one add-to-cart button. Delivery and substitution details fold away until needed.",
      },
      {
        title: "Built for ordering on a phone",
        body: "Large tap targets and an add-to-cart bar that stays on screen while customers scroll.",
      },
    ],
    homepage: slices("florist-redesign", [650, 650], "Florist"),
    pages: [page("florist-redesign", "product", "Product page: size, extras and delivery timing in one place")],
    phones: [
      phone("florist-redesign", "m-product", "Product page"),
      phone("florist-redesign", "m-sticky", "Add-to-cart bar that follows you down the page"),
    ],
  },

  "party-store-redesign": {
    problem:
      "The business does far more than sell balloons: styling, hire, ready-made packages and several stores. The existing site made it hard to see any of that.",
    decisions: [
      {
        title: "Start from the celebration",
        body: "Birthdays, baby showers, weddings and corporate events each lead to the packages, balloons and hire pieces that suit them.",
      },
      {
        title: "Real setups you can copy",
        body: "A gallery of past parties, each listing what’s in it, with “Get this look” to start an enquiry for something similar.",
      },
      {
        title: "A planner instead of a contact form",
        body: "Seven quick questions turn a vague enquiry into everything the team needs to send ideas and a price.",
      },
      {
        title: "Key actions always in reach",
        body: "On phones, a bottom bar keeps Shop, Call, Plan a party and Bag one tap away.",
      },
    ],
    homepage: slices("party-store-redesign", [2000, 2000, 1999], "Party store"),
    pages: [
      page("party-store-redesign", "party", "Party idea page: what’s in the setup, and Get this look"),
      page("party-store-redesign", "product", "Product page: colours, number, pickup or delivery"),
      page("party-store-redesign", "planner", "Step-by-step party planner"),
    ],
    phones: [
      phone("party-store-redesign", "m-home", "Homepage with a bottom action bar"),
      phone("party-store-redesign", "m-party", "Party idea"),
      phone("party-store-redesign", "m-product", "Product page"),
    ],
  },

  "chauffeur-redesign": {
    problem:
      "A premium service with a website that didn’t reflect it. Booking a car took more effort than it should, and the presentation didn’t match the experience.",
    decisions: [
      {
        title: "Book from the first screen",
        body: "Pickup, destination, date, time and passengers sit right in the hero, so people can start booking without looking for a form.",
      },
      {
        title: "A five-step quote flow",
        body: "One question at a time, with suggestions for airports, hotels and venues, ending in a ready-to-quote request.",
      },
      {
        title: "A fleet you can browse",
        body: "Each car shows its class, passengers and luggage space, so customers can choose before they call.",
      },
      {
        title: "Calm, premium look",
        body: "A dark palette, generous type and photography-led layouts that match the service.",
      },
    ],
    homepage: slices("chauffeur-redesign", [1798, 1798, 1796], "Chauffeur service"),
    pages: [
      page("chauffeur-redesign", "fleet", "Fleet, with passengers and luggage for each car"),
      page("chauffeur-redesign", "quote", "Quote flow with suggested pickup locations"),
    ],
    phones: [
      phone("chauffeur-redesign", "m-home", "Booking on the first screen"),
      phone("chauffeur-redesign", "m-fleet", "Fleet"),
      phone("chauffeur-redesign", "m-quote", "Quote flow"),
    ],
  },

  mixreflect: {
    problem:
      "Musicians often release tracks without knowing if they’re ready, and the feedback they can get is slow, vague or expensive.",
    decisions: [
      {
        title: "A verdict, not a dashboard",
        body: "Every report leads with one clear call, from “not ready” to “release ready”, and a score, before any detail.",
      },
      {
        title: "Grounded in the audio",
        body: "A separate analysis service measures tempo, key, loudness, energy and structure, so the report isn’t guesswork.",
      },
      {
        title: "Real listeners as a second opinion",
        body: "A listening room where real people hear the track and get paid for honest reviews.",
      },
    ],
    homepage: slices("mixreflect", [1829, 1828], "MixReflect"),
    pages: [
      page("mixreflect", "report", "Sample report: the verdict and score up front"),
      page("mixreflect", "reviewer", "Reviewer sign-up, the other side of the product"),
    ],
    phones: [
      phone("mixreflect", "m-home", "Homepage"),
      phone("mixreflect", "m-report", "Report"),
      phone("mixreflect", "m-reviewer", "Reviewer sign-up"),
    ],
  },

  drift: {
    problem:
      "Running a YouTube channel takes hours per video: research, scripting, voiceover, editing, thumbnails and uploads, every week.",
    decisions: [
      {
        title: "Three controls, everything else hidden",
        body: "The home screen shows autopilot, videos per week and channel focus. Everything else stays out of the way until it’s needed.",
      },
      {
        title: "The whole production line",
        body: "Topic research, scripts, voiceover, footage, animated infographics, captions, music, thumbnails and scheduled uploads.",
      },
      {
        title: "Review before it posts",
        body: "Finished videos wait for approval, so the owner stays in control without doing the work.",
      },
      {
        title: "Learns what works",
        body: "Performance from each video feeds into what Drift makes next.",
      },
    ],
    homepage: slices("drift", [2018, 2018, 2018], "Drift"),
    pages: [
      page("drift", "dashboard", "Dashboard: the channel at a glance"),
      page("drift", "create", "One-off video: topic, format and cost up front"),
      page("drift", "plan", "Plan: channel focus and video style"),
      page("drift", "onboarding", "Onboarding: pick a focus and see an estimate"),
    ],
    phones: [phone("drift", "m-home", "Homepage"), phone("drift", "m-pricing", "Pricing")],
  },
};
