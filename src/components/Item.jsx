import React from 'react'
import {useDispatch} from "react-redux"
import { add,remove } from '../redux/CartSlice';
import { useNavigate } from 'react-router-dom';


const Item = ({ data,isCart }) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  
  const datax = data;
  //console.log(datax);
  const addToCart=()=>{
    dispatch(add(datax));
  }
  const removeFromCart=()=>{
    dispatch(remove(datax.id))
  }
  return (
    <>
      <div className='w-64 h-[27rem] bg-white my-2 shadow-lg rounded-lg flex flex-col justify-center items-center px-2'>
        <img onClick={()=>{navigate(`/product/${datax.id}`)}}
          className='w-full h-3/4 rounded-lg  object-contain' src={datax.image}/>
        <div className=' overflow-hidden w-full h-7'><h1 className='font-medium overflow'>{datax.name}</h1></div>
        <h2 className='text-green-400 text-left'>${datax.price}</h2>
        {
          isCart?(<button className='w-fit p-2  bg-gray-600 rounded-lg text-white font-bold active:bg-gray-400 active:shadow-xl active:scale-90' onClick={()=>(addToCart())}>Add To Cart</button>):
          (<button className='w-fit p-2  bg-gray-600 rounded-lg text-white font-bold active:bg-gray-400 active:shadow-xl active:scale-90' onClick={()=>(removeFromCart())}>Remove From Cart</button>)
        }
      </div>
    </>
  )
}

export default Item