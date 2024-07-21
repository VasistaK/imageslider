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
        <div className='flex border-2 border-cyan-800 justify-evenly mt-2'>
         <button onClick = {previousImage} className = '' >Previous</button>
         <div className='flex'> 
           {Image_Slider.map((x,i)=>{ return <img src={x} alt="wallpaper" key={i} className = {"min-w-[400px] max-h-[400px] " + (activeImage === i ? "block" : "hidden") }/>})}
           </div>
           <button onClick={nextImage}>Next</button>
   </div>
   <div className='flex justify-center mt-2'>
    {Image_Slider.map((x,i)=>{return <button onClick={()=>{setActiveImage(i)}} className='mr-2  border-2 border-cyan-400 p-4'>{i}</button>})}</div>
   </div>
  )
}

export default App;