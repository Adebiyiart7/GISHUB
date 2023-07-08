import React, { useState, useEffect, useRef } from 'react'
import { IoSearch } from 'react-icons/io5'

import Container from '../components/Container'
import CommmunityCard from '../components/CommmunityCard'

const Community = () => {
  const [displayText, setDisplayText] = useState('')
  const text = 'Connect with our community!'
  let currentIndex = 0
  let isDeleting = false
  const timeoutRef = useRef(null)

  useEffect(() => {
    const typeAndCleanText = () => {
      if (isDeleting) {
        setDisplayText(text.substring(0, currentIndex - 1))
        currentIndex--
      } else {
        setDisplayText(text.substring(0, currentIndex + 1))
        currentIndex++
      }

      if (!isDeleting && currentIndex === text.length) {
        isDeleting = true
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false
      }

      const typingSpeed = isDeleting ? 50 : 120
      const cleaningSpeed = 50

      timeoutRef.current = setTimeout(typeAndCleanText, isDeleting ? cleaningSpeed : typingSpeed)
    }

    // Start the typing animation
    timeoutRef.current = setTimeout(typeAndCleanText, 0)

    return () => {
      // Cleanup: Clear the timeout when the component is unmounted
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <Container className='overflow-y-scroll h-full py-16'>
      <div className='flex flex-col items-center'>
        <div class='relative w-full max-w-[700px]'>
          <input
            type='text'
            class='w-full rounded-full border-2 focus:outline-none focus:border-primary
            bg-lightBackground p-4 px-6 pe-12 shadow-sm text-lg'
            placeholder='Search our community...'
          />

          <span class='absolute inset-y-0 end-2 grid place-content-center px-4 cursor-pointer'>
            <IoSearch size={24} className='text-gray-700' />
          </span>
        </div>
        <div
          class='text-transparent bg-gradient-to-r bg-clip-text from-primary via-green-500 to-primary
        h-[50px] font-medium text-2xl flex items-center
        '
        >
          {displayText}
        </div>
      </div>
      <div className='my-5'>
        <div className='text-4xl text-gray-800 font-bold'>Recent Posts</div>
      </div>
      <CommmunityCard />
      <CommmunityCard />
      <CommmunityCard />
      <CommmunityCard />
      <CommmunityCard />
    </Container>
  )
}

export default Community
