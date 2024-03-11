import React from 'react'

export default function Post() {
    return (
        <div className='p-2'>
            <div className='flex items-start gap-2 w-full'>
                <div className='h-[30px] w-[30px] rounded-full bg-gray-500'></div>
                
                <div className='flex flex-col gap-2 w-full'>
                    <div className='flex gap-2 items-center'>
                    <p>Super man</p>
                    <p className='text-sm text-gray-400'>@superman</p>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore commodi, in repellat sed consequuntur quidem voluptatum, suscipit, voluptate vel debitis ex necessitatibus eveniet qui fugit quis corporis iure voluptatibus veritatis.</p>
                </div>
            </div>
        </div>
    )
}
