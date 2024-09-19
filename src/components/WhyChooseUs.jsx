import React from "react";
import pic from "../assets/restaurant.png";
import pic1 from "../assets/timer.png";
import pic2 from "../assets/rgoup.png";
const WhyChooseData = [
  {
    imgUrl: pic,
    title: "Multi Cuisine",
    desc: "In the new era of technology we look in the future with certainty life.",
  },
  {
    imgUrl: pic1,
    title: "Easy To Order",
    desc: "In the new era of technology we look in the future with certainty life.",
  },
  {
    imgUrl: pic2,
    title: "Fast Delivery",
    desc: "In the new era of technology we look in the future with certainty life.",
  },
];
const WhyChooseUs = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-[80vh] flex items-center"
        style={{ backgroundImage: "url(src/assets/BG.png)" }}
      >
        <h2 className="max-w-[400px] mx-auto text-white text-2xl px-10 md:px-0 md:text-4xl font-medium">
          Feel the authentic & original taste from us
        </h2>
      </div>
      <div className="bg-white max-w-[1160px] mx-auto py-[80px] flex gap-[30px] flex-wrap justify-center">
        {WhyChooseData.map((data, index) => (
          <div key={index} className="flex items-center gap-5 w-[360px]">
            <img src={data.imgUrl} alt={data.title} />
            <div>
              <h2 className="text-xl font-bold">{data.title}</h2>
              <p className=" text-base text-[#414536]">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyChooseUs;
