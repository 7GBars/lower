import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";
import {AboutModal} from "../Modal/Modal";

export const Slider = ({ imageSrc, title, subtitle, flipped, id, additionalInfo, isListInfo }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img id={id} src={imageSrc} alt="Travel" className="slider__image" />
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
            <AboutModal additionalInfo={additionalInfo} isListInfo={isListInfo} />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider__content" id={id}>
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
            <AboutModal additionalInfo={additionalInfo} isListInfo={isListInfo} />
          </div>
          <img src={imageSrc} alt="Travel" className="slider__image" />

        </>
      );
    }
  };

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

