import React from 'react'
import sizes from '../config/sizes'

const Grid = ({ title, Icon }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center font-mediu text-sm border rounded h-[78px] 
    bg-white cursor-pointer m-2 text-primary hover:border-2 hover:border-primary gap-[2px]`}
    >
      <span className='text-2xl'>{Icon && Icon}</span>
      <span>{title}</span>
    </div>
  )
}

export default Grid
