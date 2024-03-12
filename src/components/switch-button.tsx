import React, { useState } from 'react';
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const SwitchButton = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    }

    return (
        <button title='switch mode' onClick={toggleSwitch} className='rounded border flex items-center'>
            <div className={`p-2 rounded ${isOn ? '' : 'bg-yellow-600'}`}>
                <MoonIcon className={`h-5 w-5 ${isOn? 'text-gray-600':'text-slate-50'}`} />
            </div>
            <div className={`p-2 rounded ${isOn ? 'bg-yellow-600' : ''}`}>
                <SunIcon className={`h-5 w-5 ${isOn? 'text-slate-50':'text-gray-600'}`} />
            </div>
        </button>
    );
}

export default SwitchButton;
