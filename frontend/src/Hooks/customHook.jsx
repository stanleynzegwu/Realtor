import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UseId = () => {
  const [id, setId] = useState(0);

  const changeId = (idd) => setId(idd);

  return { id, setId, changeId };
};

export const UseToggleVisibility = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);

  return {
    toggle,
    setToggle,
    toggle1,
    setToggle1,
    toggle2,
    setToggle2,
    toggle3,
    setToggle3,
    toggle4,
    setToggle4,
    toggle5,
    setToggle5,
    toggle6,
    setToggle6,
  };
};

export const SetPasswordVisibility = () => {
  const [isVisible, setVisible] = useState(false);

  const changeVisibility = () => setVisible((prev) => !prev);
  return { isVisible, changeVisibility };
};

export const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export const useHandleGoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return handleGoBack;
};

// export const useLoadingDot = (text) => {
//   const [dots, setDots] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDots((prevDots) => {
//         if (prevDots === "...") {
//           return ".";
//         } else {
//           return prevDots + ".";
//         }
//       });
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   return `${text}${dots}`;
// };
