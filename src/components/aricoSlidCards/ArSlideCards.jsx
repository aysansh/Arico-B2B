import React from "react";
import ArNumberTitle from "../aricoTitleNumber/ArNumberTitle";

const ArSlideCards = ({ textContent, headNum, cardLink }) => {
  return (
    <div className="flex justify-center py-16">
      <ArNumberTitle
        headNum={headNum}
        headNumClassName={"!text-black !opacity-100 !text-[8rem] -mr-10 mt-8"}
        numTitle={"%"}
        numTitleClassName={
          "!text-[4.5rem] text-[#ffc300] left-[6.5rem] top-[6rem] !font-[900]"
        }
      />
      <div className="max-w-[576px] flex justify-center items-center relative">
        <img className="" src="/line.svg" alt="line" />
        <div className="text-lg absolute  max-w-[393px] max-h-12">
          <p>{textContent}</p>
        </div>
      </div>
      <div>
        <a href="#">{cardLink}</a>
      </div>
    </div>
  );
};

export default ArSlideCards;
