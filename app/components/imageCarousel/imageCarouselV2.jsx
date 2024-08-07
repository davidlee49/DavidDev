'use client'
import { useEffect, useState } from 'react';
import {ImageList} from '../demoCards'

const url = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'



function ImageCarousel({children}) {
  const [curIndex, setcurIndex] = useState(0)
  const GameList = [
    {title: "League of Legends", bgURL: <video src='./league-diana.webm' autoPlay muted loop style={{objectFit:'cover', width:'100%', height:'100%'}}/>},
    {title: "Valorant", bgURL: url},
    {title: "Call of Dury", bgURL: url}
    ]

  const getNextBg = (value) => {
    console.log(curIndex, backgrounds[curIndex])
    if (curIndex + value === backgrounds.length) {
        setcurIndex(0)
    } else if (curIndex + value < 0) {
        setcurIndex(backgrounds.length-1)
    } else setcurIndex(prev=>prev+value)
  }

  const handleCallBtn = () => {
    
  }

  return (
    <>
        <div style={{position:'absolute' , zIndex:0, top:0, width:'100vw', height:'100vh', backgroundColor:'blue'}}>
            {GameList[curIndex].bgURL}


        </div>
        {/* <div style={{position:'absolute' , zIndex:10, top:'50%', padding:'1rem', cursor:'pointer' }} onClick={()=>getNextBg(-1)}> previous </div>
        <div style={{position:'absolute' , zIndex:10, top:'50%', right:0, padding:'1rem', cursor:'pointer' }} onClick={()=>getNextBg(1)}> next </div> */}

        <div style={{position:'absolute' , zIndex:1, top:0, width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>

            <div style={{display:'flex', width:'350px', height:'500px', backgroundColor:'grey'}}> 
                <div style={{display:'flex', justifyContent:'space-between', width:'100%', padding:'1rem'}}>
                    <span>
                      {GameList[curIndex].title}   
                    </span>
                    <span onClick={handleCallBtn}>call</span>
                </div>
                 
                

            </div>
            


            

            {/* <div style={{display:'flex', justifyContent: 'space-between'}}> {GameList[curIndex].title}
            <div> call button </div>
            </div>


            <div style={{position:'relative'}}>
            {children}  
            </div> */}
        </div>
    </>
  )
}

export default ImageCarousel