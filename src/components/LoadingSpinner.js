// src/components/LoadingSpinner.js
import React from 'react';

// Optional: Import your logo if it's in src/assets and you want to use it here too
// import loadingLogo from '../assets/images/mena-logo.svg';

const LoadingSpinner = ({ text = "Loading Page..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white"> {/* Match your app's background */}
      {/* Option 1: Tailwind CSS Animated Spinner (Default) */}
      <div className="w-16 h-16 border-t-4 border-b-4 border-blue-600 rounded-full animate-spin"></div>

      {/* Option 2: Using your logo image for the React Suspense fallback */}
      {/*
      <img
        // src={loadingLogo} // If imported from src/assets
        // src="/mena-logo.svg" // If logo is in public folder (less common for React components)
        alt="Loading..."
        className="w-24 h-24 animate-pulse mb-4"
      />
      */}
      <p className="mt-4 text-xl font-semibold text-gray-700">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
