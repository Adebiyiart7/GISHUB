import React from 'react'
import { GiAfrica, GiNigeria, GiWorld } from 'react-icons/gi'
import { BiCurrentLocation } from 'react-icons/bi'

import LeftMenuHeader from './LeftMenuHeader'
import Grid from './Grid'

const FindData = ({ title }) => {
  return (
    <div>
      <LeftMenuHeader title={title} />
      <div className='grid grid-cols-3'>
        <Grid title={'Minna'} Icon={<BiCurrentLocation />} />
        <Grid title={'Nigeria'} Icon={<GiNigeria />} />
        <Grid title={'Africa'} Icon={<GiAfrica />} />
        <Grid title={'World'} Icon={<GiWorld />} />
      </div>
    </div>
  )
}

export default FindData
