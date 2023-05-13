import React from "react";
import "./Hero.css";
import {ButtonSuccess} from "../elements/button/ButtonSuccess";

export const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Travel" className="hero__image" />
      <div className="hero__text-content">
        <ButtonSuccess text={'О нас'}/>
        <h1 className="hero__title">Ваш фаворит в делах</h1>
        <p>
          <b>Ваша победа – наша профессия!</b> <br/>
          Это главный девиз нашей компании при оказании юридической помощи. Мы не просто говорим, а тщательно работаем над каждым вопросом.
        </p>
      </div>
    </div>
  );
};


