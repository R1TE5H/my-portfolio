/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "../styles/main.css";
import "../styles/landing.css";

import js from "../assets/skills/javaScript.png";
import py from "../assets/skills/python.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css3.png";
import cPlusPlus from "../assets/skills/c++.png";
import java from "../assets/skills/java.png";
import react from "../assets/skills/react.png";
import figma from "../assets/skills/figma.png";
import node from "../assets/skills/node.png";

import resume from "../assets/documents/resume.pdf";

export default function Home() {
  const skills = [
    { img: js, skill: "JavaScript" },
    { img: react, skill: "React.js" },
    { img: node, skill: "Node.js" },
    { img: java, skill: "Java" },
    { img: py, skill: "Python" },
    { img: cPlusPlus, skill: "C++" },
    { img: html, skill: "HTML5" },
    { img: css, skill: "CSS3" },

    { img: figma, skill: "Figma" },
  ];

  return (
    <>
      <div className="center section header fadeIn">
        <p>
          <span className="hero gradient-text">Ritesh Persaud</span>
          <br />
          <span className="subHero">
            Full Stack Developer and Software Engineering Student
          </span>
        </p>
        <br />
        <div className="rows" style={{ gap: "20px" }}>
          <button className="btn-lg gradient-bg">Contact Me</button>
          <a href={resume} download="Ritesh_Persaud_Resume.pdf">
            <button className="btn-lg white-outline"> Resume</button>
          </a>
        </div>
      </div>
      <div className="section">
        <p className="subHead">Skills</p>
        <div className="card-container">
          {skills.map((skill) => (
            <div className="skills-card center columns">
              <img
                alt={skill.skill}
                src={skill.img}
                style={{ width: "60px" }}
              />
              <h3>{skill.skill}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <p className="subHead">Projects -- Pending Upload...</p>
      </div>
    </>
  );
}
