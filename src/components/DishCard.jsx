import React from "react";
const API_URL = "http://localhost:4000";
const DishCard = ({ title, image, price, description }) => (
  <div className="shadow-md w-full rounded-lg">
    <img
      src={`${API_URL}/${image}`}
      alt={title}
      className="w-full h-auto rounded-tr-lg rounded-tl-lg"
    />
    <div className="flex flex-col justify-center items-center gap-4 p-5">
      <h2 className="text-[#AD343E] text-xl md:text-2xl font-bold">${price}</h2>
      <h2 className="text-lg md:text-xl font-bold">{title}</h2>
      <p className="text-center text-[#414536] text-sm md:text-base">
        {description}
      </p>
    </div>
  </div>
);
export default DishCard;
