import { HomeIcon, ChatBubbleLeftRightIcon, BellIcon, ClipboardDocumentListIcon, UserIcon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid, ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconSolid, BellIcon as BellIconSolid, ClipboardDocumentListIcon as ClipboardDocumentListIconSolid, UserIcon as UserIconSolid } from '@heroicons/react/24/solid';

const navItems = [
  {
    name: "Home",
    outlineIcon: <HomeIcon className="h-5 w-5" />,
    solidIcon: <HomeIconSolid className="h-5 w-5" />,
  },
  {
    name: "Explore",
    outlineIcon: <ChatBubbleLeftRightIcon className="h-5 w-5" />,
    solidIcon: <ChatBubbleLeftRightIconSolid className="h-5 w-5" />,
  },
  {
    name: "Notificaton",
    outlineIcon: <BellIcon className="h-5 w-5" />,
    solidIcon: <BellIconSolid className="h-5 w-5" />,
  },
  {
    name: "Lists",
    outlineIcon: <ClipboardDocumentListIcon className="h-5 w-5" />,
    solidIcon: <ClipboardDocumentListIconSolid className="h-5 w-5" />,
  },
  {
    name: "Profile",
    outlineIcon: <UserIcon className="h-5 w-5" />,
    solidIcon: <UserIconSolid className="h-5 w-5" />,
  },
];

export default navItems;
