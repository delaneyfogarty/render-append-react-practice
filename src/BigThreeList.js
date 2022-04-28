import React from 'react';
import BigThreeItem from './BigThreeItem.js';

export default function BigThreeList({ bigThree }) {
  return (
    <div className="bigthree-list">
      {bigThree.map((i) => (
        <BigThreeItem key={i.name} {...i} />
      ))}
    </div>
  );
}
