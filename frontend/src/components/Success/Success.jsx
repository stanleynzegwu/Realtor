import { Link } from "react-router-dom";
import "./Success.scss";
import { useHandleGoBack } from "../../Hooks/customHook";
import TypingText from "../TypingText";

const Success = ({ message }) => {
  const handleGoBack = useHandleGoBack();

  return (
    <div className="success">
      <p className="thumbs-up">👍</p>
      <h1 className="success__big">Success!</h1>
      <TypingText text={message} intervalDuration={50} className="success__message" />
      <div className="successBtnWrapper">
        <Link to="/" className="successBtn">
          <span>Home</span>
        </Link>
        <span onClick={handleGoBack} className="successBtn">
          Back
        </span>
      </div>
    </div>
  );
};

export default Success;
