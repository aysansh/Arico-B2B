import React from "react";
import UploadIcon from "../../assets/UploadIcon";
import SecureIcon from "../../assets/SecureIcon";
import ClockIcon from "../../assets/ClockIcon";
import RegisterArrow from "../../assets/RegisterArrow";
import { FaChevronRight } from "react-icons/fa";
import ArButton from "../aricoButton/ArButton";

const ArSoftlaunch = () => {
  return (
    <div className="bg-[#F3F4F6] flex justify-center py-10">
      <div className="w-[70%] flex flex-col gap-4 items-center ">
        <h3 className="font-bold text-3xl">The soft launch phase has begun</h3>
        <p className="text-center font-semibold text-sm text-[#637381] mt-4">
          Last chance to get one year of free premium benefits
        </p>
        <p className="py-6 text-center text-xl text-[#262626]">
          Register now and test our premium tariff exclusively, free of charge
          and without obligation for one year. Publish your requests and offers
          on Arico B2B and benefit from excellent visibility on our new
          platform.
        </p>
        <ArButton btnName={"REGISTER NOW"} btnIcon={<FaChevronRight />} />
        <div className="relative">
          <div className="absolute -left-[320px] -top-20 w-[100px]">
            <RegisterArrow />
          </div>
        </div>

        <ul className="mt-6 flex flex-col justify-center gap-3 max-w-fit mx-auto text-[#212B36]">
          <li className="flex gap-3 items-center text-2xl font-bold">
            <span>
              <SecureIcon />
            </span>
            <span>Secure data storage on German servers</span>
          </li>
          <li className="flex gap-3 items-center  text-2xl font-bold">
            <span>
              <UploadIcon />
            </span>
            <span>Manual review of all uploaded ads</span>
          </li>
          <li className="flex gap-3 items-center  text-2xl font-bold">
            <span>
              <ClockIcon />
            </span>
            <span>99.9% availability & 0% data loss</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArSoftlaunch;
