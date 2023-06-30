import React from 'react'
import { GiAfrica, GiNigeria, GiWorld } from 'react-icons/gi'

import LeftMenuHeader from './LeftMenuHeader'

const UploadData = ({ title }) => {
  return (
    <div>
      <LeftMenuHeader title={title} showBack={false} />
      <div className='grid grid-cols-3'>
        <div>Upload Data</div>
      </div>
    </div>
  )
}

export default UploadData
