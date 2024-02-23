// importing css, state, and email validation helper
import "../styles/contact.css";
import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  // setting the states for email, name, message, and error message
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // checks for state changes in email, name, or message inputs
  const handleInputChange = (event) => {
    const [target] = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "password") {
      setMessage(inputValue);
    }
  };

  // handles the submission on the submit button
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // checks if there is an input for email, name, or message // also checks if the email is in valid email format
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    } else if (!name) {
      setErrorMessage("Please enter a name");
      return;
    } else if (!message) {
      setErrorMessage("Please enter a message");
      return;
    }

    // clears the input fields after a sucessful submit
    setName("");
    setEmail("");
    setMessage("");
  };

  // returns the xml
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-form">
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            placeholder="Your Full Name"
            required
            className="contact-name"
          />
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Your Email"
            required
            className="contact-name"
          />
          <textarea
            name="message"
            rows="7"
            onChange={handleInputChange}
            placeholder="Your Message"
            required
            className="message-box"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}
