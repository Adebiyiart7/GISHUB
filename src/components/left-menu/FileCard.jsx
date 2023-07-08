import React from 'react'
import { BsFileEarmarkZip, BsInfoCircle } from 'react-icons/bs'
import { MdOutlineFileDownload } from 'react-icons/md'
import { VscMapFilled } from 'react-icons/vsc'

const FileCard = ({ title, description, size }) => {
  return (
    <div className='flex flex-col gap-2 relative p-2 border rounded bg-white w-[268px] mx-2 hover:border-green-500 drop-shadow-sm'>
      <BsInfoCircle className='absolute top-2 cursor-pointer right-2 text-green-800' />
      <div className='flex gap-2 items-center'>
        <BsFileEarmarkZip size={35} className='text-gray-600' />
        <div>
          <div className='text-sm line-clamp-1 font-semibold'>{title}</div>
          <div className='text-xs line-clamp-1 text-gray-600'>{description}</div>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <span className='flex items-center gap-1 text-xs border rounded font-medium text-gray-600 px-2 py-1 cursor-pointer hover:border-green-500 hover:text-green-500'>
            <VscMapFilled size={20} /> Preview
          </span>
          <span className='flex items-center gap-1 text-xs border rounded font-medium px-2 py-1 cursor-pointer bg-green-500 border-green-500 text-white'>
            <MdOutlineFileDownload size={20} /> Download
          </span>
        </div>
        <span className='text-xs text-gray-500 font-semibold uppercase'>{size}</span>
      </div>
    </div>
  )
}

export default FileCard
