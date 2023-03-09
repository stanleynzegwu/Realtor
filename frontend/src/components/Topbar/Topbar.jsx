import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdNotificationsNone,
  MdProductionQuantityLimits,
  MdOutlineReviews,
  MdOutlineLocalOffer,
  MdLineStyle,
  MdTimeline,
} from "react-icons/md";
import { FiUsers, FiMessageSquare } from "react-icons/fi";
import { GrBlog } from "react-icons/gr";
import { HiMenu, HiX } from "react-icons/hi";

import "./Topbar.scss";
import { FadeRightAnimation, FadeLeftAnimation } from "../UI/Animation/Animation";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useRestContext } from "../../Hooks/useRestContext";
import logo from "../../assets/logos/realsplashlogo.png";

const Topbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user } = useAuthContext();
  const { supportRequests, buyPropertyRequests, sellPropertyRequests, painterRequests } =
    useRestContext();
  const supportRequestsLength = supportRequests && supportRequests.length;
  const buyPropertyRequestsLength = buyPropertyRequests && buyPropertyRequests.length;
  const sellPropertyRequestsLength = sellPropertyRequests && sellPropertyRequests.length;
  const painterRequestsLength = painterRequests && painterRequests.length;
  const requestsSum =
    supportRequestsLength +
    buyPropertyRequestsLength +
    sellPropertyRequestsLength +
    painterRequestsLength;

  const handleClick = () => setToggle(false);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <FadeRightAnimation className="topLeft">
          <Link to="/">
            <img src={logo} alt="company logo" />
          </Link>
        </FadeRightAnimation>
        <div className="topRight">
          <Link to="/adminDashboard/messages">
            <div className="topbarIconContainer">
              <MdNotificationsNone />
              {requestsSum > 0 && <span className="topIconBag">{requestsSum}</span>}
            </div>
          </Link>
          {user && (
            <img
              src={
                user?.data.img
                  ? user?.data.img
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
              }
              alt="avatar"
              className="topAvatar"
            />
          )}
          <div className="topbar__menuIcon" onClick={() => setToggle(true)}>
            <HiMenu />
          </div>
        </div>
      </div>

      {toggle && (
        <FadeLeftAnimation className="topbar__menuList">
          <span className="topbar__closeMenu" onClick={handleClick}>
            <HiX />
          </span>

          <div className="sidebarWrapper topbarWrapper">
            <div className="sidebarMenu topbarMenu">
              <h3 className="sidebarTitle topbarTitle">Dashboard</h3>
              <ul className="sidebarList topbarList">
                <Link to="/adminDashboard/home">
                  <li onClick={handleClick} className="sidebarListItem topbarListItem">
                    <MdLineStyle />
                    Home
                  </li>
                </Link>
                {/* <li onClick={handleClick} className="sidebarListItem topbarListItem">
                  <MdTimeline />
                  Analytics
                </li> */}
              </ul>
            </div>

            <div className="sidebarMenu topbarMenu">
              <h3 className="sidebarTitle topbarTitle">Quick Menu</h3>
              <ul className="sidebarList topbarList">
                <Link to="/adminDashboard/users">
                  <li onClick={handleClick} className="sidebarListItem topbarListItem">
                    <FiUsers />
                    Users
                  </li>
                </Link>
                <Link to="/adminDashboard/reviewList">
                  <li onClick={handleClick} className="sidebarListItem topbarListItem">
                    <MdOutlineReviews />
                    Reviews
                  </li>
                </Link>
                <Link to="/adminDashboard/properties">
                  <li onClick={handleClick} className="sidebarListItem topbarListItem">
                    <MdProductionQuantityLimits />
                    Properties
                  </li>
                </Link>
                <Link to="/adminDashboard/blog">
                  <li onClick={handleClick} className="sidebarListItem topbarListItem">
                    <GrBlog />
                    Blog
                  </li>
                </Link>
                <Link to="/adminDashboard/offerList">
                  <li onClick={handleClick} className="sidebarListItem topbarListItem">
                    <MdOutlineLocalOffer />
                    Offer
                  </li>
                </Link>
              </ul>
            </div>

            <div className="sidebarMenu topbarMenu">
              <h3 className="sidebarTitle topbarTitle">Notifications</h3>
              <ul className="sidebarList topbarList">
                <Link to="/adminDashboard/messages">
                  <li onClick={handleClick} className="sidebarListItem topbarListItem">
                    <FiMessageSquare />
                    Messages
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </FadeLeftAnimation>
      )}
    </div>
  );
};

export default Topbar;
