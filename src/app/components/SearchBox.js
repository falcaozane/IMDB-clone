"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {BsSearch} from "react-icons/bs"
export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gary-500 outline-none bg-transparent flex-1 border-amber-300"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-400 disabled:text-gray-400 flex"
      >
        Search<BsSearch className="dark:text-amber-400 mx-2 font-bold"/>
      </button>
    </form>
  );
}