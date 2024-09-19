import React from "react";
import { menuItems } from "../data/menu";
import { Link } from "react-router-dom";

const MenuSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center">
        Browse Our Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="shadow-sm rounded-xl border-2 border-solid px-3 py-10 flex flex-col items-center gap-4"
          >
            <img
              src={item.src}
              alt={item.title}
              className="bg-gray-100 p-3 rounded-full w-12 h-12"
            />
            <h3 className="text-gray-800 text-2xl font-bold">{item.title}</h3>
            <p className="text-gray-600 text-base text-center">
              {item.description}
            </p>
            <Link to="/menu" className="text-red-600 text-base font-semibold">
              Explore Menu
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
