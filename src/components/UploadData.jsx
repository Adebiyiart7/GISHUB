import React from 'react'
import { GiAfrica, GiNigeria, GiWorld } from 'react-icons/gi'

import LeftMenuHeader from './LeftMenuHeader'
import Grid from './Grid'

const UploadData = ({ title }) => {
  return (
    <div>
      <LeftMenuHeader title={title} />
      <div className='grid grid-cols-3'>
        <Grid title={'Nigeria'} Icon={<GiNigeria />} />
        <Grid title={'Africa'} Icon={<GiAfrica />} />
        <Grid title={'World'} Icon={<GiWorld />} />
      </div>
    </div>
  )
}

export default UploadData
