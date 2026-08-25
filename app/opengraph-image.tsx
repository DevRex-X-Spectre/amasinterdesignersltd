import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";
export const alt = "AMAS Inter Designers Ltd. - Signage, Branding and Fabrication";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#021033",
          color: "#f7f7f7",
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px 88px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18, width: 650 }}>
          <div style={{ color: "#fd7402", fontSize: 24, fontWeight: 700, letterSpacing: 5 }}>
            AMAS INTER DESIGNERS LTD.
          </div>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.08 }}>
            Signs, branding, and fabrication made to last.
          </div>
          <div style={{ color: "#dfe3ea", fontSize: 25, lineHeight: 1.35 }}>
            Design, production, and installation from Jos, Plateau.
          </div>
        </div>
        <img
          src={new URL(site.logo, site.url).toString()}
          alt=""
          width="300"
          height="300"
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    size,
  );
}
