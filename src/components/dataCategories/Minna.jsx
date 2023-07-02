import React, { useContext } from 'react'

import LeftMenuHeader from '../LeftMenuHeader'
import leftMenuContentTitles from '../../config/leftMenuContentTitles'
import { AppContext } from '../../providers/AppContext'
import FileCard from '../left-menu/FileCard'
import FolderCard from '../left-menu/FolderCard'

const Minna = ({ title }) => {
  const { leftMenuContentDispatch } = useContext(AppContext)
  const handleGoBack = () => {
    leftMenuContentDispatch({ type: leftMenuContentTitles.FIND_DATA._id })
  }

  return (
    <div>
      <LeftMenuHeader title={title} onClickBack={handleGoBack} />
      <div className='flex flex-col gap-3'>
        <FileCard
          title={'Minna Road Shapefile'}
          description={'Shapefile showing the major, minor and primary roads.'}
          size={'257KB'}
        />
        <FileCard
          title={'Minna Road Shapefile'}
          description={'Shapefile showing the major, minor and primary roads.'}
          size={'257KB'}
        />
        <FileCard
          title={'Minna Road Shapefile'}
          description={'Shapefile showing the major, minor and primary roads.'}
          size={'257KB'}
        />
        {/* <FolderCard /> */}
      </div>
    </div>
  )
}

export default Minna
