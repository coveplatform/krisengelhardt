import { phoneHref, site } from "@/content/site";
import { ContactForm } from "./ContactForm";
import styles from "./ContactSection.module.css";

export function ContactSection({
  title = "Have something you’d like to build?",
  lede = "Whether you need a new website, want to improve an existing one, or have a business process you think could work better, tell me about it.",
  defaultServices,
}: {
  title?: string;
  lede?: string;
  defaultServices?: string[];
}) {
  return (
    <section id="contact" className={`container ${styles.contact}`} aria-labelledby="contact-title">
      <p className="label">
        <span>Contact</span>
        <span className={styles.status}>
          <i aria-hidden="true" />
          {site.availability}
        </span>
      </p>
      <h2 id="contact-title">{title}</h2>

      <div className={styles.grid}>
        <div className={styles.intro}>
          <p className={styles.lede}>{lede}</p>

          <ul className={styles.direct}>
            <li>
              <span>Call or text</span>
              <a href={`tel:${phoneHref}`} className="link">
                {site.phone}
              </a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${site.email}`} className="link">
                {site.email}
              </a>
            </li>
            <li>
              <span>Based in</span>
              <p>{site.location}. Working with clients locally and remotely.</p>
            </li>
          </ul>
        </div>

        <ContactForm defaultServices={defaultServices} />
      </div>
    </section>
  );
}
