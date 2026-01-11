import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid footer text-light py-5">
      <div className="container">
        <div className="row justify-content-between">
          {/* Brand and Description */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="fw-bold mb-3">✦ ToolsGarage</h3>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
              ToolsGarage is a free platform offering essential digital
              utilities. From image optimization to text processing, we build
              tools that make your daily workflow faster and more efficient.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-5">
            <h4 className="fw-bold mb-4">Quick Links</h4>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled footer-links">
                  <li>
                    <Link
                      to="/qr-generator"
                      className="text-decoration-none text-secondary d-block mb-2"
                    >
                      QR Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/image-tools"
                      className="text-decoration-none text-secondary d-block mb-2"
                    >
                      Image Compressor
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/text-utils"
                      className="text-decoration-none text-secondary d-block mb-2"
                    >
                      Text Utilities
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/image-converter"
                      className="text-decoration-none text-secondary d-block mb-2"
                    >
                      Image Converter
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled footer-links">
                  <li>
                    <Link
                      to="/youtube-tools"
                      className="text-decoration-none text-secondary d-block mb-2"
                    >
                      YT Downloader
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/url-shortener"
                      className="text-decoration-none text-secondary d-block mb-2"
                    >
                      URL Shortener
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pdf-compressor"
                      className="text-decoration-none text-secondary d-block mb-2"
                    >
                      PDF Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/password-generator"
                      className="text-decoration-none text-secondary d-block mb-2"
                    >
                      Password Gen
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-secondary">
              &copy; {new Date().getFullYear()} ToolsGarage - All rights
              Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <Link
              to="/contributors"
              className="text-secondary text-decoration-none me-3 small"
            >
              Contributors
            </Link>
            <Link
              to="/signup"
              className="text-secondary text-decoration-none small"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
