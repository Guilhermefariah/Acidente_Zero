import React from 'react'
import { motion } from 'framer-motion'

const pageTitleClass = {
    title: 'text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 font-serif ml-4'
}

interface PageTitleProps {
    title: string
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
    return (
        <motion.h1
            className={pageTitleClass.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {title}
        </motion.h1>
    )
}
