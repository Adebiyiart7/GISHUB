import React, { useContext, useState } from 'react'
import { AiOutlineCloudUpload, AiOutlineCloudDownload } from 'react-icons/ai'

import leftMenuContentTitles from '../../config/leftMenuContentTitles'
import { AppContext } from '../../providers/AppContext'
import Tab from '../left-menu/Tab'
import basemaps from '../../config/basemapOptions'
import BasemapOptions from '../BasemapOptions'
import colors from '../../config/colors'
import { Link } from 'react-router-dom'

const LeftMenu = () => {
  const [showBasemap, setShowBasemap] = useState(false)
  const { leftMenuContentState, leftMenuContentDispatch, basemapDispatch, hideLeftMenuState } = useContext(AppContext)

  const handleSwitchFindData = () => {
    leftMenuContentDispatch({ type: leftMenuContentTitles.FIND_DATA._id })
  }

  const handleSwitchUploadData = () => {
    leftMenuContentDispatch({ type: leftMenuContentTitles.UPLOAD_DATA._id })
  }

  const handleSwitchBasemap = (basemap) => {
    basemapDispatch({ type: basemap })
  }

  const handleBasemaps = () => setShowBasemap(!showBasemap)
  console.log(hideLeftMenuState)
  if (hideLeftMenuState.hide) return

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
                    leftMenuContentState.leftMenuContent.title === leftMenuContentTitles.FIND_DATA.title
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
                  leftMenuContentState.leftMenuContent.title === leftMenuContentTitles.UPLOAD_DATA.title
                    ? 'text-primary'
                    : 'text-gray-600'
                } text-xl mt-1`}
              />
            }
          />
        </ul>
        {showBasemap && (
          <div onClick={handleBasemaps} className='absolute bg-black h-[100%] w-[100%] opacity-70 z-20' />
        )}
        <div className='h-[calc(100vh-205px)] pb-4 relative'>
          <div className='p-2 z-10'>{leftMenuContentState.leftMenuContent.content}</div>
          <div
            className={`overflow-y-scroll absolute bg-lightBackground h-[250px] bottom-[-300px] ${
              showBasemap && 'bottom-[0px]'
            } transition duration-700 ease-in-out z-30`}
          >
            <BasemapOptions basemaps={basemaps} handleSwitchBasemap={handleSwitchBasemap} />
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center fixed bottom-0 border-t w-[301px] bg-lightBackground z-30`}
      >
        <div
          onClick={handleBasemaps}
          className={`cursor-pointer p-2 font-semibold text-sm ${colors.primaryGradient} text-white w-[100%] text-center`}
        >
          Basemaps
        </div>
        <div className='text-center border-t w-[300px] p-2'>
          <em className='text-xs leading-[1]'>Developed By: </em>
          <span className='font-semibold text-sm leading-[1]'> Adeeyo Joseph Adebiyi</span>
          <div className='text-[11px] leading-[1]'>Federal University of Technology, Minna.</div>
          <div className='flex gap-4 justify-center text-primary text-[11px] underline pt-1'>
            <Link to={'/about'}>About</Link>
            <Link to={'/privacy-policy'}>Privacy Policy</Link>
            <Link to={'/terms-of-use'}>Terms of Use</Link>
            {/* <Link to={'/about'}>About</Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftMenu
