import React, { useContext } from 'react'
import { AppContext } from '../providers/AppContext'

const BasemapOptions = ({ basemaps, handleSwitchBasemap }) => {
  const { basemapState } = useContext(AppContext)

  return (
    <div className='flex flex-col gap-3 p-4'>
      {Object.entries(basemaps).map(([key, value]) => (
        <div
          className={`cursor-pointer capitalize flex gap-2 border-2 rounded
                items-center hover:border-primary hover:border-2 ${
                  basemapState.basemap === basemaps[key]._id && 'border-primary'
                }`}
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
