import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns, faUser, faShop, faCreditCard, faTruckMoving,
    faSquarePollVertical, faBell, faHardDrive, faHeadSideVirus,
    faGear, faIdBadge, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { Tr, Fl } from '../../redux/ColorBg'


function Sidebar() {
    const colorr = useSelector((state) => state.colorBg.boolean)
    const dispatch = useDispatch()

  return (
        <div className={`flex-1 h-[100%] border-r-[1px] flex flex-col  ${colorr? 'text-white border-r-[1px] border-solid border-brdrW': 'bg-drk border-r-[1px] border-solid border-brdrB'}`}>
            <NavLink to='/' className={`${colorr ? 'text-prple border-brdrW':'text-[#999999] border-brdrB'} flex justify-center items-center py-2 border-b-2  font-bold text-[20px]`}>lamadmin</NavLink>
            <div className='flex flex-col mt-3 pl-3 gap-3'>
                <ul className='flex flex-col text-[12px] font-[600]'>
                    <h4 className='text-tx'>MAIN</h4>
                    <li className=''>
                        <NavLink to='/' className='flex flex-row gap-2 my-1 pl-1 py-1 hover:bg-gray-100 transition-colors duration-200'>
                            <span className={`${colorr? 'text-prple': 'text-[#999999]'}`}><FontAwesomeIcon icon={faTableColumns} /></span>
                            <h3 className='text-tx'>Dashboard</h3>
                        </NavLink>
                    </li>
                </ul>
                <ul className='flex flex-col text-[12px] font-[600]'>
                    <h4 className='text-tx'>LISTS</h4>
                    <li className=''>
                        <NavLink to={'/users'} className='flex flex-row gap-2 my-1 pl-2 py-1 hover:bg-gray-100 transition-colors duration-200'>
                            <span className={`${colorr? 'text-prple': 'text-[#999999]'}`}><FontAwesomeIcon icon={faUser} /></span>
                            <h3 className='text-tx'>Users</h3>
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink to='' className='flex flex-row gap-2 my-1 pl-2 py-1 hover:bg-gray-100 transition-colors duration-200'>
                            <span className={`${colorr? 'text-prple': 'text-[#999999]'}`}><FontAwesomeIcon icon={faShop} /></span>
                            <h3 className='text-tx'>Products</h3>
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink to='' className='flex flex-row gap-2 my-1 pl-2 py-1 hover:bg-gray-100 transition-colors duration-200'>
                            <span className={`${colorr? 'text-prple': 'text-[#999999]'}`}><FontAwesomeIcon icon={faCreditCard} /></span>
                            <h3 className='text-tx'>Orders</h3>
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink to='' className='flex flex-row gap-2 my-1 pl-2 py-1 hover:bg-gray-100 transition-colors duration-200'>
                            <span className={`${colorr? 'text-prple': 'text-[#999999]'}`}><FontAwesomeIcon icon={faTruckMoving} /></span>
                            <h3 className='text-tx'>Delivery</h3>
                        </NavLink>
                    </li>
                </ul>
                <ul className='flex flex-col text-[12px] font-[600]'>
                    <h4 className='text-tx'>USEFUL</h4>
                    <li className=''>
                        <NavLink to='' className='flex flex-row gap-2 my-1 pl-1 py-1 hover:bg-gray-100 transition-colors duration-200'>
                            <span className={`${colorr? 'text-prple': 'text-[#999999]'}`}><FontAwesomeIcon icon={faSquarePollVertical} /></span>
                            <h3 className='text-tx'>Stats</h3>
                        </NavLink>
                        <NavLink to='' className='flex flex-row gap-2 my-1 pl-1 py-1 hover:bg-gray-100 transition-colors duration-200'>
                            <span className={`${colorr? 'text-prple': 'text-[#999999]'}`}><FontAwesomeIcon icon={faBell} /></span>
                            <h3 className='text-tx'>Notifications</h3>
                        </NavLink>
                    </li>
                </ul>
                <ul className='flex flex-col text-[12px] font-[600]'>
                    <h4 className='text-tx'>SERVICE</h4>
                    <li className=''>
                        <NavLink to='' className='flex flex-row gap-2 my-1 pl-1 py-1 hover:bg-gray-100 transition-colors duration-200'>
                            <span className={`${colorr? 'text-prple': 'text-[#999999]'}`}><FontAwesomeIcon icon={faHardDrive} /></span>
                            <h3 className='text-tx'>System Health</h3>
                        </NavLink>
                        <NavLink to='' className='flex flex-row gap-2 my-1 pl-1 py-1 hover:bg-gray-100 transition-colors duration-200'>
                            <span className={`${colorr? 'text-prple': 'text-[#999999]'}`}><FontAwesomeIcon icon={faHeadSideVirus} /></span>
                            <h3 className='text-tx'>Logs</h3>
                        </NavLink>
                        <NavLink to='' className='flex flex-row gap-2 my-1 pl-1 py-1 hover:bg-gray-100 transition-colors duration-200'>
                            <span className={`${colorr? 'text-prple': 'text-[#999999]'}`}><FontAwesomeIcon icon={faGear} /></span>
                            <h3 className='text-tx'>Settings</h3>
                        </NavLink>
                    </li>
                </ul>
                <ul className='flex flex-col text-[12px] font-[600]'>
                    <h4 className='text-tx'>USER</h4>
                    <li className=''>
                        <NavLink to='' className='flex flex-row gap-2 my-1 pl-1 py-1 hover:bg-gray-100 transition-colors duration-200'>
                            <span className={`${colorr? 'text-prple': 'text-[#999999]'}`}><FontAwesomeIcon icon={faIdBadge} /></span>
                            <h3 className='text-tx'>PROFILE</h3>
                        </NavLink>
                        <NavLink to='' className='flex flex-row gap-2 my-1 pl-1 py-1 hover:bg-gray-100 transition-colors duration-200'>
                            <span className={`${colorr? 'text-prple': 'text-[#999999]'}`}><FontAwesomeIcon icon={faArrowRightFromBracket} /></span>
                            <h3 className='text-tx'>Log Out</h3>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex flex-row gap-3 pl-3 my-1'>
                <a onClick={() => dispatch(Tr())} className='w-[23px] h-[23px] border-solid border-[1px] border-prple rounded-md hover:cursor-pointer hover:shadow-lg transition-all duration-200 bg-white'></a>
                <a onClick={() => dispatch(Fl())} className='w-[23px] h-[23px] border-solid border-[1px] border-prple rounded-md hover:cursor-pointer hover:shadow-lg transition-all duration-200 bg-[#333333]'></a>
            </div>
        </div>
  )
}

export default Sidebar