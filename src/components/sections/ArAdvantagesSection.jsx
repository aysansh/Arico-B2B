import React from "react";
import IframeVideos from "../ifream/IfreamVideos";

const ArListSections = ({ title, data, classNamesUl = "" }) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-10">
      <h3 className="text-2xl font-bold text-center">{title}</h3>
      <ul
        className={`flex justify-center items-center flex-wrap max-w-[85%]  ${classNamesUl}`}
      >
        {data.map((item) => (
          <li className="w-[25%] flex flex-col items-center" key={item.id}>
            <div>
              {item.icon && <img width={80} height={80} src={item.icon} />}
              {item.iframeSrc && (
                <div className="w-[250px] h-[200px] mb-4">
                  <IframeVideos
                    className={"rounded-2xl"}
                    src={item.iframeSrc}
                    title={"YouTube video player"}
                  />
                </div>
              )}
            </div>
            <div className="text-center text-[14px] font-medium mt-3">
              {item.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArListSections;
