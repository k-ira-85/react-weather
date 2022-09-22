import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="form" id="all-frame">
            <Search cityDefault="Toronto" />

            <div className="card weatherDisplay">
              <div className="card-body forecast-card">
                <div className="forecast-display" id="forecast-display"></div>
              </div>
            </div>
          </div>
          <small>
            <a
              id="source-code"
              href="https://github.com/k-ira-85/react-weather"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourse code
            </a>
            &nbsp; by Iryna Kravchenko
          </small>
        </div>
      </div>
      <script src="src/app.js"></script>
    </div>
  );
}
