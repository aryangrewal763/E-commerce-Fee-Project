import React, { useRef, useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"
import logo from "../assets/FLIPZone (500 x 350 px).png"
import gsap, { Power0 } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/LogSlice'
import authService from '../appwrite/auth'
gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  //const authStatus = useSelector((state) => state.log.status)
  const [authStatus, setAuthStatus] = useState(false);
  const { cart } = useSelector((state) => state);
  const [noOfItems, setNoOfItems] = useState(0)

  const [userProfile, setUserProfile] = useState({ name: "", email: "" })
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    setNoOfItems(cart.length);
    const logDetails = authService.getCurrentUser();
    logDetails.then((res) => {
      setAuthStatus(true);
      setUserProfile((prev) => ({ ...prev, name: `${res.name}`, email: `${res.email}` }))
      console.log("Log Details : ", userProfile);
      //console.log("Log Details : ", res.email);
    }).catch((err) => { setAuthStatus(false) })
  }, [cart])
  const logoutfunc = async () => {
    try {
      console.log(authStatus);
      await authService.logout();
      dispatch(logout());
      navigate('/')
      location.reload();
      // promise.then(()=>{console.log("Logoud Out Users");}).catch(()=>{console.log("NOt log out");})
    } catch (error) {
      console.log("Logout error : ", error);
    }
  }


  const container = useRef();
  useGSAP(() => {
    var t1 = gsap.timeline()
    t1.from(".navi", {
      y: -100,
      duration: 0.4,
      ease: Power0.easeInOut
    })

    t1.from(".navcontent", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
    })
    t1.to(".navi", {
      backgroundColor: "white",
    })
  }, { scope: container })

  const showHideProfile = () => {
    setShowProfile((prev) => !prev)
  }

  return (
    <div ref={container}>
      <div className='navi w-full h-14 bg-purple-500 rounded-b-2xl' >
        <div className=" w-[90%] h-full flex md:w-[80%] mx-auto justify-between items-center">
          {/* logo */}
          <div className='navcontent h-full'>
            <NavLink to="/"><img src={logo} className='w-full h-full scale-110'></img></NavLink>
          </div>
          {/* pages */}
          <div className='navcontent flex gap-14 text-xl font-semibold'>
            <Link to="/"><div>Home</div></Link>
            <Link to="/shop"><div>Shop</div></Link>
            <Link to="/about"><div>About</div></Link>
          </div>
          {/* signin */}
          <div className='navcontent flex gap-6 text-[1.5vw] font-sans'>
            {!authStatus ?
              <div className='flex gap-3'>
                <Link to="/login"><div>Login</div></Link>
                <Link to="/signup"><div>Sign Up</div></Link>
              </div> :
              <div className='flex gap-5'>
                <button onClick={() => { logoutfunc() }}>Logout</button>
                <div onClick={showHideProfile}
                  className='bg-purple-400 p-1 rounded-full w-10 h-10 text-white flex justify-center items-center cursor-pointer'>{userProfile.name.slice(0, 1)}</div>
              </div>
            }
            <Link to="/cart" className='flex items-center'><div  className='flex items-center justify-center'>
              <h1 className='flex justify-center items-center'>Cart</h1>
              {
                noOfItems > 0 &&
                (<h1 className='bg-red-400 rounded-full  absolute -top-2 -right-2 text-sm w-3 h-3 flex justify-center items-center p-2 text-white'>{cart.length}</h1>)
              }
            </div></Link>
          </div>
        </div>
      </div>
      {showProfile&&
        <div className='flex gap-7 justify-evenly p-4 bg-purple-500 rounded-md text-white font-semibold'>
          <p>Name : {userProfile.name}</p>
          <p>Email : {userProfile.email}</p>
        </div>
      }
    </div>
  )
}

export default Navbar