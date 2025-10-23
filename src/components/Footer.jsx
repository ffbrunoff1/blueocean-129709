import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Início', href: 'hero' },
    { name: 'Sobre Nós', href: 'about' },
    { name: 'Serviços', href: 'services' },
    { name: 'Contato', href: 'contact' }
  ]

  const services = [
    'Auditoria de Marketing',
    'Growth Hacking',
    'Geração de Leads',
    'Automação de Marketing',
    'Consultoria Estratégica',
    'Otimização de Conversão'
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pb-20">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <img 
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/b8729825-d680-4b91-aed8-8d4a4210263f/logo_1761250813334_0.png" 
                alt="Blue Ocean Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-white">Blue Ocean</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              A agência especializada em marketing para SaaS que potencializa negócios 
              do Brasil e do mundo. Transformamos seu SaaS em uma máquina de vendas.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>Brasília, DF - Brasil</span>
              </div>
              
              <motion.a
                href="tel:(61)98373-9088"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-primary-400" />
                <span>(61) 98373-9088</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 block">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white">Pronto Para Crescer?</h3>
            <p className="text-gray-300">
              Agende uma consultoria gratuita e descubra como triplicar suas vendas em 90 dias.
            </p>
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="w-full btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Consultoria Gratuita
            </motion.button>

            <div className="bg-primary-500/20 border border-primary-500/30 rounded-lg p-4">
              <p className="text-primary-400 font-semibold text-center">
                ⚡ Atendimento 24/7
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>
                © {currentYear} Blue Ocean. Todos os direitos reservados. | 
                <span className="ml-2">
                  Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">Papum</a></em>
                </span>
              </p>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
              whileHover={{ y: -5 }}
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}