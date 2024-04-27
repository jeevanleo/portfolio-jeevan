import React, { useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  useEffect(() => {
    const scrollup = document.querySelector(".scrollup");
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 560) scrollup.classList.add("show-scroll");
      else scrollup.classList.remove("show-scroll");
    });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
