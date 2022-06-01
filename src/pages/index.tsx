import { useEffect, useRef, useState } from "react";
import * as Scroll from "react-scroll";
import { Hero } from "../components/Hero";

import { Meta } from "../components/Meta";
import { Navbar } from "../components/Navbar";

import json from "../static/avatars.json";
const avatars = json.avatars;

export default function Home() {
  const Element = Scroll.Element;

  const events = Scroll.Events;
  const scroller = Scroll.scroller;

  const lastElemRef = useRef();

  const [arr, setArr] = useState([...avatars]);

  const scrollTo = () => {
    scroller.scrollTo(`scrollelem_last`, {
      duration: 150 * arr.length,
      smooth: "linear",
    });
  };

  events.scrollEvent.register("end", function (to, element) {
    // const append = arr.slice(
    //   Math.random() * (arr.length - 0),
    //   Math.random() * (arr.length - 0)
    // );

    // setArr((c) => [...c, ...append]);

    // continue scrolling
    // elemInViewport(lastElemRef.current);
    scrollTo();
  });

  useEffect(() => {
    scrollTo();
  }, [arr]);

  useEffect(() => {
    scrollTo();
  }, []);

  return (
    <>
      <Meta title="buildergroop" />

      {/* Body */}
      <div className={`min-h-screen flex`}>
        {/* Content */}
        <div
          className="w-screen h-screen z-[999] fixed p-[4rem] lg:py-[4rem] lg:px-[8rem]"
          style={{ backdropFilter: "blur(10px)" }}
        >
          <div className="w-full h-full max-w-[90rem] mx-auto flex flex-col">
            <Navbar />
            <Hero />
            <div className=""></div>
          </div>
        </div>

        {/* Background Layer 2 */}
        <div
          className="w-screen h-screen fixed bg-[#000] opacity-80 z-[2]"
          style={{
            backgroundImage: `url("./DottedBackground.png")`,
          }}
        />

        {/* Background Layer 1 */}
        <div className="flex flex-wrap gap-2 justify-evenly z-[-1]">
          {arr.map((src, i) => (
            <Element
              key={i}
              name={i === arr.length - 1 ? "scrollelem_last" : ""}
              ref={i === arr.length - 1 ? lastElemRef : undefined}
              className="w-[7rem] h-[7rem] rounded-full"
              style={{
                backgroundImage: `url(${src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor: "#f1f1f1",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
