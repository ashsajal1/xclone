import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import TrendingTopic from './trending-topics';

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
            <div className="p-2 rounded dark:bg-slate-600 text-sm focus-within:ring-1 focus-within:ring-blue-600 gap-2 flex items-center justify-between dark:focus-within:bg-gray-900 border dark:border-none">
                <MagnifyingGlassIcon className={`h-5 w-5 ${isFocused ? 'text-blue-600' : 'text-gray-400'}`} />

                <input
                    className="text-sm dark:bg-slate-600 dark:focus:bg-gray-900 outline-none"
                    placeholder="Search something..."
                    type="text"
                    onFocus={handleAddFocus}
                    onBlur={handleRemoveFocus}
                />
            </div>

            <div className='p-2 rounded border dark:border-none dark:bg-slate-600 text-sm mt-3'>
                <h3 className='text-xl font-bold'>Trending Topics</h3>

                <div className='flex flex-col gap-1'>
                    <TrendingTopic />
                    <TrendingTopic />
                    <TrendingTopic />
                    <TrendingTopic />
                    <TrendingTopic />
                </div>
            </div>
        </div>
    )
}
