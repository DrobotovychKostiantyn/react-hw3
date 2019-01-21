import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';

const Nav = () => (
  <ul className={s.nav}>
    <li>
      <NavLink to="/">Main Page</NavLink>
    </li>
    <li>
      <NavLink to="/menu">Menu</NavLink>
    </li>
  </ul>
);

export default Nav;
