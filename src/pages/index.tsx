import { JoinButton } from "../components/JoinButton";
import { Meta } from "../components/Meta";

export default function Home() {
  return (
    <>
      <Meta
        title="Buildergroop"
        description="The home for ambitious gen-z builders."
        keywords="startup"
        image="https://images-ext-2.discordapp.net/external/q2Jwo_Jmv2yl5JeUn0fHnZFBykmV8YMYMmVJ3XfW4VE/%3Fsize%3D4096/https/cdn.discordapp.com/icons/913668807015407646/a_f8271ba713d72cb11a66b4601b1b044e.gif?width=360&height=360"
      />
      <div className="h-screen w-screen flex items-center">
        <div className="flex items-center justify-between mx-10 md:mx-auto">
          <div className="flex flex-col gap-[1rem] lg:gap-[1.5rem] xl:gap-[2rem] md:w-[35rem] 2xl:w-[37rem] lg:-mt-10">
            <img
              src="./powered-by-vercel.svg"
              className="-ml-3 mb-[-100px] lg:mb-[-120px] h-[15rem] w-[15rem]"
              draggable={false}
            />
            <h1 className="text-[2.6rem] md:text-[3rem] xl:text-[4rem] 2xl:text-[5rem] font-bold leading-[3rem] lg:leading-[4rem] xl:leading-[5rem] select-none">
              the home for{" "}
              <span className="moving_background_gradient">young builders</span>
            </h1>
            <p className="text-[1.3rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[1.8rem] font-regular tracking-wider lg:leading-[2.3rem] xl:leading-[2.7rem] text-white1 md:max-w-[30rem]">
              Buildergroop is where ambitious gen-z builders come together to
              connect, ideate, build, and ship.
            </p>
            <div className="mt-3 lg:mt-0">
              <JoinButton />
            </div>
          </div>
          <img
            src="./Graphic.svg"
            className="hidden lg:block lg:h-[30rem] lg:w-[30rem] xl:h-[40rem] xl:w-[37rem] -mr-[3rem] select-none"
            draggable={false}
          />
        </div>
      </div>
    </>
  );
}
