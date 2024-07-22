import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import '@/app/globals.css';

const Eventos: React.FC = () => {
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
                        Events
                    </motion.h1>
                    <motion.p
                        className="text-gray-600 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Stay up to date with our latest events. Check back regularly for updates and announcements.
                    </motion.p>
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h2 className="text-gray-700 text-2xl font-semibold">Upcoming Events</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Web Development Workshop - July 30, 2024</li>
                            <li>React Conference - August 15, 2024</li>
                            <li>Hackathon - September 10, 2024</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <h2 className="text-gray-700 text-2xl font-semibold">Past Events</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>JavaScript Summit - June 25, 2024</li>
                            <li>CSS Tricks Webinar - May 20, 2024</li>
                            <li>Tech Expo - April 15, 2024</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}

export default Eventos;
