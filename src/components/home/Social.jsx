import React from "react";

const Social = () => {
  return (
    /* all social media handles are here from the first page starts form insta,lindein,github */
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/jeevan-satyam"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/jeevanleo"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.instagram.com/jeevan_satyam/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://leetcode.com/u/jeevanleo/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-leetcode"></i>
      </a>
    </div>
  );
};

export default Social;
