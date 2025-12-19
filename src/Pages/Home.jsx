import React from "react";
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
    <div className="mt-15 w-screen  px-3 ">
      <div className="flex flex-col justify-between border-2 border-red-400 ">
        <div className="flex flex-col gap-3 w-full h-[65vh] border-2 border-white  ">
          <Title title_text={"KHALID JAN"} />
          <h2 className="font-bold text-[2rem]  ">Hy! I’M KHALID JAN</h2>
          <h2 className="text-[#0788ff] font-bold text-[2rem] ">
            I'M A DE{text}
            <Cursor cursorStyle="|" />{" "}
          </h2>
          <p className="text-[1rem] justify-center  ">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </p>
          <div className="mt-1 flex flex-col justify-center items-center gap-3">
            <Button btn_text={"GET IN TOUCH"}>
              {""} <FaArrowRightLong />{" "}
            </Button>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/khalidjan.jan.792"
                target="blank"
              >
                <FaFacebook className="text-[46px]  text-[#1877f2]" />
              </a>
              <a href="www.linkedin.com/in/khalidjan" target="blank">
                <TiSocialLinkedinCircular className="text-[66px] text-[#1275b1] " />
              </a>
              <a href="https://github.com/khalidjan19791-cyber" target="blank">
                <FaGithub className="text-[46px] text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="h-[70vh] hidden border-white     ">
          <div className="h-30 w-1 bg-white rounded-2xl "></div>
          <div className="h-6 w-1 bg-white rounded-2xl"></div>
          <div className="h-30 w-1 bg-white rounded-2xl "></div>
          <div className="h-6 w-1 bg-white rounded-2xl"></div>
          <div className="h-30 w-1 bg-white rounded-2xl "></div>
        </div>
        <div className="w-full  flex justify-end  ">
          <img src="/myimgg.png" alt="Not Found" className="object-contain " />
        </div>
      </div>
    </div>
  );
}
