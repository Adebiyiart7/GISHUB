import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Menu = ({ title, route, Icon, className, textColor = 'text-white' }) => {
  const location = useLocation()

  return (
    <li className='flex-1'>
      <Link
        className={`relative block px-6 py-2 ${route === location.pathname && 'border-b border-b-2 border-white'}`}
        to={route}
      >
        <div className='flex items-center justify-center gap-3'>
          <span className='mb-1'>{Icon}</span>
          <span className={`font-medium ${textColor}`}> {title} </span>
        </div>
      </Link>
    </li>
  )
}

export default Menu
