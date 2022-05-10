import * as React from "react";
import sanityClient from "@sanity/client";
import LogoImage from "../images/rawanFinal.png";
import ContactAvatarImg from "../images/contactAvatar.png";
import { Link } from "gatsby";
import { AiOutlineClose } from "react-icons/ai";
import { CgCloseO } from "react-icons/cg";
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
  successPopup,
  closeSuccessPopup
} from "../styles/contact.module.css";

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_EDIT_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true
});

const ContactPage = () => {
  console.log("YES", process.env.SANITY_EDIT_TOKEN);

  const [name,setName] = React.useState("")
  const [email,setEmail] = React.useState("")
  const [message,setMessage] = React.useState("")
  const [successMessage,setSuccessMesage] = React.useState(false)

  React.useEffect(async () => {
    const query = "*[_type == 'contact'] { _id, email, message,name } ";
    await client.fetch(query).then(async (res) => {
      console.log("FETCHING DATA FROM CLIENT SIDE:", res);
    });
  }, []);

  const clearData = () => {
    setEmail('')
    setName('')
    setMessage('')
  }

  const submitButton = (event) => {
    event.preventDefault();
    const doc = {
      _type: 'contact',
      name:name,
      email: email,
      message: message
    }
    
    client.create(doc).then((res) => {
      console.log(`Submitted Successfully!!! ${res}`)
      setEmail('')
      setName('')
      setMessage('')
      setSuccessMesage(true)
      setTimeout(()=> setSuccessMesage(false),3000)
    })
  };

  return (
    <section className={contactSession}>
      <div className={contactHeader}>
        <div className={contactLogo}>
          <Link to="/">
            <img src={LogoImage} alt="Logo" />
          </Link>
        </div>
        <ul className={contactList}>
          <li onClick={clearData}>
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

      <form className={contactForm} onSubmit={submitButton}>
        <div className={contactFormTitle}>
          <h2>
            Thanks for taking the time to reach out. How can I help you today?
          </h2>
        </div>
        <div className={contactInput}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required  value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
        </div>
        <div className={contactTextarea}>
          <label htmlFor="message">Message</label>
          <textarea id="message" required value={message} onChange={(e)=>setMessage(e.target.value)}/>
        </div>
        <div className={contactSubmit}>
          <button type="submit">Submit</button>
        </div>
      </form>
      {successMessage ? <div className={successPopup}>
        <span>Success: Form Submitted Successfully.</span>
        <span onClick={()=>setSuccessMesage(false)} className={closeSuccessPopup}><CgCloseO /></span>
      </div> : " " }
    </section>
  );
};

export default ContactPage;
