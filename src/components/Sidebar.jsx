import React from 'react';
import { HomeIcon, Bookmark } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <nav className='space-y-5'>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <HomeIcon />
          Home
        </a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Bookmark />
          Your Library
        </a>
      </nav>

      <nav className='mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-2'>
        <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Músicas Curtidas</a>
        <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 1</a>
        <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 2</a>
      </nav>
    </aside>
  );
}
