import React, { useState } from "react";

const URLShortener = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState(null);

  const handleShorten = async () => {
    try {
      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${longUrl}`
      );
      const data = await response.text();
      if (response.ok) {
        setShortUrl(data);
        setError("");
      } else {
        setError("Error shortening URL. Please try again.");
        setShortUrl("");
      }
    } catch (error) {
      setError("An error occurred while shortening the URL.");
      setShortUrl("");
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  return (
    <div id="url-shortner" className="container-fluid urlcomp">
      <div className="text-center">
        <h5 className="card-head my-2">URL Shortner</h5>

        <h5 className="mb-4">
          Enter the URL you want to shorten and click on the "Shorten URL"
          button to get the shortened URL.
        </h5>
      </div>
      <div className="input-container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter URL to shorten"
          />
          <button onClick={handleShorten} className="download-btn">
            Shorten URL
          </button>
        </div>
      </div>
      {shortUrl && (
        <div className="result-container">
          <span className="result-label">Shortened URL:</span> &nbsp;
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shortened-url"
          >
            {shortUrl}
          </a>
          <br />
          <button onClick={handleCopyToClipboard} className="download-btn">
            Copy
          </button>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default URLShortener;
