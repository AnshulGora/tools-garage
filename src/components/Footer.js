import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container-fluid footer text-light">
      <div className="container">
        <div className="footer-grid">
          {/* Brand and Description */}
          <div className="footer-brand">
            <h3 className="fw-bold">✦ ToolsGarage</h3>
            <p>
              ToolsGarage is a free platform offering essential digital
              utilities. From image optimization to text processing, we build
              tools that make your daily workflow faster and more efficient.
            </p>
            <span className="footer-tagline">Useful tools. Zero clutter.</span>
          </div>

          {/* Quick Links Section */}
          <div className="footer-links-section">
            <div className="footer-section-heading">
              <span>Explore</span>
              <span className="footer-heading-line" />
            </div>
            <div className="footer-links-grid">
              <div>
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
                      to="/image-converter"
                      className="text-decoration-none text-secondary d-block mb-2"
                    >
                      Image Converter
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/world-clock"
                      className="text-decoration-none text-secondary d-block mb-2"
                    >
                      World Clock
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-unstyled footer-links">
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
                  <li>
                    <Link
                      to="/currency-converter"
                      className="text-decoration-none text-secondary d-block mb-2"
                    >
                      Currency Converter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div>
            <p>
              &copy; {new Date().getFullYear()} ToolsGarage - All rights
              Reserved.
            </p>
          </div>
          <div className="footer-meta-links">
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
    </footer>
  );
}
