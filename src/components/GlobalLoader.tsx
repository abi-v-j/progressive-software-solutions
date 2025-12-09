import React from 'react';

const GlobalLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      
      <img
        src="/LoaderLogo.png"
        alt="Loading"
        className="w-56 animate-pulse"
        draggable={false}
      />

      <div className="mt-8 h-1 w-64 overflow-hidden rounded bg-gray-200">
        <div className="h-full w-full animate-loader bg-blue-600" />
      </div>

      <p className="mt-4 text-sm tracking-widest text-gray-600">
        INITIALIZING SYSTEM
      </p>
    </div>
  );
};

export default GlobalLoader;
