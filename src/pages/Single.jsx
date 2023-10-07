import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import './Single.css'
import Chart from '../components/Chart'
import Table from '../components/Table'

function Single() {
  const userRows = useSelector((state) => state.userRows)
  const {id }= useParams()
  const data = userRows.filter((e) => e.id === parseInt(id))[0]
  const colorr = useSelector((state) => state.colorBg.boolean)

  return (
    <div className='flex'>
    <div className='flex-1'><Sidebar /></div>
    <div className={`flex-[6]  gap-5 ${colorr?'':'bg-drk'}`}>
      <Navbar />
      <div className={`flex flex-row gap-3 p-3 h-[300px] mx-3 `}>
        <div className={`flex flex-[1] flex-col rounded-lg p-3 gap-3 relative crd ${colorr?'':'bg-drk shadow-sh'} shadow-lg h-full`}>
          <h3 className={`text-tx`}>Information</h3>
          {data ? (
    <div className={`flex gap-3`}>
      <div className={`rounded-full  min-w-[100px] min-h-[100px] w-[100px] h-[100px]`}>
        <img src={`${data.img}`} alt="" className={`w-full h-full rounded-full`}/>
      </div>
      <div className={`flex flex-col gap-2 text-tx text-[13px]`}>
        <h1 className='text-[25px] font-bold'>{data.username}</h1>
        <p>{data.email}</p>
        <p>Phone:+1 2345 67 89</p>
        <p>Address:Elton St. 234 Garden Yd. NewYork</p>
        <p>Country:USA</p>
      </div>
    </div>
  ) : (
    <p>Loading data...</p> // or any other loading indication
  )}
        </div>
        <div className={`flex-[2] p-5 ${colorr?'':' shadow-sh'} shadow-lg h-full`}>
          <div className={``}><Chart h={'h-[200px]'}/></div>
        </div>
      </div>
      <div className={`w-full p-5 ${colorr?'':'bg-drk shadow-sh'} shadow-lg mx-3`}>
          <h2 className={`text-tx mb-3 `}>Latest Transactions</h2>
          <Table />
        </div>
    </div>
  </div>
  )
}

export default Single