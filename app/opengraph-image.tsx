import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — websites and software for small businesses.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#f4f1ea",
          color: "#161513",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 72, fontWeight: 600, letterSpacing: "-0.02em" }}>
          {site.name}
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 36, color: "#6f6a62" }}>
          Independent web designer + developer · Melbourne
        </div>
      </div>
    ),
    size,
  );
}
