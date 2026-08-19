import React, { useState } from "react";

const imageFormats = {
  jpg: { label: "JPG", mimeType: "image/jpeg", extension: "jpg" },
  png: { label: "PNG", mimeType: "image/png", extension: "png" },
  webp: { label: "WebP", mimeType: "image/webp", extension: "webp" },
};

const ImageConverter = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState("jpg");

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    convertImage(file, selectedFormat);
  };

  const handleFormatChange = (e) => {
    const format = e.target.value;
    setSelectedFormat(format);

    if (imageFile) {
      convertImage(imageFile, format);
    }
  };

  const convertImage = (file, formatKey) => {
    const format = imageFormats[formatKey];
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) => {
            if (!blob) return;

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
          1,
        );
      };
      img.src = event.target.result;
    };
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
          Convert any image file to JPG, PNG, or WebP format. <br />
          Click the button below to download the converted image.
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

      <div className="image-drop-area">
        <h3>Drop here or click above to select an image</h3>
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
