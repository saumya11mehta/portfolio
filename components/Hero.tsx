import Link from 'next/link'
import { motion } from "framer-motion";
import { ComputersCanvasLight,ComputersCanvasDark } from "./canvas";
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { darkModeAtom } from "../atoms/atoms";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event : MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-blue-600 dark:bg-violet-600" />
          <div className="w-1 sm:h-80 h-40 blue-gradient dark:violet-gradient" />
        </div>

        <div>
          <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-quaternary dark:text-white`}>
            {"Hi, I'm "}<span className="text-blue-600 dark:text-violet-600">Saumya</span>
          </h1>
          <p className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-quaternary dark:text-white-100`}>
            {"I develop dynamic web applications "}<br className="sm:block hidden" />
            {"and interactive user interfaces"}
          </p>
        </div>
      </div>
      
      {!isMobile && !darkMode && <ComputersCanvasLight />}
      {!isMobile && darkMode && <ComputersCanvasDark />}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <Link href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;