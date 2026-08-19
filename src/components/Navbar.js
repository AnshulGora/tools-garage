import React from "react";
import { Link as RouteLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <RouteLink className="navbar-brand" to="/">
            ToolsGarage
          </RouteLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <RouteLink className="nav-link" to="/">
                  Home
                </RouteLink>
              </li>
              <li className="nav-item dropdown">
                <RouteLink
                  to="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tools
                </RouteLink>
                <ul className="dropdown-menu" role="button">
                  <li>
                    <RouteLink
                      smooth="true"
                      className="dropdown-item"
                      to="/image-tools"
                    >
                      Image Compressor
                    </RouteLink>
                  </li>
                  <li>
                    <RouteLink
                      smooth="true"
                      className="dropdown-item"
                      to="/qr-generator"
                    >
                      QR Code Generator
                    </RouteLink>
                  </li>
                  <li>
                    <RouteLink
                      smooth="true"
                      className="dropdown-item"
                      to="/password-generator"
                    >
                      Password Genarator
                    </RouteLink>
                  </li>
                  <li>
                    <RouteLink
                      smooth="true"
                      className="dropdown-item"
                      to="/url-shortener"
                    >
                      URL Shortner
                    </RouteLink>
                  </li>
                  <li>
                    <RouteLink
                      smooth="true"
                      className="dropdown-item"
                      to="/pdf-compressor"
                    >
                      PDF Compressor
                    </RouteLink>
                  </li>
                  <li>
                    <RouteLink
                      smooth="true"
                      className="dropdown-item"
                      to="/image-converter"
                    >
                      Image Converter
                    </RouteLink>
                  </li>
                  <li>
                    <RouteLink className="dropdown-item" to="/world-clock">
                      World Clock
                    </RouteLink>
                  </li>
                  <li>
                    <RouteLink
                      className="dropdown-item"
                      to="/currency-converter"
                    >
                      Currency Converter
                    </RouteLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <RouteLink className="nav-link" to="/contributors">
                  Contributors
                </RouteLink>
              </li>

              <li className="nav-item">
                <RouteLink className="nav-link" to="/signup">
                  <i className="fa-solid fa-user-astronaut" />
                </RouteLink>
              </li>

              {/* <li className="nav-item">
                <a
                  href="https://github.com/AnshulGora/tools-garage"
                  target="_blank"
                  className="nav-link"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
