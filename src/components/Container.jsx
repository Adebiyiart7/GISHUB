import React from 'react'

const Container = ({ children, className }) => {
  return <div className={`max-w-[1500px] mx-auto xl:px-20 md:px-10 px-4 ${className}`}>{children}</div>
}

export default Container
