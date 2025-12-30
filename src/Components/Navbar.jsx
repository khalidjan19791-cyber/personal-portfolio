import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    // -------------main menu---------
    <div className="relative flex h-10 w-full items-center justify-between lg:m-auto lg:h-14 lg:w-[85vw] lg:px-0">
      <div className="box-content flex w-full items-center justify-between px-6 lg:w-40 lg:px-0">
        <h1 className="cursor-pointer text-[1.8rem] font-bold">Khalid Jan</h1>
        <div className="lg:hidden">
          <UseAnimations
            animation={menu2}
            size={32}
            strokeColor="white"
            speed={menu ? 1 : 2}
            onClick={() => setMenu((prev) => !prev)}
          />
        </div>
      </div>
      <div className="hidden items-center justify-center gap-10 lg:flex">
        <NavLink
          className={
            "flex cursor-pointer flex-col items-center font-bold text-white no-underline"
          }
          to={"/"}
        >
          Home
          <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
        </NavLink>
        <NavLink
          className={
            "flex cursor-pointer flex-col items-center font-bold text-white no-underline"
          }
          to={"/about_me"}
        >
          About
          <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
        </NavLink>
        <NavLink
          className={
            "flex cursor-pointer flex-col items-center font-bold text-white no-underline"
          }
          to={"/project"}
        >
          Projects
          <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
        </NavLink>
        <NavLink
          className={
            "flex cursor-pointer flex-col items-center font-bold text-white no-underline"
          }
          to={"/services"}
        >
          Services
          <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
        </NavLink>
        <NavLink
          to="/contact"
          className={
            "] flex cursor-pointer flex-col items-center font-bold text-white no-underline"
          }
        >
          Contact
          <hr className="custom-hr hidden w-9 rounded-2xl border-t-3 border-white" />
        </NavLink>

        <Button btn_text={"LET'S TALK"} />
      </div>
      {/* ---------------- Sub Menu--------- */}

      <div
        onClick={() => setMenu(false)}
        className={`${
          menu
            ? "translate-x-0 opacity-100"
            : "translate-x-20 opacity-0 delay-200"
        } absolute top-20 z-10 flex h-[85vh] w-full justify-end px-0 transition-all duration-1000 lg:hidden`}
      >
        <div
          className={`flex h-full w-[50%] flex-col rounded-2xl bg-[#040C16] px-3 py-3 transition-all duration-1000`}
        >
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
      </div>
    </div>
  );
}
