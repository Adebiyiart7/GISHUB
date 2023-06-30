import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi'

import LeftMenuHeader from './LeftMenuHeader'
import Grid from './Grid'

const Minna = ({ title }) => {
  return (
    <div>
      <LeftMenuHeader title={title} />
      <div className='grid grid-cols-3'>
        <Grid title={'Minna'} Icon={<BiCurrentLocation />} />
      </div>
    </div>
  )
}

export default Minna
