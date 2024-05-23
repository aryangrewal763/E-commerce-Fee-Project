import React, { useState } from 'react'
import authService from "../appwrite/auth"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate=useNavigate();
  const [data,setData]=useState({name:"",email:"",password:""})
  const changeHandler=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }
  const createAccount=async(data)=>{
    try {
      const userData=await authService.createAccount({...data});
      console.log(userData);
      if(userData){
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data);
    createAccount(data);
  }
  return (
    <div className='w-[100vw] h-[91.6vh] bg-slate-300 flex justify-center items-center'>
      <div className='w-[60%] bg-slate-100 rounded-lg p-4'>
        <h1 className='text-center text-5xl font-semibold'>Sign Up</h1>
        <form className='w-full p-7 flex flex-col gap-3 my-11' onSubmit={(e)=>{handleSubmit(e)}}>
          <div className='w-full flex justify-between'>
            <label htmlFor='name' className='font-semibold text-'>Name : </label>
            <input type="text" id='name' name='name' placeholder='Enter name ...' onChange={(e)=>changeHandler(e)}
            className='w-[50%] rounded-lg border-slate-400 border-2 px-2 py-1'></input>
          </div>
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
          <button type="submit" className='mt-10 bg-zinc-200 p-2 rounded-md w-fit mx-auto border-2 border-black'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Signup