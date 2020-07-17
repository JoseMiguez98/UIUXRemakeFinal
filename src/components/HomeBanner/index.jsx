import React from 'react';
import './index.scss';

const HomeBanner = ({
  title,
  text,
  background,
  buttonText,
  image
}) => (
  <div className="home-banner">
    <div
      className="home-banner__content"
      style={{ backgroundColor: background }} >
    <div className="home-banner__left">
      <h4 className="home-banner__title">{ title }</h4>
      <p className="home-banner__text">{ text }</p>
      {/* <div className="home-banner__button-wrapper">
        <button className="home-banner__button">{ buttonText }</button>
      </div> */}
    </div>
    <div className="home-banner__right">
      <div className="home-banner__image-wrapper">
        <img className="home-banner__image" src={ image } alt="home-banner" />
      </div>
    </div>
    </div>
  </div>
);

export default HomeBanner;