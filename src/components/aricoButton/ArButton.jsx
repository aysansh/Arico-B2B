import React from "react";

const ArButton = ({ btnClassName, btnName, btnIcon,type }) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-2 text-sm rounded-lg w-[240px] bg-[#ffc300] font-bold h-12 px-4 ${btnClassName}`}
    >
      <span>{btnName}</span>
      <span>{btnIcon}</span>
    </button>
  );
};

export default ArButton;
