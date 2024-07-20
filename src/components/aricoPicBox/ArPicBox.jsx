import React from "react";

const ArPicBox = ({ content, contentClassName }) => {
  return (
    <div className={`flex items-center justify-center ${contentClassName}`}>
      {content}
    </div>
  );
};

export default ArPicBox;
