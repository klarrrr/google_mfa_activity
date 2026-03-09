import React from 'react'
import NavBar from '@/components/NavBar'
const page = () => {
  return (
    <div className='flex flex-col gap-4'>
        <NavBar />
        <p>This is a protected account</p>
    </div>
  )
}

export default page
