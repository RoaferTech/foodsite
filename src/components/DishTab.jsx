import React from "react";

const DishTab = ({ categories, activeTab, setActiveTab }) => {
  return (
    <div className="mt-[30px] md:mt-[50px] flex flex-wrap justify-center gap-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(category)}
          className={`px-6 py-3 md:px-[50px] rounded-full font-medium cursor-pointer 
            ${
              activeTab === category
                ? "bg-[#AD343E] text-white"
                : "border-2 border-solid hover:bg-[#AD343E] hover:text-white"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default DishTab;
