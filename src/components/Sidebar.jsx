// components/Sidebar.js

import React from 'react';
import { HomeIcon, Bookmark, UserRoundPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <nav className='space-y-5'>
        <Link to="/" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <HomeIcon />
          Home
        </Link>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Bookmark />
          Your Library
        </a>
        <Link to="/cadastrar" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <UserRoundPlus />
          Cadastrar Artista
        </Link>
      </nav>

      <nav className='mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-2'>
        <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Músicas Curtidas</a>
        <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 1</a>
        <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 2</a>
      </nav>
    </aside>
  );
}
