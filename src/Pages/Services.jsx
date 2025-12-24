import React from "react";
import Title from "../Components/Title";
import ServiceCard from "../Components/ServiceCard";
import { assets } from "../Assets/assets";

export default function Services() {
  return (
    <section className="w-full flex  flex-col gap-5  ">
      <div className="flex flex-col gap-3">
        <Title title_text={"Services"} />
        <h1 className="text-[37px] font-bold">
          DESIGN <span className="text-[#0788FF]">SERVICES </span> I AM
          PROVIDING
        </h1>
      </div>
      <div>
        <ServiceCard assets={assets} />
      </div>
    </section>
  );
}
