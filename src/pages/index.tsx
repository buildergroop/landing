import { useEffect, useRef } from "react";
import { Meta } from "../components/Meta";
import * as Scroll from "react-scroll";

export default function Home() {
  const Element = Scroll.Element;
  const scroller = Scroll.scroller;

  const arr = [...Array(100).keys()];

  const scrollTo = () => {
    scroller.scrollTo(`scrollelem_${arr.length - 1}`, {
      duration: 1000 * arr.length,
      smooth: true,
    });
  };

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
      <div className="min-h-screen flex flex-col">
        {arr.map((_, i) => (
          <Element
            key={i}
            name={`scrollelem_${i}`}
            className="w-screen h-[4rem] border-b border-[#fff]"
          >
            no. {i} element
          </Element>
        ))}
      </div>
    </>
  );
}
