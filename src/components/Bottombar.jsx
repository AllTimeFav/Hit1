import React from 'react'

const Bottombar = () => {
  return (
    <div className='w-full p-4 bottom-0 flex flex-col md:flex-row text-gray-200 relative'>
    <div className='h-[20vh] flex-grow bg-slate-900'>A1</div>
    <div className='h-[20vh] flex-grow bg-yellow-500'>A2</div>
    <div className='h-[20vh] flex-grow bg-blue-800'>A3</div>
</div>

  )
}

export default Bottombar