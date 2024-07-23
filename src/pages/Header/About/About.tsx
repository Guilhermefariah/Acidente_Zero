import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const About: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800"
                >
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl font-serif mb-4">Sobre o Acidente Zero</h1>
                        <p className="text-2xl font-serif mb-4">
                            O Acidente Zero é uma plataforma inovadora criada para melhorar a segurança urbana, permitindo que os cidadãos relatem e monitorem a falta de calçadas e lombadas em suas cidades.
                        </p>
                        <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Equipe</h2>
                        <ul className="list-disc list-inside text-2xl font-serif">
                            <li><strong>Guilherme Faria:</strong> Software Developer.</li>
                        </ul>
                    </div>
                </motion.section>
            </main>
            <Footer />
        </div>
    );
}

export default About;
