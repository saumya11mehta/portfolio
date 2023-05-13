import { atom } from "jotai";

export const darkModeAtom = atom(typeof window !== "undefined" && localStorage.getItem("darkMode") === "true");