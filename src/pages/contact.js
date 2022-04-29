import * as React from "react";
import LogoImage from "../images/rawanFinal.png";
import ContactAvatarImg from "../images/contactAvatar.png";
import { Link } from "gatsby";
import { AiOutlineClose } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";
import {
  contactSession,
  contactHeader,
  contactLogo,
  contactList,
  contactAvatar,
  contactForm,
  contactFormTitle,
  contactInput,
  contactTextarea,
  contactSubmit,
} from "../styles/contact.module.css";

const ContactPage = () => {
  return (
    <section className={contactSession}>
      <div className={contactHeader}>
        <div className={contactLogo}>
          <Link to="/">
            <img src={LogoImage} alt="Logo" />
          </Link>
        </div>
        <ul className={contactList}>
          <li>
            <MdRefresh />
          </li>
          <li>
            <Link to="/">
              <AiOutlineClose />
            </Link>
          </li>
        </ul>
        <div className={contactAvatar}>
          <img src={ContactAvatarImg} alt="ContactAvatar" />
        </div>
      </div>

      <form className={contactForm}>
        <div className={contactFormTitle}>
          <h2>
            Thanks for taking the time to reach out. How can I help you today?
          </h2>
        </div>
        <div className={contactInput}>
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="text" id="email" required />
          </div>
        </div>
        <div className={contactTextarea}>
          <label for="message">Message</label>
          <textarea id="message" required />
        </div>
        <div className={contactSubmit}>
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactPage;
