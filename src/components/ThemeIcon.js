import React, { useContext } from 'react'
import {MoonIcon} from "@heroicons/react/solid"
import { FiSun } from "react-icons/fi";
import ThemeContext from '../context/ThemeContext';
import { useState } from 'react';
import { useEffect } from 'react';
const ThemeIcon = () => {
   const {darkMode,setDarkMode}=useContext(ThemeContext);
   const [bgColor, setBgColor] = useState('black'); // Set default background color

   const toggleDarkMode=()=>{
     if(darkMode===true){
        setDarkMode(false);
        setBgColor('rgba(220,252,232,1)')
      }else{
        setDarkMode(true);
        setBgColor('black');
      }
    }
    useEffect(() => {
      document.body.style.backgroundColor = bgColor;
    }, [bgColor,darkMode]); 
  return (
    <>
    <button className={`d-flex gap-3 rounded-lg border-2
     ${darkMode? "shadow-gray-600" :null}`} 
    onClick={toggleDarkMode}
    >
      <MoonIcon className={`h-6 w-6 cursor-pointer stroke-1 fill-none ${darkMode? "fill-yellow-400 stroke-yellow-400":"fill-none stroke-neutral-500 "}`} />
      <FiSun className={`h-6 w-6 cursor-pointer stroke-1 fill-none ${darkMode? "fill-none stroke-neutral-500":"fill-yellow-400 stroke-yellow-400 "}`} />
    </button>
    </>
  )
}

export default ThemeIcon
