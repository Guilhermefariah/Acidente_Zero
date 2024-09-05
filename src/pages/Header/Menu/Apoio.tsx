import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import '@/app/globals.css'

const Apoio: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800 p-6 space-y-6 rounded-md shadow-md"
                >
                    <motion.h1
                        className="text-gray-100 text-4xl font-serif text-center mb-6"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Apoio
                    </motion.h1>
                    <motion.p
                        className="text-gray-300 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Bem-vindo à nossa página de suporte. Estamos aqui para ajudar com qualquer dúvida ou problema que você possa ter.
                    </motion.p>
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h2 className="text-gray-100 text-2xl font-semibold">Contate-Nos</h2>
                        <p className="text-gray-300">
                            Se você precisar de suporte, sinta-se à vontade para entrar em contato conosco através dos seguintes métodos:
                        </p>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>Email: suporte@example.com</li>
                            <li>Telefone: (123) 456-7890</li>
                            <li>Chat ao Vivo: Disponível 24/7</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <h2 className="text-gray-100 text-2xl font-semibold">Perguntas Frequentes</h2>
                        <p className="text-gray-300">
                            Confira nossa seção de Perguntas Frequentes para encontrar respostas para perguntas comuns.
                        </p>
                    </motion.div>
                </motion.div>
            </main>
            <Footer />
        </div>
    )
}

export default Apoio
