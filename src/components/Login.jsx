import React, { useState } from 'react'
import authService from "../appwrite/auth"
import { useNavigate } from 'react-router-dom'
import { login,logout } from '../redux/LogSlice'
import {useDispatch} from "react-redux"

const Login = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate();
  const [data,setData]=useState({email:"",password:""})
  const changeHandler=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }
  const createAccountSession=async(data)=>{
    try {
      const userData=await authService.login({...data});
      console.log(userData);
      if(userData){
        dispatch(login(userData));
        navigate("/");
        location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data);
    createAccountSession(data);
  }
  return (
    <div className='w-[100vw] h-[91.6vh] bg-slate-300 flex justify-center items-center'>
      <div className='w-[60%] bg-slate-100 rounded-lg p-4'>
        <h1 className='text-center text-5xl font-semibold'>Login</h1>
        <form className='w-full p-7 flex flex-col gap-3 my-11' onSubmit={(e)=>{handleSubmit(e)}}>
          
          <div className='w-full flex justify-between'>
            <label htmlFor='email' className='font-semibold text-'>Email : </label>
            <input type="email" id='email' name='email' placeholder='Enter email ...' onChange={(e)=>changeHandler(e)} 
            className='w-[50%] rounded-lg border-slate-400 border-2 px-2 py-1'></input>
          </div>
          <div className='w-full flex justify-between'>
            <label htmlFor='password' className='font-semibold text-'>Password : </label>
            <input type="password" id='password' name="password" placeholder='Enter password ...' onChange={(e)=>changeHandler(e)}
            className='w-[50%] rounded-lg border-slate-400 border-2 px-2 py-1'></input>
          </div>
          <button type="submit" className='mt-10 bg-zinc-300 p-2 px-3 rounded-md w-fit mx-auto border-2 active:border-black'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login