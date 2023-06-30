import React from 'react'

const LeftMenuHeader = ({ title }) => {
  return (
    <div className='flex justify-between items-center p-2 mb-2'>
      <span className='font-semibold text-gray-700 text-lg'>{title}</span>
      <span className='cursor-pointer font-semibold text-sm text-primary'>Back</span>
    </div>
  )
}

export default LeftMenuHeader
