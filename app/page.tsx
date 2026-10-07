import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import styles from "./page.module.css";

const services: { title: string; body: string; href?: string }[] = [
  {
    title: "Websites",
    body: "Modern websites built from scratch or redesigned from an existing site.",
  },
  {
    title: "Ecommerce",
    body: "Online stores using WooCommerce, Shopify or another platform that suits the business.",
  },
  {
    title: "Custom Software",
    body: "Simple internal tools, automations and applications designed to remove repetitive work and improve business processes.",
    href: "/software",
  },
  {
    title: "Website Improvements",
    body: "Performance, usability, mobile design, checkout issues, integrations and general technical cleanup.",
  },
];

const steps = [
  {
    title: "Understand",
    body: "We work out what isn’t working and what the project needs to achieve.",
  },
  {
    title: "Design + Build",
    body: "I design and develop the solution, with previews and feedback throughout the process.",
  },
  {
    title: "Launch",
    body: "Everything is tested, connected and launched, with ongoing support available if required.",
  },
];

// Drop a portrait at public/kris.jpg and it replaces the placeholder.
const hasPhoto = existsSync(join(process.cwd(), "public", "kris.jpg"));

export default function HomePage() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <h1>I design and build websites and useful software for small businesses.</h1>
        <div className={styles.heroFoot}>
          <p className={styles.lede}>
            Websites, ecommerce, redesigns and custom tools built around how your business actually
            works.
          </p>
          <p className="muted">
            {site.location} · {site.availability}
          </p>
          <div className={styles.heroActions}>
            <a href="#work" className="link">
              View selected work ↓
            </a>
            <a href="#contact" className="button button-solid">
              Start a project
            </a>
          </div>
        </div>
      </section>

      <section id="work" className={`container ${styles.section}`} aria-labelledby="work-title">
        <h2 id="work-title" className="label">
          <span>Selected work</span>
          <span>{String(projects.length).padStart(2, "0")}</span>
        </h2>
        <ol className={styles.projects}>
          {projects.map((p, i) => (
            <li key={p.slug} className={styles.project} data-flip={i % 2 === 1}>
              <Link href={`/work/${p.slug}`} className={styles.visual} tabIndex={-1} aria-hidden="true">
                <ProjectVisual project={p} preload={i === 0} />
              </Link>
              <div className={styles.projectText}>
                <p className={styles.projectMeta}>
                  <span>{p.type}</span>
                  <span>{p.year}</span>
                </p>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <p className={styles.tags}>{p.tags.join(" · ")}</p>
                <Link href={`/work/${p.slug}`} className="link">
                  View project →
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="services" className={`container ${styles.section}`} aria-labelledby="services-title">
        <h2 id="services-title" className="label">
          <span>What I do</span>
        </h2>
        <ul className={styles.services}>
          {services.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p className="muted">{s.body}</p>
              {s.href && (
                <Link href={s.href} className={`link ${styles.serviceLink}`}>
                  How it works →
                </Link>
              )}
            </li>
          ))}
        </ul>
        <p className={styles.statement}>
          I’m platform-agnostic. I work with WordPress, WooCommerce, Shopify, Wix and custom-built
          solutions depending on what makes sense for the project.
        </p>
        <Link href="/software" className={styles.softwareBand}>
          <span className={styles.softwareLabel}>Custom software</span>
          <span className={styles.softwareText}>
            Doing the same task every week? Software can probably do it for you.
          </span>
          <span className={styles.softwareCta}>See how it works →</span>
        </Link>
      </section>

      <section id="about" className={`container ${styles.section}`} aria-labelledby="about-title">
        <h2 id="about-title" className="label">
          <span>About</span>
        </h2>
        <div className={styles.about}>
          <div className={styles.portrait}>
            {hasPhoto ? (
              <Image
                src="/kris.jpg"
                alt={`Portrait of ${site.name}`}
                fill
                sizes="(min-width: 900px) 400px, 100vw"
              />
            ) : (
              <span aria-hidden="true">KE</span>
            )}
          </div>
          <div className={styles.aboutText}>
            <p className={styles.aboutLead}>
              I’m Kris, a Melbourne-based freelance web designer and developer.
            </p>
            <p>
              I work primarily with small businesses that need a new website, have outgrown an
              existing one, or have a business problem that could be solved with better software.
            </p>
            <p>
              My approach is fairly straightforward: understand what the business actually needs,
              make it look good, keep it easy to use, and avoid adding technology simply for the
              sake of it.
            </p>
            <p>
              Alongside website design and development, I build custom tools and software to
              simplify repetitive processes and improve how businesses operate. My background in
              business and marketing also means I tend to think about websites as business tools
              rather than purely design projects.
            </p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`} aria-labelledby="process-title">
        <h2 id="process-title" className="label">
          <span>How I work</span>
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

      <ContactSection />
    </>
  );
}
