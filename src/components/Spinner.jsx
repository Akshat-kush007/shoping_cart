import React from 'react'
import './Spinner.css'

export default function Spinner() {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-4'>
      <div className="spinner"></div>
      <div className='text-xl font-bold text-green-500'>Loading...</div>
    </div>
  )
}
