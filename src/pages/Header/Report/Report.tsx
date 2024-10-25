import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/app/(accidentzero)/Header'
import { Footer } from '@/app/(accidentzero)/Footer'

const Report: React.FC = () => {
    const [formData, setFormData] = useState({
        location: '',
        description: '',
        image: null as File | null,
    })
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null)

    const setValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, image: e.target.files[0] })
        }
    }

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            // Lógica para backend
            setSubmissionStatus('Seu relatório foi enviado com sucesso!')
        } catch (error) {
            setSubmissionStatus('Ocorreu um erro ao enviar o relatório. Por favor, tente novamente.')
        }
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
                        Relatar Problema
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <label htmlFor='location' className='block text-2xl font-serif text-gray-100'>Localização</label>
                        <input
                            type='text'
                            id='location'
                            name='location'
                            placeholder='Digite a localização'
                            value={formData.location}
                            onChange={setValue}
                            className='mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-700 text-white'
                            required
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <label htmlFor='description' className='block text-2xl font-serif text-gray-100'>Descrição</label>
                        <textarea
                            id='description'
                            name='description'
                            placeholder='Descreva o problema'
                            value={formData.description}
                            onChange={setValue}
                            className='mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-700 text-white'
                            rows={4}
                            required
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <label htmlFor='image' className='block text-2xl font-serif text-gray-100'>Imagem (opcional)</label>
                        <input
                            type='file'
                            id='image'
                            name='image'
                            onChange={handleFileChange}
                            className='mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-700 text-white'
                        />
                        {formData.image && (
                            <p className='mt-2 text-gray-300'>Arquivo selecionado: {formData.image.name}</p>
                        )}
                    </motion.div>
                    <motion.button
                        type='submit'
                        className='bg-blue-600 text-gray-100 hover:text-gray-200 text-2xl py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 transform hover:scale-105 w-full'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        Enviar Relatório
                    </motion.button>
                </motion.form>
                {submissionStatus && (
                    <motion.div
                        className='mt-4 text-center'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className='text-lg font-semibold text-gray-300'>{submissionStatus}</p>
                    </motion.div>
                )}
            </main>
            <Footer />
        </div>
    )
}

export default Report