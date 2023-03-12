import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { AiFillHome, AiFillPropertySafety } from "react-icons/ai";
import { MdDashboardCustomize, MdLocalOffer } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import { FaBlog, FaUsers } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { TbLogin, TbLogout } from "react-icons/tb";

import logo from "../../assets/logos/realsplashlogo.png";
import "./Navbar.scss";
import { FadeLeftAnimation } from "../UI/Animation/Animation";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useLogout } from "../../Hooks/useApiRequest";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img className="img-logo" src={logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "properties", "testimonial", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex p-text">
          <div />
          <Link to="/viewBlog/allBlog">blog</Link>
        </li>
        <li className="app__flex p-text">
          <div />
          <Link to="/offers">offers</Link>
        </li>
      </ul>
      <div className="navbarImgHolder">
        {user && (
          <img
            src={
              user?.data.img
                ? user?.data.img
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            }
            alt="avatar"
            className="navbarUserImg"
          />
        )}
        <div className="btn__holder">
          {user ? (
            <div className="btn__double">
              <button className="btnLogout" onClick={logout}>
                <TbLogout />
                Logout
              </button>
              {user?.data?.isAdmin && (
                <Link to="/adminDashboard/home">
                  <button className="btn">Dashboard</button>
                </Link>
              )}
            </div>
          ) : (
            <div className="btn__double">
              <Link to="/login">
                <button className="btn1">
                  <TbLogin />
                  Login
                </button>
              </Link>
              <Link to="signup">
                <button className="btn">Sign up</button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="app__navbar-menuHolder">
        {user && (
          <img
            src={
              user?.data.img
                ? user?.data.img
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            }
            alt=""
            className="navbarUserImg"
          />
        )}
        <div className="app__navbar-menu">
          <HiMenu onClick={() => setToggle(true)} />

          {toggle && (
            <FadeLeftAnimation className="nav-menu">
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {[
                  [<AiFillHome />, "home"],
                  [<FcAbout />, "about"],
                  [<AiFillPropertySafety />, "properties"],
                  [<FaUsers />, "testimonial"],
                  [<GrContact />, "contact"],
                ].map((item) => (
                  <li key={item}>
                    <Link href={`#${item[1]}`} onClick={() => setToggle(false)}>
                      {item}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/viewBlog/allBlog" onClick={() => setToggle(false)}>
                    <FaBlog />
                    blog
                  </Link>
                </li>
                <li>
                  <Link to="/offers" onClick={() => setToggle(false)}>
                    <MdLocalOffer />
                    offers
                  </Link>
                </li>
                {user?.data?.isAdmin && (
                  <li>
                    <Link to="/adminDashboard/home">
                      <MdDashboardCustomize />
                      Dashboard
                    </Link>
                  </li>
                )}
                {user ? (
                  <li>
                    <Link onClick={logout}>
                      <TbLogout />
                      Logout
                    </Link>
                  </li>
                ) : (
                  <>
                    {" "}
                    <li>
                      <Link to="/login">
                        <TbLogin />
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/Signup">
                        <SiGnuprivacyguard />
                        Signup
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </FadeLeftAnimation>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
