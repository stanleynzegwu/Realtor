import "./Error.scss";
import notFound from "../../assets/logos/not-found.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error_conatiner">
      <div className="img_container">
        <img className="error_img" src={notFound} alt="not-found" />
      </div>
      <p className="lost_text">it looks like you're lost...</p>
      <div className="link_container">
        <Link to={"/"} className="link">
          Home
        </Link>
        {/* <button className="btn">Calender</button>
        <button className="btn">Github</button> */}
      </div>
    </div>
  );
};

export default Error;
