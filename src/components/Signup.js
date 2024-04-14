import React from "react";

export default function Signup() {
  return (
    <div className="container-fluid contributerscomp">
      <div className="text-center">
        <h5 className="card-head-contributer my-2 btn-shine">✦ Signup</h5>
        <h5 className="mb-4">
          Sign up to get access to all the Premium tools. <br />
          Already have an account?
        </h5>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="signup-card">
            <div className="card-body">
              {/* <h2 className="card-title text-center mb-4">Sign up</h2> */}
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                  />
                </div>
                <button type="submit" className="download-btn w-100">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
