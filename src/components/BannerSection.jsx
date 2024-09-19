import React from "react";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: "url(src/assets/content.png)" }}
    >
      <div className="max-w-[600px] mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 p-4">
        <h2 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[80px] text-center leading-tight lg:leading-[80px]">
          Best food for your taste
        </h2>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] text-center px-4 sm:px-8 md:px-16 lg:px-[50px]">
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
        <div className="flex justify-center gap-3 sm:gap-5">
          <Link
            to="/book-table"
            className="text-sm sm:text-base font-medium py-3 sm:py-4 px-6 sm:px-8 bg-[#AD343E] hover:bg-white hover:border-[#AD343E] border-solid hover:border-2 hover:text-[#AD343E] rounded-full text-white"
          >
            Book A Table
          </Link>
          <Link
            to="/menu"
            className="text-sm sm:text-base font-medium py-3 sm:py-4 px-6 sm:px-8 border-solid border-2 border-[#2C2F24] hover:bg-black hover:text-white rounded-full"
          >
            Explore Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
