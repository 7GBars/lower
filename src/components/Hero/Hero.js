import React from "react";
import "./Hero.css";

export const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Travel" className="hero__image" />
      <h1 className="hero__title">Travel made simple.</h1>
    </div>
  );
};


