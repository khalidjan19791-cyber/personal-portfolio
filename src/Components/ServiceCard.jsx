import React from "react";

export default function ServiceCard({ assets }) {
  return (
    <section className="h-full w-full">
      <div className="flex flex-col flex-wrap justify-center gap-10 sm:flex-row sm:gap-5">
        {assets.map((item, index) => (
          <div
            key={index}
            className="relative flex h-[60vh] flex-col flex-wrap items-center justify-center rounded-2xl hover:shadow-[0_10px_30px_rgba(0,220,255,0.45)] sm:w-[39vw] lg:w-[25vw]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full rounded-2xl object-cover sm:w-[50vw]"
            />
            <div className="absolute bottom-0 flex flex-col gap-2 rounded-2xl bg-black/50 p-2 text-[white]">
              <div className="border-b border-white/50">
                <h2 className="mt-2 text-3xl font-bold">{item.title}</h2>
                <p className="text-justify text-[17px]">{item.desciption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
