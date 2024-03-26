import React, { useState } from "react";

export default function Textutil() {
  const [text, setText] = useState("");

  const getCounts = () => {
    let words = 0;
    let chars = 0;

    if (text) {
      words = text.trim().split(/\s+/).length;
      chars = text.length;
    }

    return { words, chars };
  };

  const toupcase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    alert("Text converted to Uppercase");
  };

  const toonchange = (event) => {
    setText(event.target.value);
  };

  const tolocase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    alert("Text converted to Lowercase");
  };

  const tocleartext = () => {
    let newText = "";
    setText(newText);
    alert("Text cleared");
  };

  const toCapitalize = () => {
    let words = text.split(" ");
    let capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    let newText = capitalizedWords.join(" ");
    setText(newText);
    alert("Text Capitalized");
  };

  const toCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text Copied");
  };

  return (
    <>
      <div id="text-util" className="container-fluid textutilcomp">
        <div className="text-center">
          <h5 className="card-head my-2">TextUtility Tools</h5>

          <h5 className="mb-4">
            Write your text and get the required changes in it. <br />
            You can convert your text to Uppercase, Lowercase, Capitalize and
            also copy the text.
          </h5>
        </div>
        <br />
        <h4>Enter text here to get required changes -</h4>
        <div className="form-floating">
          <textarea
            value={text}
            className="form-control textarea"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            rows="7"
            onChange={toonchange}
          ></textarea>
          <label htmlFor="floatingTextarea2">Write your text here</label>
        </div>

        <div className="my-2 textutilbtns">
          <button
            disabled={text.length === 0}
            className="download-btn"
            onClick={toupcase}
          >
            Uppercase
          </button>

          <button
            disabled={text.length === 0}
            className="download-btn"
            onClick={tolocase}
          >
            Lowercase
          </button>

          <button
            disabled={text.length === 0}
            className="download-btn"
            onClick={tocleartext}
          >
            Clear
          </button>

          <button
            disabled={text.length === 0}
            className="download-btn"
            onClick={toCapitalize}
          >
            Capitalize
          </button>

          <button
            disabled={text.length === 0}
            className="download-btn"
            onClick={toCopy}
          >
            Copy Text
          </button>
        </div>

        <br />
        <h4>
          <b> Text Summary </b>
        </h4>
        <h5>Preview -</h5>
        <p>{text.length > 0 ? text : "Nothing to preview !!"}</p>
        <p>
          Words: {getCounts().words}, Characters: {getCounts().chars}
        </p>
      </div>
    </>
  );
}
