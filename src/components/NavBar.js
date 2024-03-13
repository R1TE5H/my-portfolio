import React from "react";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";

import "../styles/main.css";
import "../styles/nav-bar.css";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <>
      <Headroom style={{ zIndex: 10 }}>
        <div
          className="rows nav-bar"
          style={{ justifyContent: "space-between" }}
        >
          <Link to="/" className="logo link">
            Ritesh Persaud
          </Link>
          <div className="rows" style={{ gap: "20px" }}>
            <a
              style={{ textDecoration: "none", color: `var(--grey)` }}
              href="https://www.linkedin.com/in/ritesh-persaud-6688562aa"
              target="blank"
            >
              <FaLinkedinIn size={20} className="nav-content" />
            </a>{" "}
            <a
              style={{ textDecoration: "none", color: `var(--grey)` }}
              href="https://github.com/R1TE5H"
              target="blank"
            >
              <FaGithub size={20} className="nav-content" />
            </a>
          </div>
        </div>
      </Headroom>
    </>
  );
}
