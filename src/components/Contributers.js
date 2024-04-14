import React from "react";

export default function Contributers() {
  return (
    <div className="container-fluid contributerscomp">
      <div className="text-center shine-parent  ">
        <h5 className="card-head-contributer my-2 btn-shine">✦ Contributers</h5>
        <h5 className="mb-4">
          This project is open-source and contributions are welcome. <br />
          The contributors are listed below:
        </h5>
      </div>

      <div className="row justify-content-center py-3">
        <div className="col-sm-3">
          <div className="contributer-card card text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_34.png"
              alt="Avatar"
              className="card-img-top rounded-circle contributer-img m-auto "
            />
            <div className="card-body">
              <h4>Anshul Gora</h4>
              <p className="card-text">Frontend Developer</p>
              <a
                href="https://www.linkedin.com/in/anshul-gora"
                target="_blank"
                className="fw-bold px-3 py-2 download-btn link-btn"
              >
                LinkedIn <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="text-center card contributer-card">
            <img
              src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_35.png"
              alt="Avatar"
              className="card-img-top rounded-circle contributer-img m-auto"
            />
            <div className="card-body">
              <h4>Aryan Mishra</h4>
              <p className="card-text">Frontend Developer</p>
              <a
                href="https://www.linkedin.com/in/aryan-mishra-062a5a200/"
                className="fw-bold px-3 py-2 download-btn link-btn"
                target="_blank"
              >
                LinkedIn <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
