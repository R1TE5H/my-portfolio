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
import { FaGithub } from "react-icons/fa";

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

  const experiences = [
    {
      role: "Researcher and Developer",
      tags: ["WEB.3", "REACT.JS", "NODE.JS", "FIGMA"],
      company: "LaunchPad@Stevens",
      date: "2022 - Present",
      content: [
        "Research emerging technologies such as Blockchains and Artificial Intelligence",
        "Developed a Blockchain using Object-Oriented Programming in JavaScript.",
        "Create Rapid Application Prototypes using Figma Prototype Design.",
        "Create engaging React.js applications utilizing React Hooks, External Libraries, Reusable Functional Components and Props",
        "Implement REST API using Express.js and Node.js to interact with a MongoDB database server.",
      ],
    },
    {
      role: "Lead Software Developer",
      tags: ["C++", "ALGORITHMS", "ROBOTICS"],
      company: "WellCast ROI",
      date: "Summer 2021",
      content: [
        "Tasked with designing and developing an autonomous robot capable of navigating an obstacle course and avoiding collisions.",
        "Created the Robot using SolidWorks CAD and FlashPrint Slicing to design and print the body which was used to house a WeMos Circuit Board, Motor, and Ultrasonic Sensors.",
        "Created Path-Finding, Target Recognition and Obstacle Avoidance algorithms using C++ and the Arduino IDE.",
        "Placed 6th out of 150 teams.",
      ],
    },
    {
      role: "Intern",
      tags: ["MICROSOFT OFFICE"],
      company: "WellCast ROI",
      date: "Summer 2021",
      content: [
        "Reviewed and ran the WellCast algorithm with various data inputs.",
        "Developed client presentation within a team environment based on the WellCast algorithm's results.",
        "Collaborated in teams of 3-4.",
      ],
    },
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
          <a href="mailto:riteshpersaud2003@gmail.com">
            {" "}
            <button className="btn-lg gradient-bg">Contact Me</button>
          </a>

          <a href={resume} download="Ritesh_Persaud_Resume.pdf">
            <button className="btn-lg white-outline"> Resume</button>
          </a>
        </div>
      </div>
      <div className="section">
        <p className="hero">Skills</p>
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
      <div
        id="section"
        style={{
          backgroundColor: `var(--smoke)`,
          padding: "2% 15% 5% 15%",
          marginBottom: "2%",
        }}
      >
        <p className="hero center">Experiences</p>
        {experiences.map((element) => (
          <>
            <div key={element.role}>
              <div className="rows" style={{ justifyContent: "space-between" }}>
                <p>
                  <span style={{ fontSize: "30px", color: `var(--sun)` }}>
                    |
                  </span>{" "}
                  <span className="subHero" style={{ fontWeight: "bold" }}>
                    {element.role}
                  </span>
                </p>
                <div className="rows" style={{ gap: "10px" }}>
                  {element.tags.map((tag) => (
                    <p key={tag} className="gradient-bg tag">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
              <p
                style={{ marginBottom: "15px" }}
              >{`${element.company} | ${element.date}`}</p>{" "}
              <ul type="circle">
                {element.content.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </>
        ))}
      </div>
      <div className=" center">
        <a
          style={{ textDecoration: "none", color: `var(--grey)` }}
          href="https://github.com/R1TE5H"
          target="blank"
        >
          <FaGithub size={150} className="nav-content" />
        </a>
      </div>
    </>
  );
}
