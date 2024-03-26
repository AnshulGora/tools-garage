import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="www.google.com">
            ToolsGarage
          </a>
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tools Availabe
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="www.google.com">
                      Image Compressor
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="www.google.com">
                      QR Code Generator
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="www.google.com">
                      Image Text Extractor
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="www.google.com">
                      Password Genarator
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="www.google.com">
                      Yt Thumbnail Downloader
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="www.google.com">
                      URL Shortner
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="www.google.com">
                      PDF Compressor
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="www.google.com"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
