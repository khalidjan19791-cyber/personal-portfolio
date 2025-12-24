import React from "react";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

export default function Social_icon() {
  return (
    <div className="flex items-center gap-4">
      <a href="https://www.facebook.com/khalidjan.jan.792" target="blank">
        <FaFacebook className="text-[46px] text-[#1877f2]" />
      </a>
      <a href="www.linkedin.com/in/khalidjan" target="blank">
        <TiSocialLinkedinCircular className="text-[66px] text-[#1275b1]" />
      </a>
      <a href="https://github.com/khalidjan19791-cyber" target="blank">
        <FaGithub className="text-[46px] text-white" />
      </a>
    </div>
  );
}
