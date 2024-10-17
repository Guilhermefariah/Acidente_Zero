import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/(accidentzero)/Footer'

  
const News: React.FC = () => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-900 text-white'>
            <Header />
            <main className='flex-grow container mx-auto p-4'>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-gray-800 p-6 space-y-6 rounded-md shadow-md'
                >
                    <motion.h1 
                        className='text-gray-100 text-4xl font-serif text-center mb-6'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        News
                    </motion.h1>
                    <motion.p
                        className='text-gray-300 text-lg'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sit vel perspiciatis dolore non temporibus repellendus, itaque architecto ducimus dolores, tempora repudiandae omnis quos molestias saepe, quaerat consectetur nemo quam!
                    </motion.p>
                    <motion.div
                        className='space-y-4'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h2 className='text-gray-100 text-2xl font-semibold'>Latest News</h2>
                        <ul className='list-disc list-inside text-gray-300'>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sit vel perspiciatis dolore non temporibus repellendus, itaque architecto ducimus dolores, tempora repudiandae omnis quos molestias saepe, quaerat consectetur nemo quam! - July 25, 2024</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sit vel perspiciatis dolore non temporibus repellendus, itaque architecto ducimus dolores, tempora repudiandae omnis quos molestias saepe, quaerat consectetur nemo quam!- July 20, 2024</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sit vel perspiciatis dolore non temporibus repellendus, itaque architecto ducimus dolores, tempora repudiandae omnis quos molestias saepe, quaerat consectetur nemo quam! - July 15, 2024</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className='space-y-4'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <h2 className='text-gray-100 text-2xl font-semibold'>In the Media</h2>
                        <ul className='list-disc list-inside text-gray-300'>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sit vel perspiciatis dolore non temporibus repellendus, itaque architecto ducimus dolores, tempora repudiandae omnis quos molestias saepe, quaerat consectetur nemo quam! - July 10, 2024</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sit vel perspiciatis dolore non temporibus repellendus, itaque architecto ducimus dolores, tempora repudiandae omnis quos molestias saepe, quaerat consectetur nemo quam!- July 5, 2024</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sit vel perspiciatis dolore non temporibus repellendus, itaque architecto ducimus dolores, tempora repudiandae omnis quos molestias saepe, quaerat consectetur nemo quam! - July 1, 2024</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </main>
            <Footer />
        </div>
    )
}

export default News