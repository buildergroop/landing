import React from "react";
import { Logo } from "./Logo";

const links = [
  { title: "events", href: "/404" },
  { title: "supporters", href: "/404" },
  { title: "team", href: "/404" },
  { title: "jobs", href: "/404" },
];

export const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <Logo />

      {/* links */}
      <div className="flex items-center gap-6">
        {links.map((link) => {
          return (
            <a
              href={link.href}
              className="headingFont text-[0/9rem] select-none"
            >
              {link.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};
