import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextWind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col content-center content-evenly">
        <h1 className="self-center">
          Welcome to{" "}
          <a
            href="https://github.com/amitojsingh366/nextwind"
            className="underline text-blue-500"
          >
            NextWind!
          </a>
        </h1>
        <div className="flex flex-row">
          <a
            href="https://nextjs.org/docs"
            className="mx-5 transition duration-500 ease-in-out max-w-md mx-auto bg-white rounded-xl overflow-hidden border p-8 text-3xl hover:text-blue-500 hover:border-blue-500"
          >
            Next.js
            <br />
            Documentaion &rarr;
          </a>
          <a
            href="https://nextjs.org/docs"
            className="mx-5 transition duration-500 ease-in-out max-w-md mx-auto bg-white rounded-xl overflow-hidden border p-8 text-3xl hover:text-blue-500 hover:border-blue-500"
          >
            Tailwindcss
            <br /> Documentaion &rarr;
          </a>
        </div>
      </main>
    </div>
  );
}
