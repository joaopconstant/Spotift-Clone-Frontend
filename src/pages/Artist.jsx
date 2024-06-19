import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import axios from 'axios';

export default function Artist() {
  const { id } = useParams();
  const [artista, setArtista] = useState(null);

  useEffect(() => {
    fetchArtista();
  }, [id]);

  const fetchArtista = async () => {
    try {
      const response = await axios.get(`https://ibmec-cloud-backend-appservice.azurewebsites.net/banda/${id}`);
      setArtista(response.data);
    } catch (error) {
      console.error('Erro ao buscar artista:', error);
    }
  };

  if (!artista) return <div>Carregando...</div>;

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <img src={artista.imagem} alt={artista.nome} className='w-32 h-32 object-cover rounded-full' />
            <div>
              <h1 className='text-3xl font-semibold'>{artista.nome}</h1>
              <p className='text-zinc-400'>{artista.descricao}</p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
