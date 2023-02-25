import { AiFillHeart } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import { MdCenterFocusStrong, MdHighQuality } from "react-icons/md";

import painter from "../../assets/logos/painter1.png";
import { FadeUpAnimation, FadeRightAnimation } from "../../components/UI/Animation/Animation";
import "./Painting.scss";

const Painting = () => {
  return (
    <div className="painting">
      <FadeUpAnimation className="painting__p heading-text--sm">painting</FadeUpAnimation>
      <FadeUpAnimation className="painting__header heading-text--lg">
        Painting Services
      </FadeUpAnimation>
      <div className="painting__holder">
        <FadeRightAnimation className="paintingLeft">
          <div className="paintingLeft_container">
            <div className="paintingLeft_overlay"></div>
            <img src={painter} alt="painter" className="paintingLeft_img" />
          </div>
        </FadeRightAnimation>
        <div className="paintingRight">
          <div className="paintingRight_headerHolder">
            <h3 className="paintingRight_header">
              <span className="paintingRight_headerIcon">
                <FcServices />
              </span>
              Our Service Is Top-notch
            </h3>
            <p className="paintingRight_headerText">
              We do not just paint walls, we paint memories. Let us help you make that building
              beautiful.
            </p>
          </div>

          <div className="paintingRight_groupWrapper">
            {[
              {
                icon: <AiFillHeart />,
                heading: "Interior & Exterior",
                text: "We specialize in both interior and exterior painting, and we are dedicated to providing excellent customer service",
              },
              {
                icon: <MdCenterFocusStrong />,
                heading: "Attention To Detail",
                text: "We pride ourselves in our attention to detail and commitment to customer satisfaction,you can trust us to deliver a quality paint job",
              },
              {
                icon: <FaUserTie />,
                heading: "Experienced Painters",
                text: "Our team of experienced painters will work with you to achieve the perfect look for your building,using meticulus technique to ensure a long-lasting finish",
              },
              {
                icon: <MdHighQuality />,
                heading: "High Quality",
                text: `We understand that your building is one of your biggest investments, that's why we use only the highest quality paints and materials for our projects`,
              },
            ].map(({ icon, heading, text }) => (
              <div className="paintingRight_group" key={heading}>
                <p className="group_heading">{heading}</p>
                <p className="group_text">{text}</p>
                <span className="group_icon">{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Painting;
