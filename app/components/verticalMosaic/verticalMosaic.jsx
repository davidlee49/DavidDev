import React, {useEffect, useState} from 'react'
import './verticalMosaic.css'
import {ImageList} from '../demoCards'
import Card from '../card/card'
import Overlay from '../overlay/overlay'
import Menu from '../menu/menu'


function VerticalMosaic({imgs, useDemo, overlay}) {
    const [images, setImages] = useState([])
    const [columns, setColumns] = useState([])
    const [columnCount, setColumnCount] = useState(4)

    useEffect(()=>{
        const imgObjects = []
        if (useDemo) {
            console.log(ImageList().map((url)=>{
                return {url}
            }))
           setImages(ImageList().map((url)=>{
            return {url}
        }))
        }

    },[])

    useEffect(()=>{
        const imgComponents = images.map((img, i)=>{
            return (
                <div key={i} className='overlay' >
                  <Card image={img.url}/>
                  <Menu cbFuncs={{cbDelete, img, i}}/> 
                </div>
            )}) 

        const newColumns = []
        for (let i=0; i < columnCount; i++){
            newColumns.push([])
        }

        imgComponents.forEach((img, i)=>newColumns[i%columnCount].push(img))
        newColumns.map((array, i)=>newColumns[i] = <div key={i} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>{array}</div>)

        setColumns(newColumns)
    },[images])

    const cbDelete = (i) => {
        const newImages = images.filter((_, index) => index !== i);
        console.log(newImages)
        console.log(newImages.map((img)=>(img.url)))
        setImages(newImages)
    }

  return (
    <div className='verticalMosaic'>
        {columns.map((col, i)=>{
            return (
                <div key={i} style={{width:'25vw'}}> 
                    {col}
                </div>
            )
        })}
    </div>
    
  )
}

export default VerticalMosaic
