import dynamic from 'next/dynamic'

const EarthAndSunCanvas = dynamic(() => import("./EarthAndSun"));
const BallCanvas = dynamic(() => import("./Ball"));
const ComputerCanvas = dynamic(() => import("./Computer"));
const StarsCanvas = dynamic(() => import("./Stars"));

export { EarthAndSunCanvas, BallCanvas, ComputerCanvas, StarsCanvas };