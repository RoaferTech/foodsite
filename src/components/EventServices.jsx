import React from "react";
import { eventData } from "../data/events";

const EventServices = () => {
  return (
    <div className="max-w-[1160px] mx-auto py-[40px] md:py-[80px] px-4">
      <h2 className="text-2xl md:text-[40px] font-medium md:w-[500px] leading-tight">
        We also offer unique services for your events
      </h2>
      <div className="pt-[40px] md:pt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {eventData.map((service, index) => (
          <div key={index} className="flex flex-col gap-4 md:gap-5">
            <img
              src={service.imageUrl}
              alt="image"
              className="rounded-lg w-full h-[200px] sm:h-[250px] md:w-[272px] md:h-[284px] object-cover"
            />
            <h3 className="text-xl md:text-2xl font-bold text-[#2C2F24]">
              {service.title}
            </h3>
            <p className="text-sm md:text-base text-[#414536]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventServices;
