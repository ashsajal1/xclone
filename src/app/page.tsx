'use client';
import LeftSideBar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";
import { useState } from "react"

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<null | string>(null)

  const [items, setItems] = useState<string[]>(['For you', 'Trending', 'Sports', 'Programming', 'Politics']);

  const handleChange = (item: string) => {
    setSelectedItem(item)
  }
  return (
    <>
      <main className="flex items-start">
        <LeftSideBar />
        <nav className="w-full">
          <div className='h-[50px] border-b border-slate-500 flex items-center gap-2'>
            {items.map((item) => (
              <div onClick={() => handleChange(item)} key={item} className='text-gray-800 dark:text-slate-50 hover:text-gray-900 dark:hover:text-slate-50 hover:font-bold cursor-pointer select-none text-center flex flex-col gap-2 items-center justify-between text-sm h-full hover:bg-gray-200 dark:hover:bg-gray-600 px-2'>
                <span className={`mt-4 ${selectedItem === item ? 'font-bold text-gray-900 dark:text-slate-50' : ''}`}>{item}</span>
                <div className={`h-[4px] w-full bg-blue-600 rounded-full ${selectedItem === item ? '' : 'hidden'}`}></div>
              </div>
            ))}
          </div>
        </nav>

        <RightSidebar />
      </main>
    </>
  )
}
