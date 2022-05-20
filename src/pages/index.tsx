import { useEffect } from "react";
import { Meta } from "../components/Meta";
import * as Scroll from "react-scroll";

export default function Home() {
  const Element = Scroll.Element;

  const events = Scroll.Events;
  const scroller = Scroll.scroller;

  const arr = [...Array(2000).keys()];

  const scrollTo = () => {
    scroller.scrollTo(`scrollelem_last`, {
      duration: 150 * arr.length,
      smooth: "linear",
    });
  };

  events.scrollEvent.register("end", function (to, element) {
    // TODO: reverse the scroll direction if at last element
    console.log(to, element);

    // continue scrolling
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
      <div className={`min-h-screen flex flex-wrap gap-2 justify-evenly`}>
        {arr.map((_, i) => (
          <Element
            key={i}
            name={i === arr.length - 1 ? "scrollelem_last" : ""}
            className="w-[7rem] h-[7rem] border border-[#fff] rounded-full"
          />
        ))}
      </div>
    </>
  );
}
