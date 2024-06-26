import Head from "next/head";
import AnimatedText from "@/compornents/AnimatedText";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <div className="w-full flex flex-col items-center self-center">
          <AnimatedText
            text=" Vision Into Reality ビジョンを現実へ"
            className="text-center
            lg:!text-8xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
        </div>
      </main>
    </>
  );
}
