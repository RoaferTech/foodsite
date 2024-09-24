import React, { useState, useEffect } from "react";

import { getAllDishes } from "../services/dishServices";
import DishTab from "../components/DishTab";
import DishCard from "../components/DishCard";
import Company from "../components/Company";

const Menu = () => {
  const [dishes, setDishes] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];
  useEffect(() => {
    const fetchDishes = async () => {
      setLoading(true);
      try {
        const fetchedDishes = await getAllDishes();
        setDishes(fetchedDishes);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, []);

  console.log(dishes[0]?.image);

  const filteredDishes =
    activeTab === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeTab);

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
        {error && (
          <p className="text-red-500 text-center mt-4">Error: {error}</p>
        )}
        {loading ? (
          <p className="text-center mt-4">Loading...</p>
        ) : (
          <div className="py-[30px] md:py-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {filteredDishes.map((dish, index) => (
              <DishCard key={index} {...dish} />
            ))}
          </div>
        )}
      </div>

      <Company />
    </>
  );
};

export default Menu;
