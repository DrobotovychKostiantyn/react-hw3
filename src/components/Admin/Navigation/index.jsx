import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';

const Nav = () => (
  <ul className={s.nav}>
    <li>
      <NavLink to="/admin">Main Page</NavLink>
    </li>
    <li>
      <NavLink to="/admin/menu">Menu</NavLink>
    </li>
  </ul>
);

export default Nav;
