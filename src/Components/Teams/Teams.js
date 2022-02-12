import React from "react";
import teamsImg from "../../images/illustration-stay-productive.png";
import arrowIcon from "../../images/icon-arrow.svg";
import "./Teams.css";

const Teams = () => {
  return (
    <>
      <section id="teams">
        <div className="container">
          <img src={teamsImg} alt="" />
          <div className="textWrapper">
            <h1>Stay productive, wherever you are</h1>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              {" "}
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>

            <a href="/">
              See how Fylo works{" "}
              <span>
                <img src={arrowIcon} id="arrowIcon" alt="" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
