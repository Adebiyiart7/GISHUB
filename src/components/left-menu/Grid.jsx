import React from 'react'

const Grid = ({ title, Icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col justify-center items-center font-mediu text-sm border rounded h-[78px] 
    bg-white cursor-pointer m-2 text-primary hover:border-2 hover:border-primary gap-[2px] drop-shadow-sm`}
    >
      <span className='text-2xl'>{Icon && Icon}</span>
      <span>{title}</span>
    </div>
  )
}

export default Grid
