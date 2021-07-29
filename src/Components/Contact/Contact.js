import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <div className="contactHeading">
        <h2>Contact me</h2>
        <div className="contactLine"></div>
      </div>
      <div className="contactBox">
        <div className="contactLeft">
          <h3>Email:harshmharsh791@gmail.com</h3>
          <h3>Phone No: 7007799607</h3>
        </div>
        <div className="contactRight">
          <form
            action="https://getform.io/f/fe195806-1ac8-46d3-8274-8f4995813b20"
            method="POST"
          >
            <div>
                <h2>Message me</h2>
              <input type="text" name="name" placeholder="name" />
              <input type="email" name="email" placeholder="email" />
              <input type="text" name="subject" placeholder="subject" />
              <input type="text" name="message" placeholder="message" />
            </div>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
