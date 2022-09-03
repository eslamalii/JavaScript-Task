import React from 'react';

// A Custom Alert Message
const Alert = ({ isRight }) => {
  return isRight ? (
    <div
      className="p-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
      role="alert"
    >
      <span className="font-medium">Right Answer</span>
    </div>
  ) : (
    <div
      className="p-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <span className="font-medium">Wrong Answer</span>
    </div>
  );
};

export default Alert;
