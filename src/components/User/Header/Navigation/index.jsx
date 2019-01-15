import React from 'react';
import { NavLink } from 'react-router-dom';
import navItems from '../../config/nav-item.json';
import s from './navigation.module.css';

const Nav = () => (
  <nav className={s.nav}>
    <ul className={s.navList}>
      {navItems.map(navItem => (
        <li key={navItem.id}>
          <NavLink to={navItem.link} className={s.navLink}>
            {navItem.navItem}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
