// src/components/Filter.js
import React from 'react';

const Filter = ({ onFilterChange, sources }) => {
  return (
    <select onChange={(e) => onFilterChange(e.target.value)}>
      <option value="">All Sources</option>
      {sources.map((source, index) => (
        <option key={index} value={source}>{source}</option>
      ))}
    </select>
  );
};

export default Filter;
