import React from 'react';
import FlowerItem from './FlowerItem.js';

export default function FlowerList({ flowers }) {
  return (
    <div className='flower-list'>
      {
        flowers.map((flower) =>
          <FlowerItem
            key={flower.name}
            {...flower}
          />
        )
      }
    </div>
  );
}

