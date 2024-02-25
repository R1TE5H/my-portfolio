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
        <div>
          <p className="subHero">Researcher and Developer</p>
          <p style={{ marginBottom: "15px" }}>
            LaunchPad@Stevens | 2022 - Present
          </p>
          <ul type="circle">
            <li>
              Research Web.3 and Blockchain Technologies as well as Artificial
              Intelligence and Machine Learning Developments
            </li>
            <li>Create Application Prototypes using Figma Prototype Design</li>
            <li>
              Create engaging websites and applications using HTML, CSS,
              JavaScript, and React.JS
            </li>
            <li>
              Develop algorithms to accomplish desired tasks using JavaScript,
              Python, C++, and Java
            </li>
          </ul>
        </div>
        <div>
          <p className="subHero">
            Lead Algorithm Developer and Circuit Builder
          </p>
          <p style={{ marginBottom: "15px" }}>
            Gallois Autonomous Robot Competition | Spring 2023
          </p>
          <ul type="circle">
            <li>
              Tasked with designing and developing an autonomous robot capable
              of navigating an obstacle course and avoiding collisions.
            </li>
            <li>
              Created the Robot using SolidWorks CAD and FlashPrint Slicing to
              design and print the body which was used to house a WeMos Circuit
              Board, Motor, and Ultrasonic Sensors.
            </li>
            <li>
              Created Path-Finding, Target Recognition and Obstacle Avoidance
              algorithms using C++ and the Arduino IDE.
            </li>
            <li>Placed 6th out of 150 teams</li>
          </ul>
        </div>
        <div>
          <p className="subHero">Intern</p>
          <p style={{ marginBottom: "15px" }}>WellCast ROI | Summer 2021</p>
          <ul type="circle">
            <li>
              Reviewed and ran the WellCast algorithm with various data inputs
            </li>
            <li>
              Developed client presentation within a team environment based on
              the WellCast algorithm's results
            </li>
            <li>Collaborated in teams of 3-4</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <p className="subHead">Projects -- Pending Upload...</p>
      </div>
    </>
  );
}
