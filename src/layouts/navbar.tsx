import { BellIcon, BookmarkIcon, InboxIcon, SearchIcon } from "@/assets/icons";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
      <div className="relative">
        <SearchIcon className="absolute text-gray-400 -translate-y-1/2 top-1/2 left-3" />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-9 pr-4 rounded-md"
        />
      </div>
      <div className="flex items-center gap-4">
        <BellIcon />
        <BookmarkIcon />
        <InboxIcon />
        <span
          aria-hidden="true"
          className="block h-6 w-px rounded-full bg-gray-200"
        ></span>

        <a href="#" className="block shrink-0">
          <span className="sr-only">Profile</span>
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />
        </a>
      </div>
    </div>
  );
}
