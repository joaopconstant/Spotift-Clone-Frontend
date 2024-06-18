import React from 'react';
import Sidebar from '../components/Sidebar';
import Greeting from '../components/Greetings';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='font-semibold text-3xl mt-5'>
            <Greeting />
          </div>
          <div className='grid grid-cols-7 gap-4 mt-7'>
            <a href='' className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              
              <strong className='font-semibold'>Nome da Musica</strong>
              <span className='text-sm text-zinc-400'>Nome do artista ou banda</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
