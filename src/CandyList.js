import React from 'react';
import CandyItem from './CandyItem.js';

export default function candyList({ candies }) {
  return (
    <div className="candy-list">
      {candies.map((candy, index) => (
        <CandyItem key={candy.name + index} candy={candy} />
      ))}
    </div>
  );
}
