import React from 'react'
import { useSelector } from 'react-redux'

function Card({title, link, icon, stylee}) {
    const colorr = useSelector((state) => state.colorBg.boolean)

  return (
    <div className={`${colorr?'':'bg-drk shadow-sh'}  flex flex-col gap-4 flex-1 max-w-[300px] min-w-[250px]  p-2 rounded-lg shadow-lg`}>
        <div className={`w-full flex items-center justify-between`}>
            <p className={`text-tx ${colorr?'':'font-bold'}`}>{title}</p>
            <p className={`text-green-800 font-bold  ${colorr?'':'text-green-900'}`}>^  20   %</p>
        </div>
        <span className={`${colorr? 'text-black':'text-tx'}`}>$100</span>
        <div className={`w-full flex items-center justify-between`}>
            <a href="" className={`${colorr? 'text-black':'text-tx'} underline text-sm`}>{link}</a>
            <span className={`py-1 px-2 rounded-lg`} style={{backgroundColor: stylee.bg, color: stylee.clr}}>{icon}</span>
        </div>
    </div>
  )
}

export default Card