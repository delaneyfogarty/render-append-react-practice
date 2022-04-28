import React from 'react';

export default function SisterItem({ Name, Age, Birthday }) {
  return (
    <div className="sister-item">
      <p>{Name}</p>
      <p>Age: {Age}</p>
      <p>Birthday:</p>
      <p>Date: {Birthday.Date}</p>
      <p>Zodiac Sign: {Birthday.Zodiac}</p>
    </div>
  );
}
