import React from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Title from "../Components/Title";

export default function About_Me() {
  return (
    <div className="w-[85vw] flex justify-between">
      <div className="w-[25vw] h-[75vh] inline-flex items-center  ">
        <img
          src="/pic2.jpg"
          alt="Not Found"
          className="w-full h-full rounded-4xl border-2 border-white object-cover"
        />
      </div>
      <div className="h-[75vh]   border-white flex flex-col justify-between  ">
        <div className="h-30 w-1 bg-white rounded-2xl "></div>
        <div className="h-6 w-1 bg-white rounded-2xl"></div>
        <div className="h-30 w-1 bg-white rounded-2xl "></div>
        <div className="h-6 w-1 bg-white rounded-2xl"></div>
        <div className="h-30 w-1 bg-white rounded-2xl "></div>
      </div>
      <div className="w-[45vw] h-[75vh] flex flex-col gap-7">
        <div className="flex gap-6 flex-col">
          <Title title_text={"ABOUT ME"} />
          <p className="text-[35px] font-bold ">
            I AM AVAILABLE FOR{" "}
            <pre className="text-[#0788FF]">
              UI DEVELOPMENT,GRAPHIC DESIGNING
            </pre>{" "}
            PROJECTS
          </p>
        </div>
        <p className="text-[20px] text-justify ">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from de
          Finibus Bonorum et Malorum by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <div className="flex gap-7">
          <div className="w-43 h-30 bg-[#112436] p-4 flex flex-col gap-2 justify-center box-border ">
            <h1 className="text-3xl font-bold">280+</h1> <p>Google Review</p>
          </div>
          <div className="w-43 h-30 bg-[#112436] p-4 flex flex-col gap-2 justify-center box-border ">
            <h1 className="text-3xl font-bold">15+</h1> <p>Years Experience</p>
          </div>
          <div className="w-43 h-30 bg-[#112436] p-4 flex flex-col gap-2 justify-center box-border ">
            <h1 className="text-3xl font-bold">49+</h1> <p>Awward Winning</p>
          </div>
        </div>

        <Button btn_text={"GET IN TOUCH"}>{<FaArrowRightLong />} </Button>
      </div>
    </div>
  );
}
