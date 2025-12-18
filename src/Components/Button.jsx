import React from "react";

export default function Button({ btn_text, children }) {
  return (
    <button className="h-15 w-36 rounded-[40px] bg-[#0788ff] text-[1.3rem] text-white transition-colors duration-300 ease-in-out hover:border-2 hover:border-white hover:bg-black">
      {btn_text}
      {children}
    </button>
  );
}
