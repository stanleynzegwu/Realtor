import { useState, useRef } from "react";

import { useCreateOffer, useGenerateText } from "../../../Hooks/useApiRequest";
import { uploadFiles } from "../../../firebase";
import { TypingText } from "../../../components";
import "./NewOffer.scss";
import { ScrollToTop } from "../../../Hooks/customHook";

const NewOffer = () => {
  ScrollToTop();
  const {
    CreateOffer,
    isLoading,
    success,
    setError,
    error,
    setIsLoading,
    errorMessageDisplay,
    seterrorMessageDisplay,
  } = useCreateOffer();
  const { generateText, isGenerateTextError, isGenerateTextLoading, isGenerateTextSuccess } =
    useGenerateText();
  const [offerDesc, setOfferDesc] = useState({ desc: "" });

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    category: "",
    startDate: "",
    endDate: "",
  });
  const [imagesFile, setImagesFile] = useState([]);
  //for image preview
  const [imagesPreview, setImagesPreview] = useState([]);
  const descRef = useRef(null);

  const handleMultipleImages = (e) => {
    const selectedFIles = [];
    const imagesArray = [];
    const targetFiles = e.target.files;
    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      imagesArray.push(file);
      return selectedFIles.push(URL.createObjectURL(file));
    });
    setImagesFile(imagesArray);
    setImagesPreview(selectedFIles);
  };

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

  // Ai Edit Description
  const handleSubmitText = async (e) => {
    e.preventDefault();
    const { desc } = offerDesc;
    if (!desc) {
      descRef.current.focus();
    } else {
      const textPrompt = `correct this english "${desc}" and make it more appealing`;
      const res = await generateText({ textPrompt });

      res?.data &&
        setFormData((data) => {
          return {
            ...data,
            desc: res?.data.data.trim(),
          };
        });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, desc, category, startDate, endDate } = formData;
    setError(null);

    // Check that all form fields are filled out
    if (!title || !desc || !category || !imagesFile.length || !startDate || !endDate) {
      setError("All Required Input Field Must Be Filled");
      seterrorMessageDisplay(true);
      setTimeout(() => seterrorMessageDisplay(false), 6000);
      return;
    }
    setIsLoading(true);
    uploadFiles(imagesFile, imagesPreview, CreateOffer, formData);
  };

  return (
    <div className="newOffer">
      <div className="newOffer_Left">
        <h1>Create Offer</h1>
        <form onSubmit={handleSubmit}>
          <div className="newOffer_leftFormItem">
            <label>Title</label>
            <input
              placeholder="Enter Offer Title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="newOffer_leftFormItem">
            <label>Desc</label>
            <div
              className="newOffer_leftFormItemGroup"
              style={{ border: isGenerateTextSuccess && "2px solid #3eff3e" }}
            >
              <textarea
                placeholder="Enter Offer Description"
                name="desc"
                value={offerDesc.desc}
                onChange={(e) => setOfferDesc({ [e.target.name]: e.target.value })}
                ref={descRef}
              />
              <button
                disabled={isGenerateTextLoading}
                onClick={handleSubmitText}
                className="aiEdit_btn"
              >
                {isGenerateTextLoading ? "Editing..." : "AI Edit"}
              </button>
            </div>
          </div>
          <div className="newOffer_leftFormItem">
            <label>Category</label>
            <input
              placeholder="Enter Offer Category e.g Building, Land or Painting"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div className="newOffer_leftFormItem">
            <label htmlFor="file" className="label_imgUpload">
              Upload Image
            </label>
            <input type="file" id="file" multiple onChange={handleMultipleImages} />
          </div>
          <div className="newOffer_leftFormItem">
            <label>Offer Start Date</label>
            <input
              placeholder="Enter start date"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="newOffer_leftFormItem">
            <label>Offer End Date</label>
            <input
              placeholder="Enter end date"
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>
          <button disabled={isLoading} className="newOffer_leftFormItemBtn">
            {isLoading ? "Sending..." : "Send"}
          </button>
          {error && errorMessageDisplay && (
            <TypingText text={error} intervalDuration={50} className="error" />
          )}
          {success && (
            <TypingText
              text="Offer Created Successfully"
              intervalDuration={50}
              className="offerSuccess"
            />
          )}
        </form>
      </div>
      <div className="newOffer_Right">
        <div className="newOfferRight_item">
          <span className="heading">Title</span>
          <h2 className="newOfferRight_item newOffer_title">{formData.title}</h2>
        </div>
        <div className="newOfferRight_item">
          <span className="heading">Description</span>
          <p className="newOfferRight_item newOffer_desc">{formData.desc || offerDesc.desc}</p>
        </div>
        <div className="newOfferRight_item newOffer_ImgHolder">
          {imagesPreview &&
            imagesPreview.map((url, index) => (
              <img key={url + index} src={url} alt="avatar" className="newOfferImg" />
            ))}
        </div>
        <div className="newOfferRight_item">
          <span className="heading">Valid Date</span>
          <p className="newOfferRight_item newOffer_validDate">
            Offer starts <span className="startDate">{formData.startDate}</span> and ends{" "}
            <span className="endDate">{formData.endDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewOffer;
