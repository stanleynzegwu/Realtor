import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { Footer } from "../../Container";
import "./UserReview.scss";
import { MdKeyboardBackspace } from "react-icons/md";
import illustration from "../../assets/logos/reviewIllustration.svg";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useUserReview } from "../../Hooks/useApiRequest";
import { ScrollToTop, useHandleGoBack } from "../../Hooks/customHook";
import { Success, TypingText } from "../../components";

const UserReview = () => {
  ScrollToTop();
  const handleGoBack = useHandleGoBack();
  const { user } = useAuthContext();
  const userId = user?.data._id;
  const { CreateReview, isLoading, error, setError, success } = useUserReview();
  const [hoverIndex, setHoverIndex] = useState(0);
  const [reviewStarIndex, setReviewStarIndex] = useState(0);
  const [review, setReview] = useState("");
  const shouldStarBeFilled = (val) => {
    return hoverIndex >= val || reviewStarIndex >= val;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (reviewStarIndex === 0 || !review) {
      setError("Both star rating & textarea should be filled");
      return;
    }
    const form = { star: reviewStarIndex, review };
    await CreateReview(userId, form);
  };

  return success ? (
    <div className="successWrapper">
      <Success message="Your Feedback was successfully submitted" />
    </div>
  ) : (
    <>
      <div className="userReview">
        <div className="reviewLeft">
          <span onClick={handleGoBack} className="reviewLeft__goBack">
            <MdKeyboardBackspace />
            Back
          </span>
          <p className="reviewLeft__heading">How many stars would it be?</p>
          <p className="reviewLeft__text">
            Take a moment to provide an honest review and rating of our service.Your feedback helps
            us to improve and better serve our customers. Thank you!
          </p>
          <img src={illustration} alt="review-illustarion" className="review_img" />
        </div>
        <div className="reviewRight">
          <div className="starMainContainer">
            <p>How was your experience ?</p>
            <ul className="starContainer">
              {[1, 2, 3, 4, 5].map((val, index) => (
                <li
                  onMouseEnter={() => setHoverIndex(val)}
                  onMouseLeave={() => setHoverIndex(0)}
                  onClick={() => setReviewStarIndex(val)}
                  key={index}
                >
                  {shouldStarBeFilled(val) ? <AiFillStar /> : <AiOutlineStar />}
                </li>
              ))}
            </ul>
          </div>

          <form className="review-form" onSubmit={handleSubmit}>
            <div className="reviewInput">
              <textarea
                name="review"
                value={review}
                id=""
                cols="20"
                rows="6"
                maxLength={250}
                placeholder="Write your review"
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
            <span className={review.length > 230 ? "yellow" : ""}>{`${review.length}/250`}</span>
            <button disabled={isLoading} type="submit">
              {isLoading ? "Submitting..." : "SUBMIT"}
            </button>
            {error && <TypingText text={error} intervalDuration={30} className="error" />}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserReview;
