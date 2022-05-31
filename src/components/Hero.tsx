import React from "react";
import TextLoop from "react-text-loop";
import { ArrowIcon } from "./ArrowIcon";
import { Button } from "./Button";

const words = ["founders", "coders", "designers", "creators"];

export const Hero = () => {
  return (
    <div className="flex flex-col gap-8 w-full mx-auto text-left lg:mx-0 lg:max-w-[40rem]">
      <div className="flex flex-col gap-4">
        <h1 className="text-[3.5rem] headingFont">
          the home for gen-z
          <TextLoop>
            {words.map((word) => (
              <span className="headingGradient ml-4">{word}</span>
            ))}
          </TextLoop>
          .
        </h1>
        <p className="text-[1.3rem]">
          Buildergroop is where over <strong>two thousand</strong> ambitious
          young builders network, build, and grow together.
        </p>
      </div>
      <div className="flex items-center gap-2 w-full lg:max-w-[80%]">
        <Button
          width="w-auto"
          variant="gradient"
          rounded="xl"
          size="xl"
          href="https://discord.gg/builders"
          className="text-[1.2rem] font-medium"
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
          size="xl"
          href="https://twitter.com/buildergroop"
          className="text-[1.2rem] font-medium"
        >
          find us on twitter
        </Button>
      </div>
    </div>
  );
};
