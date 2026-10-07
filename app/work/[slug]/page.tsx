import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/ProjectVisual";
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

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="container">
      <Link href="/#work" className={`link ${styles.back}`}>
        ← All work
      </Link>

      <header className={styles.header}>
        <h1>{project.title}</h1>
        <p className={styles.meta}>
          <span>{project.type}</span>
          <span>{project.year}</span>
        </p>
      </header>

      <div className={styles.visual}>
        <ProjectVisual project={project} preload sizes="(min-width: 1320px) 1240px, 100vw" />
      </div>

      <div className={styles.body}>
        <div className={styles.description}>
          {project.description.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>

        <aside className={styles.aside}>
          <p className="muted">Scope</p>
          <p>{project.tags.join(", ")}</p>
          {project.concept && (
            <p className={`muted ${styles.note}`}>Redesign proposal. Business name and details have been changed.</p>
          )}
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="button">
              Visit site ↗
            </a>
          )}
        </aside>
      </div>

      {next.slug !== project.slug && (
        <Link href={`/work/${next.slug}`} className={styles.next}>
          <span className="muted">Next project</span>
          <span className={styles.nextTitle}>{next.title} →</span>
        </Link>
      )}
    </article>
  );
}
