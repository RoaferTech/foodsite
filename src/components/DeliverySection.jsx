import React from "react";
import d1 from "../assets/d1.png";
import d2 from "../assets/d2.png";
import d3 from "../assets/d3.png";
import { FaRegClock } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

const DeliverySection = () => {
  return (
    <div className="bg-[#F9F9F7] py-12 md:py-[90px]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0 flex flex-col md:flex-row gap-6 md:gap-[20px] items-center">
        <div className="flex flex-col md:flex-row gap-6 items-center w-full md:w-[710px]">
          <img
            src={d1}
            alt="delivery"
            className="w-full md:w-[70%] h-auto object-cover"
          />
          <div className="flex flex-col gap-6 md:gap-4">
            <img
              src={d2}
              alt="delivery1"
              className="w-full h-auto object-cover"
            />
            <img
              src={d3}
              alt="delivery2"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-[450px]">
          <h2 className="text-2xl md:text-4xl font-medium text-center md:text-left">
            Fastest Food Delivery in City
          </h2>
          <p className="text-[#414536] text-base mt-4 md:mt-6 text-center md:text-left">
            Our visual designer lets you quickly and easily drag down your way
            to custom apps for both desktop and mobile.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col gap-4 md:gap-3 text-base md:text-xl font-medium">
            <p className="flex gap-2 items-center">
              <span className="bg-[#AD343E] p-2 rounded-full">
                <FaRegClock className="text-white" />
              </span>
              Delivery within 30 minutes
            </p>
            <p className="flex gap-2 items-center">
              <span className="bg-[#AD343E] p-2 rounded-full">
                <MdOutlinePriceChange className="text-white" />
              </span>
              Best Offer & Prices
            </p>
            <p className="flex gap-2 items-center">
              <span className="bg-[#AD343E] p-2 rounded-full">
                <IoCartOutline className="text-white" />
              </span>
              Online Services Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;
