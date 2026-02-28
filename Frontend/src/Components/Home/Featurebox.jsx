import React from "react";

function Featurebox({ image, title }) {
  return (
    <div className="feature-box">
      <div className="f-img">
        <img src={image} alt={title} />
      </div>
      <div className="f-text">
        <h4>{title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}

export default Featurebox;
