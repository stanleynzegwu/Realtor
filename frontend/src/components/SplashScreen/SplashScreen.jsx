import { useEffect, useState } from "react";
import logo from "../../assets/logos/realsplashlogo.png";
import "./SplashScreen.scss";

const SplashScreen = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${showLogo ? "show" : "hide"}`}>
      <img src={logo} alt="Company Logo" className="logo-animation" />
    </div>
  );
};

export default SplashScreen;
