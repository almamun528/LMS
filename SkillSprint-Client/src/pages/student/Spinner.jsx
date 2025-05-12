import React from "react";

function Spinner() {
  return (
   
      <div className="flex items-center justify-center w-full bg-gray-900">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-1/2 w-1 h-6 bg-cyan-400 rounded origin-bottom animate-[spin_1s_linear_infinite]"></div>

          <div className="absolute top-0 left-1/2 w-1 h-6 bg-pink-400 rounded origin-bottom rotate-45 animate-[spin_1s_linear_infinite] [animation-delay:0.1s]"></div>

          <div className="absolute top-0 left-1/2 w-1 h-6 bg-yellow-400 rounded origin-bottom rotate-90 animate-[spin_1s_linear_infinite] [animation-delay:0.2s]"></div>

          <div className="absolute top-0 left-1/2 w-1 h-6 bg-purple-400 rounded origin-bottom rotate-[135deg] animate-[spin_1s_linear_infinite] [animation-delay:0.3s]"></div>
        </div>
      </div>
  );
}

export default Spinner;
