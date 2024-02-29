import navItems from "../utils/navItems";

import { useState } from 'react';

export default function LeftSideBar() {
  const [selectedItem, setSelectedItem] = useState('Home');
  
  const handleSelectItem = (currentItem: string) => {
    setSelectedItem(currentItem)
  }

  return (
    <div className='md:w-[250px] border-r h-screen border-slate-500'>
      <div className='w-full items-center flex justify-center p-4 text-blue-600 font-bold text-xl select-none'>
        xClone
      </div>
      <div>
        {navItems.map(nav => (
          <div key={nav.name} onClick={() => handleSelectItem(nav.name)} className='p-2 cursor-pointer flex items-center justify-start w-full hover:bg-slate-500 rounded gap-1'>
            {/* <HomeIcon className='h-5 w-5' />
            <HomeIconSolid className='h-5 w-5' /> */}
            {selectedItem === nav.name ? (
              <>{nav.solidIcon}</>
            ) : (
              <>{nav.outlineIcon}</>
            )}
            <span>{nav.name}</span>
          </div>
        ))}

        {/* <div className='p-2 cursor-pointer flex items-center justify-center w-full hover:bg-slate-500 rounded gap-1'>
          <HomeIcon className='h-5 w-5' />
          <HomeIconSolid className='h-5 w-5' />
          <span>Home</span>
        </div> */}

      </div>
    </div >
  );
}
