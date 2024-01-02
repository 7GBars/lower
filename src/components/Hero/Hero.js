import React, {useState} from "react";
import "./Hero.css";
import {ButtonSuccess} from "../elements/button/ButtonSuccess";
import CompanyInfo from "../Companyinfo/CompanyInfo";

export const Hero = ({ imageSrc }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonClick = () => {
    console.log('click сработал')
    setShowMenu(!showMenu);
  };
  return (
    <div className="hero">
      <img src={imageSrc} alt="Travel" className="hero__image" />
      <div className="hero__text-content">
        <ButtonSuccess text={'О нас'} handler={handleButtonClick}/>
        <h1 className="hero__title">Юридический центр ФАВОР - ваш фаворит в делах</h1>
        <p>
          <b>Ваша победа – наша профессия!</b> <br/>
          Это главный девиз нашей компании при оказании юридической помощи. Мы не просто говорим, а тщательно работаем над каждым вопросом.
        </p>

      </div>
      <div className={`hero__menu ${showMenu ? 'menu-open' : ''}`}>
        <button className="close-button" onClick={(e) => setShowMenu(false)}>x</button>
        <CompanyInfo/>
      </div>
    </div>
  );
};


