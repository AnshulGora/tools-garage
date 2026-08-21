import React, { useState } from "react";
import imageCompression from "browser-image-compression";

const PIXELS_PER_INCH = 96;
const CM_PER_INCH = 2.54;

const toPixels = (value, unit) =>
  unit === "cm"
    ? Math.max(1, Math.round((Number(value) / CM_PER_INCH) * PIXELS_PER_INCH))
    : Math.max(1, Math.round(Number(value)));

const getFileExtension = (mimeType) => {
  const extensions = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
    "image/svg+xml": "svg",
  };

  return extensions[mimeType] || "png";
};

const ImageCompressor = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [compressedFileName, setCompressedFileName] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageDimensions, setImageDimensions] = useState(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [dimensionUnit, setDimensionUnit] = useState("px");
  const [keepRatio, setKeepRatio] = useState(true);
  const [maxSizeKB, setMaxSizeKB] = useState("50"); // Default maximum size
  const [loading, setLoading] = useState(false); // Loading state
  const [compressionError, setCompressionError] = useState("");

  const handleImageChange = async (e) => {
    const imageFile = e.target.files[0];
    if (!imageFile) return;

    const imageUrl = URL.createObjectURL(imageFile);
    const dimensions = await new Promise((resolve) => {
      const image = new Image();
      image.onload = () => {
        resolve({ width: image.width, height: image.height });
        URL.revokeObjectURL(imageUrl);
      };
      image.src = imageUrl;
    });

    setImageFile(imageFile);
    setImageDimensions(dimensions);
    setWidth(dimensions.width);
    setHeight(dimensions.height);
    setOriginalImage(URL.createObjectURL(imageFile));
    setCompressedImage(null);
    setCompressedFileName(null);
  };

  const compressImage = async (file, requestedWidth, requestedHeight, unit) => {
    setLoading(true);
    setCompressionError("");

    try {
      const pixelWidth = toPixels(requestedWidth, unit);
      const pixelHeight = toPixels(requestedHeight, unit);
      let fileToCompress = file;

      if (pixelWidth && pixelHeight) {
        const imageUrl = URL.createObjectURL(file);
        const resizedBlob = await new Promise((resolve) => {
          const image = new Image();
          image.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = pixelWidth;
            canvas.height = pixelHeight;
            canvas
              .getContext("2d")
              .drawImage(image, 0, 0, pixelWidth, pixelHeight);
            canvas.toBlob(resolve, file.type || "image/png");
            URL.revokeObjectURL(imageUrl);
          };
          image.src = imageUrl;
        });

        if (resizedBlob) {
          fileToCompress = new File([resizedBlob], file.name, {
            type: resizedBlob.type,
          });
        }
      }

      const options = {
        maxSizeMB: Number(maxSizeKB) / 1024,
        maxIteration: 50,
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(fileToCompress, options);

      if (compressedFile.size > Number(maxSizeKB) * 1024) {
        throw new Error(
          `This image cannot be compressed below ${maxSizeKB} KB with the selected dimensions.`,
        );
      }

      setCompressedImage(URL.createObjectURL(compressedFile));
      setCompressedFileName(
        `compressed_krdiya.${getFileExtension(compressedFile.type)}`,
      );
    } catch (error) {
      console.error("Image compression error:", error);
      setCompressionError(error.message || "Unable to compress this image.");
    } finally {
      setLoading(false); // Set loading state to false when compression is done
    }
  };

  const handleDimensionChange = (dimension, value) => {
    const nextValue = value === "" ? "" : Number(value);
    let nextWidth = width;
    let nextHeight = height;

    if (dimension === "width") {
      nextWidth = nextValue;
      if (keepRatio && imageDimensions && nextValue) {
        nextHeight = Number(
          (
            (nextValue * imageDimensions.height) /
            imageDimensions.width
          ).toFixed(2),
        );
      }
      setWidth(nextWidth);
      setHeight(nextHeight);
    } else {
      nextHeight = nextValue;
      if (keepRatio && imageDimensions && nextValue) {
        nextWidth = Number(
          (
            (nextValue * imageDimensions.width) /
            imageDimensions.height
          ).toFixed(2),
        );
      }
      setHeight(nextHeight);
      setWidth(nextWidth);
    }
  };

  const handleUnitChange = (e) => {
    const nextUnit = e.target.value;
    const currentWidthInPixels = width && toPixels(width, dimensionUnit);
    const currentHeightInPixels = height && toPixels(height, dimensionUnit);
    const nextWidth = currentWidthInPixels
      ? nextUnit === "cm"
        ? Number(
            ((currentWidthInPixels * CM_PER_INCH) / PIXELS_PER_INCH).toFixed(2),
          )
        : currentWidthInPixels
      : "";
    const nextHeight = currentHeightInPixels
      ? nextUnit === "cm"
        ? Number(
            ((currentHeightInPixels * CM_PER_INCH) / PIXELS_PER_INCH).toFixed(
              2,
            ),
          )
        : currentHeightInPixels
      : "";

    setDimensionUnit(nextUnit);
    setWidth(nextWidth);
    setHeight(nextHeight);
  };

  const handleMaxSizeChange = (e) => {
    setMaxSizeKB(e.target.value);
  };

  const handleProcess = () => {
    if (imageFile && width && height && Number(maxSizeKB) > 0) {
      compressImage(imageFile, width, height, dimensionUnit);
    }
  };

  const downloadHandler = () => {
    setOriginalImage(null);
    setCompressedImage(null);
    setCompressedFileName(null);
    setImageFile(null);
    setImageDimensions(null);
    setWidth("");
    setHeight("");
    document.getElementById("img-input").value = "";
  };
  return (
    <>
      <div id="image-compressor" className="container-fluid img-comp">
        <div className="text-center">
          <h5 className="card-head my-2">Image Compressor</h5>

          <h5 className="mb-4">
            Compress JPG, PNG, SVG or GIF with the best quality and compression.{" "}
            <br />
            Reduce the filesize of your images at once.
          </h5>
        </div>

        <h5>Upload Image:</h5>
        <input
          type="file"
          id="img-input"
          onChange={handleImageChange}
          className="form-control mb-3"
        />
        <div className="mb-3">
          <label htmlFor="maxSizeInput" className="form-label fw-bold">
            Max Size (KB):
          </label>
          <input
            type="number"
            id="maxSizeInput"
            min="1"
            step="1"
            value={maxSizeKB}
            onChange={handleMaxSizeChange}
            className="form-control"
          />
        </div>
        <div className="row g-3 mb-3">
          <div className="col-md-4">
            <label htmlFor="imageWidth" className="form-label fw-bold">
              Width:
            </label>
            <input
              type="number"
              id="imageWidth"
              min="1"
              value={width}
              onChange={(e) => handleDimensionChange("width", e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="imageHeight" className="form-label fw-bold">
              Height:
            </label>
            <input
              type="number"
              id="imageHeight"
              min="1"
              value={height}
              onChange={(e) => handleDimensionChange("height", e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="dimensionUnit" className="form-label fw-bold">
              Units:
            </label>
            <select
              id="dimensionUnit"
              value={dimensionUnit}
              onChange={handleUnitChange}
              className="form-select"
            >
              <option value="px">Pixels (px)</option>
              <option value="cm">Centimeters (cm)</option>
            </select>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                type="checkbox"
                id="keepRatio"
                checked={keepRatio}
                onChange={(e) => setKeepRatio(e.target.checked)}
                className="form-check-input"
              />
              <label htmlFor="keepRatio" className="form-check-label">
                Keep aspect ratio
              </label>
            </div>
          </div>
        </div>
        <div className="tool-actions">
          <button
            type="button"
            onClick={handleProcess}
            disabled={
              !imageFile ||
              loading ||
              Number(maxSizeKB) <= 0 ||
              !width ||
              !height
            }
            className="download-btn"
          >
            {loading ? "Processing..." : "Process Image"}
          </button>
        </div>
        <div className="row">
          {loading && <div className="text-center">Compressing image...</div>}{" "}
          {compressionError && (
            <div className="text-center text-danger" role="alert">
              {compressionError}
            </div>
          )}
          {originalImage && (
            <>
              <div className="col-md-6">
                <h5 className="mb-3">Original Image:</h5>
                <div className="image-preview-frame">
                  <img
                    src={originalImage}
                    alt="Original"
                    className="img-fluid comp-img"
                  />
                </div>
              </div>
            </>
          )}
          {compressedImage && (
            <div className="col-md-6">
              <h5 className="mb-3">Compressed Image:</h5>
              <div className="image-preview-frame">
                <img
                  src={compressedImage}
                  alt="Compressed"
                  className="img-fluid comp-img"
                />
              </div>
            </div>
          )}
        </div>
        {compressedImage && (
          <div className="tool-actions tool-actions-end">
            <a
              href={compressedImage}
              download={compressedFileName}
              className="download-btn image-download-btn"
              onClick={downloadHandler}
            >
              Download Image
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageCompressor;
