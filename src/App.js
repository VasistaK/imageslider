import React,{useEffect, useState} from 'react'
import { Image_Slider } from './constants'

 const App = () => {

const [activeImage,setActiveImage] = useState(0);

useEffect(()=>{
  const timer = setInterval(()=>{ (activeImage < Image_Slider.length-1)?setActiveImage(activeImage + 1) : setActiveImage(0)},4000);
 return ()=> {clearInterval(timer)}
},[activeImage])


  const nextImage = ()=>{
     return (activeImage < Image_Slider.length-1)?setActiveImage(activeImage + 1) : setActiveImage(0)
  }
 
  const previousImage = ()=>{
    return (activeImage < Image_Slider.length && activeImage > 0  )?setActiveImage(activeImage - 1) : setActiveImage(4)
  }
  return (   
    <div>   
        <div className='bg-gray-100'>
         <div className='flex justify-center'> 
           {Image_Slider.map((x,i)=>{ return <img src={x} alt="wallpaper" key={i} className = {"w-[%] h-[400px]  " + (activeImage === i ? "block" : "hidden") }/>})}
           </div>
          <div className='flex justify-around pt-4'>
           <button onClick = {previousImage} className = 'p-2 border-2 border-gray-400 mt-2 bg-white' >Previous</button>
           <button onClick={nextImage} className = 'px-5 border-2 border-gray-400 mt-2 bg-white'>Next</button>
           </div>
   </div>
   <div className='flex justify-center mt-9'>
    {Image_Slider.map((x,i)=>{return <button onClick={()=>{setActiveImage(i)}} className='mr-2  border-2 border-cyan-400 p-4'>{i}</button>})}</div>
   </div>
  )
}

export default App;