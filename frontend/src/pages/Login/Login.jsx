//EXTERNAL IMPORTS
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

//INTERNAL IMPORTS
import { Footer } from "../../Container";
import { SetPasswordVisibility, ScrollToTop, useHandleGoBack } from "../../Hooks/customHook";
import { useLogin } from "../../Hooks/useApiRequest";
import { TypingText } from "../../components";
import signinImg from "../../assets/logos/signin.png";
import { FadeDownAnimation } from "../../components/UI/Animation/Animation";
import "./Login.scss";

const Login = () => {
  ScrollToTop();
  const { isVisible, changeVisibility } = SetPasswordVisibility();
  const handleGoBack = useHandleGoBack();
  const { Login, error, isLoading } = useLogin();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await Login(formData);
  }

  return (
    <>
      <div className="login">
        <div className="form-container">
          <div className="login_illustration">
            <form className="form form-login form-holder" onSubmit={handleSubmit}>
              <p className="form-text form-text--login">Login</p>
              <div className="fl-holder">
                <div className="label">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                </div>
                <div className="input-flex">
                  <span>
                    <MdEmail />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    id="exampleInputPassword1"
                    name="email"
                    placeholder="Enter your Email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
              </div>

              <div className="fl-holder">
                <div className="label">
                  <label for="password" className="form-label">
                    Password
                  </label>
                </div>
                <div className="input-flex">
                  <span>
                    <FaLock />
                  </span>
                  <input
                    type={isVisible ? "text" : "password"}
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your Password"
                    onChange={handleChange}
                    value={formData.password}
                  />
                  {isVisible ? (
                    <span>
                      <AiFillEyeInvisible onClick={changeVisibility} />
                    </span>
                  ) : (
                    <span>
                      <AiFillEye onClick={changeVisibility} />
                    </span>
                  )}
                </div>
              </div>
              <button disabled={isLoading} type="submit" className="btn">
                {isLoading ? "Validating..." : "Login"}
              </button>
              <p className="noAccount">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span>Signup Now</span>
                </Link>
              </p>
              {error && <TypingText text={error} intervalDuration={30} className="error" />}
            </form>
            <FadeDownAnimation className="illustration">
              <p className="illustration_header">
                Finding Your Dream Property and Bringing your Building to Life with Fresh Coat of
                Paint
              </p>
              <p className="illustration_text">
                Welcome back! Let's get back to business and continue your experience.
              </p>
              <img className="illustration_img" src={signinImg} alt="illustration" />
            </FadeDownAnimation>
          </div>
        </div>
        <button onClick={handleGoBack} className="backBtn">
          Back
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Login;
