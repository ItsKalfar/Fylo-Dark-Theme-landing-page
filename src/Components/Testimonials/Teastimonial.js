import React from "react";
import satishPatel from "./../../images/profile-1.jpg";
import bruceMcKenzie from "./../../images/profile-2.jpg";
import IvaBoyd from "./../../images/profile-3.jpg";
import "./Teastimonials.css";
import quotes from "./../../images/bg-quotes.png";

const Teastimonial = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <img id="quotes" src={quotes} alt="" />
        <div className="testimonial-card-wrapper">
          <div className="testimonialcard" id="card1">
            <p>
              {" "}
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="profile">
              <img src={satishPatel} alt="satesh" />
              <div className="name-post">
                <h4 className="name">Satish Patel</h4>
                <p className="post">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className="testimonialcard" id="card2">
            <p>
              {" "}
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="profile">
              <img src={bruceMcKenzie} alt="bruceMcKenzie" />
              <div className="name-post">
                <h4 className="name">Bruce McKenzie</h4>
                <p className="post">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className="testimonialcard" id="card3">
            <p>
              {" "}
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="profile">
              <img src={IvaBoyd} alt="IvaBoyd" />
              <div className="name-post">
                <h4 className="name">Iva Boyd</h4>
                <p className="post">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teastimonial;
