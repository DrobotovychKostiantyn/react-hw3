import React from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ dropdown }) => (
  <div className={dropdown}>
    <NavLink to="/order-history">Order Histroy</NavLink>
    <button type="button">Logout</button>
  </div>
);

export default Dropdown;
