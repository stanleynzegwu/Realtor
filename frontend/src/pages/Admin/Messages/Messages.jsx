import { useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import "./Messages.scss";
import { useRestContext } from "../../../Hooks/useRestContext";
import {
  useSendRequestReply,
  useDeleteSupportRequest,
  useDeleteBuyPropertyRequest,
  useDeleteSellPropertyRequest,
  useDeleteHirePainterRequest,
} from "../../../Hooks/useApiRequest";
import { UseToggleVisibility, UseId, ScrollToTop } from "../../../Hooks/customHook";
import {
  FadeUpAnimation,
  FadeDownAnimation,
  FadeLeftAnimation,
  FadeRightAnimation,
} from "../../../components/UI/Animation/Animation";
import { ButtonLarge, TypingText, SelectedMessageDisplay, Success } from "../../../components";
import { formatPrice } from "../../../utilityFunctions";
import Envelope from "../../../assets/logos/Envelope.png";

const Messages = () => {
  ScrollToTop();
  const {
    CreateRequestReply,
    success,
    isLoading,
    error,
    setError,
    errorMessageDisplay,
    seterrorMessageDisplay,
  } = useSendRequestReply();
  const { DeleteSupportRequest, deleteSupportIsLoading, deleteSupportSuccess } =
    useDeleteSupportRequest();
  const { DeleteBuyPropertyRequest, deleteBuyIsLoading, deleteBuySuccess } =
    useDeleteBuyPropertyRequest();
  const { DeleteSellPropertyRequest, deleteSellIsLoading, deleteSellSuccess } =
    useDeleteSellPropertyRequest();
  const { DeleteHirePainterRequest, deleteHireIsLoading, deleteHireSuccess } =
    useDeleteHirePainterRequest();
  const { supportRequests, buyPropertyRequests, sellPropertyRequests, painterRequests } =
    useRestContext();
  const {
    toggle,
    setToggle,
    toggle1,
    setToggle1,
    toggle2,
    setToggle2,
    toggle3,
    setToggle3,
    toggle4,
    setToggle4,
    toggle5,
    setToggle5,
    toggle6,
    setToggle6,
  } = UseToggleVisibility();
  const { id, setId } = UseId();
  const [preloadForm, setPreloadForm] = useState("");

  //GET THE EMAIL OF THE CLICKED USER
  const { name, request, idd } = preloadForm;
  const filteredRequest = request?.filter(({ _id }) => idd === _id);
  const email = filteredRequest?.map(({ email, customer_email }) => email || customer_email);

  const [formData, setFormData] = useState({ subject: "", message: "" });

  const preload = (name, request, idd) => {
    setPreloadForm({ name, request, idd });
    setToggle4(false);
    setToggle5(true);
  };

  const handleShouldBeVisible = (id) => {
    setId(id);
    setToggle4((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    const { subject, message } = formData;
    e.preventDefault();

    if (!subject || !message) {
      setError("No input field should be empty");
      seterrorMessageDisplay(true);
      setTimeout(() => seterrorMessageDisplay(false), 6000);
      return;
    }
    const allFormData = { ...formData, email };
    const res = await CreateRequestReply(allFormData);
    if (res.status === 200) {
      if (name === "painterRequests") {
        DeleteHirePainterRequest(idd);
      } else if (name === "supportRequests") {
        DeleteSupportRequest(idd);
      } else if (name === "buyPropertyRequests") {
        DeleteBuyPropertyRequest(idd);
      } else if (name === "sellPropertyRequests") {
        DeleteSellPropertyRequest(idd);
      }
    }
  };

  return success &&
    (deleteSupportSuccess || deleteBuySuccess || deleteSellSuccess || deleteHireSuccess) ? (
    <div className="successWrapper">
      <Success message="Your Message has been sent successfully." />
    </div>
  ) : (
    <div className={toggle5 ? `Messages hideOverflow` : `Messages`}>
      <FadeDownAnimation className="Messages_header">All messages</FadeDownAnimation>

      <div className="messages_itemWrapper-wrapper">
        <div className="messages_itemWrapper">
          {/* SUPPORT REQUESTS */}
          {supportRequests && supportRequests.length > 0 && (
            <FadeUpAnimation className="Messages-item">
              <h2>Support Requests</h2>
              <span className="Messages-item_toggle">
                {`${supportRequests.length} message${supportRequests.length > 1 ? "s" : ""}`}
                <MdVisibility onClick={() => setToggle((prev) => !prev)} />
              </span>

              {toggle && (
                <FadeUpAnimation className="messageWrapper">
                  {supportRequests?.map(
                    ({ createdAt, _id, email, message, name, phoneNumber }, index) => (
                      <div className="message-item" key={_id}>
                        <span className="number">{index + 1}</span>
                        <div className="item_val">
                          <span className="label">Time Sent</span>
                          <span className="value name">
                            {formatDistanceToNow(new Date(createdAt), {
                              addSuffix: true,
                            })}
                          </span>
                        </div>
                        <div className="item_val">
                          <span className="label">Full Name</span>
                          <span className="value name">{name}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">email</span>
                          <span className="value email">{email}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">phone number</span>
                          <span className="value phoneNumber">{phoneNumber}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">message</span>
                          <span className="value message">{message}</span>
                        </div>

                        {toggle4 && id === _id && (
                          <div className="item_hover">
                            <Link
                              onClick={() => preload("supportRequests", supportRequests, _id)}
                              className="item_btn"
                            >
                              Reply
                            </Link>
                            {/* <button className="item_btn deleteBtn">Delete</button> */}
                          </div>
                        )}
                        <span onClick={() => handleShouldBeVisible(_id)} className="moreOption">
                          <BsThreeDotsVertical />
                        </span>
                      </div>
                    )
                  )}
                </FadeUpAnimation>
              )}
            </FadeUpAnimation>
          )}

          {/* BUY PROPERTY REQUESTS */}
          {buyPropertyRequests && buyPropertyRequests.length > 0 && (
            <FadeUpAnimation className="Messages-item">
              <h2>Buy Property Requests</h2>
              <span className="Messages-item_toggle">
                {`${buyPropertyRequests.length} message${
                  buyPropertyRequests.length > 1 ? "s" : ""
                }`}
                <MdVisibility onClick={() => setToggle1((prev) => !prev)} />
              </span>
              {toggle1 && (
                <FadeUpAnimation className="messageWrapper">
                  {buyPropertyRequests?.map(
                    ({ createdAt, _id, property_id, email, message, name, phoneNumber }, index) => (
                      <div className="message-item" key={_id}>
                        <span className="number">{index + 1}</span>
                        <div className="item_val">
                          <span className="label">Time Sent</span>
                          <span className="value name">
                            {formatDistanceToNow(new Date(createdAt), {
                              addSuffix: true,
                            })}
                          </span>
                        </div>
                        <div className="item_val">
                          <span className="label">property id</span>
                          <span className="value id">{property_id}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">name</span>
                          <span className="value name">{name}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">sender email</span>
                          <span className="value email">{email}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">phone number</span>
                          <span className="value phoneNumber">{phoneNumber}</span>
                        </div>
                        {message && (
                          <div className="item_val">
                            <span className="label">message</span>
                            <p className="value message">{message}</p>
                          </div>
                        )}
                        {toggle4 && id === _id && (
                          <div className="item_hover">
                            <Link
                              onClick={() =>
                                preload("buyPropertyRequests", buyPropertyRequests, _id)
                              }
                              className="item_btn"
                            >
                              Reply
                            </Link>
                            {/* <button className="item_btn deleteBtn">Delete</button> */}
                          </div>
                        )}
                        <span onClick={() => handleShouldBeVisible(_id)} className="moreOption">
                          <BsThreeDotsVertical />
                        </span>
                      </div>
                    )
                  )}
                </FadeUpAnimation>
              )}
            </FadeUpAnimation>
          )}

          {/* SELL PROPERTY REQUESTS */}
          {sellPropertyRequests && sellPropertyRequests.length > 0 && (
            <FadeUpAnimation className="Messages-item">
              <h2>Sell Property Requests</h2>
              <span className="Messages-item_toggle">
                {`${sellPropertyRequests.length} message${
                  sellPropertyRequests.length > 1 ? "s" : ""
                }`}
                <MdVisibility onClick={() => setToggle2((prev) => !prev)} />
              </span>
              {toggle2 && (
                <FadeUpAnimation className="messageWrapper">
                  {sellPropertyRequests?.map(
                    (
                      {
                        createdAt,
                        _id,
                        sqft,
                        additional_info,
                        asking_price,
                        condition,
                        description,
                        documents,
                        email,
                        features,
                        fullname,
                        img,
                        location,
                        number,
                        plotSize,
                        property_type,
                        soil_type,
                        topography,
                        yearBuilt,
                        zoning,
                      },
                      index
                    ) => (
                      <div className="message-item" key={_id}>
                        <span className="number">{index + 1}</span>
                        <div className="img-wrapper">
                          {img?.map((img, index) => (
                            <img src={img} alt="property" key={index} />
                          ))}
                        </div>
                        <div className="item_val">
                          <span className="label">Time Sent</span>
                          <span className="value name">
                            {formatDistanceToNow(new Date(createdAt), {
                              addSuffix: true,
                            })}
                          </span>
                        </div>
                        <div className="item_val">
                          <span className="label">property type</span>
                          <span className="value property_type">{property_type}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">location</span>
                          <span className="value location">{location}</span>
                        </div>
                        {sqft && (
                          <div className="item_val">
                            <span className="label">Square footage</span>
                            <span className="value sqft">{sqft}</span>
                          </div>
                        )}
                        {yearBuilt && (
                          <div className="item_val">
                            <span className="label">year built</span>
                            <span className="value yearBuilt">{yearBuilt}</span>
                          </div>
                        )}
                        <div className="item_val">
                          <span className="label">plotSize</span>
                          <span className="value plotSize">{plotSize}</span>
                        </div>
                        {condition && (
                          <div className="item_val">
                            <span className="label">condition</span>
                            <span className="value condition">{condition}</span>
                          </div>
                        )}
                        {features && (
                          <div className="item_val">
                            <span className="label">features</span>
                            <span className="value features">{features}</span>
                          </div>
                        )}
                        {zoning && (
                          <div className="item_val">
                            <span className="label">zoning</span>
                            <span className="value zoning">{zoning}</span>
                          </div>
                        )}
                        {topography && (
                          <div className="item_val">
                            <span className="label">topography</span>
                            <span className="value topography">{topography}</span>
                          </div>
                        )}
                        {soil_type && (
                          <div className="item_val">
                            <span className="label">soil type</span>
                            <span className="value soil_type">{soil_type}</span>
                          </div>
                        )}
                        <div className="item_val">
                          <span className="label">description</span>
                          <span className="value description">{description}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">asking price</span>
                          <span className="value asking_price">{`N${formatPrice(
                            asking_price
                          )}`}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">documents</span>
                          <span className="value documents">{documents}</span>
                        </div>
                        {additional_info && (
                          <div className="item_val">
                            <span className="label">additional info</span>
                            <span className="value additional_info">{additional_info}</span>
                          </div>
                        )}
                        <div className="item_val">
                          <span className="label">fullname</span>
                          <span className="value fullname">{fullname}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">email</span>
                          <span className="value email">{email}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">number</span>
                          <span className="value phone_number">{number}</span>
                        </div>
                        {toggle4 && id === _id && (
                          <div className="item_hover">
                            <div
                              onClick={() =>
                                preload("sellPropertyRequests", sellPropertyRequests, _id)
                              }
                              className="item_btn"
                            >
                              Reply
                            </div>
                            {/* <button className="item_btn deleteBtn">Delete</button> */}
                          </div>
                        )}
                        <span onClick={() => handleShouldBeVisible(_id)} className="moreOption">
                          <BsThreeDotsVertical />
                        </span>
                      </div>
                    )
                  )}
                </FadeUpAnimation>
              )}
            </FadeUpAnimation>
          )}

          {/* PAINTER REQUEST MESSAGES */}
          {painterRequests && painterRequests.length > 0 && (
            <FadeUpAnimation className="Messages-item">
              <h2>Painter Requests</h2>
              <span className="Messages-item_toggle">
                {`${painterRequests.length} message${painterRequests.length > 1 ? "s" : ""}`}
                <MdVisibility onClick={() => setToggle3((prev) => !prev)} />
              </span>
              {toggle3 && (
                <FadeUpAnimation className="messageWrapper">
                  {painterRequests?.map(
                    (
                      {
                        createdAt,
                        _id,
                        address,
                        budget,
                        startDate,
                        completionDate,
                        consultation,
                        customer_email,
                        sqft,
                        customer_name,
                        customer_number,
                        img,
                        paint_provider,
                        painting_service,
                        repairs_needed,
                        special_request,
                        type_Of_Paint,
                      },
                      index
                    ) => (
                      <div className="message-item" key={_id}>
                        <span className="number">{index + 1}</span>
                        <div className="img-wrapper">
                          {img?.map((img, index) => (
                            <img src={img} alt="building" key={index} />
                          ))}
                        </div>
                        <div className="item_val">
                          <span className="label">Time Sent</span>
                          <span className="value name">
                            {formatDistanceToNow(new Date(createdAt), {
                              addSuffix: true,
                            })}
                          </span>
                        </div>
                        <div className="item_val">
                          <span className="label">address</span>
                          <span className="value address">{address}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">sqft</span>
                          <span className="value sqft">{sqft}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">start date</span>
                          <span className="value startDate">{startDate}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">completion date</span>
                          <span className="value completionDate">{completionDate}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">type Of Paint</span>
                          <span className="value type_Of_Paint">{type_Of_Paint}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">painting service</span>
                          <span className="value painting_service">{painting_service}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">paint provider</span>
                          <span className="value paint_provider">{paint_provider}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">consultation</span>
                          <span className="value consultation">{consultation}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">repairs needed</span>
                          <span className="value repairs_needed">{repairs_needed}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">budget</span>
                          <span className="value budget">{`N${formatPrice(budget)}`}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">special request</span>
                          <span className="value special_request">{special_request}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">customer name</span>
                          <span className="value customer_name">{customer_name}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">customer email</span>
                          <span className="value customer_email">{customer_email}</span>
                        </div>
                        <div className="item_val">
                          <span className="label">customer number</span>
                          <span className="value customer_number">{customer_number}</span>
                        </div>
                        {toggle4 && id === _id && (
                          <div className="item_hover">
                            <Link
                              onClick={() => preload("painterRequests", painterRequests, _id)}
                              className="item_btn"
                            >
                              Reply
                            </Link>
                            {/* <button className="item_btn deleteBtn">Delete</button> */}
                          </div>
                        )}
                        <span onClick={() => handleShouldBeVisible(_id)} className="moreOption">
                          <BsThreeDotsVertical />
                        </span>
                      </div>
                    )
                  )}
                </FadeUpAnimation>
              )}
            </FadeUpAnimation>
          )}
        </div>
        {!toggle && !toggle1 && !toggle2 && !toggle3 && (
          <FadeLeftAnimation className="img_div">
            <img src={Envelope} alt="message-illustration" className="message-img" />
          </FadeLeftAnimation>
        )}
      </div>

      {/* REPLY FORM FIELD */}
      {toggle5 && (
        <div className="formReply-wrapper">
          <div className="formReply">
            <span className="formReply__span">
              <MdVisibility onClick={() => setToggle6(true)} />
              <AiOutlineClose onClick={() => setToggle5(false)} />
            </span>

            <h3 className="formReply__header">Response Form</h3>
            <form onSubmit={handleSubmit} className="form">
              <FadeRightAnimation className="formReply__item">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter the subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </FadeRightAnimation>
              <FadeLeftAnimation className="formReply__item">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Enter The Message"
                  cols="30"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                />
              </FadeLeftAnimation>
              <button
                disabled={
                  isLoading ||
                  deleteSupportIsLoading ||
                  deleteBuyIsLoading ||
                  deleteSellIsLoading ||
                  deleteHireIsLoading
                }
                className="reply_btn"
              >
                {isLoading ||
                deleteSupportIsLoading ||
                deleteBuyIsLoading ||
                deleteSellIsLoading ||
                deleteHireIsLoading
                  ? "Sending..."
                  : "Reply"}
              </button>
            </form>
          </div>
          {error && errorMessageDisplay && (
            <TypingText text={error} intervalDuration={50} className="error" />
          )}
        </div>
      )}

      {/* DISPLAY SELECTED MESSAGE DETAILS */}
      {toggle6 && (
        <div className="selectedMessageWrapper">
          <AiOutlineClose onClick={() => setToggle6(false)} className="closeIcon" />
          <SelectedMessageDisplay data={filteredRequest} />
        </div>
      )}

      {/* BACK BUTTON */}
      <ButtonLarge
        text="Back"
        background="#ffff"
        color="#20336a"
        hoverColor="#fff"
        hoverBackground="#20336a"
        width="90%"
      />
    </div>
  );
};

export default Messages;
