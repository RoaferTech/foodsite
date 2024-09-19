import React from "react";
import { reviewData } from "../data/reviews";
const Reviews = () => {
  return (
    <div className="py-[90px] max-w-[1160px] mx-auto">
      <h2 className=" text-center text-[#2C2F24] text-2xl md:text-4xl font-medium">
        What Our Customers Say
      </h2>
      <div className=" flex gap-6 mt-[64px] flex-wrap justify-center">
        {reviewData.map((review, index) => (
          <div
            className=" bg-[#F9F9F7] px-[35px] py-[45px] flex flex-col gap-6 rounded-xl w-[370px]"
            key={index}
          >
            <h2 className=" text-2xl text-[#AD343E] font-bold">
              “{review.title}”
            </h2>
            <p className="text-lg text-[#414536]">{review.description}</p>
            <hr />
            <div className="flex items-center gap-3">
              <img src={review.userImage} alt={review.reviwerName} />
              <div>
                <h3 className="text-base font-bold">{review.reviwerName}</h3>
                <p className="text-[#414536] text-base ">
                  {review.reviwerCity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
