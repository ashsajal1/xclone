import { ArrowPathIcon, ChatBubbleBottomCenterIcon, HeartIcon, BookmarkIcon, ShareIcon } from '@heroicons/react/24/outline'
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

                    <div className='flex items-center justify-start text-[12px] gap-1'>
                        <p>05:55 PM</p>
                        <div className='h-[2px] w-[2px] bg-gray-600 rounded-full'></div>
                        <p>Mar 12, 2024</p>
                        <div className='h-[2px] w-[2px] bg-gray-600 rounded-full'></div>
                        <p className='font-bold'>1.2k views</p>
                    </div>

                    <div className='flex items-center justify-between p-2 border-y'>
                        <HeartIcon className='text-red-600 h-4 w-4' />
                        <ChatBubbleBottomCenterIcon className='text-blue-600 h-4 w-4' />
                        <ArrowPathIcon className='text-green-600 h-4 w-4' />
                        <BookmarkIcon className='text-gray-600 h-4 w-4' />
                        <ShareIcon className='text-gray-600 h-4 w-4' />
                    </div>
                </div>


            </div>
        </div>
    )
}
