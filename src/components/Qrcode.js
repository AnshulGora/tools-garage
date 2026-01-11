import { useState, useLayoutEffect, useRef } from "react";

function Qrcode() {
  const [data, setData] = useState("");
  const [size, setSize] = useState(150);
  const [qr, setQr] = useState("");
  const imgRef = useRef(null);

  function generateQR() {
    setQr(
      `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${data}`
    );
  }

  useLayoutEffect(() => {
    if (qr && imgRef.current) {
      imgRef.current.src = qr;
    }
  }, [qr]);

  const isDisabled = data === "";

  const handleDownload = () => {
    // Note: Cross-origin images from APIs sometimes require a blob conversion
    // for the 'download' attribute to work properly.
    const link = document.createElement("a");
    link.href = qr;
    link.download = "qr_code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="QR-generator" className="container-fluid qrcode">
      <div className="text-center qrcodehead">
        <h5 className="card-head my-2">QR Code Generator</h5>
        <h5>
          Create QR codes instantly! Use URL or text, generate custom codes.
        </h5>
      </div>

      <div className="row">
        <div className="col-md-8 divone">
          <h5>Enter the information to be encoded - </h5>
          <textarea
            required
            className="form-control"
            rows={5}
            placeholder="Enter text or any URL"
            onChange={(e) => setData(e.target.value)}
          />
          <h5 className="mt-3">Size of QR - </h5>
          <input
            required
            className="form-control"
            placeholder="100/200"
            type="number"
            onChange={(e) => setSize(e.target.value)}
          />
          <br />
          <button
            className="download-btn"
            disabled={isDisabled}
            onClick={generateQR}
          >
            Generate QR
          </button>
        </div>

        {/* Logic: If qr exists, use d-block (visible), else d-none (hidden) */}
        <div className={`col-md-4 ${qr ? "d-block" : "d-none"}`}>
          <h5>QR Code is Ready - </h5>
          <img
            ref={imgRef}
            alt="Generated QR Code"
            className="img-fluid border p-2"
          />
          <br />
          <br />
          <button
            className="download-btn"
            onClick={handleDownload}
            target="_blank"
            rel="noreferrer"
          >
            Download QR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Qrcode;
