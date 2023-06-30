import React, { useContext } from 'react'
import { GiAfrica, GiNigeria, GiWorld } from 'react-icons/gi'
import { BiCurrentLocation } from 'react-icons/bi'

import LeftMenuHeader from './LeftMenuHeader'
import leftMenuContentTitles from '../config/leftMenuContentTitles'
import { AppContext } from '../providers/AppContext'
import Grid from '../components/left-menu/Grid'

const FindData = ({ title }) => {
  const { dispatch } = useContext(AppContext)

  const handleMinna = () => {
    dispatch({ type: leftMenuContentTitles.MINNA._id })
  }
  const handleNigeria = () => {
    dispatch({ type: leftMenuContentTitles.NIGERIA._id })
  }
  const handleAfrica = () => {
    dispatch({ type: leftMenuContentTitles.AFRICA._id })
  }
  const handleWorld = () => {
    dispatch({ type: leftMenuContentTitles.WORLD._id })
  }

  return (
    <div>
      <LeftMenuHeader title={title} showBack={false} />
      <div className='grid grid-cols-3'>
        <Grid title={'Minna'} Icon={<BiCurrentLocation />} onClick={handleMinna} />
        <Grid title={'Nigeria'} Icon={<GiNigeria />} onClick={handleNigeria} />
        <Grid title={'Africa'} Icon={<GiAfrica />} onClick={handleAfrica} />
        <Grid title={'World'} Icon={<GiWorld />} onClick={handleWorld} />
      </div>
    </div>
  )
}

export default FindData
