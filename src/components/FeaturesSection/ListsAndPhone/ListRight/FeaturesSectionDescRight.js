import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../IconSvg/IconSvg';
import urlSprite from '../img/sprite.svg';
import s from './FeaturesSectionDescListRight.module.css';

const FeaturesSectionDescListRight = ({ list }) => (
  <ul className={s.list}>
    {list.map(item => (
      <li key={item.id} className={s.item}>
        <Icon icon={item.icon} style={s.icon} url={urlSprite} />
        <NavLink to="/" className={s.item_text}>
          {item.text}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default FeaturesSectionDescListRight;
