import navItems from "../utils/navItems";

import { useState } from 'react';
import { ModeToggle } from "./theme-toggler";
import SwitchButton from "./switch-button";

export default function LeftSideBar() {
  const [selectedItem, setSelectedItem] = useState('Home');

  const handleSelectItem = (currentItem: string) => {
    setSelectedItem(currentItem)
  }

  return (
    <div className='hidden sm:block md:w-1/3 border-r h-screen border-slate-500'>
      <div className='md:w-full items-center flex justify-center p-4 text-blue-600 font-bold text-xl select-none'>
        xClone
      </div>
      <div>
        {navItems.map(nav => (
          <div className="mx-4" key={nav.name}>
            <div onClick={() => handleSelectItem(nav.name)} className={`p-2 cursor-pointer flex items-center w-full hover:bg-gray-200 rounded gap-1 justify-center md:justify-start`}>
              {selectedItem === nav.name ? (
                <>{nav.solidIcon}</>
              ) : (
                <>{nav.outlineIcon}</>
              )}
              <span className="hidden md:block">{nav.name}</span>
            </div>
          </div>
        ))}

        <ModeToggle />
        <SwitchButton />
      </div>
    </div >
  );
}
