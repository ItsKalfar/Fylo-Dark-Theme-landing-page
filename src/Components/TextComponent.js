import React from "react";
import "./TextComponent.css";

const TextComponent = ({ heading, info }) => {
  return (
    <>
      <div className="text-component">
        <h1 className="heading">{heading}</h1>
        <p className="text">{info}</p>
      </div>
    </>
  );
};

export default TextComponent;
