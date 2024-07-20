import React from "react";

const Paragraph = ({ title, text, subTitle }) => {
  return (
    <>
      <h6 className="font-bold text-xl">{title}</h6>
      <p className="text-lg">{text}</p>
    </>
  );
};

export default Paragraph;
