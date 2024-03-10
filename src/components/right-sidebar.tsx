import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

export default function RightSidebar() {
    const [isFocused, setFocused] = useState(false);

    const handleAddFocus = () => {
        console.log("focused")
        setFocused(true);
    }

    const handleRemoveFocus = () => {
        console.log("focuse remove")
        setFocused(false);
    }

    return (
        <div className='hidden md:block p-3 md:w-1/3 border-l dark:border-slate-400 h-screen'>
            <div className="p-2 rounded dark:bg-slate-600 text-sm focus-within:ring-1 focus-within:ring-blue-600 gap-2 flex items-center justify-between dark:focus-within:bg-gray-900 border">
                <MagnifyingGlassIcon className={`h-5 w-5 ${isFocused ? 'text-blue-600' : 'text-gray-400'}`} />

                <input
                    className="text-sm dark:bg-slate-600 dark:focus:bg-gray-900 outline-none"
                    placeholder="Search something..."
                    type="text"
                    onFocus={handleAddFocus}
                    onBlur={handleRemoveFocus}
                />
            </div>

            <div className='p-2 rounded dark:bg-slate-600 text-sm mt-3'>
                <h3 className='text-xl font-bold'>Trending Topics</h3>

                <div className='my-1 flex items-start justify-between'>
                    <div>
                        <p className='text-xs'>Business and Finance</p>
                        <p className='font-bold text-slate-50'>#Bitcoin</p>
                    </div>
                    <div className='flex items-center justify-center gap-1 mt-2'>
                        <div className='h-[2px] w-[2px] bg-slate-300 rounded-full'></div>
                        <div className='h-[2px] w-[2px] bg-slate-300 rounded-full'></div>
                        <div className='h-[2px] w-[2px] bg-slate-300 rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
