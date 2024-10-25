import React from 'react'
import { motion } from 'framer-motion'
import { Logo } from '@/components/ui/header/Logo'
import { Menu } from '@/components/ui/header/Menu'
import { Search } from '@/components/ui/header/Search'
import { UserMenu } from '@/components/ui/header/UserMenu'
import { Navigation } from '@/components/ui/header/Navigation'
import { PageTitle } from '@/components/ui/header/PageTitle'

export const Header: React.FC = () => {
  const pageTitle = 'Acidente Zero'

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 shadow-lg'
    >
      <Navigation />
      <div className='flex flex-col md:flex-row items-center justify-between px-4 py-2 space-y-2 md:space-y-0'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='flex items-center space-x-2'
        >
          <Logo />
          <PageTitle title={pageTitle} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4'
        >
          <Search />
          <UserMenu />
        </motion.div>
      </div>
      <Menu />
    </motion.header>
  )
}

