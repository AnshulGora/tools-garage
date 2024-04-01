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

      <div className="row py-3">
        <div className="col-sm-3">
          <div className="contributer-card card text-center">
            <img
              src="https://avatars.githubusercontent.com/u/76802258?v=4"
              alt="Avatar"
              className="card-img-top rounded-circle contributer-img"
            />
            <div className="card-body">
              <h4>Aryan Mishra</h4>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="contributer-card card text-center">
            <img
              src="https://avatars.githubusercontent.com/u/76802258?v=4"
              alt="Avatar"
              className="card-img-top rounded-circle contributer-img"
            />
            <div className="card-body">
              <h4>Anshul Gora</h4>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
