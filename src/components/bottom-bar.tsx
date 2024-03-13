import { useEffect, useState } from 'react';
import { BellIcon, HomeIcon, InboxIcon, MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

export default function BottomBar() {
    const [scrollDirection, setScrollDirection] = useState('down');
    const [scrollDirectionCount, setScrollDirectionCount] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition : number = window.scrollY;
            const threshold = 50;

            setScrollDirectionCount((prevScrollPosition) => {
                const prevPosition = Number(prevScrollPosition);
                if (scrollPosition > prevPosition) {
                    setScrollDirection("down");
                } else if (scrollPosition < prevPosition) {
                    setScrollDirection("up");
                }
                return prevPosition;
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const opacityClass = scrollDirection === 'up' ? 'opacity-50' : 'opacity-100';

    return (
        <footer className={`flex items-center justify-between sm:hidden bg-gray-900 py-4 h-[52px] mt-[52px] px-6 fixed bottom-0 w-full transition-opacity ${opacityClass}`}>
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
    );
}
