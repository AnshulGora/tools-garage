import React, { useState } from "react";
import Tesseract from "tesseract.js";

const TextExtractor = () => {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const extractTextFromImage = () => {
    setLoading(true);
    Tesseract.recognize(
      image,
      "eng+hin", // language code for English and Hindi
      { logger: (info) => console.log(info) }
    ).then(({ data: { text } }) => {
      setExtractedText(text);
      setLoading(false);
    });
  };

  const copyTextToClipboard = () => {
    navigator.clipboard
      .writeText(extractedText)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying text:", error);
      });
  };

  return (
    <div id="image-text-extractor" className="container-fluid textextcomp">
      <div className="text-center">
        <h5 className="card-head my-2">Image Text Extractor</h5>

        <h5 className="mb-4">
          This tool allows to extract text from images. <br />
          Extract text from images and save it to your clipboard.
        </h5>
      </div>
      <br />

      <h5>Upload Image:</h5>
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        className="form-control mb-4"
      />
      <button
        onClick={extractTextFromImage}
        disabled={!image || loading}
        className="download-btn"
      >
        {loading ? "Extracting..." : "Extract Text"}
      </button>
      {extractedText && (
        <div className="mt-4">
          <h4>Extracted Text:</h4>
          <p>{extractedText}</p>
          <button onClick={copyTextToClipboard} className="download-btn">
            Copy Text
          </button>
        </div>
      )}
    </div>
  );
};

export default TextExtractor;
