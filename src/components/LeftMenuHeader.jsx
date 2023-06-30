import React from 'react'

const LeftMenuHeader = ({ title, showBack = true, onClickBack }) => {
  return (
    <div className='flex justify-between items-center p-2 mb-2'>
      <span className='font-semibold text-gray-700 text-lg capitalize'>{title}</span>
      {showBack && (
        <span className='cursor-pointer font-semibold text-sm text-primary' onClick={onClickBack}>
          Back
        </span>
      )}
    </div>
  )
}

export default LeftMenuHeader
