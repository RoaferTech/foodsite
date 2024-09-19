import React, { useState } from "react";
import { dishesData } from "../data/dishes";
import DishTab from "../components/DishTab";
import DishCard from "../components/DishCard";
import Company from "../components/Company";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("All");
  const filteredDishes =
    activeTab === "All"
      ? dishesData
      : dishesData.filter((dish) => dish.category === activeTab);

  const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];

  return (
    <>
      <div className="max-w-[1160px] mx-auto py-10 px-4">
        <h2 className="text-center text-3xl md:text-[60px] font-semibold">
          Our Menu
        </h2>
        <p className="text-[#495460] text-base md:text-lg text-center mt-8 max-w-[530px] mx-auto">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
        <DishTab
          categories={categories}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="py-[30px] md:py-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {filteredDishes.map((dish, index) => (
            <DishCard key={index} {...dish} />
          ))}
        </div>
      </div>
      <Company />
    </>
  );
};

export default Menu;
