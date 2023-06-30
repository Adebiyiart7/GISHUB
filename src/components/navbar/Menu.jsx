import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Menu = ({ title, route, Icon, className, textColor = 'text-white' }) => {
  const location = useLocation()

  return (
    <li class='flex-1'>
      <Link
        class={`relative block px-6 py-3 ${route === location.pathname && 'border-b border-b-2 border-white'}`}
        to={route}
      >
        <div class='flex items-center justify-center gap-3'>
          <span className='mb-1'>{Icon}</span>
          <span class={`font-medium ${textColor}`}> {title} </span>
        </div>
      </Link>
    </li>
  )
}

export default Menu
