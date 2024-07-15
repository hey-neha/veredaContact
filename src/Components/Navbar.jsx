import React from "react";
import vereda from "../assets/vereda2.png";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-full h-auto md:flex-row  px-5 md:px-8  lg:px-16">
        {/*   image section------------------------ */}
        <img className=" w-32 md:w-36 mt-1" src={vereda} alt="" />

        <ul className="flex flex-col md:flex-row mt-2 md:mt-3 justify-between gap-5 md:gap-7 lg:gap-10">
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] font-semibold">
            Contact Us
          </li>
          <li>Blogs</li>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
