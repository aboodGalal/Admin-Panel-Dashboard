import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import {push} from '../../redux/userRows'

function New() {
  const colorr = useSelector((state) => state.colorBg.boolean)
  const userRows = useSelector((state) => state.userRows)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: '',
    img: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    age: '',
    status: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: parseInt(userRows.length) + 1,
      username: formData.username,
      img: formData.img,
      status: formData.status,
      email: formData.email,
      age: formData.age,
    };

    
  
    const concatTime = setTimeout(() => {
      dispatch(push(newUser));
    }, 4000);
  
    const consTime = setTimeout(() => {
      console.log(userRows);
    }, 6000);
  
    setFormData({
      username: '',
      img: '',
      name: '',
      email: '',
      phone: '',
      password: '',
      age: '',
      status: ''
    });

    return () => {
      clearTimeout(concatTime);
      clearTimeout(consTime);
    };
  }




  return (
    <div className='flex h-[100vh]'>
      <div className='flex-1'><Sidebar /></div>
      <div className={`flex-[6]  gap-5 ${colorr ? '' : 'bg-drk'}`}>
        <Navbar />
        <div className={`flex justify-start items-center w-[97%] mx-auto  mt-3 p-3 ${colorr ? '' : 'shadow-sh bg-drk'} shadow-lg`}>
          <h2 className='text-tx text-lg'>Add New User</h2>
        </div>
        <div className={`flex flex-row w-[97%] mx-auto  mt-5 p-3 ${colorr ? '' : 'shadow-sh bg-drk'} shadow-lg`}>
          <div className={`flex-[1] flex justify-center p-4`}>
            <img src={formData.img ? formData.img : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" className={`w-[100px] h-[100px] min-w-[100px] min-h-[100px] rounded-full`} />
          </div>
          <div className={`flex-[2] flex flex-col  gap-5`}>
            <form className={`grid grid-cols-2 grid-rows-4 gap-5 `}>
              <div className={`flex flex-col gap-1 text-tx`}>
                <label htmlFor="file">
                  Image:<FontAwesomeIcon icon={faCloudArrowUp} className={`text-tx`} />
                </label>
                <input type="file" name="" id="file" onChange={(e) => setFormData({
                  ...formData, img: URL.createObjectURL(e.target.files[0])
                })} className={`hidden`} />
              </div>
              <div className={`flex flex-col gap-1 mx-2  text-tx`}>
                <label htmlFor="user">UserName</label>
                <input type='text' name="" id="user" onChange={(e) => setFormData({
                  ...formData, username: e.target.value
                })} value={formData.username} placeholder='' className={` border-solid border-b-[1px] border-tx`} />
              </div>
              <div className={`flex flex-col gap-1 mx-2 text-tx`}>
                <label htmlFor="text">Name and surname</label>
                <input type='text' name="" id="text" onChange={(e) => setFormData({
                  ...formData, name: e.target.value
                })} value={formData.name} placeholder='' className={` border-solid border-b-[1px] border-tx`} />
              </div>
              <div className={`flex flex-col gap-1 mx-2 text-tx`}>
                <label htmlFor="email">Email</label>
                <input type='email' name="" id="email" onChange={(e) => setFormData({
                  ...formData, email: e.target.value
                })} value={formData.email} placeholder='' className={`border-solid border-b-[1px] border-tx`} />
              </div>
              <div className={`flex flex-col gap-1 mx-2 text-tx`}>
                <label htmlFor="number">Phone</label>
                <input type='number' name="" id="number" onChange={(e) => setFormData({
                  ...formData, phone: e.target.value
                })} value={formData.phone} placeholder='' className={`border-solid border-b-[1px] border-tx`} />
              </div>
              <div className={`flex flex-col gap-1 mx-2 text-tx`}>
                <label htmlFor="password">Password</label>
                <input type='password' name="" id="password" onChange={(e) => setFormData({
                  ...formData, password: e.target.value
                })} value={formData.password} placeholder='' className={`border-solid border-b-[1px] border-tx`} />
              </div>
              <div className={`flex flex-col gap-1 mx-2 text-tx`}>
                <label htmlFor="age">Age</label>
                <input type='number' name="" id="age" onChange={(e) => setFormData({
                  ...formData, age: e.target.value
                })} value={formData.age} placeholder='' className={`border-solid border-b-[1px] border-tx`} />
              </div>
              <div className={`flex flex-col gap-1 mx-2 text-tx`}>
                <label htmlFor="activity">Active or Passive</label>
                <input type='text' name="" id="activity" onChange={(e) => setFormData({
                  ...formData, status: e.target.value
                })} value={formData.status} placeholder='' className={`border-solid border-b-[1px] border-tx`} />
              </div>
            </form>
            <button onClick={handleSubmit} className={`bg-[#008080] text-white w-40 h-10 flex justify-center items-center self-center`}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New