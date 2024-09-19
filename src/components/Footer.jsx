import React from "react";
import logo from "../assets/wlogo.svg";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#474747] py-12 md:py-[90px]">
      <div className="max-w-[1160px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[80px] text-white">
          <div className="flex flex-col gap-7 w-full md:w-[293px]">
            <div className="flex gap-5 items-center">
              <img src={logo} alt="logo" className="w-16 md:w-auto" />
              <h1 className="text-3xl md:text-4xl font-semibold italic">
                Bistro Bliss
              </h1>
            </div>
            <p className="text-base text-[#ADB29E]">
              In the new era of technology we look to the future with certainty
              and pride for our company and.
            </p>
            <div className="flex gap-2">
              <p className="bg-[#AD343E] p-2 rounded-full">
                <FaTwitter className="text-white text-lg" />
              </p>
              <p className="bg-[#AD343E] p-2 rounded-full">
                <FaFacebookF className="text-white text-lg" />
              </p>
              <p className="bg-[#AD343E] p-2 rounded-full">
                <FaInstagram className="text-white text-lg" />
              </p>
              <p className="bg-[#AD343E] p-2 rounded-full">
                <FaGithub className="text-white text-lg" />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <h2 className="text-base font-bold pb-4">Pages</h2>
            <div className="flex flex-col gap-4 text-base text-[#DBDFD0]">
              <p>Home</p>
              <p>About</p>
              <p>Menu</p>
              <p>Pricing</p>
              <p>Blog</p>
              <p>Contact</p>
              <p>Delivery</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <h2 className="text-base font-bold pb-4">Utility Pages</h2>
            <div className="flex flex-col gap-4 text-base text-[#DBDFD0]">
              <p>Start Here</p>
              <p>Styleguide</p>
              <p>Password Protected</p>
              <p>404 Not Found</p>
              <p>Licenses</p>
              <p>Changelog</p>
              <p>View More</p>
            </div>
          </div>
          <div className="w-full md:w-[403px]">
            <h2 className="text-base font-bold pb-4">Follow Us On Instagram</h2>
            <div className="flex gap-4 flex-wrap">
              <img
                src={f1}
                alt="image1"
                className="rounded-xl w-full sm:w-[120px] md:w-[150px]"
              />
              <img
                src={f2}
                alt="image2"
                className="rounded-xl w-full sm:w-[120px] md:w-[150px]"
              />
              <img
                src={f3}
                alt="image3"
                className="rounded-xl w-full sm:w-[120px] md:w-[150px]"
              />
              <img
                src={f4}
                alt="image4"
                className="rounded-xl w-full sm:w-[120px] md:w-[150px]"
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <hr className="bg-[#414536]" />
          <p className="text-[#ADB29E] text-center pt-5 text-sm">
            Copyright © 2024 Roafer Technologies. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
