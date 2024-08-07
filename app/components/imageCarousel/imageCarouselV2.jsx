'use client'
import { useEffect, useState } from 'react';
import {ImageList} from '../demoCards'


function ImageCarousel({children}) {
  const [backgroundIndex, setBackgroundIndex] = useState(0)
  const backgrounds = ImageList()

  const getNextBg = (value) => {
    console.log(backgroundIndex)
    if (backgroundIndex + value === backgrounds.length) {
        setBackgroundIndex(0)
    } else if (backgroundIndex + value < 0) {
        setBackgroundIndex(backgrounds.length-1)
    } else setBackgroundIndex(prev=>prev+value)
  }

  return (
    <>
        <div style={{position:'absolute' , zIndex:0, top:0, width:'100vw', height:'100vh'}}>
            <img 
                src={backgrounds[backgroundIndex]}
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                }}
            >
            </img>
        </div>
        <div style={{position:'absolute' , zIndex:10, top:'50%', padding:'1rem', cursor:'pointer' }} onClick={()=>getNextBg(-1)}> previous </div>
        <div style={{position:'absolute' , zIndex:10, top:'50%', right:0, padding:'1rem', cursor:'pointer' }} onClick={()=>getNextBg(1)}> next </div>

        <div style={{position:'absolute' , zIndex:1, top:0, width:'100%', height:'100%', }}>
            {children}
        </div>
    </>
  )
}

export default ImageCarousel