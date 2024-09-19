import React from "react";
import b1 from "../assets/b1.png";
import { blogData } from "../data/blogs";
import { Link } from "react-router-dom";

const BlogsSection = () => {
  return (
    <div className="bg-[#F9F9F7] py-12 md:py-[90px]">
      <div className="max-w-[1160px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-medium text-center md:text-left">
            Our Blog & Articles
          </h2>
          <Link
            // to="/blogs"
            className="px-6 py-3 border border-[#AD343E] bg-[#AD343E] text-white rounded-full hover:bg-[#F9F9F7] hover:text-[#AD343E] transition"
          >
            Read All Articles
          </Link>
        </div>
        <div className="flex flex-col md:flex-row pt-12 gap-6">
          <div className="bg-white w-full md:w-1/2 rounded-lg shadow-lg">
            <img
              src={b1}
              alt="b1"
              className="w-full h-auto rounded-t-lg object-cover"
            />
            <div className="px-6 py-8">
              <p className="text-[#737865] text-base">January 3, 2023</p>
              <h2 className="text-xl font-medium mt-4">
                The secret tips & tricks to prepare a perfect burger & pizza for
                our customers
              </h2>
              <p className="text-[#414536] text-base mt-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-2 w-full md:w-1/2">
            {blogData.map((blog, index) => (
              <div
                key={index}
                className="bg-white w-full md:w-[270px] rounded-lg shadow-lg"
              >
                <img
                  src={blog.imageUrl}
                  alt="blog"
                  className="w-full h-auto rounded-t-lg object-cover"
                />
                <div className="px-5 py-6">
                  <p className="text-[#737865] text-base">{blog.date}</p>
                  <h2 className="text-xl font-medium mt-2">{blog.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
