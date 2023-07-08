import React from 'react'

import developer from '/assets/images/developer.jpeg'
import { Link } from 'react-router-dom'
import { FaRegThumbsUp, FaRegComments } from 'react-icons/fa'

const CommmunityCard = () => {
  return (
    <div className='border-t py-4'>
      <div className='text-xl font-semibold mb-1 line-clamp-1'>
        I am getting an error whenever I try to run my model...
      </div>
      <div className='text-gray-700 text-sm leading-5 font-light mb-2'>
        I am a passionate software developer and GIS analyst who studied at the Federal University of Technology, Minna.
        With expertise in both software development and GIS analysis, I am{' '}
      </div>
      <div className='flex gap-4 justify-between items-center'>
        <div className='flex items-center gap-2'>
          <img src={developer} alt='avatar' className='rounded-full w-[40px]' />
          <div>
            <div className='text-sm'>
              By{' '}
              <Link to='/' className='text-primary font-medium'>
                Adeeyo Joseph Adebiyi
              </Link>
            </div>
            <div className='text-xs font-medium text-gray-600'>20th Feb, 2023.</div>
          </div>
        </div>
        <div className='flex gap-6 items-center'>
          <span className='flex gap-1 items-center cursor-pointer'>
            <FaRegThumbsUp className='text-xl' />
            <span className='mt-1'>0</span>
          </span>
          <span className='flex gap-1 items-center cursor-pointer mt-1'>
            <FaRegComments className='text-xl' />
            <span>0</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CommmunityCard
