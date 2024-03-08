import navItems from "../utils/navItems";

import { useState } from 'react';
import { ModeToggle } from "./theme-toggler";

export default function LeftSideBar() {
  const [selectedItem, setSelectedItem] = useState('Home');

  const handleSelectItem = (currentItem: string) => {
    setSelectedItem(currentItem)
  }

  return (
    <div className='md:w-1/3 border-r h-screen border-slate-500'>
      <div className='md:w-full items-center flex justify-center p-4 text-blue-600 font-bold text-xl select-none'>
        xClone
      </div>
      <div>
        {navItems.map(nav => (
          <div className="mx-4" key={nav.name}>
            <div onClick={() => handleSelectItem(nav.name)} className='p-2 cursor-pointer flex items-center justify-start w-full hover:bg-slate-500 rounded gap-1'>
              {selectedItem === nav.name ? (
                <>{nav.solidIcon}</>
              ) : (
                <>{nav.outlineIcon}</>
              )}
              <span>{nav.name}</span>
            </div>


          </div>

        ))}

        <ModeToggle />
      </div>
    </div >
  );
}
