import React from "react";

export default function Item({ text }) {
  return (
    <div
      className="rows"
      style={{
        width: "80%",
        height: "60px",
        background: `var(--sunset)`,
        borderRadius: "20px",
        padding: "0px 20px",
      }}
    >
      <p>{text}</p>
    </div>
  );
}
