import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './Data';
import Item from './Item';
import { useDispatch } from "react-redux"
import { add, remove } from '../redux/CartSlice';

const Product = () => {
    const { productId } = useParams();
    const dispatch=useDispatch()

    const currProduct = products.find((item) => item.id == productId);
    const addToCart = () => {
        dispatch(add(currProduct));
    }
    //   console.log(currProduct);
    const relatedProducts = products.filter((item) => item.category === currProduct.category);
    console.log(relatedProducts);
    return (
        <div className="w-full">
            <div className='w-[80%] mx-auto flex gap-11 mt-20'>
                <div className='w-[40%] border-2 rounded-md border-black/75 flex justify-center items-center'>
                    <img src={currProduct.image}  className=' rounded-md  object-contain'></img>
                </div>
                <div className="prodDetails  flex flex-col justify-between py-10">
                    <div>
                        <h1 className='font-semibold text-2xl'>{currProduct.name}</h1>
                        <h1 className='text-sm font-semibold p-2'>Category:-<span className='text-sm font-light'>{currProduct.category}</span></h1>
                        <h1 className='font-semibold text-sm p-2'>Price:-<span className='text-green-400 font-semibold text-sm'>{currProduct.price}</span></h1>
                    </div>
                    <div className="addToCart flex gap-6">
                        <button onClick={addToCart}
                            className='bg-slate-400 font-semibold text-white p-2 rounded-md hover:bg-slate-500 duration-300'>Add To Cart</button>
                        <button className='bg-slate-400 font-semibold text-white p-2 rounded-md hover:bg-slate-500 duration-300'>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='w-full mt-36 bg-slate-300'>
                <h1 className='text-5xl font-medium text-center'>Related Products</h1>
                <div className='w-[80%] mx-auto bg-slate-400 rounded-lg '>
                    <div className='w-full mx-auto flex flex-wrap gap-7 justify-center'>
                    {
                        relatedProducts.map((item) => (
                            <Item data={item} isCart={true}></Item>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product