import React from 'react'
import { GiAfrica, GiNigeria, GiWorld } from 'react-icons/gi'

import LeftMenuHeader from './LeftMenuHeader'
import AppButton from './AppButton'

const UploadData = ({ title }) => {
  return (
    <div>
      <LeftMenuHeader title={title} showBack={false} />
      <div
        className='file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg'
        // style={{ width: '450px' }}
      >
        <svg
          className='text-indigo-500 w-10 mx-auto mb-4'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
          />
        </svg>
        <div className='input_field flex flex-col w-max mx-auto text-center'>
          <label>
            <input className='text-sm cursor-pointer w-36 hidden' type='file' multiple />
            <div
              className={`cursor-pointer p-2 font-semibold text-sm border w-[100%] text-center rounded-sm`}
              style={{ flex: 1 }}
            >
              Select
            </div>
          </label>

          <div className='title text-gray-900'>or drop files here</div>
        </div>
      </div>
      <br />
      <div
        className={`cursor-pointer p-2 font-semibold text-sm border w-[100%] text-center rounded-sm`}
        style={{ flex: 1 }}
      >
        Select Category
      </div>
      <br />
      <AppButton title={'Upload'} onclick={() => {}} />
    </div>
  )
}

export default UploadData
