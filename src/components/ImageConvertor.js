import React, { useState } from "react";

const ImageConverter = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    convertToJPG(file);
  };

  const handleClick = () => {
    document.getElementById("imageInput").click();
  };

  const convertToJPG = (file) => {
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
            const convertedFile = new File([blob], "converted.jpg", {
              type: "image/jpeg",
            });
            setImageSrc(URL.createObjectURL(convertedFile));
          },
          "image/jpeg",
          1
        );
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = "Converted_Image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="image-converter" className="container-fluid imageconvertorcomp">
      <div className="text-center">
        <h5 className="card-head my-2">Image Converter</h5>

        <h5 className="mb-4">
          This tool converts any image file to JPG format. <br />
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

      <div className="image-drop-area">
        <h3>Drop here or click above to select an image</h3>
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Converted to JPG"
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
