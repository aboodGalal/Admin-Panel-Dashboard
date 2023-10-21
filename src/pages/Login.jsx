import React, { useState } from 'react'
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../Firebese';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/")
        window.localStorage.setItem('user', JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true)
      });
  }
  return (
    <div className={`p-5 w-full h-[100vh] flex justify-center items-center`}>
      <form onSubmit={handleSubmit} className={`flex flex-col justify-center items-center gap-3 border-solid border-[1px] border-gray-500 rounded-lg px-[20px] h-[200px]`}>
        <input className={`border-solid border-[1px] border-gray-400 px-3 py-2 text-[14px]`} type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <input className={`border-solid border-[1px] border-gray-400 px-3 py-2 text-[14px]`} type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <button className={`w-[90%] bg-purple-700 text-white`} type='submit'>Login</button>
        {error && <p className={`text-red-600 text-[12px] `}>Worng password or email</p>}
      </form>
    </div>
  )
}

export default Login