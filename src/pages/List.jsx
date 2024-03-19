import DataTable from '../components/DataTable'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function List() {
  const colorr = useSelector((state) => state.colorBg.boolean)
  return (
    <div className='flex overflow-hidden'>
      <div className='flex-1'><Sidebar /></div>
      <div className={`flex-[6] flex flex-col gap-5 ${colorr ? '' : 'bg-drk'}`}>
        <Navbar />
        <div className={`flex flex-row w-full justify-between items-center px-5 mt-3`}>
          <h3 className='text-tx text-lg'>Add New User</h3>
          <NavLink to='/users/new' className={`px-1 py-2 border-solid border-[1px] border-green-700 text-green-700 cursor-pointer`}>Add New</NavLink>
        </div>
        <div className={`mx-auto w-[300px] md:w-[700px] lg:w-[1100px] p-5`}><DataTable /></div>
      </div>
    </div>
  )
}

export default List