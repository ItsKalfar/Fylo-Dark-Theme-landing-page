import React from "react";
import "./ContactForm.css";
import TextComponent from "./../TextComponent";

const ContactForm = () => {
  return (
    <>
      <section id="form">
        <div className="container">
          <form action="POST">
            <TextComponent
              heading={"Get early access today"}
              info={
                "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you."
              }
            />

            <div className="input-section">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@example.com"
                required
              />
              <button className="btn btn-primary" type="submit">
                <a href="/">Get Started For Free</a>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
