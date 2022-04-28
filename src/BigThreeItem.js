import React from 'react';

export default function BigThreeItem({ Sign, Placement, Planet, Attributes }) {
  return (
    <div className="bigthree-item">
      <p>
        {Sign} {Placement}
      </p>
      <p>Ruling Planet: {Planet}</p>
      <ul className="attributes">
        {Attributes.map((attribute) => (
          <li key={attribute}>{attribute}</li>
        ))}
      </ul>
      <img src={`./images/${Sign}.png`} />
    </div>
  );
}
