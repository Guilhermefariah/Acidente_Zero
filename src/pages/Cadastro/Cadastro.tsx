import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import '@/app/globals.css';

const Cadastro: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Enviar dados para a API
        console.log(formData);
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <form onSubmit={submitForm} className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 p-6 space-y-4 rounded-md shadow-md">
                    <h1 className="text-gray-700 text-4xl font-serif text-center mb-6">Cadastro</h1>
                    <div>
                        <label htmlFor="name" className="block text-2xl font-serif text-gray-700">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Digite seu nome"
                            value={formData.name}
                            onChange={setValue}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-2xl font-serif text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Digite seu email"
                            value={formData.email}
                            onChange={setValue}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-2xl font-serif text-gray-700">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Digite sua senha"
                            value={formData.password}
                            onChange={setValue}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <button type="submit" className="bg-blue-600 text-gray-100 hover:text-gray-200 text-2xl py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 transform hover:scale-105 w-full">Cadastrar</button>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default Cadastro;
