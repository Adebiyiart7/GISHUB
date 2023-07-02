import React, { useContext } from 'react'
import { AppContext } from '../../providers/AppContext'

const Tab = React.memo(({ title, onClick, Icon }) => {
  const { leftMenuContentState } = useContext(AppContext)

  return (
    <div
      onClick={onClick}
      className={`relative block px-3 py-2 w-[150px] text-sm cursor-pointer border-b border-gray-200 ${
        leftMenuContentState.leftMenuContent.title === title && 'bg-lightBackground border-b-lightBackground'
      }`}
    >
      <div className='flex items-center justify-center gap-3'>
        <span className={`mb-1`}>{Icon}</span>
        <span
          className={`font-medium capitalize ${
            leftMenuContentState.leftMenuContent.title === title ? 'text-primary' : 'text-gray-600'
          }`}
        >
          {' '}
          {title}{' '}
        </span>
      </div>
    </div>
  )
})

export default Tab
