import React, { useState } from "react";

function Card({ id, image, title,description}) {
  return (
    <div>

      <div className="container">
        <div className="card">
          <img src={image} alt="" />
          <h1>{title}</h1>
          <h3>{description}</h3>
          <h6>{id}</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;
