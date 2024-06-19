import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import axios from 'axios';

export default function Artist() {
  const { id } = useParams();
  const [artista, setArtista] = useState(null);
  const [musicas, setMusicas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newMusic, setNewMusic] = useState({ nome: '', imagem: '', duracao: '' });

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

  const handleAddMusic = async () => {
    try {
      await axios.post(`https://ibmec-cloud-backend-appservice.azurewebsites.net/banda/${id}/musica`, newMusic);
      fetchMusicas();
      setShowModal(false);
      setNewMusic({ nome: '', imagem: '', duracao: '' });
    } catch (error) {
      console.error('Erro ao adicionar música:', error);
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
          <button
            className="mb-4 bg-green-500 text-white p-2 rounded-md"
            onClick={() => setShowModal(true)}>
            Adicionar Música
          </button>
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

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white/5 p-4 rounded-md">
            <h2 className="text-2xl mb-4">Adicionar Música</h2>
            <input
              type="text"
              placeholder="Nome"
              value={newMusic.nome}
              onChange={(e) => setNewMusic({ ...newMusic, nome: e.target.value })}
              className="mb-2 p-2 bg-zinc-900 border border-green-500 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="URL da Imagem"
              value={newMusic.imagem}
              onChange={(e) => setNewMusic({ ...newMusic, imagem: e.target.value })}
              className="mb-2 p-2 bg-zinc-900 border border-green-500 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Duração"
              value={newMusic.duracao}
              onChange={(e) => setNewMusic({ ...newMusic, duracao: e.target.value })}
              className="mb-4 p-2 bg-zinc-900 border border-green-500 rounded-md w-full"
            />
            <button
              className="bg-green-500 text-white p-2 rounded-md mr-2"
              onClick={handleAddMusic}
            >
              Adicionar
            </button>
            <button
              className="bg-gray-500 text-white p-2 rounded-md"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
