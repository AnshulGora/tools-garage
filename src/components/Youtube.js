import React, { useState } from "react";

const Youtube = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const extractVideoId = (url) => {
    const urlWithoutParams = url.split("?")[0];
    const id = urlWithoutParams.split("/").pop();
    return id;
  };

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleFetchClick = () => {
    if (!videoUrl) return; // Check if videoUrl is empty

    const id = extractVideoId(videoUrl);
    setVideoId(id);
    setThumbnailUrl(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);
  };

  const handleDownloadClick = () => {
    if (!thumbnailUrl) return;

    const link = document.createElement("a");
    link.href = thumbnailUrl;
    link.download = "thumbnail.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="yt-thumbnail-downloader" className="container-fluid ytcomp">
      <div className="text-center">
        <h5 className="card-head my-2">Youtube Thumbnail Downloader</h5>

        <h5 className="mb-4">
          Enter the YouTube video URL and click on the "Fetch Thumbnail" button
          to get the thumbnail image.
        </h5>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          value={videoUrl}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter YouTube video URL"
        />
        <button
          className="download-btn"
          type="button"
          onClick={handleFetchClick}
          disabled={!videoUrl}
        >
          Fetch Thumbnail
        </button>
      </div>
      {thumbnailUrl && (
        <div>
          {/* <p>Video ID: {videoId}</p> */}
          <p>Your Thumbnail is ready!</p>
          <img
            src={thumbnailUrl}
            alt="Thumbnail"
            className="img-fluid rounded-5"
          />
          <button
            className="download-btn mt-3"
            type="button"
            onClick={handleDownloadClick}
          >
            Download Image
          </button>
        </div>
      )}
    </div>
  );
};

export default Youtube;
