import React from "react";
import { Link } from "react-scroll";
export default function Tools() {
  return (
    <div className="container-fluid toolsdiv">
      <h1 className="text-center">Tools Available</h1>

      <div className="row toolsrow">
        <div className="col-md-4">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title fw-bold">Image Compressor</h5>
              <p className="card-text fw-light">
                This tool allows you to compress the image and reduce the size
                as per your requirements.
              </p>
              <Link
                to="image-compressor"
                href="www.google.com"
                className="btn btn-primary fw-bold"
              >
                Explore Tool
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title fw-bold">QR Code Generator</h5>
              <p className="card-text fw-light">
                This tool allows you to create a QR code for your website or any
                text you want to encode.
              </p>
              <Link
                to="QR-generator"
                href="www.google.com"
                className="btn btn-primary fw-bold"
              >
                Explore Tool
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title fw-bold">Image Text Extractor</h5>
              <p className="card-text fw-light">
                This tool allows you to extract text from images and copy it to
                your clipboard. Copy the text and use it anywhere.
              </p>
              <Link
                to="image-text-extractor"
                href="www.google.com"
                className="btn btn-primary fw-bold"
              >
                Explore Tool
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title fw-bold">TextUtility Tools</h5>
              <p className="card-text fw-light">
                This tool allows you to convert your text to Uppercase,
                Lowercase, Capitalize and also copy the text.
              </p>
              <Link
                to="text-util"
                href="www.google.com"
                className="btn btn-primary fw-bold"
              >
                Explore Tool
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title fw-bold">Password Generator</h5>
              <p className="card-text fw-light">
                This tool allows you to generate strong passwords with custom
                length and include symbols and numbers.
              </p>
              <Link
                to="password-generator"
                href="www.google.com"
                className="btn btn-primary fw-bold"
              >
                Explore Tool
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title fw-bold">URL Shortner</h5>
              <p className="card-text fw-light">
                This tool allows you to shorten your long URLs and share them
                easily with others. Allows to Copy the URL.
              </p>
              <Link
                to="url-shortner"
                href="www.google.com"
                className="btn btn-primary fw-bold"
              >
                Explore Tool
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
