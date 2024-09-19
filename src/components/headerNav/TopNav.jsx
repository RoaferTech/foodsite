import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
const socialIcons = [
  { Icon: FaTwitter },
  { Icon: FaFacebookF },
  { Icon: FaInstagram },
  { Icon: FaGithub },
];

const SocialIcon = ({ Icon }) => (
  <p className="bg-[#5C5C5C] p-1 md:p-2 rounded-full text-xs md:text-base">
    <Icon />
  </p>
);

const TopNav = () => {
  return (
    <div className="bg-[#474747] text-white flex justify-between px-4 lg:px-[150px] py-2 items-center">
      <div className="flex gap-6 text-sm lg:text-base">
        <p className="flex items-center gap-2">
          <BsTelephone />
          <span className="text-xs md:text-base">+92309-5543952</span>
        </p>
        <p className="flex items-center gap-2">
          <MdOutlineEmail />
          <span className="text-xs md:text-base">km775.ali@gmail.com</span>
        </p>
      </div>
      <div className="flex gap-2">
        {socialIcons.map((icon, index) => (
          <SocialIcon key={index} Icon={icon.Icon} />
        ))}
      </div>
    </div>
  );
};

export default TopNav;
