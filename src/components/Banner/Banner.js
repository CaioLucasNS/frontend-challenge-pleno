import React from "react";

import "./styles.scss";

export function Banner() {
  return (
    <div id="container-banner">
      <div className="content-texts">
        <h1 className="title">Banner</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="content-buttons">
        <p>
          <a className="about-button">Sobre o SlideEzoom</a>
        </p>

        <p>
          <a className="button-start">Começar</a>
        </p>
      </div>
    </div>
  );
}
