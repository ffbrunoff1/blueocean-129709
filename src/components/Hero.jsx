import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Zap, Target, CheckCircle, Users, Award, Rocket } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const stats = [
    { icon: Users, value: '200+', label: 'SaaS Atendidos' },
    { icon: TrendingUp, value: '300%', label: 'Crescimento Médio' },
    { icon: Award, value: '95%', label: 'Taxa de Sucesso' },
    { icon: Rocket, value: '24h', label: 'Tempo de Resposta' }
  ]

  const benefits = [
    'Estratégias personalizadas para seu SaaS',
    'Aumento comprovado de conversões',
    'Automação de marketing avançada',
    'Consultoria estratégica contínua',
    'Resultados mensuráveis em 30 dias',
    'Suporte especializado 24/7'
  ]

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      <div className="relative container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary-500/20 border border-primary-500/30 rounded-full px-4 py-2"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Zap className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 font-medium">Agência #1 em Marketing para SaaS</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Seu SaaS Está
                <span className="block gradient-text">Desperdiçando</span>
                <span className="block text-white">Oportunidades?</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Enquanto você lê isso, seus concorrentes estão conquistando seus clientes ideais. 
                <span className="text-primary-400 font-semibold"> Pare de perder vendas!</span>
              </p>
            </motion.div>

            {/* Problem Agitation */}
            <motion.div
              className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-red-400 font-bold text-lg">⚠️ Problemas que estão matando seu SaaS:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• CAC (Custo de Aquisição) subindo todo mês</li>
                <li>• Taxa de conversão estagnada abaixo de 2%</li>
                <li>• Churn rate destruindo seu MRR</li>
                <li>• Marketing sem estratégia gerando leads frios</li>
              </ul>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              className="grid sm:grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary group flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>🚀 QUERO TRIPLICAR MINHAS VENDAS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={scrollToContact}
                className="btn-outline group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Consultoria Gratuita</span>
              </motion.button>
            </motion.div>

            {/* Urgency Element */}
            <motion.div
              className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-yellow-400 font-bold text-center">
                ⏰ ATENÇÃO: Apenas 3 vagas disponíveis este mês para consultoria intensiva!
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <IconComponent className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>

            {/* Main Visual Element */}
            <motion.div
              className="relative bg-gradient-to-br from-primary-500/20 to-transparent border border-primary-500/30 rounded-2xl p-8"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, rotateY: 15 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="text-center space-y-6">
                <motion.div
                  className="inline-flex items-center justify-center w-24 h-24 bg-primary-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Target className="w-12 h-12 text-white" />
                </motion.div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Fórmula Blue Ocean</h3>
                  <p className="text-gray-300">
                    Metodologia exclusiva que já transformou +200 SaaS em máquinas de vendas
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-primary-400 font-bold text-lg">Resultados Garantidos:</div>
                  <div className="text-white text-3xl font-black">30 Dias ou Devolvemos Seu Dinheiro</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}