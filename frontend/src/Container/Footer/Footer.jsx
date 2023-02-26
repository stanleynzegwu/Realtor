import { useState } from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

import "./Footer.scss";
import { FadeUpAnimation, FadeDownAnimation } from "../../components/UI/Animation/Animation";
import { useSubscription } from "../../Hooks/useApiRequest";
import { TypingText } from "../../components";
import logo from "../../assets/logos/realsplashlogo.png";

const Footer = () => {
  const { Subscribe, isLoading, success, successMessageDisplay, error, errorMessageDisplay } =
    useSubscription();
  const [formData, setFormData] = useState({ email: "" });
  const [subscriber, setSubscriber] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const subscriber = await Subscribe(formData);
    setSubscriber(subscriber?.data.email);
    setFormData({ email: "" });
  }

  return (
    <footer className="footer" id="contact">
      <div className="main-wrapper">
        <FadeDownAnimation className="footer_handle wrapper">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="realsplash" />
            </Link>
            <p className="astract-col">Trusted Realtor & Painting Agency</p>
            <div className="icons">
              <BsFacebook />
              <BsInstagram />
              <BsLinkedin />
              <BsTwitter />
            </div>
          </div>
        </FadeDownAnimation>

        <FadeDownAnimation className="footer_about wrapper">
          <h3 className="caption">Quick Links</h3>
          {/* <p className="quick-links astract-col">Team</p> */}
          <Link to="/about/hire">
            <p className="quick-links astract-col">Hire Painter</p>
          </Link>

          <Link to="/viewBlog/allBlog">
            <p className="quick-links astract-col">Blogs</p>
          </Link>
          <Link to="/offers">
            <p className="quick-links astract-col">Offer</p>
          </Link>
        </FadeDownAnimation>
        <FadeUpAnimation className="footer_help wrapper">
          <h3 className="caption">Help & Support</h3>
          <Link to="/userReview">
            <p className="quick-links astract-col">Review</p>
          </Link>
          <Link to="/contact">
            <p className="quick-links astract-col">Contact us</p>
          </Link>
          <p className="quick-links astract-col">FAQ</p>
        </FadeUpAnimation>
        <FadeUpAnimation className="footer_newsletter wrapper">
          <h3 className="caption">Subscribe to our Newsletter</h3>
          <form onSubmit={handleSubmit}>
            <div className="emailInputHolder">
              <span>
                <MdEmail />
              </span>
              <input
                type="email"
                placeholder="Enter your Email Address"
                onChange={(e) => setFormData({ [e.target.name]: e.target.value })}
                value={formData.email}
                name="email"
              />
            </div>
            <button disabled={isLoading}>Subscribe</button>
            {success && successMessageDisplay && (
              <TypingText
                text={`${subscriber} subscribed succesfully`}
                intervalDuration={30}
                className="successs"
              />
            )}
            {error && errorMessageDisplay && (
              <TypingText text={error} intervalDuration={30} className="error" />
            )}
          </form>
        </FadeUpAnimation>
      </div>
      <div className="copyright">
        <p className="astract-col col">
          Copyright <BiCopyright /> RealSplash 2022-2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
