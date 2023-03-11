import "./Offers.scss";
import { useOfferContext } from "../../Hooks/useOfferContext";
import { Footer } from "../../Container";
import { ScrollToTop, useHandleGoBack } from "../../Hooks/customHook";

const Offers = () => {
  ScrollToTop();
  const handleGoBack = useHandleGoBack();
  const { offers } = useOfferContext();

  return (
    <div className="offersWrapper">
      <div className="offers">
        <h1 className="offers__header">Here Are All Our Offers</h1>
        {offers?.map((offer, index) => (
          <div className="offer__holder" key={index}>
            <h2 className="offer__title">{offer.title}</h2>
            <div className="offers_imgGroup">
              {offer.img.map((img, index) => (
                <img src={img} key={index} alt="offers_visual" className="offer_img" />
              ))}
            </div>
            <div className="offers_item">
              <span className="item_desc">Offer ID - </span>
              <span className="item_content">{offer._id}</span>
            </div>
            <div className="offers_item">
              <span className="item_desc">Offer Description - </span>
              <p className="item_content">{offer.desc}</p>
            </div>
            <p className="offers_validity">
              Offer is valid from <span className="start">{offer.startDate}</span> to{" "}
              <span className="end">{offer.endDate}</span>
            </p>
          </div>
        ))}
        <button onClick={handleGoBack} className="backBtn">
          Back
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Offers;
