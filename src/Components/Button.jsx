import React from "react";

export default function Button({ btn_text, children }) {
  return (
    <button className="bg-[#0788ff] px-8 py-5 rounded-[30px] text-xl text-white transition-colors duration-300 ease-in-out font-semibold flex justify-center items-center gap-5 w-fit h-15 hover:bg-black hover:border-2 hover:border-white">
      {btn_text}
      {children}
    </button>
  );
}
