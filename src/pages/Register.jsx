import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://ibmec-cloud-backend-appservice.azurewebsites.net/usuario', {
        nome: formData.name,
        senha: formData.password,
        planoId: '4f74acfe-022a-11ef-8e1e-000d3a9c688c', // Plano ID padrão
        email: formData.email,
      });
      console.log('Registro feito com sucesso:', response.data);
      // Lógica para redirecionar ou mostrar mensagem de sucesso
    } catch (error) {
      console.error('Erro ao registrar:', error);
      // Lógica para mostrar mensagem de erro ao usuário
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white/5 p-8 rounded ">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        {/* Formulário de registro */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-zinc-900 mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none border border-white/5 focus:ring-green-500 focus:border-green-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="bg-zinc-900 mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none border border-white/5 focus:ring-green-500 focus:border-green-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="bg-zinc-900 mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none border border-white/5 focus:ring-green-500 focus:border-green-500 sm:text-sm" />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register;
