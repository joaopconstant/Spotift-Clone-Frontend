import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import axios from 'axios';

export default function Artist() {
  const { id } = useParams();
  const [artista, setArtista] = useState(null);
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    fetchArtista();
    fetchMusicas();
  }, [id]);

  const fetchArtista = async () => {
    try {
      const response = await axios.get(`https://ibmec-cloud-backend-appservice.azurewebsites.net/banda/${id}`);
      setArtista(response.data);
    } catch (error) {
      console.error('Erro ao buscar artista:', error);
    }
  };

  const fetchMusicas = async () => {
    try {
      const response = await axios.get(`https://ibmec-cloud-backend-appservice.azurewebsites.net/banda/${id}/musica`);
      setMusicas(response.data);
    } catch (error) {
      console.error('Erro ao buscar músicas:', error);
    }
  };

  if (!artista) return <div>Carregando...</div>;

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4 mb-6'>
            <img src={artista.imagem} alt={artista.nome} className='w-32 h-32 object-cover rounded-full' />
            <div>
              <h1 className='text-3xl font-semibold'>{artista.nome}</h1>
              <p className='text-zinc-400'>{artista.descricao}</p>
            </div>
          </div>
          <div className='font-semibold text-2xl mb-4'>Músicas</div>
          <div className='grid grid-cols-7 gap-4'>
            {musicas.map((musica) => (
              <div key={musica.id} className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <img src={musica.imagem} alt={musica.nome} className='w-full h-auto object-cover rounded-md' />
                <strong className='font-semibold'>{musica.nome}</strong>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
