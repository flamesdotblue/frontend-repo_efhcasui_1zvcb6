import React from 'react';
import { BookOpen, Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-500 grid place-items-center text-white">
            <BookOpen size={18} />
          </div>
          <span className="font-semibold text-lg tracking-tight">NovelFlix</span>
        </div>
        <div className="hidden md:flex items-center gap-2 w-1/2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search novels, authors, genres..."
              className="w-full rounded-md bg-zinc-100 dark:bg-zinc-800 px-10 py-2 text-sm outline-none focus:ring-2 ring-indigo-500 placeholder:text-zinc-400"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          </div>
        </div>
        <button className="inline-flex items-center gap-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 py-2 text-sm font-medium hover:opacity-90 transition">
          <User size={16} />
          Sign in
        </button>
      </div>
    </header>
  );
}
