import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import './Single.css'
import Chart from '../components/Chart'
import Table from '../components/Table'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firebese'

function Single() {
  const {id }= useParams()
  const [data, setData] = useState([])
  const user = data.filter((us) => us.id === id)[0]
  const colorr = useSelector((state) => state.colorBg.boolean)


  useEffect(() => {
    const fetchData = async() => {
    const list = []
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push({id: doc.id, ...doc.data()})
        });
        setData(list)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])


  return (
    <div className='flex'>
    <div className='flex-1'><Sidebar /></div>
    <div className={`flex-[6]  gap-5 ${colorr?'':'bg-drk'}`}>
      <Navbar />
      <div className={`flex flex-row gap-3 p-3 h-[300px] mx-3 `}>
        <div className={`flex flex-[1] flex-col rounded-lg p-3 gap-3 relative crd ${colorr?'':'bg-drk shadow-sh'} shadow-lg h-full`}>
          <h3 className={`text-tx`}>Information</h3>
          {user ? (
    <div className={`flex gap-3`}>
      <div className={`rounded-full  min-w-[100px] min-h-[100px] w-[100px] h-[100px]`}>
        <img src={`${user.img}`} alt="" className={`w-full h-full rounded-full`}/>
      </div>
      <div className={`flex flex-col gap-2 text-tx text-[13px]`}>
        <h1 className='text-[25px] font-bold'>{user.username}</h1>
        <p>{user.email}</p>
        <p>Phone:{user.number}</p>
        <p>Address:Elton St. 234 Garden Yd. NewYork</p>
        <p>Country:USA</p>
      </div>
    </div>
  ) : (
    <p>Loading data...</p> 
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