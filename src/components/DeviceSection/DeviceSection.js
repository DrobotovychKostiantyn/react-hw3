import React from 'react';
import image from './DeviceSection.png';
import s from './css/DeviceSection.module.css';

const FeaturesSection = () => (
  <div className={s.block}>
    <img src={image} alt="text" className={s.img} />
  </div>
);

export default FeaturesSection;
