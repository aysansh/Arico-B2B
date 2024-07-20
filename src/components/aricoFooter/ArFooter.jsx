import React from "react";
import InstagramIcon from "../../assets/InstagramIcon";

const ArFooter = () => {
  return (
    <div className="bg-black text-white text-center py-10">
      <div className="h-[2px] bg-gray-700 w-full"></div>
      <ul className="flex items-center justify-center text-white gap-5 py-5">
        <li>
          <a className="hover:text-blue-600" href="#">
            Conditions
          </a>
        </li>
        <li>
          <a className="hover:text-blue-600" href="#">
            imprint
          </a>
        </li>
        <li>
          <a className="hover:text-blue-600" href="#">
            Data protection
          </a>
        </li>
        <li>
          <div className="size-9 p-1 bg-gray-700 rounded-full hover:text-blue-600">
            <a href="#">
              <InstagramIcon />
            </a>
          </div>
        </li>
      </ul>
      <div className="h-[2px] bg-gray-700 w-full"></div>

      <div className="py-5">
        <p className="opacity-50 text-[14px]">
          Copyright©2023 Arico GmbH all rights reserved
        </p>
        <br />
        <p className="opacity-50 text-[14px]">
          Powered by
          <a
            href="#"
            className="underline ml-1 hover:no-underline hover:text-blue-700"
          >
            Arico IT
          </a>
        </p>
      </div>
    </div>
  );
};

export default ArFooter;
