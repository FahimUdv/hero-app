import React from 'react';
import { FaSearch } from 'react-icons/fa';


const NoSearchResults = ({ query }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center text-gray-600">
      <FaSearch className="text-5xl text-gray-400 mb-4" />
      <h2 className="text-xl font-semibold text-gray-700">
        No Apps Found
      </h2>
      {query && (
        <p className="mt-2 text-gray-500">
          We couldn’t find any app matching “<span className="font-medium">{query}</span>”.
        </p>
      )}
    </div>
  );
};

export default NoSearchResults;