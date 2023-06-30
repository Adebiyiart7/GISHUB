import React from 'react'
import { GiAfrica } from 'react-icons/gi'

import LeftMenuHeader from './LeftMenuHeader'
import Grid from './Grid'

const Africa = ({ title }) => {
  return (
    <div>
      <LeftMenuHeader title={title} />
      <div className='grid grid-cols-3'>
        <Grid title={'Africa'} Icon={<GiAfrica />} />
      </div>
    </div>
  )
}

export default Africa
