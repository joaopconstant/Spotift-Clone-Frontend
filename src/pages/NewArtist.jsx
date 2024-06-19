import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function NewArtist() {
  const [nomeBanda, setNomeBanda] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagemBanda, setImagemBanda] = useState('');
  const [nomeMusica, setNomeMusica] = useState('');
  const [imagemMusica, setImagemMusica] = useState('');
  const [duracao, setDuracao] = useState('');
  const [bandaId, setBandaId] = useState(null); // Estado para armazenar o ID da banda criada
  const history = useHistory();

  const handleCadastroBanda = async () => {
    try {
      const bandaData = {
        nome: nomeBanda,
        descricao: descricao,
        imagem: imagemBanda,
        musicas: [{
          nome: nomeMusica,
          imagem: imagemMusica,
          duracao: Number(duracao)
        }]
      };

      const response = await axios.post('https://ibmec-cloud-backend-appservice.azurewebsites.net/banda', bandaData);
      console.log('Banda cadastrada:', response.data);
      setBandaId(response.data.id); // Armazena o ID da banda recém-criada
      // Redireciona para a página da banda recém-criada
      history.push(`/banda/${response.data.id}`);
    } catch (error) {
      console.error('Erro ao cadastrar banda:', error);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-semibold mb-6">Cadastro de Artista</h1>
          <div className="grid grid-cols-1 gap-4 px-20">
            <div>
              <label htmlFor="nomeBanda" className="block text-sm font-semibold">Nome do Artista</label>
              <input type="text" id="nomeBanda" className="p-2 bg-zinc-900 border rounded-md w-full" value={nomeBanda} onChange={(e) => setNomeBanda(e.target.value)} />
            </div>
            <div>
              <label htmlFor="descricao" className="block text-sm font-semibold">Descrição</label>
              <textarea id="descricao" className="p-2 bg-zinc-900 border rounded-md w-full" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            </div>
            <div>
              <label htmlFor="imagemBanda" className="block text-sm font-semibold">URL da Imagem do Artista</label>
              <input type="text" id="imagemBanda" className="p-2 bg-zinc-900 border rounded-md w-full" value={imagemBanda} onChange={(e) => setImagemBanda(e.target.value)} />
            </div>
            <div>
              <label htmlFor="nomeMusica" className="block text-sm font-semibold">Nome da Música</label>
              <input type="text" id="nomeMusica" className="p-2 bg-zinc-900 border rounded-md w-full" value={nomeMusica} onChange={(e) => setNomeMusica(e.target.value)} />
            </div>
            <div>
              <label htmlFor="imagemMusica" className="block text-sm font-semibold">URL da Imagem da Música</label>
              <input type="text" id="imagemMusica" className="p-2 bg-zinc-900 border rounded-md w-full" value={imagemMusica} onChange={(e) => setImagemMusica(e.target.value)} />
            </div>
            <div>
              <label htmlFor="duracao" className="block text-sm font-semibold">Duração da Música (segundos)</label>
              <input type="number" id="duracao" className="p-2 bg-zinc-900 border rounded-md w-full" value={duracao} onChange={(e) => setDuracao(e.target.value)} />
            </div>
            <div className="flex justify-end">
              <button className="bg-green-500 text-white p-2 rounded-md mr-2" onClick={handleCadastroBanda}>Cadastrar Banda</button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
