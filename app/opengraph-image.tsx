import { ImageResponse } from "next/og";
import { site } from "./site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: 80,
          background: "#f7f5ef",
          color: "#172b28",
          borderLeft: "16px solid #247567",
        }}
      >
        <div style={{ fontSize: 28, color: "#247567" }}>paulemas.dev</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 32 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 42, marginTop: 16 }}>Senior Frontend Engineer</div>
        <div style={{ fontSize: 28, marginTop: 40 }}>React · TypeScript · Next.js · Fintech · SaaS · AI</div>
      </div>
    ),
    size,
  );
}
