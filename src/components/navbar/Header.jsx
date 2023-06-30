import React from 'react'
import logo from '/assets/images/logo_lg.png'
import { IoHome, IoInformationCircle, IoPeople, IoPerson } from 'react-icons/io5'

import Container from '../Container'
import Menu from './Menu'
import routes from '../../config/routes'

const Header = () => {
  return (
    <div className='bg-primary py-2'>
      <Container className={'flex justify-between items-center'}>
        <a href={routes.HOME}>
          <img src={logo} className='h-[50px]' />
        </a>
        <ul className='flex border-b border-gray-400'>
          <Menu title={'Home'} route={routes.HOME} Icon={<IoHome className='text-lg text-gray-200' />} />
          <Menu title={'About'} route={routes.ABOUT} Icon={<IoInformationCircle className='text-xl text-gray-200' />} />
          <Menu title={'Community'} route={routes.COMMUNITY} Icon={<IoPeople className='text-xl text-gray-200' />} />
        </ul>

        <ul className='flex border-b border-gray-400'>
          <Menu title={'Adebiyi'} route={routes.PROFILE} Icon={<IoPerson className='text-xl text-gray-200' />} />
        </ul>
      </Container>
    </div>
  )
}

export default Header
