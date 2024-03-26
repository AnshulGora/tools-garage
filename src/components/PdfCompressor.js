import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

const PdfCompressor = () => {
  const [file, setFile] = useState(null);
  const [compressedPdfBlob, setCompressedPdfBlob] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      alert("Please select a PDF file.");
      return;
    }
    setFile(selectedFile);
  };

  const compressPdf = async () => {
    if (!file) return;

    try {
      setLoading(true);

      const pdfBytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(pdfBytes);

      // Placeholder: No compression logic added yet

      const compressedPdfBytes = await pdfDoc.save();
      const compressedPdfBlob = new Blob([compressedPdfBytes], {
        type: "application/pdf",
      });
      setCompressedPdfBlob(compressedPdfBlob);
    } catch (error) {
      console.error("Error compressing PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadPdf = () => {
    if (compressedPdfBlob) {
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(compressedPdfBlob);
      downloadLink.download = "compressed.pdf";
      downloadLink.click();

      setFile(null);
      setCompressedPdfBlob(null);
    }
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSelectFileClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div id="pdf-compressor" className="container-fluid pdfcomp">
      <div className="text-center">
        <h5 className="card-head my-2">PDF Compressor</h5>

        <h5 className="mb-4">
          Compress PDF files without losing quality. <br />
          Click the button below to download the compressed PDF.
        </h5>
      </div>
      <div
        className="file-dropzone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          className="form-control mb-3"
          accept="application/pdf"
        />
        <span>
          {!file || loading
            ? "Upload or drop the PDF file"
            : `File uploaded, Now hit the Compress Button`}
        </span>
      </div>

      <div>
        <button
          onClick={compressPdf}
          disabled={!file || loading}
          className="download-btn"
        >
          {loading ? "Compressing..." : "Compress PDF"}
        </button>{" "}
        {compressedPdfBlob && (
          <button onClick={downloadPdf} className="download-btn">
            Download PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default PdfCompressor;
