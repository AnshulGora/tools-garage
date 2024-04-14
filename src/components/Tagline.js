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
          target="blank"
          className="taglinebtn1"
        >
          <i class="fa-brands fa-github"></i> Visit Repository
        </a>

        <RouteLink to="/signup" className="taglinebtn2">
          Login with Gmail{" "}
        </RouteLink>
      </div>

      <p className="text-center checkpoints">
        <i class="fa-solid fa-check"></i> Free forever for core features &nbsp;
        &nbsp;
        <i class="fa-solid fa-check"></i> More tools than any other platform
      </p>
    </div>
  );
}
