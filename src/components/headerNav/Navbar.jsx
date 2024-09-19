import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import TopNav from "./TopNav";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  // { name: "Pages", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLink = ({ name, path, additionalClass = "" }) => {
    const isActive = location.pathname === path;
    return (
      <Link
        to={path}
        className={`px-4 py-2 rounded-full text-sm lg:text-base font-medium ${
          isActive ? "bg-[#DBDFD0]" : ""
        } ${additionalClass}`}
        onClick={() => setIsOpen(false)}
      >
        {name}
      </Link>
    );
  };

  return (
    <>
      <TopNav />
      <div className="flex justify-between items-center px-4 lg:px-[150px] py-5 lg:py-10 sticky top-0 bg-white z-50">
        <div className="flex items-center gap-5">
          <img src={logo} alt="logo" className="w-8 lg:w-auto" />
          <h1 className="text-xl lg:text-[42px] italic font-semibold">
            Bistro Bliss
          </h1>
        </div>
        {/* screen view */}
        <div className="hidden lg:flex gap-2">
          {navLinks.map((link, index) => (
            <NavLink key={index} name={link.name} path={link.path} />
          ))}
        </div>
        <div className="hidden lg:block">
          <NavLink
            name="Book A Table"
            path="/book-table"
            additionalClass="font-semibold py-2 lg:py-3 px-4 lg:px-6 border-2 border-[#2C2F24]"
          />
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile view */}
      {isOpen && (
        <div
          className={`lg:hidden bg-white px-4 py-6 flex flex-col space-y-4 text-center absolute w-full left-0 z-40 overflow-hidden transition-all ease-in-out duration-500 ${
            isOpen ? "animate-slide-down" : "animate-slide-up"
          }`}
        >
          {navLinks.map((link, index) => (
            <NavLink key={index} name={link.name} path={link.path} />
          ))}
          <NavLink
            name="Book A Table"
            path="/book-table"
            additionalClass="font-semibold py-2 px-6 border-2 border-[#2C2F24]"
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
