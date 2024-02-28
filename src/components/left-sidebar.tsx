import React from 'react'

export default function LeftSideBar() {
  return (
    <div className='md:w-[250px] border-r h-screen border-slate-500'>
      <div className='w-full items-center flex justify-center p-4 text-blue-600 font-bold text-xl'>
        xClone
      </div>
      <div>
        <button className='p-2 w-full hover:bg-slate-500 rounded'>Home</button>
        <button className='p-2 w-full hover:bg-slate-500 rounded'>Home</button>
        <button className='p-2 w-full hover:bg-slate-500 rounded'>Home</button>
        <button className='p-2 w-full hover:bg-slate-500 rounded'>Home</button>
      </div>
    </div>
  )
}
