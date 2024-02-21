import "../styles/footer.css";

export default function Footer() {
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
        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="contact-name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="contact-name"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            className="message-box"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
