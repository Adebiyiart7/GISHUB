import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineCloudUpload, AiOutlineCloudDownload } from 'react-icons/ai'

import leftMenuContentTitles from '../../config/leftMenuContentTitles'
import { AppContext } from '../../providers/AppContext'

const LeftMenu = () => {
  const { state, dispatch } = useContext(AppContext)

  const handleSwitchFindData = () => {
    dispatch({ type: leftMenuContentTitles.FIND_DATA._id })
  }

  const handleSwitchUploadData = () => {
    dispatch({ type: leftMenuContentTitles.UPLOAD_DATA._id })
  }

  const Menu = React.memo(({ title, onClick, Icon }) => {
    return (
      <div
        onClick={onClick}
        className={`relative block px-3 py-2 w-[150px] text-sm cursor-pointer border-b border-gray-200 ${
          state.leftMenuContent.title === title && 'bg-lightBackground border-b-lightBackground'
        }`}
      >
        <div className='flex items-center justify-center gap-3'>
          <span className={`mb-1`}>{Icon}</span>
          <span
            className={`font-medium capitalize ${
              state.leftMenuContent.title === title ? 'text-primary' : 'text-gray-600'
            }`}
          >
            {' '}
            {title}{' '}
          </span>
        </div>
      </div>
    )
  })

  return (
    <div className={`flex flex-col justify-between bg-lightBackground h-full relative  w-[300px]`}>
      <div>
        <ul className={`flex items-center bg-white`}>
          <div className='border-r border-gray-200'>
            <Menu
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
          <Menu
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

/**
 * import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const MyComponent = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;

 */
