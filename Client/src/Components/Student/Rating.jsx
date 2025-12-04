import React, { useEffect, useState } from 'react'


const Rating=({initialRating,onRate})=>{
 
const[ Rating,setRating]= useState (initialRating || 0 )

const handleRating=(value)=>{
  setRating(value);
  if(onRate){ onRate(value); }
}
  useEffect(()=>{
    if (initialRating){
      setRating(initialRating);
    }
}, [initialRating]);


  return (
    <div>{Array.from({length: 5},(_, index)=>{
      const startValue = index + 1;
      return(
      <span key={index} className={`text-xl sm:text-2xl cursor-pointer transition-colors ${startValue <= Rating ? 'text-yellow-500' : 'text-gray-500'}`} onClick={()=>handleRating(startValue)}>&#9733;</span>)
    })}</div>
  )
}
export default Rating;
