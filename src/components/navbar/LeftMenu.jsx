import React, { useContext } from 'react'
import { AiOutlineCloudUpload, AiOutlineCloudDownload } from 'react-icons/ai'

import leftMenuContentTitles from '../../config/leftMenuContentTitles'
import { AppContext } from '../../providers/AppContext'
import Tab from '../left-menu/Tab'

const LeftMenu = () => {
  const { state, dispatch } = useContext(AppContext)

  const handleSwitchFindData = () => {
    dispatch({ type: leftMenuContentTitles.FIND_DATA._id })
  }

  const handleSwitchUploadData = () => {
    dispatch({ type: leftMenuContentTitles.UPLOAD_DATA._id })
  }

  return (
    <div className={`flex flex-col justify-between bg-lightBackground h-full relative w-[300px]`}>
      <div>
        <ul className={`flex items-center bg-white`}>
          <div className='border-r border-gray-200'>
            <Tab
              title={leftMenuContentTitles.FIND_DATA.title}
              onClick={handleSwitchFindData}
              Icon={
                <AiOutlineCloudDownload
                  className={`${
                    state.leftMenuContent.title === leftMenuContentTitles.FIND_DATA.title
                      ? 'text-primary'
                      : 'text-gray-600'
                  } text-xl mt-1`}
                />
              }
            />
          </div>
          <Tab
            title={leftMenuContentTitles.UPLOAD_DATA.title}
            onClick={handleSwitchUploadData}
            Icon={
              <AiOutlineCloudUpload
                className={`${
                  state.leftMenuContent.title === leftMenuContentTitles.UPLOAD_DATA.title
                    ? 'text-primary'
                    : 'text-gray-600'
                } text-xl mt-1`}
              />
            }
          />
        </ul>
        <div className='p-2'>{state.leftMenuContent.content}</div>
      </div>

      <div className={`flex justify-center items-center fixed bottom-0 p-2 border-t w-[300px]`}>
        <div className='text-center'>
          <em className='text-xs leading-[1]'>Developed By:</em>
          <div className='font-semibold text-sm leading-[1]'>Adeeyo Joseph Adebiyi</div>
          <div className='text-xs'>FUT Minna.</div>
        </div>
      </div>
    </div>
  )
}

export default LeftMenu
