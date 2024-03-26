import React from "react";

export default function Tools() {
  return (
    <div className="container-fluid toolsdiv">
      <h1 className="text-center">Tools Available</h1>

      <div className="row toolsrow">
        <div className="col-md-4">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Image Compressor</h5>
              <p className="card-text fw-light">
                This tool allows you to compress the image and reduce the size
                as per your requirements.
              </p>
              <a href="www.google.com" className="btn btn-primary">
                Explore Tool
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">QR Code Generator</h5>
              <p className="card-text fw-light">
                This tool allows you to create a QR code for your website or any
                text you want to encode.
              </p>
              <a href="www.google.com" className="btn btn-primary">
                Explore Tool
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Image Text Extractor</h5>
              <p className="card-text fw-light">
                This tool allows you to extract text from images and copy it to
                your clipboard. Copy the text and use it anywhere.
              </p>
              <a href="www.google.com" className="btn btn-primary">
                Explore Tool
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">TextUtility Tools</h5>
              <p className="card-text fw-light">
                This tool allows you to convert your text to Uppercase,
                Lowercase, Capitalize and also copy the text.
              </p>
              <a href="www.google.com" className="btn btn-primary">
                Explore Tool
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text fw-light">
                This tool allows you to generate strong passwords with custom
                length and include symbols and numbers.
              </p>
              <a href="www.google.com" className="btn btn-primary">
                Explore Tool
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">URL Shortner</h5>
              <p className="card-text fw-light">
                This tool allows you to shorten your long URLs and share them
                easily with others. Allows to Copy the URL.
              </p>
              <a href="www.google.com" className="btn btn-primary">
                Explore Tool
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
