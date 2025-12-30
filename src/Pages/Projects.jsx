import React from "react";
import { projectData } from "../Assets/projects";
import Title from "../Components/Title";
import ProjectCart from "../Components/ProjectCart";
export default function Projects() {
  return (
    <section className="w-full flex  flex-col gap-5  ">
      <div className="flex flex-col gap-3">
        <Title title_text={"Projects"} />
        <h1 className="text-[37px] lg:text-[44px] font-bold">
          RECENT <span className="text-[#0788FF]">PROJECTS </span>
        </h1>
      </div>
      <div>
        <ProjectCart allProjects={projectData} />
      </div>
    </section>
  );
}
