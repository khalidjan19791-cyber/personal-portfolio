import React from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Title from "../Components/Title";

export default function About_Me() {
  return (
    <div className="w-full flex flex-col gap-12 lg:gap-5  lg:flex-row  ">
      <div className="w-full lg:h-[78vh]  ">
        <img
          src="/pic2.jpg"
          alt="Not Found"
          className="rounded-4xl h-full   object-cover"
        />
      </div>
      <div
        className="w-[30%] lg:h-[78vh] hidden   lg:flex flex-col justify-between items-center
      "
      >
        <div className="h-30 w-1 bg-white rounded-2xl "></div>
        <div className="h-6 w-1 bg-white rounded-2xl"></div>
        <div className="h-30 w-1 bg-white rounded-2xl "></div>
        <div className="h-6 w-1 bg-white rounded-2xl"></div>
        <div className="h-30 w-1 bg-white rounded-2xl "></div>
      </div>

      <div className="w-full flex flex-col  gap-4  lg:justify-center  ">
        <div className="flex gap-2 flex-col ">
          <Title title_text={"ABOUT ME"} />
          <p className="text-[35px] font-bold ">
            I AM AVAILABLE FOR{" "}
            <span className=" text-[#0788FF]">UI UX DESIGN </span>PROJECTS
          </p>
        </div>
        <p className="text-[16px] text-justify ">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from de
          Finibus Bonorum et Malorum by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <div className="flex gap-3 md:gap-5 ">
          <div className="w-40 h-30 bg-[#112436] p-2 flex flex-col gap-1 justify-center box-border md:gap-3 md:w-43 md:p-4 ">
            <h1 className="text-3xl font-bold">280+</h1> <p>Google Review</p>
          </div>
          <div className="w-40 h-30 bg-[#112436] p-2 flex flex-col gap-1 justify-center box-border md:gap-3 md:w-43 md:p-4">
            <h1 className="text-3xl font-bold">15+</h1> <p>Years Experience</p>
          </div>
          <div className="w-40 h-30 bg-[#112436] p-2 flex flex-col gap-1 justify-center box-border md:gap-3 md:w-43 md:p-4">
            <h1 className="text-3xl font-bold">49+</h1> <p>Awward Winning</p>
          </div>
        </div>

        <Button btn_text={"GET IN TOUCH"}>{<FaArrowRightLong />} </Button>
      </div>
    </div>
  );
}
