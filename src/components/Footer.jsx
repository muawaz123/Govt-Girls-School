import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/image/light-logo.png";
 

const Footer = () => {
  return (
    <footer className="bg-maroon text-white pt-5">
      <div className="container">
        <div className="row">
          {/* Logo and About */}
          <div className="col-md-3 mb-4 text-center text-md-start">
            <div className="d-flex align-items-center mb-3">
              <a href="#home" className="me-2">
                <img
                  src={logo}
                  alt="GSG Logo"
                  className="img-fluid"
                  style={{ maxWidth: 50 }}
                />
              </a>
              <h5 className="fw-bold text-light mb-0">
                Government School for Girls
              </h5>
            </div>
            <p className="small text-light">
              Providing quality education for girls, empowering every student to
              grow academically and personally.
            </p>
          </div>

          {/* Portals */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-light">Portals</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#faculty"
                  className="text-white text-decoration-none footer-link"
                >
                  Faculty
                </a>
              </li>
              <li>
                <button className="text-white text-decoration-none footer-link bg-transparent border-0 p-0">
                  Faculty Portal (On Campus)
                </button>
              </li>
              <li>
                <button className="text-white text-decoration-none footer-link bg-transparent border-0 p-0">
                  Student Portal (Online)
                </button>
              </li>
              <li>
                <button className="text-white text-decoration-none footer-link bg-transparent border-0 p-0">
                  Student Portal (On Campus)
                </button>
              </li>
            </ul>
          </div>

          {/* Media & News */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-light">Media & News</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#admission"
                  className="text-white text-decoration-none footer-link"
                >
                  Admission
                </a>
              </li>
              <li>
                <button className="text-white text-decoration-none footer-link bg-transparent border-0 p-0">
                  Events & Announcements
                </button>
              </li>
              <li>
                <button className="text-white text-decoration-none footer-link bg-transparent border-0 p-0">
                  Photo Gallery
                </button>
              </li>
              <li>
                <a
                  href="#subjects"
                  className="text-white text-decoration-none footer-link"
                >
                  Subjects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-light">Contact</h5>
            <ul className="list-unstyled small">
              <li>School Street # 2, Lahore, Pakistan</li>
              <li>+92 300 8045345</li>
              <li>info.official@gsg.edu.pk</li>
            </ul>
            <div className="d-flex gap-3 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5 footer-link"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5 footer-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5 footer-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5 footer-link"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center py-3">
          <small>
            Government School for Girls 2025 © Gujranwala - All Rights
            Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
