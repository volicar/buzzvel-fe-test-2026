import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 17,
        paddingBottom: 39,
        background: "#3157f6",
      }}
    >
      <div style={{ width: 25, height: 101, background: "#fff" }} />
      <div style={{ width: 25, height: 25, background: "#ffee7e" }} />
    </div>,
    size,
  );
}
