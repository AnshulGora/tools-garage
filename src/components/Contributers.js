import React from "react";

export default function Contributers() {
  return (
    <div className="container-fluid contributerscomp">
      <div className="text-center">
        <h5 className="card-head my-2">✦ Contributers</h5>
        <h5 className="mb-4">
          This project is open-source and contributions are welcome. <br />
          The contributors are listed below:
        </h5>
      </div>

      <div className="row justify-content-evenly  py-3">
        <div className="col-sm-3">
          <div className=" text-center contributer-card  card">
            <img
              src="https://avatars.githubusercontent.com/u/76802258?v=4"
              alt="Avatar"
              className="card-img-top rounded-circle contributer-img m-auto "
            />
            <div className="card-body">
              <h4>Aryan Mishra</h4>
              <p>Frontend Developer</p>
              <a
                href="https://www.linkedin.com/in/aryan-mishra-062a5a200/"
                className="btn btn-primary fw-bold"
              >
                LinkedIn
              </a>
              {/* https://github.com/aryan-mishra1404 */}
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="contributer-card card text-center">
            <img
              src="https://avatars.githubusercontent.com/u/76802258?v=4"
              alt="Avatar"
              className="card-img-top rounded-circle contributer-img m-auto "
            />
            <div className="card-body">
              <h4>Anshul Gora</h4>
              <p>Frontend Developer</p>
              <a href="" className="btn btn-primary fw-bold">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
