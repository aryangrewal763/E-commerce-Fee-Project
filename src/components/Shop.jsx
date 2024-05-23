import React, { useEffect, useState } from 'react'
import { products } from './Data'
import Item from './Item';

const Shop = () => {
  const data = products;
  const [search,setSearch]=useState("")
  const [cart,setCart]=useState([])
  const [currData, setCurrData] = useState([])
  const categories = new Set();
  categories.add("All")
  data.forEach((item) => {
    categories.add(item.category)
  })
  const Category = Array.from(categories)
  const Clothing = data.filter((item) => item.category === "Clothing");
  const Electronics = data.filter((item) => item.category === "Electronics");
  const Home = data.filter((item) => item.category === "Home & Kitchen");
  const Sports = data.filter((item) => item.category === "Sports & Outdoors");
  //console.log(cart);
  
  const syncWithSearch=async()=>{
    const searchData= data.filter((item)=> item && search && item.name.toLowerCase().includes(search.toLowerCase()))
    setCurrData(searchData)
  }
  //console.log(searchData);
  useEffect(() => {
    search?syncWithSearch():
    setCurrData(data);

  }, [search])
  return (
    <div>
      <div className='w-full h-full p-4'>
        <h1 className='text-7xl font-semibold text-center'>Shop</h1>
        <div className=''>
          <div className='w-fit mx-auto flex gap-3 mt-10'>

            <div className='p-2 bg-black text-white font-medium rounded-md cursor-pointer' onClick={() => { setCurrData(data) }}>All</div>
            <div className='p-2 bg-black text-white font-medium rounded-md cursor-pointer' onClick={() => { setCurrData(Electronics) }}>Electronics</div>
            <div className='p-2 bg-black text-white font-medium rounded-md cursor-pointer' onClick={() => { setCurrData(Clothing) }}>Clothing</div>
            <div className='p-2 bg-black text-white font-medium rounded-md cursor-pointer' onClick={() => { setCurrData(Home) }}>Home & Kitchen</div>
            <div className='p-2 bg-black text-white font-medium rounded-md cursor-pointer' onClick={() => { setCurrData(Sports) }}>Sports & Outdoors</div>

          </div>
        </div>
        <div className='w-[80%] mx-auto bg-violet-300 min-h-[60vh] mt-10 p-4 rounded-md'>
          <div className='w-[70%] mx-auto m-4 p-1 flex items-center rounded-md bg-white'>
            <input className="w-full p-2 focus:outline-none rounded-md" type="text" value={search} onChange={(e)=>{
              setSearch(e.target.value)
              syncWithSearch()
              }}></input>
            <div className='border-l-2 p-1'>Search</div>
          </div>
          <div className='flex flex-wrap gap-5 justify-center items-center'>
            {
              currData.map((item) => (
                <Item data={item} isCart={true}></Item>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop