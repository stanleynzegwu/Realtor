import { useState } from "react";

import "./AdminForm.scss";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useCreateAdminMessage } from "../../Hooks/useApiRequest";
import TypingText from "../TypingText";

const AdminForm = () => {
  const { user } = useAuthContext();
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
      <h2 className="admin_title">Form</h2>
      <form className="admin_leftForm" onSubmit={handleSubmit}>
        <div className="admin_leftFormItem">
          <label>Title</label>
          <input
            placeholder="Enter your Name"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="admin_leftFormItem">
          <label>Your Message</label>
          <textarea
            placeholder="Enter your Meassage"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button disabled={isLoading} className="adminBtn">
          Leave a meassage
        </button>
        {error && <TypingText text={error} intervalDuration={50} className="error" />}
      </form>
    </div>
  );
};

export default AdminForm;
