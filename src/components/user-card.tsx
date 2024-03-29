import React from 'react'

export default function UserCard() {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <div className='h-[30px] w-[30px] bg-gray-600 dark:bg-slate-200 rounded-full'></div>

                <div className='flex flex-col'>
                    <p>Super hero</p>
                    <p className='text-[10px]'>@superhero</p>
                </div>
            </div>

                <button className='bg-gray-900 hover:bg-gray-950 p-1 text-sm rounded text-slate-50 dark:text-gray-900 dark:bg-slate-50 dark:hover:bg-slate-100'>Follow</button>
                
        </div>
    )
}
