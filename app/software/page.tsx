import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { getProject } from "@/content/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Custom software for small businesses",
  description:
    "Automations, internal tools and integrations that take repetitive work off small businesses in Melbourne. Plain-English process, built around how you already work.",
  alternates: { canonical: "/software" },
};

const signs = [
  "You copy the same information from one system into another.",
  "A spreadsheet has quietly become the thing your business runs on.",
  "Quotes, invoices or reports take hours to put together by hand.",
  "You chase people for the same updates every week.",
  "You pay for software that almost does what you need, but not quite.",
];

const before = [
  "Check the new order email",
  "Copy the details into the order spreadsheet",
  "Enter it again in the accounting software",
  "Email the customer a confirmation",
  "Add the delivery to the driver’s list",
];

const kinds = [
  {
    title: "Automations",
    body: "Jobs that run on their own in the background.",
    examples: ["Orders sent to your accounting software", "Weekly reports", "Reminder emails and texts"],
  },
  {
    title: "Internal tools",
    body: "Simple apps for you and your team, built around how you already work.",
    examples: ["Job tracking", "Stock and ordering", "Client records"],
  },
  {
    title: "Customer-facing tools",
    body: "Things your customers use on your website that save you back-and-forth.",
    examples: ["Quote calculators", "Booking and quote forms", "Client portals"],
  },
  {
    title: "Connections",
    body: "Getting the systems you already pay for to talk to each other.",
    examples: ["Shopify or WooCommerce with Xero", "Website forms with your CRM", "Google Sheets with email"],
  },
];

const steps = [
  {
    title: "A quick chat",
    body: "Tell me about the task that’s eating your time. No technical knowledge needed, just explain how it works today.",
  },
  {
    title: "A clear plan",
    body: "I come back with a short plan in plain English: what the tool will do, what it connects to, how long it will take and what it will cost.",
  },
  {
    title: "Build and try",
    body: "You get a working version early, try it with real work, and we adjust it until it fits.",
  },
  {
    title: "Launch and support",
    body: "I set it up, show your team how it works, and stay around for fixes and changes.",
  },
];

const questions = [
  {
    q: "Do I need to know anything technical?",
    a: "No. You explain the problem in plain English. I handle the technical side and explain any choices in plain terms.",
  },
  {
    q: "Will it work with the tools I already use?",
    a: "Usually, yes. Popular business tools like Xero, Shopify, WooCommerce, Google Sheets, email and SMS can generally be connected, so you don’t have to change how you work.",
  },
  {
    q: "Isn’t custom software expensive?",
    a: "It doesn’t have to be. The most useful tools are often small and focused: one job, done well. You’ll know the cost before any work starts.",
  },
  {
    q: "What happens if something breaks?",
    a: "I look after what I build. If something stops working, or your business changes, I fix or update it.",
  },
];

const proof = ["mixreflect", "drift"].map((slug) => getProject(slug)!);

export default function SoftwarePage() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <p className="label">
          <span>Custom software</span>
        </p>
        <h1>Software that takes the repetitive work off your plate.</h1>
        <p className={styles.lede}>
          If part of your week is spent copying, chasing or re-typing the same things, a small piece
          of software built around your business can usually do it for you. Not a big IT project,
          just a focused tool that does one job well.
        </p>
      </section>

      <section className={`container ${styles.section}`} aria-labelledby="signs-title">
        <h2 id="signs-title" className="label">
          <span>Sound familiar?</span>
        </h2>
        <ul className={styles.signs}>
          {signs.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className={styles.note}>If one of these is you, there’s probably a simpler way.</p>
      </section>

      <section className={`container ${styles.section}`} aria-labelledby="example-title">
        <h2 id="example-title" className="label">
          <span>What it looks like</span>
        </h2>
        <p className={styles.exampleIntro}>
          Example: a business taking orders online.
        </p>
        <div className={styles.compare}>
          <div className={styles.before}>
            <p className={styles.compareLabel}>Before: every order, by hand</p>
            <ol>
              {before.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div className={styles.after}>
            <p className={styles.compareLabel}>After</p>
            <p className={styles.afterText}>
              The order comes in. Everything else happens on its own, and you get a short summary at
              the end of the day.
            </p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`} aria-labelledby="kinds-title">
        <h2 id="kinds-title" className="label">
          <span>What I can build</span>
        </h2>
        <ul className={styles.kinds}>
          {kinds.map((k) => (
            <li key={k.title}>
              <h3>{k.title}</h3>
              <p>{k.body}</p>
              <ul className={styles.examples}>
                {k.examples.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.section}`} aria-labelledby="steps-title">
        <h2 id="steps-title" className="label">
          <span>How it works</span>
        </h2>
        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p className="muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={`container ${styles.section}`} aria-labelledby="proof-title">
        <h2 id="proof-title" className="label">
          <span>Software I’ve built</span>
        </h2>
        <p className={styles.proofIntro}>
          I build and run my own software products too, so the tools I make for clients get the
          same care.
        </p>
        <ul className={styles.proof}>
          {proof.map((p) => (
            <li key={p.slug}>
              <Link href={`/work/${p.slug}`} className={styles.proofCard}>
                {p.image && (
                  <div className={styles.proofImage}>
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      sizes="(min-width: 760px) 50vw, 100vw"
                    />
                  </div>
                )}
                <h3>{p.title}</h3>
                <p className="muted">{p.summary}</p>
                <span className="link">View project →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.section}`} aria-labelledby="faq-title">
        <h2 id="faq-title" className="label">
          <span>Common questions</span>
        </h2>
        <dl className={styles.faq}>
          {questions.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd className="muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <ContactSection
        title="Got a task that eats your week?"
        lede="Tell me how it works today. I’ll tell you honestly whether software can help, and what that would look like."
        defaultServices={["Custom software"]}
      />
    </>
  );
}
