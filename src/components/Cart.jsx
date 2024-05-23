import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Item from './Item';
const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0)
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])
  //console.log(cart[0].id);
  return (
    // <div>{cart.id}</div>
    <div>
      <div>
        <h1 className='text-7xl font-sans text-center mb-8 font-semibold'>CART</h1>
        <div className='w-[85%] min-h-[70vh] mx-auto bg-slate-300 rounded-md p-5 flex justify-between'>
          <div className='overflow-y-auto p-3 scrollbar w-[70%] '>
            <div className='flex flex-wrap gap-3'>
              {
                cart.map((item) => (
                  <Item data={item} isCart={false}></Item>
                ))
              }
            </div>
          </div>
          <div className='bg-slate-100 rounded-md w-[55vh] left h-[65vh] p-5 flex flex-col justify-between '>
            <h1 className='text-4xl font-semibold'>Sub Total</h1>
            <div>
              <img src='https://png.pngtree.com/png-vector/20220521/ourmid/pngtree-shopping-cart-for-heavy-purchasing-isolated-on-white-background-png-image_4654043.png'></img>
            </div>
            <div className='flex justify-between'>
              <div >
                <h1>No of items :{cart.length}</h1>
                <h1>Total Price :<span className='text-green-500'>{totalAmount}</span> </h1>
              </div>
              <button className='bg-slate-500 p-2 rounded-md text-white font-semibold'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart


// npm i tailwind-scrollbar

// require('tailwind-scrollbar'),  in plugins []