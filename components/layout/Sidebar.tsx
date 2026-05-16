import { Home, Search, Bell, Mail, Bookmark, User, MoreHorizontal, Feather } from "lucide-react";
import Link from "next/link";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Explore", href: "/explore" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: Mail, label: "Messages", href: "/messages" },
  { icon: Bookmark, label: "Bookmarks", href: "/bookmarks" },
  { icon: User, label: "Profile", href: "/profile" },
];

export default function Sidebar() {
  return (
    <aside className="hidden sm:flex flex-col w-[80px] xl:w-[275px] h-screen sticky top-0 border-r border-twitter-border px-2 xl:px-4 py-4">
      {/* Logo */}
      <Link href="/" className="p-3 w-fit rounded-full hover:bg-twitter-hover transition-colors mb-2">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8 fill-current text-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </Link>

      {/* Nav Items */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-4 p-3 w-fit rounded-full hover:bg-twitter-hover transition-colors text-xl"
          >
            <item.icon className="w-7 h-7" />
            <span className="hidden xl:inline">{item.label}</span>
          </Link>
        ))}
        <button className="flex items-center gap-4 p-3 w-fit rounded-full hover:bg-twitter-hover transition-colors text-xl cursor-pointer">
          <MoreHorizontal className="w-7 h-7" />
          <span className="hidden xl:inline">More</span>
        </button>
      </nav>

      {/* Post Button */}
      <button className="mt-4 bg-twitter-blue hover:bg-twitter-blue/90 text-white rounded-full p-3 xl:px-8 xl:py-3 font-bold text-lg transition-colors flex items-center justify-center cursor-pointer">
        <Feather className="w-6 h-6 xl:hidden" />
        <span className="hidden xl:inline">Post</span>
      </button>

      {/* Profile snippet */}
      <div className="mt-auto flex items-center gap-3 p-3 rounded-full hover:bg-twitter-hover transition-colors cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-gray-600 flex-shrink-0"></div>
        <div className="hidden xl:flex flex-col overflow-hidden">
          <span className="font-bold truncate text-[15px]">User Name</span>
          <span className="text-gray-500 truncate text-[15px]">@username</span>
        </div>
        <MoreHorizontal className="w-5 h-5 ml-auto hidden xl:block" />
      </div>
    </aside>
  );
}
