import React from 'react'

const BasemapOptions = ({ basemaps, handleSwitchBasemap }) => {
  return (
    <div className='flex flex-col gap-3 p-4'>
      {Object.entries(basemaps).map(([key, value]) => (
        <div
          className='cursor-pointer capitalize flex gap-2 border-2 rounded
                items-center hover:border-primary hover:border-2'
          onClick={() => handleSwitchBasemap(basemaps[key]._id)}
          key={key}
        >
          <img
            src={`/assets/images/map/${basemaps[key]._id}.jpeg`}
            className='h-[70px] object-contain'
            alt={basemaps[key].label}
          />
          <span className='text-primary'>{basemaps[key].label}</span>
        </div>
      ))}
    </div>
  )
}

export default BasemapOptions
