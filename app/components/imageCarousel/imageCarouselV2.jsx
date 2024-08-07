'use client'
import { useEffect, useState } from 'react';
import {ImageList} from '../demoCards'

const url = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
const GameList = [
    {title: "League of Legends", bgURL: url},
    {title: "Valorant", bgURL: url},
    {title: "Call of Dury", bgURL: url}
]


function ImageCarousel({children}) {
  const [backgroundIndex, setBackgroundIndex] = useState(0)
  const backgrounds = GameList

  const getNextBg = (value) => {
    console.log(backgroundIndex, backgrounds[backgroundIndex])
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
                src={backgrounds[backgroundIndex].bgURL}
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

        <div style={{position:'absolute' , zIndex:1, top:0, width:'100%', height:'100%', display:'block'}}>
            <div style={{display:'flex', justifyContent: 'space-between'}}> {backgrounds[backgroundIndex].title}
            <div> call button </div>
            </div>


            <div style={{position:'relative'}}>
            {children}  
            </div>
        </div>
    </>
  )
}

export default ImageCarousel