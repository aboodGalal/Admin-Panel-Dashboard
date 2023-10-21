import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faGlobe,faMoon,faCompress,faBell,faMessage,faListUl } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { useDispatch } from 'react-redux'
import { Toggle } from '../../redux/ColorBg'
function Navbar() {
  const colorr = useSelector((state) => state.colorBg.boolean)
  const dispatch = useDispatch()

  return (
    <section className={`w-full h-[47px] border-b-[1px] border-solid ${colorr? 'bg-white border-brdrW':'bg-drk border-brdrB'} flex flex-row justify-between items-center px-5`}>
      <div className='relative'>
        <input type="text" placeholder="Search" className={`w-[200px] h-[30px] border-solid border-[1px] text-[12px] p-3 ${colorr? 'border-brdrW':'border-gray-400 bg-drk text-gray-700 '}`}/>
        <FontAwesomeIcon icon={faMagnifyingGlass}  className={`text-tx absolute right-[5px] top-[6px]`}/>
      </div>
      <div className='flex flex-row items-center gap-4'>
        <div className='flex items-center'>
          <FontAwesomeIcon icon={faGlobe} className={`text-tx`}/>
          <p className={`text-tx`}>English</p>
        </div>
        <a onClick={() => dispatch(Toggle())} className={`relative cursor-pointer`}><FontAwesomeIcon icon={faMoon} className={`text-tx`}/></a>
        <FontAwesomeIcon icon={faCompress}  className={`text-tx`}/>
        <a className={`relative note cursor-pointer`}><FontAwesomeIcon icon={faBell} className={`text-tx`}/></a>
        <a className={`relative note2 cursor-pointer`}><FontAwesomeIcon icon={faMessage} className={`text-tx`}/></a>
        <FontAwesomeIcon icon={faListUl} className='text-tx'/>
      </div>
    </section>
      )
}

export default Navbar