import React from "react";

//Style Import
import "../styles/main.css";
import "../styles/projects.css";
// 10 bars
export default function ProjectsBar() {
  const locations = [
    {
      id: "beach_side",
      url: beach_side,
      height: `calc(300px + 15vw)`,
    },
    {
      id: "toronto",
      url: toronto,
      height: `calc(150px + 15vw)`,
    },
  ];

  return (
    <div
      className="center"
      style={{
        justifyContent: "center",
        gap: "2vw",
      }}
    >
      {locations.map((element) => (
        <div
          className="projects-bar"
          key={element.id}
          style={{
            height: `${element.height}`,
            background: `url(${element.url})`,
            backgroundSize: "cover",
          }}
        />
      ))}
    </div>
  );
}
