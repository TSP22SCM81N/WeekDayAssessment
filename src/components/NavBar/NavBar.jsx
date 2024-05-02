import React from "react";

const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-4 md:p-6 lg:p-8">
      <div className="logoDiv">
        <h1 className="logo text-2xl md:text-3xl lg:text-4xl text-blueColor">
          <strong> WeekDay </strong>
        </h1>
      </div>

      <div className="menu flex gap-4 md:gap-8">
        <li className="menuList text-gray-600 hover:text-blueColor">Applied Jobs</li>
        <li className="menuList text-gray-600 hover:text-blueColor">Search Jobs</li>
      </div>
    </div>
  );
};

export default NavBar;