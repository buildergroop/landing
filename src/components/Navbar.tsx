import React from "react";
import ReactTooltip from "react-tooltip";
import { Logo } from "./Logo";

const links = [
  { title: "events", href: "/", tooltip: "coming soon" },
  { 
    title: "perks", 
    href: "https://perks.buildergroop.com",
  },
  {
    title: "jobs",
    href: "http://jobs.buildergroop.com",
  },
];

export const Navbar = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <Logo />

        {/* links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => {
            return (
              <a
                href={link.href}
                className="headingFont text-[0/9rem] select-none"
                data-tip={link.tooltip}
              >
                {link.title}
              </a>
            );
          })}
        </div>
      </div>

      {/* @ts-ignore */}
      <ReactTooltip
        className="!bg-black !border !border-[#ffffff] !rounded-xl !px-5 !py-2"
        arrowColor="transparent"
      />
    </>
  );
};
