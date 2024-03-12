'use client'

import React, { useState } from 'react';
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes"

const SwitchButton = () => {
    const { setTheme, theme } = useTheme();

    return (
        <button title='switch mode' className='rounded border dark:border-gray-600 flex items-center'>
            <div onClick={() => setTheme("dark")} className={`p-2 rounded dark:bg-yellow-300`}>
                <MoonIcon className={`h-5 w-5  dark:text-slate-50`} />
            </div>
            <div onClick={() => setTheme("light")} className={`p-2 rounded bg-yellow-300 text-slate-900 dark:text-slate-50 dark:bg-gray-900`}>
                <SunIcon className={`h-5 w-5`} />
            </div>
        </button>
    );
}

export default SwitchButton;
