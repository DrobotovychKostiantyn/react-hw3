import React from 'react';

const Icon = ({ url, icon, style }) => (
  <svg viewBox="0 0 16 16" className={style}>
    <use xlinkHref={`${url}#${icon}`} />
  </svg>
);

export default Icon;
