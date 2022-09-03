import React from 'react';

// A Custom ProgressBar
const ProgressBar = ({ value }) => {
  return (
    <div className="relative w-2/3 h-5 bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className=" h-5 bg-blue-600 py-0.5 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-100 font-medium text-center leading-none">{`${value}%`}</div>
    </div>
  );
};

export default ProgressBar;
