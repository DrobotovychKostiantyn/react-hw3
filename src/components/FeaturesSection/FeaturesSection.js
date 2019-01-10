import React from 'react';
import SectionTitle from './Title/SectionTitle';
import FeaturesSectionDesc from './ListsAndPhone/FeaturesSectionDesc';

import s from './FeaturesSection.module.css';

const FeaturesSection = () => (
  <div className={s.wrapper}>
    <SectionTitle />
    <FeaturesSectionDesc />
  </div>
);

export default FeaturesSection;
