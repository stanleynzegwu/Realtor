import { useState } from "react";
import { useParams } from "react-router-dom";

import { Footer } from "../../Container";
import { FadeDownAnimation, FadeUpAnimation } from "../../components/UI/Animation/Animation";
import formIllustration from "../../assets/logos/Forms-bro.png";
import { ScrollToTop, useHandleGoBack } from "../../Hooks/customHook";
import { useCreateBuyPropertyRequest } from "../../Hooks/useApiRequest";
import { TypingText, Success } from "../../components";
import "./BuyProperty.scss";

const BuyProperty = () => {
  ScrollToTop();
  const handleGoBack = useHandleGoBack();
  const { createBuyPropertyRequest, isLoading, success, error } = useCreateBuyPropertyRequest();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    property_id: id,
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createBuyPropertyRequest(formData);
  };

  return success ? (
    <Success message="Your Message has been sent successfully, we'll get back to you shortly." />
  ) : (
    <div className="buyProperty">
      <div className="buyProperty_wrapper">
        <FadeDownAnimation className="buyProperty_left">
          <h1>Fill The Form</h1>
          <form className="buyProperty_leftForm" onSubmit={handleSubmit}>
            <div className="buyProperty_leftFormItem">
              <label>Your name</label>
              <input
                placeholder="Enter your Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="buyProperty_leftFormItem">
              <label>Email Address</label>
              <input
                placeholder="Enter your Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="buyProperty_leftFormItem">
              <label>Mobile Number</label>
              <input
                placeholder="Enter your Phone Number"
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="buyProperty_leftFormItem">
              <label>
                Comments/Request <span>(Optional)</span>
              </label>
              <textarea
                placeholder="Add Any Comment or Reequest"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button disabled={isLoading} className="buyPropertyBtn">
              {isLoading ? "Submitting..." : "Submit"}
            </button>
            {error && <TypingText text={error} intervalDuration={50} className="error" />}
          </form>
        </FadeDownAnimation>

        <FadeUpAnimation className="buyProperty_right">
          <img src={formIllustration} alt="form" className="buyProperty_right__item" />
        </FadeUpAnimation>
      </div>
      <button onClick={handleGoBack} className="backBtn">
        Back
      </button>
      <Footer />
    </div>
  );
};

export default BuyProperty;
