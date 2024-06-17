import { useState, useRef } from "react";
import { MdPublish } from "react-icons/md";
import "./NewBlog.scss";

import { uploadImg } from "../../../firebase";
import { useGenerateText, useCreateBlog } from "../../../Hooks/useApiRequest";
import illustration from "../../../assets/logos/blogIllustration.png";
import { TypingText } from "../../../components";
import { ScrollToTop } from "../../../Hooks/customHook";
import { FadeUpAnimation, FadeDownAnimation } from "../../../components/UI/Animation/Animation";

const NewBlog = () => {
  ScrollToTop();
  const { generateText, isGenerateTextError, isGenerateTextLoading, isGenerateTextSuccess } =
    useGenerateText();
  const {
    createBlog,
    isLoading,
    setIsLoading,
    setError,
    success,
    error,
    successMessageDisplay,
    errorMessageDisplay,
    setErrorMessageDisplay,
  } = useCreateBlog();

  const [formData, setFormData] = useState({ textPrompt: "", title: "" });
  const [aiGeneratedDesc, setAIGeneratedDesc] = useState("");
  const [preview, setPreview] = useState();
  const [file, setFile] = useState("");
  const descRef = useRef(null);

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }
  //handle Image Change
  function handleImageChange(e) {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  }

  //to generate text
  const handleSubmitText = async (e) => {
    e.preventDefault();
    const { textPrompt } = formData;
    if (!textPrompt) {
      descRef.current.focus();
      return;
    }

    try {
      const res = await generateText({ textPrompt });
      res.status === 200 && setAIGeneratedDesc(res.data.data);
    } catch (err) {
      isGenerateTextError && setError("error occured");
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const { textPrompt, title } = formData;
    setError(null);
    setIsLoading(true);
    // Check that all form fields are filled out
    if (!title || !file || !(aiGeneratedDesc || textPrompt)) {
      setIsLoading(false);
      setError("Check That Title,Generated Text & Image field are not Empty");
      setErrorMessageDisplay(true);
      setTimeout(() => setErrorMessageDisplay(false), 6000);
      return;
    }
    const blogFormData = { title, desc: aiGeneratedDesc || textPrompt };
    uploadImg(file, createBlog, blogFormData);
  }

  return (
    <div className="newBlog">
      <div className="newBlog__generate">
        <div className="newBlog__left">
          <FadeDownAnimation className="newBlog_heading">Create Blog Post</FadeDownAnimation>
          <img className="illustration" src={illustration} alt="illustration" />
          <div className="form-left__wrapper">
            <form className="generateImgForm form-left">
              <div className="blogUploadImg">
                <label htmlFor="file">
                  Upload Image
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
            </form>
            <form className="generateTextForm form-left" onSubmit={handleSubmitText}>
              <FadeUpAnimation className="form-left__holder">
                <label className="textLabel form-lef_label" htmlFor="">
                  Text Description
                </label>
                <input
                  name="textPrompt"
                  value={formData.textPrompt}
                  className="textInput form-left__input"
                  placeholder="Enter Text Description"
                  type="text"
                  onChange={handleChange}
                  ref={descRef}
                />
              </FadeUpAnimation>
              <button
                style={{ border: isGenerateTextSuccess && "2px solid #3eff3e" }}
                disabled={isGenerateTextLoading}
                className="form-left__btn"
              >
                {isGenerateTextLoading ? "Generating..." : "Generate AI Writeup"}
              </button>
            </form>
          </div>
        </div>
        <div className="newBlog__right">
          <img
            src={
              preview
                ? preview
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            }
            alt="avatar"
            className="generated-Image"
          />
          <p className="generated_title">{formData.title}</p>
          <p className="generated-text">{aiGeneratedDesc || formData.textPrompt}</p>
        </div>
      </div>

      <div className="createBlog">
        <form className="createBlog__form" onSubmit={handleSubmit}>
          <div className="inputAndBtnWrapper">
            <div className="createBlog__holder">
              <input
                className="createBlog__input"
                name="title"
                placeholder="Enter The Title"
                value={formData.title}
                onChange={handleChange}
                type="text"
              />
            </div>
            <button disabled={isLoading} className="createBlog__btn">
              {isLoading ? "Creating..." : "Create"}
            </button>
          </div>
          {error && errorMessageDisplay && (
            <TypingText text={error} intervalDuration={50} className="error" />
          )}
          {success && successMessageDisplay && (
            <TypingText
              text="Blog Created Successfully"
              intervalDuration={50}
              className="blogSuccess"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
