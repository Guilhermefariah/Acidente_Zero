import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import '@/app/globals.css';

const Apoio: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 p-6 space-y-6 rounded-md shadow-md"
                >
                    <motion.h1 
                        className="text-gray-700 text-4xl font-serif text-center mb-6"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Support
                    </motion.h1>
                    <motion.p
                        className="text-gray-600 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Welcome to our support page. We are here to assist you with any questions or issues you may have.
                    </motion.p>
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h2 className="text-gray-700 text-2xl font-semibold">Contact Us</h2>
                        <p className="text-gray-600">
                            If you need support, feel free to reach out to us through any of the following methods:
                        </p>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Email: support@example.com</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Live Chat: Available 24/7</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <h2 className="text-gray-700 text-2xl font-semibold">FAQ</h2>
                        <p className="text-gray-600">
                            Check out our frequently asked questions to find quick answers to common issues.
                        </p>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>How do I reset my password?</li>
                            <li>How do I contact customer support?</li>
                            <li>Where can I find the user manual?</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}

export default Apoio;
