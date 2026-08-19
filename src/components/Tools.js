import React from "react";
import { Link } from "react-router-dom"; // Changed to standard Link
import ToolsData from "../data/ToolsData";

export default function Tools() {
  return (
    <div id="tools" className="container-fluid toolsdiv shine-parent">
      <h1 className="text-center btn-shine">✦ Tools Available</h1>

      <div className="row toolsrow">
        {ToolsData.map((tool) => {
          return (
            <div className="col-md-4 tools-card-column" key={tool.id}>
              <div className="card tools-card">
                <div className="card-body">
                  <div className="tools-card-topline">
                    <span className="tools-card-index">
                      {tool.id.padStart(2, "0")}
                    </span>
                    <span className="tools-card-status">Ready</span>
                  </div>
                  <h5 className="card-title fw-bold">{tool.title}</h5>
                  <p className="card-text fw-light">{tool.desc}</p>
                  <div className="tools-card-action">
                    <Link to={tool.link} className="btn btn-primary fw-bold">
                      Explore Tool <span aria-hidden="true">-&gt;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
