import React, { useState,useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { motion } from "framer-motion";
import { useAtom } from 'jotai';
import { darkModeAtom } from "../atoms/atoms";

const ThemeSwitcher: React.FC = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  useEffect(() => {
    setDarkMode(false)
    typeof window !== "undefined" && localStorage.setItem("darkMode", "false");
  },[])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    typeof window !== "undefined" && localStorage.setItem("darkMode", newDarkMode.toString());
    typeof window !== "undefined" && window.dispatchEvent(new Event('storage'));
    if(newDarkMode==true){
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }
  };

  return (
    <label htmlFor="themeSwitcher" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id="themeSwitcher"
          className="sr-only"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <motion.div
          className="toggle__line w-10 h-6 bg-gray-400 rounded-full shadow-inner"
          animate={{ backgroundColor: darkMode ? "#1F2937" : "#E5E7EB" }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0 ${darkMode ? 'translate-x-full' : 'translate-x-0'}`}
          animate={{ backgroundColor: darkMode ? "#D1D5DB" : "#4B5563" }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute top-1 left-1 justify-center items-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {!darkMode && <HiSun className={`text-yellow-400`} />}
            {darkMode && <HiMoon className={`text-gray-800`} />}
          </motion.div>
        </motion.div>
      </div>
    </label>
  );
};

export default ThemeSwitcher;