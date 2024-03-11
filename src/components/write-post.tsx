import React from 'react'

export default function WritePost() {
    return (
        <div className='p-2 flex flex-col gap-4 justify-between'>
            <div className='flex items-center gap-2'>
                <div className='h-[40px] p-5 w-[40px] bg-gray-500 rounded-full'></div>

                <div className='relative w-full'>
                    <textarea className='border p-2 w-full outline-none rounded' placeholder='Write post...'></textarea>
                    <button className='btn absolute bottom-4 right-4'>Post</button>
                </div>

            </div>

        </div>
    )
}
