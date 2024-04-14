import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouteLink, useLocation } from "react-router-dom";

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
                  to="\"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tools
                </RouteLink>
                <ul className="dropdown-menu" role="button">
                  <li>
                    <ScrollLink
                      smooth="true"
                      className="dropdown-item"
                      to="image-compressor"
                    >
                      Image Compressor
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      smooth="true"
                      className="dropdown-item"
                      to="QR-generator"
                    >
                      QR Code Generator
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      smooth="true"
                      className="dropdown-item"
                      to="image-text-extractor"
                    >
                      Image Text Extractor
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      smooth="true"
                      className="dropdown-item"
                      to="password-generator"
                    >
                      Password Genarator
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      smooth="true"
                      className="dropdown-item"
                      to="yt-thumbnail-downloader"
                    >
                      Yt Thumbnail Downloader
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      smooth="true"
                      className="dropdown-item"
                      to="url-shortner"
                    >
                      URL Shortner
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      smooth="true"
                      className="dropdown-item"
                      to="pdf-compressor"
                    >
                      PDF Compressor
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      smooth="true"
                      className="dropdown-item"
                      to="image-converter"
                    >
                      Image Converter
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      smooth="true"
                      className="dropdown-item"
                      to="text-util"
                    >
                      Text Utility
                    </ScrollLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <RouteLink className="nav-link" to="/contributers">
                  Contributers
                </RouteLink>
              </li>

              <li className="nav-item">
                <RouteLink className="nav-link" to="/signup">
                  <i class="fa-solid fa-user-astronaut"></i>
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
