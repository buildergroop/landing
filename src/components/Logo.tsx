import React, { useState } from "react";

export const Logo = () => {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <div
      className="transition-all relative"
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
    >
      {showIcon && (
        <img
          src="./HammerLogo.svg"
          className={`w-[3rem] h-[3rem] transition-all absolute -mb-[0.4rem]`}
        />
      )}

      <a
        className={`headingFont text-[1.5rem] select-none transition-all ${
          showIcon && "ml-[4rem]"
        }`}
        href="/"
      >
        {"buildergroop."}
      </a>
    </div>
  );
};
