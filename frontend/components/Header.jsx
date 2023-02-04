import React from "react";
import {
  BsBellFill,
  BsBagFill,
  BsFillHeartFill,
  BsSearch,
} from "react-icons/bs";

const Header = () => {
  return (
    <header className="">
      <nav className="flex justify-between px-6 py-3 items-center">
        <h1 className="text-3xl font-bold text-gray-700">SpaceDAO</h1>
        <div className="flex items-center gap-6">
          <form className="flex items-center bg-gray-200 px-5 py-2 border border-gray-300 rounded-xl">
            <input
              placeholder="Search here..."
              className="bg-transparent outline-none border-none placeholder-gray-600"
            />
            <BsSearch className="cursor-pointer" />
          </form>
          <BsFillHeartFill size={20} className="text-gray-700 cursor-pointer" />
          <BsBellFill className="text-gray-700 cursor-pointer" size={20} />
          <BsBagFill className="text-gray-700 cursor-pointer" size={20} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
