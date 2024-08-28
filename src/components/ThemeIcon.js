import React, { useContext } from 'react'
import {MoonIcon} from "@heroicons/react/solid"
import {SunIcon} from "@heroicons/react/solid";
import ThemeContext from '../context/ThemeContext';
const ThemeIcon = () => {
   const {darkMode,setDarkMode}=useContext(ThemeContext);
   const toggleDarkMode=()=>{
    setDarkMode(!darkMode);
   }
  return (
    <>
    <button className={`d-flex gap-3 rounded-lg border-2
     ${darkMode? "shadow-gray-600" :null}`} 
    onClick={toggleDarkMode}
    >
      <MoonIcon className={`h-6 w-6 cursor-pointer stroke-1 fill-none ${darkMode? "fill-yellow-400 stroke-yellow-400":"fill-none stroke-neutral-500 "}`} />
      <SunIcon className={`h-6 w-6 cursor-pointer stroke-1 fill-none ${darkMode? "fill-none stroke-neutral-500":"fill-yellow-400 stroke-yellow-400 "}`} />
    </button>
    </>
  )
}

export default ThemeIcon
