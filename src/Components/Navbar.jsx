import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    // -------------main menu---------
    <div className="relative flex h-10 w-full items-center justify-between lg:m-auto lg:h-14 lg:w-[90vw] lg:px-0">
      <div className="box-content flex w-full items-center justify-between px-6 lg:w-40">
        <h1 className="cursor-pointer text-[1.6rem] font-bold lg:text-[2rem]">
          Khalid Jan
        </h1>
        <div className="lg:hidden">
          <GiHamburgerMenu
            onClick={() => setMenu(!menu)}
            className="bg-transparent text-3xl"
          />
        </div>
      </div>
      <div className="hidden items-center justify-center gap-10 lg:flex">
        <NavLink
          className={
            "flex cursor-pointer flex-col items-center text-[1.2rem] font-bold text-white no-underline"
          }
          to={"/"}
        >
          Home
          <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
        </NavLink>
        <NavLink
          className={
            "flex cursor-pointer flex-col items-center text-[1.2rem] font-bold text-white no-underline"
          }
          to={"/about_me"}
        >
          About Me
          <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
        </NavLink>
        <NavLink
          className={
            "flex cursor-pointer flex-col items-center text-[1.2rem] font-bold text-white no-underline"
          }
          to={"/project"}
        >
          Projects
          <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
        </NavLink>
        <NavLink
          className={
            "flex cursor-pointer flex-col items-center text-[1.2rem] font-bold text-white no-underline"
          }
          to={"/services"}
        >
          Services
          <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
        </NavLink>
        <NavLink
          to="/contact"
          className={
            "flex cursor-pointer flex-col items-center text-[1.2rem] font-bold text-white no-underline"
          }
        >
          Contact
          <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
        </NavLink>

        <Button btn_text={"LET'S TALK"} />
      </div>
      {/* ---------------- Sub Menu--------- */}
      {menu ? (
        <div className="absolute top-20 flex h-80 w-full flex-col items-center justify-center bg-[#040C16] px-0 lg:hidden">
          <div className="flex flex-col items-center justify-center gap-6">
            <NavLink
              className={
                "flex cursor-pointer flex-col items-center text-[1.5rem] font-bold text-white no-underline"
              }
              to={"/"}
            >
              Home
              <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
            </NavLink>
            <NavLink
              className={
                "flex cursor-pointer flex-col items-center text-[1.2rem] font-bold text-white no-underline"
              }
              to={"/about_me"}
            >
              About Me
              <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
            </NavLink>
            <NavLink
              className={
                "flex cursor-pointer flex-col items-center text-[1.2rem] font-bold text-white no-underline"
              }
              to={"/project"}
            >
              Projects
              <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
            </NavLink>
            <NavLink
              className={
                "flex cursor-pointer flex-col items-center text-[1.2rem] font-bold text-white no-underline"
              }
              to={"/services"}
            >
              Services
              <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
            </NavLink>
            <NavLink
              to="/contact"
              className={
                "flex cursor-pointer flex-col items-center text-[1.2rem] font-bold text-white no-underline"
              }
            >
              Contact
              <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
            </NavLink>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
