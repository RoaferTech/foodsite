import React from "react";
import image from "../assets/aboutm.png";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import AboutSection from "../components/AboutSection";
const About = () => {
  return (
    <>
      <div className="p-6 bg-[#F9F9F7] overflow-hidden">
        <div className="max-w-[1160px] mx-auto flex flex-col md:flex-row justify-between items-center py-12 md:gap-16 gap-10">
          <div className="md:w-1/2 w-full">
            <div className="relative">
              <img
                src={image}
                alt="Delicious Food"
                className="w-full md:w-[599px] rounded-lg"
              />
              <div className="absolute bottom-[-30px] right-[-30px] bg-[#474747] text-white p-6 md:p-[40px] rounded-lg shadow-lg max-w-[360px]">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-10">
                  Come and visit us
                </h3>
                <div className="flex flex-col gap-2 md:gap-[20px] ">
                  <p className="text-sm md:text-base flex gap-4 items-center">
                    <BsTelephone />
                    (414) 857 – 0107
                  </p>
                  <p className="text-sm md:text-base flex gap-2 items-center">
                    <MdOutlineEmail /> happytummy@restaurant.com
                  </p>
                  <p className="text-sm md:text-base flex gap-2 items-center">
                    <IoLocationOutline className="text-3xl " />
                    837 W. Marshall Lane, Marshalltown, IA 50158, Los Angeles
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-medium leading-snug md:leading-[55px]">
              We provide healthy food for your family.
            </h2>
            <p className="text-base md:text-lg font-medium">
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in the city's rich culinary culture, we aim to
              honor our local roots while infusing a global palate.
            </p>
            <p className="text-sm md:text-base">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <AboutSection />
      <Reviews />
    </>
  );
};

export default About;
