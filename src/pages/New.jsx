import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import {  doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db , storage } from '../Firebese'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { inputs } from '../Inputs'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom'

function New() {
  const colorr = useSelector((state) => state.colorBg.boolean)
  const [data, setData] = useState({})
  const [perc, setPerc] = useState(null)
  const navigate = useNavigate()
  const [file,setFile] = useState("")

  useEffect(() => {
    const uploadFile = () =>{
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setPerc(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setData((prev) => ({...prev, img:downloadURL}))
    });
  }
);
    }
    file && uploadFile()
  },[file])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
        )
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        server: serverTimestamp()
      });
      navigate(-1)
    } catch (err) {
      console.log(err)
    }

  }

  const handleInput = (e) =>{
    const id = e.target.id
    const value = e.target.value

    setData({...data, [id]: value})
  }




  return (
    <div className={`flex h-fit ${colorr ? '' : 'bg-drk'}`}>
      <div className='flex-1'><Sidebar /></div>
      <div className={`flex-[6]  gap-5 ${colorr ? '' : 'bg-drk'}`}>
        <Navbar bl={false}/>
        <div className={`flex justify-start items-center w-[97%] mx-auto  mt-3 p-3 ${colorr ? '' : 'shadow-sh bg-drk'} shadow-lg`}>
          <h2 className='text-tx text-lg'>Add New User</h2>
        </div>
        <div className={`flex flex-col md:flex-row w-[97%] mx-auto  mt-5 p-3 ${colorr ? '' : 'shadow-sh bg-drk'} shadow-lg`}>
          <div className={`flex-[1]  flex justify-center p-4`}>
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" className={`w-[100px] h-[100px] min-w-[100px] min-h-[100px] rounded-full`} />
          </div>
          <div className={`flex-[2] flex flex-col  gap-5`}>
            <form onSubmit={handleSubmit} className={`grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 gap-5 `}>
              <div className={`flex flex-col gap-1 text-tx`}>
                <label htmlFor="file">
                  Image:<FontAwesomeIcon icon={faCloudArrowUp} className={`text-tx`} />
                </label>
                <input type="file" name="" id="file" onChange={(e) => setFile(e.target.files[0])} className={`hidden`} />
              </div>
              {inputs.map((input) => (
                <div key={input.id} className={`flex flex-col gap-1 mx-2  text-tx`}>
                  <label htmlFor={input.htmlFor}>{input.label}</label>
                  <input onChange={handleInput} type={input.type} name="" id={input.id} className={` border-solid border-b-[1px] border-tx`} />
                </div>
              ))}

              <button disabled={perc !== null && perc<100} type='submit' className={`${perc === null ? 'bg-gray-700' : ''} bg-[#008080] text-white w-40 h-10 flex justify-center items-center self-center`}>Send</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New