// src/Components/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-6 h-6 border-4 border-t-transparent border-purple-500 rounded-full animate-spin"></div>
      <p className="text-xl ms-4 font-semibold text-[#632EE3] animate-pulse tracking-wider">
        LOADING...
      </p>
    </div>
  );
};

export default Loader;
