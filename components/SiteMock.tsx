import type { MockStyle } from "@/content/projects";
import styles from "./SiteMock.module.css";

type Props = {
  company: string;
  mock: MockStyle;
  domain?: string;
  /** Backdrop behind the devices. */
  backdrop?: string;
};

/**
 * A code-drawn preview of a redesigned site (desktop and phone). Used until real
 * screenshots are added to a project. Sharp at any size and weighs almost nothing.
 */
export function SiteMock({ company, mock, domain, backdrop }: Props) {
  const vars = {
    "--m-bg": mock.bg,
    "--m-fg": mock.fg,
    "--m-accent": mock.accent,
    "--m-on-accent": mock.onAccent,
    "--m-panel": mock.panel,
    ...(backdrop ? { background: backdrop } : {}),
  } as React.CSSProperties;

  const url = domain ?? `${company.toLowerCase().replace(/[^a-z]+/g, "")}.com.au`;

  return (
    <div className={styles.scene} style={vars} data-display={mock.display} aria-hidden="true">
      <div className={styles.desktop}>
        <div className={styles.screen}>
          <div className={styles.chrome}>
            <span className={styles.url}>{url}</span>
          </div>
          <div className={styles.site}>
            <div className={styles.nav}>
              <b>{company}</b>
              <span className={styles.navLinks}>
                {mock.nav.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </span>
            </div>
            <div className={styles.hero}>
              <div>
                <div className={styles.headline}>{mock.headline}</div>
                <div className={styles.lines}>
                  <i />
                  <i />
                </div>
                <span className={styles.cta}>{mock.cta}</span>
              </div>
              <div className={styles.image} />
            </div>
            <div className={styles.cards}>
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.phone}>
        <div className={styles.screen}>
          <div className={styles.site}>
            <div className={styles.nav}>
              <b>{company.split(" ")[0]}</b>
              <span className={styles.burger} />
            </div>
            <div className={styles.hero}>
              <div className={styles.headline}>{mock.headline}</div>
              <div className={styles.lines}>
                <i />
                <i />
              </div>
              <span className={styles.cta}>{mock.cta}</span>
              <div className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
