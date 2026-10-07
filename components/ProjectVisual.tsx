import Image from "next/image";
import type { Project } from "@/content/projects";
import { SiteMock } from "./SiteMock";
import styles from "./ProjectVisual.module.css";

/**
 * Desktop screenshot with the mobile one overlapping it. Falls back to the drawn
 * preview until the project has screenshots.
 */
export function ProjectVisual({
  project,
  preload = false,
  sizes = "(min-width: 1320px) 760px, (min-width: 900px) 58vw, 100vw",
}: {
  project: Project;
  preload?: boolean;
  sizes?: string;
}) {
  const { image, mobileImage } = project;
  if (!image) {
    return project.mock ? (
      <SiteMock company={project.title} mock={project.mock} />
    ) : (
      <div className={styles.scene} />
    );
  }

  return (
    <div className={styles.scene}>
      <div className={styles.desktop} data-solo={!mobileImage}>
        <Image src={image.src} alt={image.alt} fill sizes={sizes} preload={preload} />
      </div>
      {mobileImage && (
        <div className={styles.phone}>
          <Image src={mobileImage.src} alt={mobileImage.alt} fill sizes="240px" />
        </div>
      )}
    </div>
  );
}
