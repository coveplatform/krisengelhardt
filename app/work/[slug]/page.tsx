import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/ProjectVisual";
import { caseStudies } from "@/content/case-studies";
import { getProject, projects } from "@/content/projects";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.title, description: project.summary, url: `/work/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const study = caseStudies[slug];

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <div className="container">
        <Link href="/#work" className={`link ${styles.back}`}>
          ← All work
        </Link>

        <header className={styles.header}>
          <h1>{project.title}</h1>
          <dl className={styles.facts}>
            <div>
              <dt>Project</dt>
              <dd>{project.type}</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>{project.tags.join(", ")}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="link">
                    Live, visit site ↗
                  </a>
                ) : project.concept ? (
                  "Redesign proposal"
                ) : (
                  "Live"
                )}
              </dd>
            </div>
          </dl>
        </header>

        <div className={styles.visual}>
          <ProjectVisual project={project} preload sizes="(min-width: 1320px) 1240px, 100vw" />
        </div>

        <section className={styles.section} aria-labelledby="overview-title">
          <h2 id="overview-title" className="label">
            <span>Overview</span>
          </h2>
          <div className={styles.overview}>
            {study && (
              <div>
                <p className={styles.kicker}>The problem</p>
                <p className={styles.problem}>{study.problem}</p>
              </div>
            )}
            <div className={styles.description}>
              <p className={styles.kicker}>What I did</p>
              {project.description.map((para) => (
                <p key={para}>{para}</p>
              ))}
              {project.concept && (
                <p className={styles.note}>
                  This is a redesign proposal. The business name, logo and contact details have been
                  changed.
                </p>
              )}
            </div>
          </div>
        </section>

        {study && (
          <section className={styles.section} aria-labelledby="decisions-title">
            <h2 id="decisions-title" className="label">
              <span>Key decisions</span>
            </h2>
            <ol className={styles.decisions}>
              {study.decisions.map((d, i) => (
                <li key={d.title}>
                  <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{d.title}</h3>
                  <p className="muted">{d.body}</p>
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>

      {study && (
        <>
          <section className={`container ${styles.section}`} aria-labelledby="homepage-title">
            <h2 id="homepage-title" className="label">
              <span>The homepage, top to bottom</span>
            </h2>
            <div className={styles.board}>
              <div
                className={styles.slices}
                style={{ "--cols": study.homepage.length } as React.CSSProperties}
              >
                {study.homepage.map((s) => (
                  <Image
                    key={s.src}
                    src={s.src}
                    alt={s.alt}
                    width={s.width}
                    height={s.height}
                    sizes="(min-width: 900px) 420px, 75vw"
                    quality={90}
                  />
                ))}
              </div>
            </div>
            {study.homepage.length > 1 && (
              <p className={styles.hint}>Each column continues from the one before it.</p>
            )}
          </section>

          <section className={`container ${styles.section}`} aria-labelledby="pages-title">
            <h2 id="pages-title" className="label">
              <span>Inside {project.concept ? "the site" : "the product"}</span>
            </h2>
            <div className={styles.pages}>
              {study.pages.map((p, i) => (
                <figure key={p.src}>
                  <div className={styles.frame}>
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={p.width}
                      height={p.height}
                      sizes={
                        study.pages.length % 2 === 1 && i === 0
                          ? "(min-width: 1320px) 1240px, 100vw"
                          : "(min-width: 900px) 620px, 100vw"
                      }
                      quality={90}
                    />
                  </div>
                  {p.caption && <figcaption>{p.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>

          <section className={`container ${styles.section}`} aria-labelledby="phones-title">
            <h2 id="phones-title" className="label">
              <span>On a phone</span>
            </h2>
            <div className={styles.board}>
              <div className={styles.phones}>
                {study.phones.map((p) => (
                  <figure key={p.src}>
                    <div className={styles.phone}>
                      <Image
                        src={p.src}
                        alt={p.alt}
                        width={p.width}
                        height={p.height}
                        sizes="300px"
                        quality={90}
                      />
                    </div>
                    {p.caption && <figcaption>{p.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <div className="container">
        <section className={styles.cta}>
          <p className={styles.ctaText}>Want something like this for your business?</p>
          <Link href="/#contact" className="button button-solid">
            Start a project
          </Link>
        </section>

        {next.slug !== project.slug && (
          <Link href={`/work/${next.slug}`} className={styles.next}>
            <span className="muted">Next project</span>
            <span className={styles.nextTitle}>{next.title} →</span>
          </Link>
        )}
      </div>
    </article>
  );
}
