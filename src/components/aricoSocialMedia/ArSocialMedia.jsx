import React from "react";
import InstagramIcon from "../../assets/InstagramIcon";
import EmailIcon from "../../assets/EmailIcon";
import TellIcon from "../../assets/TellIcon";
const ArSocialMedia = () => {
  return (
    <ul className="flex justify-around">
      <li className="flex items-center gap-3">
        <div className="size-14 p-2 rounded-full bg-gray-200">
          <InstagramIcon />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm">Follow us on social media</span>
          <span className="text-sm opacity-50">
            https://www.instagram.com/arico_b2b/
          </span>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <div className="size-14 p-2 rounded-full bg-gray-200">
          <EmailIcon />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm">Send us a message</span>
          <span className="text-sm opacity-50">info@arico-b2b.com</span>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <div className="size-14 p-2 rounded-full bg-gray-200">
          <TellIcon />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm">Feel free to call us</span>
          <span className="text-sm opacity-50">+49 (0)6074 7286547</span>
        </div>
      </li>
    </ul>
  );
};

export default ArSocialMedia;
