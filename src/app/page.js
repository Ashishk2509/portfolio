"use client";
import Navbar from "@/components/Navbar";
import Social from "@/components/Social";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className="min-h-screen flex flex-col p-6 items-center lg:justify-evenly lg:flex-row gap-10 lg:gap-5">

      <Navbar current="home" />

      <div className="col lg:w-2/5 lg:mx-20">
        <Image
          src="/profile.png"
          width={400}
          height={400}
          alt="Picture of Ashish Khatik"
          style={{
            objectFit: "contain",
            borderRadius: "100%",
            border: "5px solid white",
            margin: "auto"
          }}
          priority={true}
        />
      </div>

      <div className="col text-center lg:text-left w-11/12 lg:w-3/5">
        <p className="mb-4 text-4xl lg:text-5xl font-bold">
          <span className={montserrat.className + " text-yellow-400 font-extrabold"}>Ashish Khatik</span>
        </p>
        <p className="mb-4 text-xl lg:text-4xl font-bold tracking-tighter inline-block w-full">
          <span className="text-blue-500">Web Developer</span>
          &ensp;and&ensp;
          <span className="block lg:inline-block mx-auto font-mono font-thin">
            <Typewriter
              words={[
                "Code Enthusiast.",
                "Tech Alchemist.",
                "Algorithm Juggler.",
                "Binary Virtuoso.",
              ]}
              typeSpeed={40}
              deleteSpeed={40}
              delaySpeed={2000}
              loop={0}
              cursor={true}
              startFrom={"full"}
            />
          </span>
        </p>
        <p className="mb-4 text-sm lg:text-xl tracking-tighter">
          Creating awesome websites with a touch of innovation and fun vibes!
        </p>
      </div>

      <Social />
    </main>
  );
}
