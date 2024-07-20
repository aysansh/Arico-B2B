import React from "react";

const ArProduct = () => {
  return (
    <div className="flex w-full justify-center items-center max-w-[70%] mx-auto py-32">
      <div className="w-1/2 flex flex-col items-center justify-center gap-6">
        <h3 className="text-2xl font-bold">A product of</h3>
        <div className="w-[144px]">
          <a href="#">
            <img src="/ARICO-B2B-EPS.svg" className="w-full" />
          </a>
        </div>
      </div>
      <div className="w-1/2 border-l-4 border-[#E5E7EB] pl-9">
        <p className="text-lg ">
          Arico started its career as a trading company for machine tools. Over
          time, however, new ideas were born to digitize and expand the
          business. Today, Arico not only successfully operates a trading
          company, but also an international platform for trading in used
          machines - Arico Machine. The experience gained in trading and in
          operating an international platform was bundled and led to the idea of
          ​​Arico B2B.
        </p>
        <div className="mt-5 text-blue-600 underline font-bold hover:no-underline">
          <a href="#">More</a>
        </div>
      </div>
    </div>
  );
};

export default ArProduct;
