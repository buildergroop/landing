import Head from "next/head";
import { useContext } from "react";
import { ColorMode, ThemeContext } from "../modules/ThemeProvider";

export default function Home() {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  console.log(colorMode)
  return (
    <div className="bg-white dark:bg-gray-900 w-full h-full transition-colors duration-500">
      <Head>
        <title>NextWind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col content-center">
        <p className="self-center text-5xl dark:text-white transition duration-500 ease-in-out">
          Welcome to{" "}
          <a
            href="https://github.com/amitojsingh366/nextwind"
            className="underline text-blue-500"
          >
            NextWind!
          </a>
        </p>
        <div className="flex flex-row p-10">
          <a
            href="https://nextjs.org/docs"
            className="transition duration-500 ease-in-out max-w-md mx-auto 
            bg-transparent rounded-xl overflow-hidden border p-8 text-3xl 
            hover:text-blue-500 dark:hover:text-blue-500 hover:border-blue-500 dark:text-white"
          >
            Next.js
            <br />
            Documentaion &rarr;
          </a>
          <a
            href="https://nextjs.org/docs"
            className="transition duration-500 ease-in-out max-w-md mx-auto 
            bg-transparent rounded-xl overflow-hidden border p-8 text-3xl 
            hover:text-blue-500 dark:hover:text-blue-500 hover:border-blue-500 dark:text-white"
          >
            Tailwindcss
            <br /> Documentaion &rarr;
          </a>
        </div>
        <button className="self-center dark:text-white dark:border-gray-600 
        transition duration-500 ease-in-out border-2 w-24
        hover:text-blue-500 dark:hover:text-blue-500 
        hover:border-blue-500 dark:hover:border-blue-500" onClick={() => {
            setColorMode(colorMode === ColorMode.dark ? ColorMode.light : ColorMode.dark)
          }}>{colorMode === ColorMode.dark ? 'Light Mode' : 'Dark Mode'}</button>
      </main>
    </div>
  );
}
