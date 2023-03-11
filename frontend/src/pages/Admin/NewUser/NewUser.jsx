import { MdPublish } from "react-icons/md";
import { useState } from "react";
import "./NewUser.scss";

import { uploadImg } from "../../../firebase";
import { useCreateUser } from "../../../Hooks/useApiRequest";
import { TypingText } from "../../../components";
import { ScrollToTop } from "../../../Hooks/customHook";

const NewUser = () => {
  ScrollToTop();
  const {
    CreateUser,
    isLoading,
    error,
    success,
    successMessageDisplay,
    setIsLoading,
    setError,
    errorMessageDisplay,
    setErrorMessageDisplay,
  } = useCreateUser();
  const [radio, setRadio] = useState("False");
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [preview, setPreview] = useState();
  const [file, setFile] = useState("");
  const form = { ...formData, isAdmin: radio === "False" ? false : true };

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

  function handleImageChange(e) {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e) {
    const { username, email, password } = form;
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Check that all form fields are filled out
    if (!username || !email || !password) {
      setIsLoading(false);
      setError("Please fill out all form fields");
      setErrorMessageDisplay(true);
      setTimeout(() => setErrorMessageDisplay(false), 6000);
      return;
    }
    //if there is an img file,call the upload img func to upload to firebase , then the ref stored in db
    if (file) {
      uploadImg(file, CreateUser, form);
      //else when there is no image file, create a user, no img to upload to firebase
    } else {
      console.log(form);
      await CreateUser(form);
    }
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserLeft">
          <div className="newUserItem">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Name"
              className="input"
            />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="input"
            />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="input"
            />
          </div>
          <div className="newUserItem">
            <label>isAdmin</label>
            <div className="radioHolder">
              <span>
                <label htmlFor="true" className="radioLabel">
                  True
                </label>
                <input
                  type="radio"
                  value="True"
                  id="true"
                  checked={radio === "True"}
                  onChange={(e) => setRadio(e.target.value)}
                  className="radioInput"
                />
              </span>
              <span>
                <label htmlFor="false" className="radioLabel">
                  False
                </label>
                <input
                  type="radio"
                  value="False"
                  id="false"
                  checked={radio === "False"}
                  onChange={(e) => setRadio(e.target.value)}
                  className="radioInput"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="newUserRight">
          <div className="newUserItem">
            <img
              src={
                preview
                  ? preview
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
              }
              alt="avatar"
              className="userUpdateImg"
            />
            <label htmlFor="file">
              <MdPublish />
            </label>
            <input
              type="file"
              id="file"
              name="img"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>

          <button disabled={isLoading} className="newUserButton">
            {isLoading ? "Creating..." : "Create"}
          </button>
          {error && errorMessageDisplay && (
            <TypingText text={error} intervalDuration={50} className="error" />
          )}
          {success && successMessageDisplay && (
            <TypingText
              text="User Created Successfully"
              intervalDuration={50}
              className="userSuccess"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default NewUser;
