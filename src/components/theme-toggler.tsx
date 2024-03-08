"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <div>
            <div>
                <div onClick={() => setTheme("light")} className="flex items-center justify-center border dark:bg-slate-50 dark:text-gray-800">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    Light
                </div>
                <div onClick={() => setTheme("dark")}>
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    Dark
                </div>
                <div onClick={() => setTheme("system")}>
                    System
                </div>
            </div>
        </div>
    )
}
