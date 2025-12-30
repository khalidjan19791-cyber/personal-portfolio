import React from "react";
import Button from "../Components/Button";
import Social_icon from "../Components/Social_icon";

export default function Contact() {
  return (
    <section className="w-full md:p-5 ">
      <div className="  ">
        <div className="bg-[#051C34]  h-[35vh] rounded-t-xl   lg:h-[22vh] lg:w-full  lg:p-2  p-4 flex flex-col gap-5  md:h-[25vh]">
          <div className="lg:w-[50vw] flex flex-col gap-6  lg:flex lg:flex-col lg:gap-4   ">
            <h1 className="text-[2rem] font-semibold md:text-4xl lg:text-[3rem]">
              Let's Discuss Your Project
            </h1>
            <p className="text-[17px] md:text-[20px]">
              Always available for freelancing if the right project comes along,
              Feel free to contact me.
            </p>
          </div>
        </div>
        <div className="bg-[#05325C] p-4 lg:p-2 flex flex-col gap-7  rounded-b-xl lg:w-full lg:flex-row lg:gap-8   ">
          <form className=" lg:w-[50vw] ">
            <div className="flex flex-col gap-6">
              <div className=" flex flex-col gap-6 md:flex-row md:gap-4  ">
                <div className="flex flex-col gap-1 md:w-[40vw]">
                  <label>Your Name</label>
                  <input
                    placeholder="Name *"
                    className="p-2 border bg-[#123B61] border-white/20 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1 md:w-[40vw]">
                  <label>Your Email</label>

                  <input
                    placeholder="Email *"
                    className="p-2 border bg-[#123B61] border-white/20 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label>Subject</label>
                <input
                  placeholder="Subject *"
                  className="p-2 border bg-[#123B61] border-white/20 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Your Message *"
                  className="p-2 border bg-[#123B61] border-white/20 rounded-md"
                />
              </div>
              <Button btn_text={"SEND MESSAGE"} />
            </div>
          </form>
          <div className="flex relative lg:w-[50vw]  lg:justify-end items-center   text-white/70 flex-col gap-5">
            <div className="hidden lg:block absolute -top-35 left-23 w-[17vw] h-[40vh]  ">
              <img
                src="public\pic1.jpg"
                alt="not found"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h3>WRITE AN E-MAIL</h3>
                <h1 className="text-[22px] font-semibold">khalid@gmail.com</h1>
              </div>
              <div>
                <h3>CONTACT - NUMBER</h3>
                <h1 className="text-[22px] font-semibold">+92-734929484</h1>
              </div>
            </div>
            <Social_icon />
          </div>
        </div>
      </div>
    </section>
  );
}
