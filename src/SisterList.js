import React from 'react';
import SisterItem from './SisterItem.js';

export default function SisterList({ sisters }) {
  return (
    <div className='sister-list'>
      {
        sisters.map((sister) =>
          <SisterItem
            key={sister.name}
            {...sister}
          />
        )
      }
    </div>
  );
}

