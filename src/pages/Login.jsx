import React from 'react';

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white/5 p-8 rounded">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {/* Formulário de login */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium ">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium ">Password</label>
            <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-indigo-600">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
