import React from "react";
import TextComponent from "../TextComponent";
import heroImg from "../../images/illustration-intro.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section id="home">
        <div className="container">
          <img id="heroImg" src={heroImg} alt="heroImg" />

          <TextComponent
            heading={
              "  All your files in one secure location, accessible anywhere."
            }
            info={
              "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers."
            }
          />
          <button className="btn btn-primary">
            <a href="/">Get Started</a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
