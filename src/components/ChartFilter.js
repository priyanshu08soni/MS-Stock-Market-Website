import React from 'react'

const ChartFilter = ({text,active,onClick}) => {
  return (
    <button onClick={onClick} className={`w-8 h-6 xl:w-10 m-2 xl:h-7 border-1 rounded-md flex items-center justify-center cursor-pointer ${active? "bg-indigo-600 border-indigo-700 text-gray-100":"border-indigo-300"}`}  >
      {text}
    </button>
  )
}

export default ChartFilter
