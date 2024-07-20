import React from "react";

const ArNumberTitle = ({
  headNum,
  numTitle,
  headNumClassName,
  numTitleClassName,
}) => {
  return (
    <div className="flex items-center relative h-[200px]">
      <span
        className={`text-[#ffc300] opacity-40 text-[12rem] font-bold ${headNumClassName}`}
      >
        {headNum}
      </span>
      <span
        className={`absolute left-16 top-20 font-extralight ${numTitleClassName}`}
      >
        {numTitle}
      </span>
    </div>
  );
};

export default ArNumberTitle;
