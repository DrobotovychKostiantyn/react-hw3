import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../IconSvg/IconSvg';
import urlSprite from '../img/sprite.svg';
import s from './FeaturesSectionListLeft.module.css';

const FeaturesSectionDescListLeft = ({ list }) => (
  <ul className={s.list}>
    {list.map(item => (
      <li key={item.id} className={s.item}>
        <div className={s.item_text}>
          <NavLink to="/" className={s.item_text_top}>
            {item.text}
          </NavLink>
          <p className={s.item_text_bottom}>{item.descr}</p>
        </div>
        <Icon icon={item.icon} style={s.icon} url={urlSprite} />
      </li>
    ))}
  </ul>
);

export default FeaturesSectionDescListLeft;
