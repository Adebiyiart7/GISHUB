import React from 'react'
import { GiNigeria } from 'react-icons/gi'

import LeftMenuHeader from './LeftMenuHeader'
import Grid from './Grid'

const Nigeria = ({ title }) => {
  return (
    <div>
      <LeftMenuHeader title={title} />
      <div className='grid grid-cols-3'>
        <Grid title={'Nigeria'} Icon={<GiNigeria />} />
      </div>
    </div>
  )
}

export default Nigeria
