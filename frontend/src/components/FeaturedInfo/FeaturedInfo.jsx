//import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MdVisibility, MdFileCopy, MdClose } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./FeaturedInfo.scss";
import HorizontalBar from "../HorizontalBar";
import { UseToggleVisibility } from "../../Hooks/customHook";
import { useReviewFunction } from "../../Hooks/useApiRequest";
import { useRestContext } from "../../Hooks/useRestContext";
import {
  FadeDownAnimation,
  FadeLeftAnimation,
  FadeRightAnimation,
} from "../UI/Animation/Animation";

const FeaturedInfo = () => {
  const { toggle, setToggle, toggle1, setToggle1 } = UseToggleVisibility();
  const { starNum, getPercentage, totalReviews } = useReviewFunction();
  const {
    subscribers,
    supportRequests,
    buyPropertyRequests,
    sellPropertyRequests,
    painterRequests,
  } = useRestContext();

  let subscribersMail = subscribers?.map(({ email }) => email);
  const mainToggle = () => {
    setToggle1(false);
    setToggle(true);
  };
  //COPY SUBSCRIBERS MAIL TO CLIPBOARD
  const copyToClipboard = async (sub) => {
    const subscribersString = sub.join("\n");
    try {
      navigator.clipboard.writeText(subscribersString);
      setToggle(false);
      setToggle1(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="featured">
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          500: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          750: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          884: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1030: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={false}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="featuredItem">
          <FadeDownAnimation className="reviewTextBold">
            Customer reviews{" "}
            <span className="reviewTextLight">{`(${totalReviews()} total reviews)`}</span>
          </FadeDownAnimation>
          <FadeRightAnimation className="barAllHolder">
            {[
              {
                star: 5,
                bgColor: "#48E6B4",
                percentage: `${getPercentage(5)}%`,
                totalStarNo: starNum(5),
              },
              {
                star: 4,
                bgColor: "#AED58A",
                percentage: `${getPercentage(4)}%`,
                totalStarNo: starNum(4),
              },
              {
                star: 3,
                bgColor: "#D6D678",
                percentage: `${getPercentage(3)}%`,
                totalStarNo: starNum(3),
              },
              {
                star: 2,
                bgColor: "#D6B878",
                percentage: `${getPercentage(2)}%`,
                totalStarNo: starNum(2),
              },
              {
                star: 1,
                bgColor: "#D69178",
                percentage: `${getPercentage(1)}%`,
                totalStarNo: starNum(1),
              },
            ].map((rating, index) => (
              <div className="barHolder" key={index}>
                <span className="starRating">{rating.star}</span>
                <HorizontalBar bgColor={rating.bgColor} percentage={rating.percentage} />
                <div className="barGroupLeft">
                  <span className="starPercentage">{rating.percentage}</span>
                  <span className="starNo">{rating.totalStarNo}</span>
                </div>
              </div>
            ))}
          </FadeRightAnimation>
        </SwiperSlide>
        <SwiperSlide className="featuredItem">
          <FadeLeftAnimation className="messagesContainer">
            <div className="messagesContainer__item">
              <span className="itemHeader">Subscribers</span>
              {subscribers && <span className="itemNumber">{subscribers.length}</span>}
              <button onClick={() => mainToggle()} className="itemButton copyBtn">
                Click
              </button>
              {toggle && (
                <div className="copyOrSend">
                  <MdClose classname="close" onClick={() => setToggle(false)} />
                  <div className="btnHolder">
                    <button onClick={() => copyToClipboard(subscribersMail)} className="btn">
                      <MdFileCopy />
                      Copy
                    </button>
                    <Link to="/adminDashboard/messageSubscribers" className="btn">
                      <span className="sendBtn">Msg</span>
                    </Link>
                  </div>
                </div>
              )}
              {toggle1 && (
                <div className="clipBoard-Tooltip">
                  <MdClose onClick={() => setToggle1(false)} />
                  <span>copied to clipboard</span>
                </div>
              )}
            </div>
            <div className="messagesContainer__item">
              <span className="itemHeader">Support Requests</span>
              {supportRequests && <span className="itemNumber">{supportRequests.length}</span>}
              <Link to={`/adminDashboard/messages`}>
                <button disabled={supportRequests?.length < 1} className="itemButton">
                  <MdVisibility />
                  Display
                </button>
              </Link>
            </div>
            <div className="messagesContainer__item">
              <span className="itemHeader">Buy Property Requests</span>
              {buyPropertyRequests && (
                <span className="itemNumber">{buyPropertyRequests.length}</span>
              )}
              <Link to={`/adminDashboard/messages`}>
                <button disabled={buyPropertyRequests?.length < 1} className="itemButton">
                  <MdVisibility />
                  Display
                </button>
              </Link>
            </div>
            <div className="messagesContainer__item">
              <span className="itemHeader">Sell Property Requests</span>
              {sellPropertyRequests && (
                <span className="itemNumber">{sellPropertyRequests.length}</span>
              )}
              <Link to={`/adminDashboard/messages`}>
                <button disabled={sellPropertyRequests?.length < 1} className="itemButton">
                  <MdVisibility />
                  Display
                </button>
              </Link>
            </div>
            <div className="messagesContainer__item">
              <span className="itemHeader">Painter Requests</span>
              {painterRequests && <span className="itemNumber">{painterRequests.length}</span>}
              <Link to={`/adminDashboard/messages`}>
                <button disabled={painterRequests?.length < 1} className="itemButton">
                  <MdVisibility />
                  Display
                </button>
              </Link>
            </div>
          </FadeLeftAnimation>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedInfo;
