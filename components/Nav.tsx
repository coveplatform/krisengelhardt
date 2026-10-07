"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, phoneHref, site } from "@/content/site";
import styles from "./Nav.module.css";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.bar}`}>
          <Link href="/" className={styles.mark} onClick={close}>
            <strong>{site.name}</strong>
            <span className={styles.role}>{site.role}</span>
          </Link>

          <nav aria-label="Primary" className={styles.desktop}>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/#contact" className={`button button-solid ${styles.cta}`}>
              Start a project
            </Link>
          </nav>

          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={styles.sheet} hidden={!open}>
        <nav aria-label="Mobile" className="container">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.sheetFoot}>
            <Link href="/#contact" className="button button-solid" onClick={close}>
              Start a project
            </Link>
            <a href={`tel:${phoneHref}`} className={styles.sheetMail}>
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className={styles.sheetMail}>
              {site.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
