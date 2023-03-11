import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import "./AdminForm.scss";
import { useCreateAdminMessage } from "../../Hooks/useApiRequest";
import TypingText from "../TypingText";
import {
  FadeDownAnimation,
  FadeLeftAnimation,
  FadeRightAnimation,
} from "../UI/Animation/Animation";

const AdminForm = ({ user, setToggle }) => {
  const { CreateAdminMessage, success, isLoading, setError, error } = useCreateAdminMessage();
  const [formData, setFormData] = useState({
    admin: user?.data,
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { admin, title, message } = formData;
    if (!admin || !title || !message) {
      setError("Fill the empty input fields");
      return;
    }

    CreateAdminMessage(formData);
  };

  return (
    <div className="admin_formWrapper">
      <div className="admin_formHolder">
        <div className="admin_top">
          <FadeDownAnimation className="admin_title">Admin Message Form</FadeDownAnimation>
          <AiOutlineClose onClick={() => setToggle(false)} />
        </div>

        <form className="admin_form" onSubmit={handleSubmit}>
          <FadeRightAnimation className="admin_formItem">
            <label>Title</label>
            <input
              placeholder="Enter The Title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </FadeRightAnimation>

          <FadeLeftAnimation className="admin_formItem">
            <label>Your Message</label>
            <textarea
              id=""
              cols="30"
              rows="5"
              placeholder="Enter your Meassage"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </FadeLeftAnimation>
          <button disabled={isLoading} className="adminBtn">
            {isLoading ? "Just a moment..." : "Leave a meassage"}
          </button>
          {error && <TypingText text={error} intervalDuration={50} className="error" />}
          {success && (
            <TypingText
              text="message created successfully"
              intervalDuration={50}
              className="adminMessagesucsess"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminForm;
