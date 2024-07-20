import React from "react";

const ArTextList = ({
  Texts,
  iconClassName,
  textClassName,
  UlClassName,
  icon,
}) => {
  return (
    
    <ul className={`flex flex-col gap-2 ${UlClassName}`}>
      {Texts.map((item) => (
        <li
          key={item.id}
          className="flex items-center text-base font-medium gap-2"
        >
          <span className={iconClassName}>{icon}</span>
          <span className={textClassName}>{item.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default ArTextList;
