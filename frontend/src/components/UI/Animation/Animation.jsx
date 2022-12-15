import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const FadeUpAnimation = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className={props.className}
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      data-aos-mirror="false"
      data-aos-once="false"
    >
      {props.children}
    </div>
  );
};
export const FadeRightAnimation = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className={props.className}
      data-aos-offset="0"
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      data-aos-mirror="false"
      data-aos-once="false"
    >
      {props.children}
    </div>
  );
};
export const FadeLeftAnimation = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className={props.className}
      data-aos="fade-left"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      data-aos-mirror="false"
      data-aos-once="false"
    >
      {props.children}
    </div>
  );
};
export const SlideLeftAnimation = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className={props.className}
      data-aos="slide-left"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      data-aos-mirror="false"
      data-aos-once="false"
    >
      {props.children}
    </div>
  );
};
export const SlideRightAnimation = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className={props.className}
      data-aos="slide-right"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      data-aos-mirror="false"
      data-aos-once="false"
    >
      {props.children}
    </div>
  );
};
export const FadeDownAnimation = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className={props.className}
      data-aos="fade-down"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      data-aos-mirror="false"
      data-aos-once="false"
    >
      {props.children}
    </div>
  );
};