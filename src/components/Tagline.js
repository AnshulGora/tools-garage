import React from "react";
import { Link as RouteLink } from "react-router-dom";

export default function Tagline() {
  return (
    <div className="container-fluid taglinediv ">
      <div className="position-relative">
        <div className="bgeffect position-absolute top-50 start-50 translate-middle"></div>
      </div>
      <h1 className="taglineh1 text-center">
        Simplify Your Workflow:
        <br /> Effortless Online Tools at Your Fingertips
      </h1>

      <h4 className="text-center">
        Supercharge your productivity with free, easy-to-use online tools.
      </h4>

      <div className="text-center taglinebtns">
        <a
          href="https://github.com/AnshulGora/tools-garage"
          target="_blank"
          rel="noreferrer"
          className="taglinebtn1"
        >
          <i className="fa-brands fa-github" /> Visit Repository
        </a>

        <RouteLink to="/signup" className="taglinebtn2">
          Login with Gmail{" "}
        </RouteLink>
      </div>

      <p className="text-center checkpoints">
        <i className="fa-solid fa-check" /> Free forever for core features
        &nbsp; &nbsp;
        <i className="fa-solid fa-check" /> More tools than any other platform
      </p>

      <a href="#tools" className="tagline-scroll-link">
        Explore tools{" "}
        <i className="fa-solid fa-arrow-down" aria-hidden="true" />
      </a>
    </div>
  );
}
