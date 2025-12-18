import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="flex h-20 justify-between items-center md:px-0 px-4 ">
      <div>
        <h1 className=" font-extrabold cursor-pointer text-[2rem]">
          Khalid Jan
        </h1>
      </div>
      <div className="flex justify-center items-center gap-12">
        <NavLink
          className={
            "cursor-pointer text-[1.2rem] font-bold no-underline text-white flex flex-col items-center  "
          }
          to={"/"}
        >
          Home
          <hr className="custom-hr w-9 border-t-3 border-white rounded-2xl hidden " />
        </NavLink>
        <NavLink
          className={
            "cursor-pointer text-[1.2rem] font-bold no-underline text-white flex flex-col items-center"
          }
          to={"/about_me"}
        >
          About Me
          <hr className="custom-hr w-9 border-t-3 border-white rounded-2xl hidden" />
        </NavLink>
        <NavLink
          className={
            "cursor-pointer text-[1.2rem] font-bold no-underline text-white flex flex-col items-center"
          }
          to={"/project"}
        >
          Projects
          <hr className="custom-hr w-9 border-t-3 border-white rounded-2xl hidden" />
        </NavLink>
        <NavLink
          className={
            "cursor-pointer text-[1.2rem] font-bold no-underline text-white flex flex-col items-center"
          }
          to={"/services"}
        >
          Services
          <hr className="custom-hr w-9 border-t-3 border-white rounded-2xl hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className={
            "cursor-pointer text-[1.2rem] font-bold no-underline text-white flex flex-col items-center"
          }
        >
          Contact
          <hr className="custom-hr w-9 border-t-3 border-white rounded-2xl hidden" />
        </NavLink>

        <Button btn_text={"LET'S TALK"} />
      </div>
    </div>
  );
}
