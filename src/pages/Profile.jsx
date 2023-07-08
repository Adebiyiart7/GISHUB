import React, { useContext, useEffect } from 'react'

import developer from '/assets/images/developer.jpeg'
import Container from '../components/Container'
import { AppContext } from '../providers/AppContext'
import { Link } from 'react-router-dom'
import { IoLogoLinkedin } from 'react-icons/io5'
import { FaTwitter } from 'react-icons/fa'

const Profile = () => {
  const { hideLeftMenuDispatch } = useContext(AppContext)

  useEffect(() => {
    hideLeftMenuDispatch({ type: 'HIDE' })

    return () => hideLeftMenuDispatch({ type: 'SHOW' })
  }, [])

  return (
    <Container className={'flex flex-col items-center py-10 max-w-[500px] text-center'}>
      <img src={developer} className='rounded-full w-[200px]' />
      <div>
        <div className='font-bold text-xl mt-3 uppercase'>Adeeyo Joseph Adebiyi</div>
        <div className='text-sm'>@adebiyiart</div>
        <p>
          With expertise in Software Development, Remote Sensing, and GIS analysis, I am dedicated to leveraging
          technology to solve complex problems and contribute to the field of GIS.
        </p>
        <div>
          <Link className='flex justify-center items-center text-primary font-medium' to={'/'}>
            <FaTwitter />
            @_theCodingChef
          </Link>
        </div>
        <div>
          <Link className='flex justify-center items-center text-primary font-medium' to={'/'}>
            <IoLogoLinkedin />
            @_theCodingChef
          </Link>
        </div>
        <Link className='text-primary font-medium' to={'/'}>
          https://_thecodingchef.com
        </Link>
      </div>
    </Container>
  )
}

export default Profile
