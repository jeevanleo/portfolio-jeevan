import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Jeevan</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/jeevan_satyam/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://github.com/jeevanleo"
            className="footer__social-link"
            target="_blank"
          >
            <i class="ui uil-github-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/jeevan-satyam"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
        </div>

        <span className="footer__copy">All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
