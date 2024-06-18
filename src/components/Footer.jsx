import React from 'react';
import { Play, Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
      <div className='flex flex-col items-center'>
        <div className='flex items-center gap-4'>
          <Shuffle size={20} className='text-zinc-200' />
          <SkipBack size={20} className='text-zinc-200' />
          <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-zinc-800'>
            <Play />
          </button>
          <SkipForward size={20} className='text-zinc-200' />
          <Repeat size={20} className='text-zinc-200' />
        </div>
      </div>
    </footer>
  );
}
