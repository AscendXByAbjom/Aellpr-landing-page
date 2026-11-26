import { ImageResponse } from "next/og";

// Built once into a file for the static export (`output: "export"`).
export const dynamic = "force-static";

export const alt = "Aellpr — Your next move. Made possible.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf8f4",
          padding: "64px 72px",
          color: "#17252b",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 800, letterSpacing: -4 }}>
            aellpr<span style={{ color: "#f56b22", marginLeft: 4 }}>↗</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: 3,
              border: "2px solid #f56b22",
              color: "#f56b22",
              padding: "10px 16px",
              borderRadius: 8,
            }}
          >
            BUILT AROUND LAGOS
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 112, lineHeight: 0.95, letterSpacing: -6 }}>
          <span>Your next move.</span>
          <span style={{ color: "#f56b22" }}>Made possible.</span>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 26 }}>
          {[
            ["Send", "#f56b22"],
            ["Go", "#17252b"],
            ["Business AI", "#3e4095"],
          ].map(([l, c]) => (
            <div key={l} style={{ display: "flex", background: c, color: "white", padding: "12px 26px", borderRadius: 999 }}>
              {l}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
