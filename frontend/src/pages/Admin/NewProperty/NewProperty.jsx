import { useState } from "react";
import { MdPublish } from "react-icons/md";
import "./NewProperty.scss";

import { useCreateProperty } from "../../../Hooks/useApiRequest";
import { uploadFiles } from "../../../firebase";
import { TypingText } from "../../../components";
import { ScrollToTop } from "../../../Hooks/customHook";

const NewProperty = () => {
  ScrollToTop();
  const {
    CreateProperty,
    isLoading,
    setIsLoading,
    error,
    success,
    setError,
    successMessageDisplay,
    errorMessageDisplay,
    seterrorMessageDisplay,
  } = useCreateProperty();

  const [radio, setRadio] = useState("False");
  const [imagesFile, setImagesFile] = useState([]);
  //for image preview
  const [imagesPreview, setImagesPreview] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    propertyType: "",
    location: "",
    state: "",
    desc: "",
    price: "",
    consultancyFee: "",
  });

  const form = { ...formData, isFeatured: radio === "False" ? false : true };

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { category, propertyType, consultancyFee, price, location, state, desc } = form;
    setError(null);
    // Check that all form fields are filled out
    if (
      !category ||
      !propertyType ||
      !consultancyFee ||
      !price ||
      !location ||
      !state ||
      !desc ||
      imagesPreview.length === 0
    ) {
      setError("Please fill out all form fields");
      seterrorMessageDisplay(true);
      setTimeout(() => seterrorMessageDisplay(false), 6000);
      return;
    }
    setIsLoading(true);
    uploadFiles(imagesFile, imagesPreview, CreateProperty, form);
  };

  return (
    <div className="newProperty">
      <div className="propertyTitleContainer">
        <h1 className="propertyTitle">New Property</h1>
      </div>

      <div className="propertyCreateContainer">
        <form className="form form-holder" onSubmit={handleSubmit}>
          <div className="propertyCreateLeft">
            <div className="fl-holder">
              <div className="label">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
              </div>
              <div className="input-flex">
                {/* <span><FaUserAlt /></span> */}
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  placeholder="Type The Category"
                  onChange={handleChange}
                  value={formData.category}
                />
              </div>
            </div>

            <div className="fl-holder">
              <div className="label">
                <label htmlFor="propertyType" className="form-label">
                  Property Type
                </label>
              </div>
              <div className="input-flex">
                {/* <span><MdEmail /></span> */}
                <input
                  type="text"
                  className="form-control"
                  id="propertyType"
                  name="propertyType"
                  placeholder="Enter The Property Type"
                  onChange={handleChange}
                  value={formData.propertyType}
                />
              </div>
            </div>

            <div className="fl-holder">
              <div className="label">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
              </div>
              <div className="input-flex">
                {/* <span><FaLock /></span> */}
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  placeholder="Enter location"
                  onChange={handleChange}
                  value={formData.location}
                />
              </div>
            </div>
            <div className="fl-holder">
              <div className="label">
                <label htmlFor="state" className="form-label">
                  State
                </label>
              </div>
              <div className="input-flex">
                {/* <span><FaLock /></span> */}
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  placeholder="Enter The State"
                  onChange={handleChange}
                  value={formData.state}
                />
              </div>
            </div>
            <div className="fl-holder">
              <div className="label">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
              </div>
              <div className="input-flex">
                {/* <span><FaLock /></span> */}
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  placeholder="Enter The price"
                  onChange={handleChange}
                  value={formData.price}
                />
              </div>
            </div>
            <div className="fl-holder">
              <div className="label">
                <label htmlFor="consultancyFee" className="form-label">
                  consultancyFee
                </label>
              </div>
              <div className="input-flex">
                {/* <span><FaLock /></span> */}
                <input
                  type="number"
                  className="form-control"
                  id="consultancyFee"
                  name="consultancyFee"
                  placeholder="Enter Consultancy Fee Amount"
                  onChange={handleChange}
                  value={formData.consultancyFee}
                />
              </div>
            </div>
            <div className="fl-holder">
              <div className="label">
                <label htmlFor="desc" className="form-label">
                  Description
                </label>
              </div>
              <div className="input-flex">
                {/* <span><FaLock /></span> */}
                <textarea
                  className="form-control"
                  id="desc"
                  name="desc"
                  placeholder="Enter Property Description"
                  onChange={handleChange}
                  value={formData.desc}
                />
              </div>
            </div>
            <div className="newPropertyItem">
              <label className="radio-label">isFeatured</label>
              <div className="radioHolder">
                <span>
                  <label htmlFor="true">True</label>
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
                  <label htmlFor="false">False</label>
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
          <div className="propertyCreateRight">
            <div className="newPropertyUpload">
              <div className="newPropertyImgHolder">
                {imagesPreview &&
                  imagesPreview.map((url, index) => (
                    <img key={url + index} src={url} alt="avatar" className="newPropertyImg" />
                  ))}
              </div>

              <label htmlFor="file">
                <MdPublish />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                multiple
                onChange={handleMultipleImages}
              />
            </div>
            <button disabled={isLoading} type="submit" className="propertyCreateButton">
              {isLoading ? "Creating..." : "Create"}
            </button>
            {error && errorMessageDisplay && (
              <TypingText text={error} intervalDuration={50} className="error" />
            )}
            {success && successMessageDisplay && (
              <TypingText
                text="Property Created Successfully"
                intervalDuration={50}
                className="propertySuccess"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProperty;
