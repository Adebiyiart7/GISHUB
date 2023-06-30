import React from 'react'
import { GiWorld } from 'react-icons/gi'

import LeftMenuHeader from './LeftMenuHeader'
import Grid from './Grid'

const World = ({ title }) => {
  return (
    <div>
      <LeftMenuHeader title={title} />
      <div className='grid grid-cols-3'>
        <Grid title={'World'} Icon={<GiWorld />} />
      </div>
    </div>
  )
}

export default World
