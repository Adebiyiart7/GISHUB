import React, { useContext, useEffect } from 'react'
import Container from '../components/Container'
import developer from '/assets/images/developer.jpeg'
import supervisor from '/assets/images/supervisor.png'
import { AppContext } from '../providers/AppContext'

const About = () => {
  const { hideLeftMenuDispatch } = useContext(AppContext)

  useEffect(() => {
    hideLeftMenuDispatch({ type: 'HIDE' })

    return () => hideLeftMenuDispatch({ type: 'SHOW' })
  }, [])

  return (
    <Container className={'h-full pt-6 overflow-y-scroll'}>
      <div className='text-center mb-6'>
        <div className='text-3xl font-bold text-gray-800 mb-2'>Welcome to GISHUB</div>
        <p className='max-w-[700px] m-auto'>
          Create a web-based GIS data source and a vibrant community platform for GIS specialists in Nigeria, fostering
          collaboration, knowledge sharing, and access to geospatial data for decision-making and sustainable
          development in the country.
        </p>
      </div>
      <div className='text-center text-3xl font-bold text-gray-800 mb-4'>Meet the Developers</div>
      <div className='flex justify-center gap-4 items-center'>
        <div className='flex-1 text-center mb-10 max-w-[400px]'>
          <img src={developer} alt='Developer' className='rounded-full max-w-[200px] m-auto' />
          <div className='my-2'>
            <div className='font-medium text-xl'>Adeeyo Joseph Adebiyi</div>
            <div className='text-sm font-medium text-gray-600'>Student of Federal University of Technology, Minna.</div>
          </div>
          <div className='text-sm text-gray-700'>
            With expertise in Software Development, Remote Sensing, and GIS analysis, I am dedicated to leveraging
            technology to solve complex problems and contribute to the field of GIS.
          </div>
        </div>
        <div className='flex-1 text-center mb-10 max-w-[400px]'>
          <img src={supervisor} alt='Developer' className='rounded-full max-w-[200px] m-auto' />
          <div className='my-2'>
            <div className='font-medium text-xl'>Dr. Mary Oluwatobi Odekunle</div>
            <div className='text-sm font-medium text-gray-600'>
              Lecturer II of Federal University of Technology, Minna.
            </div>
          </div>
          <div className='text-sm text-gray-700'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, saepe? Libero recusandae distinctio
            obcaecati. Numquam itaque sequi natus suscipit, id nesciunt atque.
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
