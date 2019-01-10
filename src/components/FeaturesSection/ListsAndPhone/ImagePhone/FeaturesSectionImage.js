import React from 'react';
import src from '../img/FeaturesSectionImage.png';
import s from './FeaturesSectionImage.module.css';

const FeaturesSectionImage = () => (
  <div className={s.image}>
    <img src={src} alt="Phone 5S" />
  </div>
);

export default FeaturesSectionImage;
