import React from 'react'
import colors from '../config/colors'

const AppButton = ({ title, onclick }) => {
  return (
    <div
      onClick={onclick}
      className={`cursor-pointer p-2 font-semibold text-sm ${colors.primaryGradient} text-white w-[100%] text-center rounded-sm`}
      style={{ flex: 1 }}
    >
      {title}
    </div>
  )
}

export default AppButton
