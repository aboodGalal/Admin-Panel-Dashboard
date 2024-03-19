import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Navbar from '../components/Navbar.jsx'
import Card from '../components/Card.jsx'
import { faUser,faCartShopping,faDollarSign,faDoorClosed,faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import Chart from '../components/Chart.jsx'
import Table from '../components/Table.jsx'


function Home() {

  const colorr = useSelector((state) => state.colorBg.boolean)

  return (
    <div className='flex overflow-x-hidden '>
      <div className='flex-1'><Sidebar /></div>
      <div className={`flex-[6] gap-5 ${colorr?'':'bg-drk'}`}>
        <Navbar />
        <div className={`flex mx-1 items-center justify-center flex-wrap gap-5 p-3 ${colorr?'':'bg-drk'}`}>
          <Card title={'USERS'} link={`See all users`} icon={<FontAwesomeIcon icon={faUser} />} stylee={{bg:'#FFCCCC',clr:'#E23656'}}/>
          <Card title={'ORDERS'} link={`View all orders`} icon={<FontAwesomeIcon icon={faCartShopping} />} stylee={{bg:'#F8EDD2',clr:'#DDAE37'}}/>
          <Card title={'EARNINGS'} link={`View net earnings`} icon={<FontAwesomeIcon icon={faDollarSign} />} stylee={{bg:'#CCE6CC',clr:'#1A8D1A'}}/>
          <Card title={'BALANCE'} link={`See details`} icon={<FontAwesomeIcon icon={faDoorClosed} />} stylee={{bg:'#E6CCE6',clr:'#9A339A'}}/>
        </div>
        <div className={`flex flex-col md:flex-row gap-5  p-3  ${colorr? '':'bg-drk'}`}>
          {/* <div className='flex-1 bg-red -600 w'> */}
            <div className={`flex-1 mx-1  md:mx-0 flex flex-col gap-3 ${colorr?'':'bg-drk shadow-sh'} shadow-lg p-3`}>
              <div className={`flex w-full items-center justify-between`}>
                <h4 className={`text-tx font-medium`}>Total Revenue</h4>
                <a className={`cursor-pointer`}><FontAwesomeIcon icon={faEllipsisVertical} className={`text-tx`}/></a>
              </div>
              <div className='w-[100px] h-[100px] min-w-[100px] min-h-[100px] rounded-full flex justify-center items-center text-[#44AEDC] mx-auto border-[6px] border-solid border-t-[#d6d6d6] border-r-[#3E98C7] border-b-[#3E98C7] border-l-[#3E98C7] rotate-[-45deg]'>
                <p className={`text-[#314147] rotate-[45deg]`}>70%</p>
              </div>
              <p className={`text-tx mx-auto`}>Total sales made today</p>
              <h2 className={`${colorr?'text-black':'text-tx'} mx-auto text-[25px] font-bold`}>$420</h2>
              <p className={`text-tx text-center text-[11px] mx-auto`}>Previous transactions processing. Last payments may not be included.</p>
              <div className={`flex items-center w-full justify-between h-full`}>
                <div className={`flex flex-col items-center justify-between p-2 h-full`}>
                  <p className={`text-[12px] text-tx`}>Target</p>
                  <p className={`text-red-500`}>^ $12.4k</p>
                </div>
                <div className={`flex flex-col items-center justify-between p-2 h-full`}>
                  <p className={`text-[12px] text-tx`}>L week</p>
                  <p className={`text-green-500`}>^ $12.4k</p>
                </div>
                <div className={`flex flex-col items-center justify-between p-2 h-full`}>
                  <p className={`text-[12px] text-tx`}>L Month</p>
                  <p className={`text-green-500`}>^ $12.4k</p>
                </div>
              </div>
            </div>
          {/* </div> */}

          <div className={`flex-1 mx-1 md:mx-0 md:flex-[2] ${colorr?'':'bg-drk shadow-sh'} shadow-lg p-3 pb-[40px] `}><Chart /></div>
        </div>
        <div className={`mx-auto w-[300px] md:w-[700px] lg:w-[1100px] flex flex-col p-5 ${colorr?'':'bg-drk shadow-sh'} shadow-lg mx-3`}>
          <h2 className={`text-tx mb-3 `}>Latest Transactions</h2>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home