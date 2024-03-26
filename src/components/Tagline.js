import React from "react";

export default function Tagline() {
  return (
    <div className="container-fluid taglinediv">
      <h1 className="taglineh1 text-center">
        Simplify Your Workflow:
        <br /> Effortless Online Tools at Your Fingertips
      </h1>

      <h4 className="text-center">
        Supercharge your productivity with free, easy-to-use online tools.
      </h4>

      <div className="text-center taglinebtns">
        <a href="www.google.com" target="blank" className="taglinebtn1">
          Start with Free Email
        </a>

        <a href="www.google.com" target="blank" className="taglinebtn2">
          Start with Gmail
        </a>
      </div>

      <p className="text-center checkpoints">
        <i class="fa-solid fa-check"></i> Free forever for core features &nbsp;
        &nbsp;
        <i class="fa-solid fa-check"></i> More tools than any other platform
      </p>
    </div>
  );
}
