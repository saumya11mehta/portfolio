import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { useState, useEffect } from "react";
import { useData } from "@/constants/DataProvider";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { technologies } = useData();

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

  let techStack = technologies?.filter(technology => technology.isMobile);
  if(!isMobile){
    techStack = technologies ? technologies : [];
  }
  
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10 my-20">
        {techStack && techStack.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");