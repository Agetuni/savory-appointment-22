import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 shadow-sm py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <span className="text-white font-extrabold text-xl tracking-wider select-none">
          Bravo
        </span>
      </div>
      <nav className="flex items-center gap-6">
        <a href="#" className="text-white opacity-80 hover:opacity-100 font-medium transition-opacity duration-150">Home</a>
        <a href="#" className="text-white opacity-80 hover:opacity-100 font-medium transition-opacity duration-150">About</a>
        <a href="#" className="text-white opacity-80 hover:opacity-100 font-medium transition-opacity duration-150">Contact</a>
      </nav>
    </header>
  );
};
