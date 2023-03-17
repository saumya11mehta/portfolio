import Head from 'next/head'
import favicon from '../public/favicon.ico';
import { About,Contact,Experience,Hero,Navbar,Tech,Works,StarsCanvas } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Saumya Mehta | Full Stack Developer</title>
        <link rel="icon" href={favicon.src} />
      </Head>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  )
}
