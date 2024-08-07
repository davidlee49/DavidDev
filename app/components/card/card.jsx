import React from 'react';
import './card.css'

const Card = ({ image }) => {
  console.log(image)
  return (
    <div className='card'>
      {/* <img className="w-full h-48 object-cover" src={image}/> */}
      <img src={image}/>

    </div>
  );
};

export default Card;
