"use client";

import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useBoardStore } from "@/store/BoardStore";
import { useEffect, useState } from "react";
import fetchSuggestion from "@/lib/fetchSuggestion";

function Header() {
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString
  ])

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl md:p-0">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md filter blur-3xl opacity-40 -z-50" />
        <Image
          src="https://i.pinimg.com/originals/e2/ea/73/e2ea7377a609ec9c253d90a276b1edd6.png"
          alt="My Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-4 md:pb-0 object-contain"
          priority={true}
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial md:mr-5">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input type="text" placeholder="Search" value={searchString} onChange={e => setSearchString(e.target.value)} className="flex-1 outline-none" />

          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
