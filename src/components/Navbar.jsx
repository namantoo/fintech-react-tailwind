import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


export const Navbar = () => {
  const [nav, setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#94d2bd] '>finTech</h1>
   <ul className='hidden md:flex '>
       <li className='p-4'>Home</li>
       <li className='p-4'>About</li>
       <li className='p-4'>Resources</li>
       <li className='p-4'>Github</li>
       <li className='p-4'>Crypto</li>  
   
   </ul>
   <div onClick={handleNav} className='block md:hidden'>
     {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu  size={20}/>}
        
   </div>
  <div className= {!nav?'fixed top-0 left-0 w-[60%] border-r border-r-gray-900 h-full bg-[#001219] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] md:hidden' }>
  <h1 className='w-full text-3xl font-bold text-[#94d2bd] m-4 '>finTech</h1>
    <ul className=' uppercase p-4 '>
         <li className='p-4 border-b border-gray-600  '> Home </li>
        <li className='p-4  border-b border-gray-600'>Company</li>
        <li className='p-4  border-b border-gray-600'>Resources</li>
        <li className='p-4  border-b border-gray-600'>About</li>
        <li className='p-4  border-b border-gray-600'>Contact</li>
    </ul>
  </div>
    </div>
  )
}
