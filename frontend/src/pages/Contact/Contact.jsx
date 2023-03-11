import { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

import { Footer } from "../../Container";
import contactUs from "../../assets/logos/contact_us.png";
import { FadeDownAnimation, FadeUpAnimation } from "../../components/UI/Animation/Animation";
import { useCreateContact } from "../../Hooks/useApiRequest";
import { TypingText } from "../../components";
import { ScrollToTop, useHandleGoBack } from "../../Hooks/customHook";
import { Success } from "../../components";
import "./Contact.scss";

const Contact = () => {
  ScrollToTop();
  const handleGoBack = useHandleGoBack();
  const { createContact, isLoading, success, error } = useCreateContact();
  const [formData, setFormData] = useState({ name: "", email: "", phoneNumber: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createContact(formData);
  };

  return success ? (
    <div className="successWrapper">
      <Success message="Message Sent Successfully." />
    </div>
  ) : (
    <div className="contact">
      <div className="contact_wrapper">
        <FadeDownAnimation className="contact_left">
          <h1>Leave us a message</h1>
          <form className="contact_leftForm" onSubmit={handleSubmit}>
            <div className="contact_leftFormItem">
              <label>Your name</label>
              <input
                placeholder="Enter your Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact_leftFormItem">
              <label>Email Address</label>
              <input
                placeholder="Enter your Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact_leftFormItem">
              <label>Mobile Number</label>
              <input
                placeholder="Enter your Phone Number"
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="contact_leftFormItem">
              <label>Your Message</label>
              <textarea
                placeholder="Enter your Meassage"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button disabled={isLoading} className="contactBtn">
              {isLoading ? "Sending..." : "Leave a meassage"}
            </button>
            {error && <TypingText text={error} intervalDuration={50} className="error" />}
          </form>
        </FadeDownAnimation>

        <FadeUpAnimation className="contact_right">
          <div className="contact_right__item">
            <img src={contactUs} alt="contactUs" />
          </div>
          <div className="contact_right__item">
            <span>
              <BiCurrentLocation />
            </span>
            <p className="contact_Location">Asaba Delta State</p>
          </div>
          <div className="contact_right__item">
            <span>
              <AiFillPhone />
            </span>
            <p className="contact_phone"> +234 816 0000 33</p>
          </div>
          <div className="contact_right__item">
            <span>
              <MdEmail />
            </span>
            <p className="contact_phone"> realtorsupport@gmail.com</p>
          </div>
        </FadeUpAnimation>
      </div>
      <button onClick={handleGoBack} className="backBtn">
        Back
      </button>
      <Footer />
    </div>
  );
};

export default Contact;
