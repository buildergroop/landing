import * as React from "react";

export const ArrowIcon = (props) => (
  <svg
    width={20}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="m10.972 1 6.806 7-6.806 7m-8.75-7h15.556H2.222Z"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
