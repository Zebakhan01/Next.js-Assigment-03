
import Header from "../component/header";

export default function Contact() {
  return (
    <div>
      <Header />
      
      <div className="contactSection">
        <h2 className="title">Contact Us</h2>
        <form className="contactForm">
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows-="4" required></textarea>
          </div>
          <button type="submit" className="submitButton">Send Message</button>
        </form>
      </div>
    </div>
  );
}
