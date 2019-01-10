import React from 'react';

const Options = ({ categories, handleOptionChange, value }) => (
  <div>
    <label htmlFor="categories">Categories: </label>
    <select
      name="categories"
      value={value}
      onChange={e => handleOptionChange(e.target.value)}
    >
      {categories.map(option => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default Options;
