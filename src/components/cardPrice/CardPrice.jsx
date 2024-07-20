import React from "react";

const CardPrice = ({
  text,
  subs,
  offerTitle,
  price,
  perminetPrice,
  period,
  bgColor,
  textColor,
}) => {
  return (
    <li className="flex flex-col items-center bg-gray-100 rounded-xl">
      <span className={`${bgColor} h-2 w-full rounded-t-xl`}></span>
      <div className="p-4 flex flex-col w-full justify-center items-center space-y-4 pb-16">
        <h4 className={`${textColor} font-bold text-3xl pt-3 pb-2 uppercase`}>
          {offerTitle}
        </h4>
        <span className="h-[0.1rem] border-b-2 border-gray-300 border-dotted w-full"></span>
        <p className="text-sm py-4 h-80 h-35">{text}</p>
        <span className="h-[0.1rem] border-b-2 border-gray-300 border-dotted w-full"></span>
        <span className="flex flex-col space-y-2 items-center h-28 justify-center">
          {subs && <p>{subs}</p>}
          <span className="flex flex-row space-x-1 items-end">
            <p className="text-4xl font-bold">{price}€</p>
            <p className="font-bold text-3xl ml-1">mthly.</p>
          </span>
          {perminetPrice && <p>{perminetPrice}€ one-time</p>}
        </span>
        <span className="h-[0.1rem] border-b-2 border-gray-300 border-dotted w-full"></span>
        {period && (
          <p className="text-sm text-center">{period} notice period</p>
        )}
        <span className="h-[0.1rem] border-b-2 border-gray-300 border-dotted w-full hidden"></span>
      </div>
    </li>
  );
};

export default CardPrice;
