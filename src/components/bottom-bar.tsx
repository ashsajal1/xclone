import { BellIcon, HomeIcon, InboxIcon, MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

export default function BottomBar() {
    return (
        <footer className="flex items-center justify-between sm:hidden bg-gray-900 py-4 h-[52px] mt-[52px] px-6 fixed bottom-0 w-full">
            <div>
                <HomeIcon className="h-5 w-5" />
            </div>
            <div>
                <MagnifyingGlassCircleIcon className="h-5 w-5" />
            </div>
            <div>
                <BellIcon className="h-5 w-5" />
            </div>
            <div>
                <InboxIcon className="h-5 w-5" />
            </div>
        </footer>
    )
}