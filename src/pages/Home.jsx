import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Greeting from '../components/Greetings';
import Footer from '../components/Footer';
import axios from 'axios';

export default function Home() {
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    fetchMusicas();
  }, []);

  const fetchMusicas = async () => {
    try {
      const response = await axios.get('https://ibmec-cloud-backend-appservice.azurewebsites.net/musicas'); // Endpoint do seu backend
      const musicasComBanda = await Promise.all(response.data.map(async (musica) => {
        const responseBanda = await axios.get(`https://ibmec-cloud-backend-appservice.azurewebsites.net/banda/musica/${musica.id}`);
        return { ...musica, artista: responseBanda.data.nome, bandaId: responseBanda.data.id };
      }));
      setMusicas(musicasComBanda); // Assume que o backend retorna um array de músicas
    } catch (error) {
      console.error('Erro ao buscar músicas:', error);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='font-semibold text-3xl mt-5'>
            <Greeting />
          </div>
          <div className='grid grid-cols-7 gap-4 mt-7'>
            {musicas.map((musica) => (
              <div key={musica.id} className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <img src={musica.imagem} alt={musica.nome} className='w-full h-auto object-cover rounded-md' />
                <strong className='font-semibold'>{musica.nome}</strong>
                <Link to={`/banda/${musica.bandaId}`} className='text-sm text-zinc-400 hover:underline'>{musica.artista}</Link>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
