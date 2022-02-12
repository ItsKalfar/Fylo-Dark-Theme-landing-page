import React from "react";
import "./Features.css";
import accessIcon from "../../images/icon-access-anywhere.svg";
import securityIcon from "../../images/icon-security.svg";
import realTime from "../../images/icon-collaboration.svg";
import storageImg from "../../images/icon-any-file.svg";
import TextComponent from "../TextComponent";

const Features = () => {
  return (
    <>
      <section id="features">
        <div className="container">
          <div className="card-wrapper">
            <div className="card" id="card-1">
              <img src={accessIcon} alt="accesIcon" />
              <TextComponent
                heading={"Access your files, anywhere"}
                info={
                  "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
                }
              />
            </div>
            <div className="card" id="card-2">
              <img src={securityIcon} alt="accesIcon" />
              <TextComponent
                heading={" Security you can trust"}
                info={
                  "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
                }
              />
            </div>
            <div className="card" id="card-3">
              <img src={realTime} alt="accesIcon" />
              <TextComponent
                heading={"  Real-time collaboration"}
                info={
                  "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
                }
              />
            </div>
            <div className="card" id="card-4">
              <img src={storageImg} alt="accesIcon" />
              <TextComponent
                heading={"  Store any type of file"}
                info={
                  " Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
