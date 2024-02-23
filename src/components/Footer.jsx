import "../styles/footer.css";
import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if(!validateEmail(email)) {
      setErrorMessage('Email is invalid')
      return;
    } else if (!name) {
      setErrorMessage('Please enter a name')
      return;
    } else if (!message) {
      setErrorMessage('Please enter a message')
      return;
    }

    setName('')
    setEmail('')
    setMessage('')
  }
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>If you would like to get in touch, feel free to reach out:</p>
      <ul>
        <li>
          LinkedIn: <a href="#">LinkedIn Profile</a>
        </li>
        <li>
          Github: <a href="#">Github Profile</a>
        </li>
      </ul>
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
            <p className="error-text"></p>
            </div>
        )}
      </div>
    </section>
  );
}

// export default function Footer() {
// }
