import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-md-8">
          <h3 className="fw-bold">ToolsGarage</h3>
          <p>
            ToolsGarage is a platform where you can find all the tools that you
            need to make your work easy and fast. We have a variety of tools
            that you can use for free. We have tools like Image Compressor, QR
            Code Generator, TextUtility Tools, and many more.
          </p>
        </div>
        <div className="col-md-4">
          <h3 className="fw-bold">Quick Links</h3>
          <ul>
            <li> Image Compressor </li>
            <li>QR Code Generator</li>
            <li>TextUtility Tools</li>
            <li> Image Convertor </li>
            <li> Youtube Thumbnail Downloader </li>
            <li>URL Shortener</li>
            <li>PDF Compressor</li>
          </ul>
        </div>

        <p className="text-center">@toolsGarage - All rights Reserved.</p>
      </div>
    </div>
  );
}
