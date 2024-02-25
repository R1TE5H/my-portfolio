import React from "react";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";

import "../styles/main.css";
import "../styles/nav-bar.css";

import { FaLinkedinIn } from "react-icons/fa";

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
            <p className="nav-content">Projects</p>
            <p className="nav-content">Contact Me</p>
            <a
              style={{ textDecoration: "none", color: `var(--grey)` }}
              href="https://www.linkedin.com/in/ritesh-persaud-6688562aa"
              target="blank"
            >
              <FaLinkedinIn size={20} className="nav-content" />
            </a>
          </div>
        </div>
      </Headroom>
    </>
  );
}
