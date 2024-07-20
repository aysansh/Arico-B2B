import React from "react";

const ArInfoSection = ({
  boxClassName,
  sectionClassName,
  children,
}) => {
  return (
    <div
      className={`flex flex-col gap-8 items-center px-8 py-16 ${sectionClassName}`}
    >
      {children}
     
        {/* <div className="flex flex-col justify-center w-1/2"></div> */}
      
    </div>
  );
};

export default ArInfoSection;
