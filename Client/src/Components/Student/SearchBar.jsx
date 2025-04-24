import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar({data}) {

  const navigate = useNavigate()
  const [input, setInput] = useState( data ? data:'')


  const onSearchHandler= (e)=>{
 e.preventDefault()
 navigate('/course-list/'+input)

  }
  return (
     <form onSubmit={onSearchHandler} className='max-w-xl w-full md:h-14 h-12 flex item-center bg-white border border-gary-500/20 rounded'>
      <img src={assets.search_icon} alt="search icon" className='md:w-15 w-10 px-3 '/>
      <input onChange={e=>setInput(e.target.value)} value={input} type="text" placeholder='search for courses'  className='w-full h-full outline-none text-gray-500/80'/>
      <button type='submit' className='bg-blue-600 rounded-r text-white md:px-10 px-7 md:py-3 py-2 cursor-pointer'>Search</button>
     </form>
  )
}

export default SearchBar