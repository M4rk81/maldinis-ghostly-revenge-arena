
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10 bg-primary rounded-full">
        <div className="absolute top-1/2 right-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-r-[24px] border-r-background border-b-[12px] border-b-transparent"></div>
      </div>
      <span className="font-pixel text-primary text-xl glow">PAC-Maldini</span>
    </div>
  );
};

export default Logo;
