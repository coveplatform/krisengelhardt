"use client";

import { useState } from "react";
import { site } from "@/content/site";
import styles from "./ContactForm.module.css";

const services = ["New website", "Redesign", "Ecommerce", "Custom software", "Something else"];

// FormSubmit forwards each submission to the inbox. The first one triggers a one-time activation email.
const endpoint = `https://formsubmit.co/ajax/${site.email}`;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ defaultServices = [] }: { defaultServices?: string[] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return;

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone") || "—",
          interested_in: data.getAll("services").join(", ") || "—",
          message: data.get("message"),
          _subject: `New enquiry from ${data.get("name")}`,
          _replyto: data.get("email"),
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) !== "true") throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.done} role="status">
        <p className={styles.doneTitle}>Thanks, your message is on its way.</p>
        <p className="muted">I’ll get back to you personally at the email you gave.</p>
        <button type="button" className="link" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <fieldset className={styles.services}>
        <legend>What can I help with?</legend>
        <div className={styles.chips}>
          {services.map((s) => (
            <label key={s} className={styles.chip}>
              <input
                type="checkbox"
                name="services"
                value={s}
                defaultChecked={defaultServices.includes(s)}
              />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <label className={styles.field}>
        <span>
          Phone <em>optional</em>
        </span>
        <input name="phone" type="tel" autoComplete="tel" />
      </label>

      <label className={styles.field}>
        <span>Tell me a little about it</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="What does your business do, and what would you like to change?"
        />
      </label>

      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className={styles.honey} aria-hidden="true" />

      <div className={styles.submitRow}>
        <button type="submit" className={styles.submit} disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message →"}
        </button>
        {status === "error" && (
          <p className={styles.error} role="alert">
            That didn’t send. Please email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> instead.
          </p>
        )}
      </div>
    </form>
  );
}
