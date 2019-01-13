import React from 'react';

const BtnClear = ({ handleClearBtn, value }) => (
  <>
    <button type="button" onClick={handleClearBtn}>
      Clear filter
    </button>
    <p>Filter type: {value}</p>
  </>
);

export default BtnClear;
