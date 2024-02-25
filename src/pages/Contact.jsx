// importing css, state, and email validation helper
import "../styles/contact.css";
import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  // selecting the input fileds for the name, email, message, and error message
  const nameBox = document.getElementById("name");
  const emailBox = document.getElementById("email");
  const messageBox = document.getElementById("message");
  const errorBox = document.getElementById("error");
  // setting the states for email, name, message, and error message
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // checks for state changes in email, name, or message inputs
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  // handles the submission on the submit button
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // checks if there is an input for email, name, or message // also checks if the email is in valid email format
    if (validateEmail(email) === false) {
      setErrorMessage("Email is invalid");
      return;
    } else if (!name) {
      setErrorMessage("Name is invalid");
      return;
    }
    if (!message) {
      setErrorMessage("Message is required");
      return;
    }

    // clears the input fields after a sucessful submit
    nameBox.value = "";
    emailBox.value = "";
    messageBox.value = "";
    errorBox.innerHTML = "";
  };

  // checks if input fields are blank, used with onMouseLeave to alert users that field is required
  const handleBlank = (e) => {
    const { target } = e;
    const inputValue = target.value;

    if (!inputValue) {
      setErrorMessage("This field is required");
    } else {
      setErrorMessage("");
    }
  };

  const handleBlankEmail = (e) => {
    const { target } = e;
    const inputValue = target.value;
    // also validates the email onMouseLeave
    // if passes all checks, sets the error message to blank
    if (!inputValue) {
      setErrorMessage("This field is required");
    } else if (validateEmail(email) === false) {
      setErrorMessage("Please enter a valid email");
    } else {
      setErrorMessage("");
    }
  };

  // returns the xml
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-form">
        <form className="contact-form">
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleInputChange}
            onMouseLeave={handleBlank}
            placeholder="Your Full Name"
            required
            className="contact-name"
          />
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleInputChange}
            onMouseLeave={handleBlankEmail}
            placeholder="Your Email"
            required
            className="contact-name"
          />
          <textarea
            id="message"
            name="message"
            rows="7"
            onChange={handleInputChange}
            onMouseLeave={handleBlank}
            placeholder="Your Message"
            required
            className="message-box"
          ></textarea>
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="btn btn-primary"
          >
            Send Message
          </button>
        </form>
        {errorMessage && (
          <div id="error">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}
