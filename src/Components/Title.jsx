import React from "react";
export default function Title({ title_text }) {
  return (
    <div>
      <p className="border-r-3p w-42.5 rounded-sm bg-[#063560] text-center text-[1.4rem]">
        {title_text}{" "}
      </p>
    </div>
  );
}
