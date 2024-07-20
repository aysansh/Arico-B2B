import React from "react";
import Plus40 from "../../assets/Plus40";
import Plus90 from "../../assets/Plus90";

const ArPreLaunch = () => {
  return (
    <div className="py-10">
      <div className="w-[83%]  mx-auto flex justify-center items-center">
        <div className="w-1/2">
          <h3 className="font-bold text-3xl mb-3">Successful prelaunch</h3>
          <p className="text-lg mb-8">
            In our pre-launch phase, companies from over 40 countries and over
            90 industries have already registered with Arico B2B. During this
            time, we were able to gain the first users for our new platform and
            at the same time implement the final technical details. All in all:
            a complete success!
          </p>
          <p className="text-lg">
            After the <strong>prelaunch</strong> comes the{" "}
            <strong>soft launch !</strong>
          </p>
        </div>
        <div className="w-1/2 ">
          <div className="w-fit ml-auto">
            <div className="flex mb-4 justify-end items-center gap-5">
              <div className="w-[90px] flex items-center">
                <Plus40 />
              </div>
              <h3 className="font-bold text-5xl">Countries</h3>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-[90px] flex items-center">
                <Plus90 />
              </div>
              <h3 className="font-bold text-5xl">Industry </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArPreLaunch;
