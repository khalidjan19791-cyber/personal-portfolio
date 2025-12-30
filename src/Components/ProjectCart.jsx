import React from "react";
export default function ProjectCart({ allProjects }) {
  return (
    <section className="w-full">
      <div className="flex flex-col flex-wrap justify-center gap-10 sm:flex-row sm:gap-5">
        {allProjects.map((item, index) => {
          return (
            <div
              key={index}
              className="group relative my-2 sm:w-[39vw] lg:w-[26.9vw]"
            >
              <div className="relative flex h-[60vh] items-center justify-center overflow-hidden rounded-[18px] border border-white transition-all duration-300 group-hover:scale-105 group-hover:scale-[1.01] group-hover:blur-[2px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-container h-full w-full rounded-[18px]"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 top-40 flex h-[30vh] flex-col justify-center gap-5 rounded-[18px] bg-black/70 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h2 className="text-[26px] font-bold">{item.title}</h2>
                <p className="text-justify text-[18px] font-bold">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
