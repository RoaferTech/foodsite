import React from "react";
import imge from "../assets/about.png";

const AboutSection = () => {
  return (
    <div className="py-10 md:py-[80px] bg-[#F9F9F7]">
      <div className="max-w-[1160px] mx-auto flex flex-col md:flex-row gap-8 md:gap-16 px-4">
        <div className="md:w-3/5">
          <h2 className="font-medium text-2xl md:text-4xl md:pr-20">
            A little information for our valuable guest
          </h2>
          <p className="text-base text-[#414536] mt-4 md:mt-5 md:pr-20">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap gap-4 md:gap-6">
            <div className="bg-white py-6 md:py-8 flex flex-col items-center w-full sm:w-[293px]">
              <h3 className="text-3xl md:text-4xl font-medium">3</h3>
              <p className="text-lg font-medium">Locations</p>
            </div>
            <div className="bg-white py-6 md:py-8 flex flex-col items-center w-full sm:w-[293px]">
              <h3 className="text-3xl md:text-4xl font-medium">1995</h3>
              <p className="text-lg font-medium">Founded</p>
            </div>
            <div className="bg-white py-6 md:py-8 flex flex-col items-center w-full sm:w-[293px]">
              <h3 className="text-3xl md:text-4xl font-medium">65+</h3>
              <p className="text-lg font-medium">Staff Members</p>
            </div>
            <div className="bg-white py-6 md:py-8 flex flex-col items-center w-full sm:w-[293px]">
              <h3 className="text-3xl md:text-4xl font-medium">100%</h3>
              <p className="text-lg font-medium">Satisfied Customers</p>
            </div>
          </div>
        </div>
        <div className="md:w-2/5">
          <img src={imge} alt="images" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
