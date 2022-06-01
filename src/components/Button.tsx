import React from "react";

interface ButtonProps {
  width: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "gradient" | "bordered";
  className?: string;
  href?: string;
  onClick?: any;
}

export const Button: React.FC<ButtonProps> = ({
  width,
  rounded,
  size = "sm",
  variant = "bordered",
  className,
  children,
  href,
  onClick,
}) => {
  const commonClassName = `
    grid place-items-center
    cursor-pointer
    hover:opacity-80 hover:shadow-lg
    transition-all
    select-none 

    ${width || "w-auto"}

    ${rounded === "sm" && "rounded-sm"}
    ${rounded === "md" && "rounded-md"}
    ${rounded === "lg" && "rounded-lg"}
    ${rounded === "xl" && "rounded-xl"}
    ${rounded === "full" && "rounded-full"}

    ${size === "sm" && "h-[2rem] px-1"}
    ${size === "md" && "h-[2.4rem] px-2"}
    ${size === "lg" && "h-[2.7rem] px-3"}
    ${size === "xl" && "h-[3rem] px-6 hover:px-8"}

    ${variant === "bordered" && "border-2 border-[#fff]"}
    ${variant === "gradient" && "backgroundGradient"}

    ${className}
`;

  return href ? (
    <a className={commonClassName} href={href} target="_blank">
      {children}
    </a>
  ) : (
    <button className={commonClassName}>{children}</button>
  );
};
