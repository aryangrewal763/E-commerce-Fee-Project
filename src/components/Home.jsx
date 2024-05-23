import React, { useRef } from 'react'
import Lottie from "react-lottie"
import animation2 from "../assets/Animation - 1713002683728.json"
import gsap, { Linear, Power0 } from 'gsap'
import { useGSAP } from '@gsap/react'
import { products } from './Data'
import Item from './Item'
import { useNavigate,Link } from 'react-router-dom'
import About from './About'

const Home = () => {
  const navigate=useNavigate()
  const container = useRef()
  //console.log(products);

  const homePagedata = [];
  for (let i = 0; i < 8; i++) {
    let itemx = Math.floor(Math.random() * 88);
    const data = products.find((item) => item.id === itemx);
    homePagedata.push(data);
  }
  //console.log(homePagedata);
  useGSAP(() => {
    var t1 = gsap.timeline()
    t1.from(".headings", {
      y: 200,
      duration: 0.3,
      stagger: 0.2,
      delay: 0.4,
      opacity: 0
    })
    t1.from(".lottie", {
      rotate: 25,
      x: 300,
      opacity: 0,
      duration: 0.5,
      ease: Power0.easeOut
    })
    gsap.to(".mover", {
      x: "-100%",
      duration: 5,
      repeat: -1,
      ease: Linear
    })
  }, { scope: container })
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (

    <div className='w-full ' ref={container}>
      {/* page1 */}
      <div className='w-[90%] md:w-[80%] mx-auto h-[96.5vh] flex flex-col md:flex-row  gap-5 pt-10'>
        <div className=' w-full flex justify-center flex-col '>
          <div className='bg-purple-400 rounded-lg flex justify-center items-center flex-col h-fit py-12 relative pb-16'>
            <div><h1 className='headings -rotate-12 text-7xl whitespace-nowrap font-bold text-purple-300'>Life's too short</h1></div>
            <div><h1 className='headings -rotate-12 text-7xl whitespace-nowrap font-bold text-white'>for boring clothes.</h1></div>
            <div><h1 className='headings -rotate-12 text-7xl whitespace-nowrap font-bold text-purple-300'>Shop our vibrant</h1></div>
            <div><h1 className='headings -rotate-12 text-7xl whitespace-nowrap font-bold text-white'>collection!</h1></div>
          </div>
        </div>
        <div className='lottie w-full  flex items-center'>
          <Lottie
            options={defaultOptions}
            height={500}
            width={500}
          />
        </div>
      </div>
      {/* page2 */}
      <div className='bg-violet-300 relative w-full h-[106vh] overflow-hidden'>
        <h1 className='text-white font-bold text-7xl text-center py-10 pb-24'>Some of Our Best Deals</h1>
        <div className='flex'>
          <div className="mover bg-black w-fit  h-fit flex gap-4 whitespace-nowrap pl-3 items-center">
            {
              homePagedata.map((item, index) => (
                <Item key={index} data={item} isCart={true}></Item>
              ))
            }
          </div>
          <div className="mover bg-black w-fit  h-fit flex gap-4 whitespace-nowrap pl-3 items-center">
            {
              homePagedata.map((item, index) => (
                <Item key={index} data={item} isCart={true}></Item>
              ))
            }
          </div>
        </div>
        <div className='  w-full h-14 flex justify-center p-12 items-center'>
          <Link to="/shop"><div className='rounded-md bg-black text-white font-semibold p-3 '>Shop Now</div></Link>
        </div>
      </div>
      {/* about */}
      <About></About>
    </div>


  )
}

export default Home

//npm i react-lottie

