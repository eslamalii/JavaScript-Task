import React from 'react';

// A Custom Card
const Card = (props) => {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-xl flex justify-center items-center ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
