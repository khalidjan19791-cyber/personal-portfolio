import UseAnimations from "react-useanimations";
import twitter from "react-useanimations/lib/twitter";
import React, { useState } from "react";

export default function Animation() {
  const [open, setopen] = useState(false);

  return (
    <div className="cursor-pointer" onClick={() => setopen(!open)}>
      <UseAnimations animation={twitter} size={56} fillColor="white" />
    </div>
  );
}
