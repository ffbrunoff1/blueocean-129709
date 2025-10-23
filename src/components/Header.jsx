import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { name: 'Início', href: 'hero' },
    { name: 'Sobre Nós', href: 'about' },
    { name: 'Serviços', href: 'services' },
    { name: 'Contato', href: 'contact' }
  ]

  const HeaderContent = () => (
    <>
      <motion.div 
        className="flex items-center space-x-3"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <img 
          src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/b8729825-d680-4b91-aed8-8d4a4210263f/logo_1761250813334_0.png" 
          alt="Blue Ocean Logo" 
          className="h-10 w-auto"
        />
        <span className={`text-xl font-bold transition-colors duration-300 ${
          isScrolled ? 'text-gray-900' : 'text-white'
        }`}>
          Blue Ocean
        </span>
      </motion.div>

      <nav className="hidden md:flex items-center space-x-8">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className={`font-medium transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-gray-700 hover:text-primary-600' 
                : 'text-gray-200 hover:text-primary-400'
            }`}
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.name}
          </motion.button>
        ))}
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <motion.a
          href="tel:(61)98373-9088"
          className={`flex items-center space-x-2 transition-colors duration-300 ${
            isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-200 hover:text-primary-400'
          }`}
          whileHover={{ scale: 1.05 }}
        >
          <Phone size={18} />
          <span className="font-medium">(61) 98373-9088</span>
        </motion.a>
        
        <motion.button
          onClick={() => scrollToSection('contact')}
          className="btn-primary text-sm px-6 py-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Consultoria Gratuita
        </motion.button>
      </div>

      <motion.button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
          isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>
    </>
  )

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 px-4">
            <HeaderContent />
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-xl"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="px-4 py-6 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <a
                    href="tel:(61)98373-9088"
                    className="flex items-center space-x-3 text-gray-700 font-medium py-2"
                  >
                    <Phone size={20} />
                    <span>(61) 98373-9088</span>
                  </a>
                  
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full btn-primary"
                  >
                    Consultoria Gratuita
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}