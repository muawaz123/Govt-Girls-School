import React, { useEffect, useState } from "react";
import logo from "../assets/image/light-logo.png";
 
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // smooth scroll
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={scrolled ? "shadow-sm   bg-light" : " "}>
      <nav className="navbar navbar-expand-lg navbar-light bg-maroon">
        <div className="container">
          <a
            className="navbar-brand text-white fw-bold d-flex align-items-center"
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
          >
            <img
              src={logo}
              alt="GSG Logo"
              style={{ width: 40, marginRight: 10 }}
            />
            Govt School Girls
          </a>

          <button
            className="navbar-toggler border-0 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {["Home", "Admission", "Faculty", "Subject", "Contact"].map((item) => {
                const id = item.toLowerCase();
                return (
                  <li className="nav-item" key={item}>
                    <a
                      href={`#${id}`}
                      className="nav-link text-white fw-semibold px-3"
                      onClick={(e) => handleNavClick(e, id)}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
