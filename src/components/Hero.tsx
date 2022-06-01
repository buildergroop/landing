import React from "react";
import TextLoop from "react-text-loop";
import { ArrowIcon } from "./ArrowIcon";
import { Button } from "./Button";

const words = ["founders", "coders", "designers", "creators"];

export const Hero = () => {
  return (
    <div className="flex flex-col gap-8 w-full mt-[calc((100vh/2)-15rem)] mx-auto text-left md:mx-0 md:max-w-[33rem] lg:max-w-[40rem] 2xl:max-w-[46rem]">
      <div className="flex flex-col gap-4">
        <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] 2xl:text-[4.2rem] headingFont">
          <span className="mr-4">the home for gen-z</span>
          <TextLoop>
            {words.map((word) => (
              <span className="headingGradient">{word}</span>
            ))}
          </TextLoop>
          .
        </h1>
        <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.3rem]">
          Buildergroop is where over <strong>two thousand</strong> ambitious
          young builders network, build, and grow together.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-2 w-full lg:max-w-[80%]">
        <Button
          width="w-auto"
          variant="gradient"
          rounded="xl"
          href="https://discord.gg/builders"
          className="text-[1rem] lg:text-[1.2rem] font-medium h-[2.5rem] px-4 lg:h-[3rem] lg:px-6 lg:hover:px-8"
        >
          <div className="flex items-center gap-2">
            join the discord
            <ArrowIcon />
          </div>
        </Button>

        <Button
          width="w-auto"
          variant="bordered"
          rounded="xl"
          href="https://twitter.com/buildergroop"
          className="text-[1rem] lg:text-[1.2rem] font-medium h-[2.5rem] px-4 lg:h-[3rem] lg:px-6 lg:hover:px-8"
        >
          find us on twitter
        </Button>
      </div>
    </div>
  );
};
