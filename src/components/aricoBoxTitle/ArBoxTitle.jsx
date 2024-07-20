import React from "react";

const ArBoxTitle = ({ subTitle, title, titleClassName }) => {
  return (
    <div
     
      className={`text-[30px] font-bold flex flex-col justify-center items-center  ${titleClassName}`}
    >
      <span>{title}</span>
      <span className="text-sm font-light">{subTitle}</span>
    </div>
  );
};

export default ArBoxTitle;
