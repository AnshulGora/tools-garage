import React from "react";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row  justify-content-between ">
        <div className="col-md-7">
          <h3 className="fw-bold">ToolsGarage</h3>
          <p>
            ToolsGarage is a platform where you can find all the tools that you
            need to make your work easy and fast. We have a variety of tools
            that you can use for free. We have tools like Image Compressor, QR
            Code Generator, TextUtility Tools, and many more.
          </p>
        </div>
        <div className="col-md-4  ">
          <h3 className="fw-bold mx-auto">Quick Links</h3>
          <ul>
            <li className="dropdown-item">
              <Link to="QR-generator">QR Code Generator</Link>
            </li>
            <li className="dropdown-item list">
              <Link to="image-compressor"> Image Compressor </Link>
            </li>
            <li className="dropdown-item list">
              <Link to="text-util">TextUtility Tools</Link>
            </li>
            <li className="dropdown-item list">
              <Link to="image-converter"> Image Convertor </Link>
            </li>
            <li className="dropdown-item list">
              <Link to="yt-thumbnail-downloader">Yt Thumbnail Downloader</Link>
            </li>
            <li className="dropdown-item list">
              <Link to="url-shortener">URL Shortener</Link>
            </li>
            <li className="dropdown-item list">
              <Link to="pdf-compressor">PDF Compressor</Link>
            </li>
            <li className="dropdown-item list">
              <Link to="password-generator"> Password Generator </Link>
            </li>
            <li className="dropdown-item list">
              <Link to="image-text-extractor">Image Text Extractor</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center">@toolsGarage - All rights Reserved.</p>
    </div>
  );
}
