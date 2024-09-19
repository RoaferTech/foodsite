import React from "react";
import com from "../assets/co1.png";
import com1 from "../assets/co2.png";
import com2 from "../assets/co3.png";
import com3 from "../assets/co4.png";
import com4 from "../assets/co5.png";
import com5 from "../assets/co6.png";
import com6 from "../assets/co7.png";
import com7 from "../assets/co8.png";
import com8 from "../assets/co9.png";

const imgUrl = [com, com1, com2, com3, com4, com5, com6, com7, com8];

const Company = () => {
  return (
    <div className="bg-[#F9F9F7] py-10 md:py-[80px]">
      <div className="max-w-[1160px] mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-6 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-medium">
            You can order through apps
          </h2>
          <p className="text-[#414536] text-sm md:text-base mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
            sed et aliquet aliquet risus tempor semper.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-5">
          {imgUrl.map((imgUr, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 w-[120px] md:w-[140px] rounded-lg shadow-sm"
            >
              <img src={imgUr} alt="company logo" className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
