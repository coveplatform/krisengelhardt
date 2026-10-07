import { site } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <p>{site.location}</p>
      <a href={`mailto:${site.email}`} className="link">
        {site.email}
      </a>
    </footer>
  );
}
