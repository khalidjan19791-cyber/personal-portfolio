import React from "react";
export default function Title({ title_text }) {
  return (
    <div>
      <p className="w-42.5  rounded-sm border-r-3p bg-[#063560] text-[1.4rem] text-center  ">
        {title_text}{" "}
      </p>
    </div>
  );
}
