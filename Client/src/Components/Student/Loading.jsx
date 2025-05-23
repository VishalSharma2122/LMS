import React from 'react'

function Loading() {
  return (
    <div min-h-screen flex item-center justify-center>
      <div className='w-6 sm:w-20 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin'></div>
    </div>
  )
}

export default Loading