import React from 'react'

export default function Banner() {
  return (
    <div className='bg-[#0E0E13] py-16 flex justify-center items-center px-6'>
      <img
        src="./banner.png"
        alt="Image of people looking at a laptop"
        className="w-full max-w-4xl rounded-2xl object-cover"
      />
    </div>
  )
}