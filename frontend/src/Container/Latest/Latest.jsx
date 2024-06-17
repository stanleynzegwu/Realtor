import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { FadeUpAnimation } from "../../components/UI/Animation/Animation";

import { Button } from "../../components";
import "./Latest.scss";
import { usePropertyContext } from "../../Hooks/usePropertyContext";
import { formatPrice } from "../../utilityFunctions";

const Latest = () => {
  const { properties } = usePropertyContext();
  const latestProperties = properties?.data.slice(0, 3);
  return (
    <div className="latest" id="properties">
      <FadeUpAnimation className="latest__FadeUpAnimation heading-text--sm">
        our properties
      </FadeUpAnimation>
      <FadeUpAnimation className="latest__header heading-text--lg">
        latest properties
      </FadeUpAnimation>

      <div className="cardWrapper">
        {latestProperties &&
          latestProperties.map(({ _id, img, propertyType, location, price }, index) => (
            <div key={index} className="card__holder">
              <Link to={`/viewProperty/${_id}`} className="card_Link">
                <div className="card__holder_relative">
                  <div className="card__imgHolder">
                    <img src={img[0]} alt="property" />
                  </div>

                  <div className="card__allDescHolder">
                    <div className="card__restHolder">
                      <div className="card__restHolder-sub">
                        <h2 className="property-type">{propertyType}</h2>
                        <div className="property-location">
                          <span className="icon">
                            <FaMapMarkerAlt />
                          </span>
                          <p className="property-location__text">{location}</p>
                        </div>
                      </div>
                      <div className="property-price__Holder">
                        <span className="property-price">{`N${formatPrice(price)}`}</span>
                      </div>
                    </div>
                    <div className="card__footer">
                      {/* <Link to={`/viewProperty/${_id}`}> */}
                      <div className="card__view">
                        <span>
                          <AiFillEye />
                        </span>
                      </div>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
                <div className="onSale">
                  <p>FOR SALE</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <Link to={`/selectedProperty/allProperties`}>
        <Button val="see all" />
      </Link>
    </div>
  );
};

export default Latest;
