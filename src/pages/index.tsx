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
      <Meta
        title="Buildergroop"
        description="The home for ambitious gen-z builders."
        keywords="startup"
        image="https://images-ext-2.discordapp.net/external/q2Jwo_Jmv2yl5JeUn0fHnZFBykmV8YMYMmVJ3XfW4VE/%3Fsize%3D4096/https/cdn.discordapp.com/icons/913668807015407646/a_f8271ba713d72cb11a66b4601b1b044e.gif?width=360&height=360"
      />

      {/* Body */}
      <div className={`min-h-screen flex`}>
        {/* Content */}
        <div
          className="w-screen h-screen z-[999] fixed p-[2rem] lg:p-[4rem] flex flex-col justify-between"
          style={{ backdropFilter: "blur(10px)" }}
        >
          <Navbar />
          <Hero />
          <div className=""></div>
        </div>

        {/* Background Layer 2 */}
        <div
          className="w-screen h-screen fixed bg-[#000] opacity-90 z-[2]"
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
