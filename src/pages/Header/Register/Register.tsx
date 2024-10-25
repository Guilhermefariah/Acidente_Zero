import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/app/(accidentzero)/Header'
import { Footer } from '@/app/(accidentzero)/Footer'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        import('firebase/auth').then(({ getAuth }) => {
            createUserWithEmailAndPassword(getAuth(), formData.email, formData.password)
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log('Usuário criado:', user)
                })          
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    console.error('Erro:', errorCode, errorMessage)
            })
        })
    }

    return (
        <div className='flex flex-col min-h-screen bg-gray-900 text-white'>
            <Header />
            <main className='flex-grow container mx-auto p-4'>
                <motion.form
                    onSubmit={submitForm}
                    className='bg-gray-800 p-6 space-y-4 rounded-md shadow-md'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h1
                        className='text-gray-100 text-4xl font-serif text-center mb-6'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Crie sua conta
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <label htmlFor='name' className='block text-2xl font-serif text-gray-300'>Nome</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Digite seu nome'
                            value={formData.name}
                            onChange={setValue}
                            className='mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-700 text-white'
                            aria-required='true'
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <label htmlFor='email' className='block text-2xl font-serif text-gray-300'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Digite seu email'
                            value={formData.email}
                            onChange={setValue}
                            className='mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-700 text-white'
                            aria-required='true'
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <label htmlFor='password' className='block text-2xl font-serif text-gray-300'>Senha</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Digite sua senha'
                            value={formData.password}
                            onChange={setValue}
                            className='mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-700 text-white'
                            aria-required='true'
                        />
                    </motion.div>
                    <motion.button
                        type='submit'
                        className='bg-gray-900 text-gray-100 hover:text-gray-200 text-2xl py-2 px-4 rounded-md hover:bg-gray-700 transition duration-200 transform hover:scale-105 w-full'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        Cadastrar
                    </motion.button>
                </motion.form>
            </main>
            <Footer />
        </div>
    )
}

export default Register
