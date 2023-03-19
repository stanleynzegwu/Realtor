import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

import { FadeUpAnimation } from "../../components/UI/Animation/Animation";
import { Button } from "../../components";
import "./Featured.scss";
import { usePropertyContext } from "../../Hooks/usePropertyContext";
import { formatPrice } from "../../utilityFunctions";

const Featured = () => {
  const { properties } = usePropertyContext();
  const featured = properties?.data.filter(({ isFeatured }) => isFeatured === true).slice(0, 2);

  return (
    <section className="featured">
      <FadeUpAnimation className="featured__p heading-text--sm">properties</FadeUpAnimation>
      <FadeUpAnimation className="featured__header heading-text--lg">
        Featured properties
      </FadeUpAnimation>
      <FadeUpAnimation className="featured__cardHolder">
        {featured &&
          featured.map(({ _id, price, img, propertyType, location }, index) => (
            <div key={index} className="featured_card">
              <div className="card_text">
                <p className="card_text-price">{`N${formatPrice(price)}`}</p>
                <h2 className="card_text-property">{propertyType}</h2>
                <div className="property-location">
                  <span className="icon">
                    <FaMapMarkerAlt />
                  </span>
                  <p className="property-location__text">{location}</p>
                </div>
                <Link to={`/viewProperty/${_id}`}>
                  <div className="view">
                    <AiFillEye />
                  </div>
                </Link>
              </div>
              <div className="card_img">
                <img src={img[0]} alt="property" />
              </div>
            </div>
          ))}
      </FadeUpAnimation>
      <Link to="/selectedProperty/isFeatured">
        <Button val="see all" />
      </Link>
    </section>
  );
};

export default Featured;
