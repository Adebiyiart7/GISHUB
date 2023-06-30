import React, { useContext } from 'react'

import LeftMenuHeader from '../LeftMenuHeader'
import leftMenuContentTitles from '../../config/leftMenuContentTitles'
import { AppContext } from '../../providers/AppContext'

const Minna = ({ title }) => {
  const { dispatch } = useContext(AppContext)
  const handleGoBack = () => {
    dispatch({ type: leftMenuContentTitles.FIND_DATA._id })
  }

  return (
    <div>
      <LeftMenuHeader title={title} onClickBack={handleGoBack} />
      <div className='grid grid-cols-3'>
        <div>Text</div>
      </div>
    </div>
  )
}

export default Minna
