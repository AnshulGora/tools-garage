import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);

  const generatePassword = () => {
    const symbols = "!@#$%^&*()_-+=";
    const numbers = "0123456789";
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (includeSymbols) charset += symbols;
    if (includeNumbers) charset += numbers;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div id="password-generator" className="container-fluid passcomp">
      <div className="text-center">
        <h5 className="card-head my-2">Password Generator</h5>

        <h5 className="mb-4">
          Generate strong passwords with this tool. <br />
          Customize the length and include symbols and numbers.
        </h5>
      </div>
      <div className="mb-3">
        <label htmlFor="lengthInput" className="form-label">
          Password Length:
        </label>
        <input
          type="number"
          className="form-control"
          id="lengthInput"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="includeSymbolsCheckbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="includeSymbolsCheckbox">
          Include Symbols
        </label>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="includeNumbersCheckbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="includeNumbersCheckbox">
          Include Numbers
        </label>
      </div>
      <button className="download-btn me-2" onClick={generatePassword}>
        Generate Password
      </button>
      <button
        className="download-btn"
        onClick={handleCopyPassword}
        disabled={!password}
      >
        Copy Password
      </button>
      <div className="mt-3">
        <label htmlFor="passwordOutput" className="form-label">
          <h5>Generated Password:</h5>
        </label>
        <input
          type="text"
          className="form-control"
          id="passwordOutput"
          readOnly
          value={password}
        />
      </div>
    </div>
  );
};

export default PasswordGenerator;
