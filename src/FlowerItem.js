import React from 'react';

export default function FlowerItem({ name, botanicalName, characteristic }) {
  return (
    <div className='flower-item'>
      <p>{name}</p>
      <p>Botanical Name: {botanicalName}</p>
      <p>{characteristic}</p>
    </div>
  );
}

