import Head from 'next/head'
import favicon from '../public/favicon.ico';
import { About,Contact,Experience,Hero,Navbar,Tech,Works,StarsCanvas } from "../components";
import DataProvider from '../constants/DataProvider';

export default function Home() {
  return (
    <DataProvider>
      <Head>
        <title>Saumya Mehta | Full Stack Developer</title>
        <link rel="icon" href={favicon.src} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </Head>
      <div className="relative z-0 bg-gradient-to-tl from-blue-500 to-primary dark:bg-gradient-to-bl dark:from-primary dark:to-black">
        <div className="bg-hero-pattern  dark:bg-hero-pattern-dark bg-cover bg-no-repeat bg-center">
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
    </DataProvider>
  )
}
