import React from "react";
import styled from "styled-components";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "../Components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import Title from "../Components/Title";

export default function Home() {
  const [text] = useTypewriter({
    words: ["VELOPER", "SIGNER"],
    loop: {},
    typeSpeed: 180,
    delaySpeed: 150,
  });

  return (
    <div className="mt-15 w-[85vw] ">
      <div className="flex justify-between ">
        <div className="flex flex-col gap-7 w-[40vw]  ">
          <Title title_text={"KHALID JAN"} />
          <h1 className="font-bold text-[4rem]  ">Hy! I’M KHALID JAN</h1>
          <h1 className="text-[#0788ff] font-bold text-[4rem] ">
            I'M A DE{text}
            <Cursor cursorStyle="|" />{" "}
          </h1>

          <p className="text-[1.2rem] justify-center  ">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </p>
          <div className="flex items-center gap-5">
            <Button btn_text={"GET IN TOUCH"}>
              {""} <FaArrowRightLong />{" "}
            </Button>
            <a href="https://www.facebook.com/khalidjan.jan.792" target="blank">
              <FaFacebook className="text-[46px] text-[#1877f2]" />
            </a>
            <a href="www.linkedin.com/in/khalidjan" target="blank">
              <TiSocialLinkedinCircular className="text-[66px] text-[#1275b1] " />
            </a>
            <a href="https://github.com/khalidjan19791-cyber" target="blank">
              <FaGithub className="text-[46px] text-white" />
            </a>
          </div>
        </div>
        <div className="h-[70vh]   border-white flex flex-col justify-between  ">
          <div className="h-30 w-1 bg-white rounded-2xl "></div>
          <div className="h-6 w-1 bg-white rounded-2xl"></div>
          <div className="h-30 w-1 bg-white rounded-2xl "></div>
          <div className="h-6 w-1 bg-white rounded-2xl"></div>
          <div className="h-30 w-1 bg-white rounded-2xl "></div>
        </div>
        <div className="w-[30vw] h-[70vh]   flex justify-end  ">
          <img
            src="/myimgg.png"
            alt="Not Found"
            className="h-full object-contain "
          />
        </div>
      </div>
    </div>
  );
}
