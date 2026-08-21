import React, { useState } from "react";

const imageFormats = {
  jpg: { label: "JPG", mimeType: "image/jpeg", extension: "jpg" },
  png: { label: "PNG", mimeType: "image/png", extension: "png" },
  webp: { label: "WebP", mimeType: "image/webp", extension: "webp" },
  avif: { label: "AVIF", mimeType: "image/avif", extension: "avif" },
};

const ImageConverter = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState("jpg");
  const [quality, setQuality] = useState(90);
  const [conversionError, setConversionError] = useState("");

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setConversionError("");
    convertImage(file, selectedFormat);
  };

  const handleFormatChange = (e) => {
    const format = e.target.value;
    setSelectedFormat(format);
    setConversionError("");

    if (imageFile) {
      convertImage(imageFile, format);
    }
  };

  const handleQualityChange = (e) => {
    const nextQuality = Number(e.target.value);
    setQuality(nextQuality);

    if (imageFile && selectedFormat !== "png") {
      convertImage(imageFile, selectedFormat, nextQuality);
    }
  };

  const convertImage = (file, formatKey, selectedQuality = quality) => {
    const format = imageFormats[formatKey];
    setImageSrc(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (format.mimeType === "image/jpeg") {
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              setConversionError(
                `${format.label} conversion is not supported by this browser.`,
              );
              return;
            }

            const convertedFile = new File(
              [blob],
              `converted.${format.extension}`,
              { type: format.mimeType },
            );
            const nextImageSrc = URL.createObjectURL(convertedFile);
            setImageSrc((previousImageSrc) => {
              if (previousImageSrc) {
                URL.revokeObjectURL(previousImageSrc);
              }
              return nextImageSrc;
            });
          },
          format.mimeType,
          selectedQuality / 100,
        );
      };
      img.onerror = () => setConversionError("Unable to read this image.");
      img.src = event.target.result;
    };
    reader.onerror = () => setConversionError("Unable to read this image.");
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = `Converted_Image.${imageFormats[selectedFormat].extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="image-converter" className="container-fluid imageconvertorcomp">
      <div className="text-center">
        <h5 className="card-head my-2">Image Converter</h5>

        <h5 className="mb-4">
          Convert images to JPG, PNG, WebP, or AVIF format. <br />
          Choose a format and download the converted image.
        </h5>
      </div>

      <br />
      <h5>Upload Image:</h5>
      <div className="input-group mb-3">
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="imageFormat" className="form-label fw-bold">
          Output Format:
        </label>
        <select
          id="imageFormat"
          value={selectedFormat}
          onChange={handleFormatChange}
          className="form-select"
        >
          {Object.entries(imageFormats).map(([formatKey, format]) => (
            <option key={formatKey} value={formatKey}>
              {format.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="imageQuality" className="form-label fw-bold">
          Quality: {quality}%
        </label>
        <input
          type="range"
          id="imageQuality"
          min="10"
          max="100"
          step="5"
          value={quality}
          onChange={handleQualityChange}
          disabled={selectedFormat === "png"}
          className="form-range"
        />
      </div>

      <div className="image-drop-area">
        <h3>Drop here or click above to select an image</h3>
        {conversionError && (
          <p className="text-danger" role="alert">
            {conversionError}
          </p>
        )}
        {imageSrc && (
          <img
            src={imageSrc}
            alt={`Converted to ${imageFormats[selectedFormat].label}`}
            className="image-preview img-fluid rounded"
          />
        )}
      </div>

      {imageSrc && (
        <>
          <br />
          <button onClick={handleDownload} className="download-btn">
            Download Converted Image
          </button>
        </>
      )}
    </div>
  );
};

export default ImageConverter;
