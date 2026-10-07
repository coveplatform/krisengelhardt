import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container" style={{ paddingBlock: "64px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "12px" }}>Page not found</h1>
      <p className="muted" style={{ marginBottom: "24px" }}>
        This page doesn’t exist, or has moved.
      </p>
      <Link href="/">← Back to all work</Link>
    </section>
  );
}
