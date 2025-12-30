import React from "react";
export default function ServiceCard({ assets }) {
  const starjunk = Array(4).fill(assets.star);
  return (
    <section className="h-full w-full">
      <div className="flex flex-col flex-wrap justify-center gap-10 sm:flex-row sm:gap-5">
        {assets.map((item, index) => {
          const Icon = item.icon;
          const Star = item.star;
          const HalfStar = item.halfStar;

          return (
            <div
              key={index}
              className="relative my-2 flex h-[60vh] flex-col flex-wrap items-center justify-center rounded-[18px] border border-white hover:shadow-[0_10px_30px_rgba(0,220,255,0.45)] sm:w-[39vw] lg:w-[26.9vw]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full rounded-2xl object-cover sm:w-[50vw]"
              />
              {/* <div className="absolute inset-0 bg-black/60"></div> */}

              <div className="absolute bottom-0 flex flex-col gap-2 text-[white]">
                {Icon && (
                  <Icon className="ml-2 rounded bg-[#0788FF] text-[50px] text-white" />
                )}
                <div className="rounded-2xl border-b border-white/50 bg-black/50 px-2">
                  <h2 className="mt-2 text-[28px] font-bold">{item.title}</h2>
                  <p className="text-justify text-[17px]">
                    {item.description}
                  </p>{" "}
                  <div className="my-2 flex flex-row text-[#FFC107]">
                    {starjunk.map((_, i) => (
                      <Star key={`star-${i}`} className="text-[17px]" />
                    ))}

                    <HalfStar key={index} className="text-[17px]" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
