import React from 'react'
import { motion } from 'framer-motion'
import { Target, TrendingUp, Users, Award, CheckCircle, Zap, Shield, Globe } from 'lucide-react'

export default function About() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const achievements = [
    {
      icon: Users,
      number: '200+',
      title: 'SaaS Transformados',
      description: 'Empresas que multiplicaram suas vendas com nossa metodologia'
    },
    {
      icon: TrendingUp,
      number: '300%',
      title: 'Crescimento Médio',
      description: 'Aumento médio de conversões em 90 dias'
    },
    {
      icon: Award,
      number: '95%',
      title: 'Taxa de Sucesso',
      description: 'Clientes que alcançaram ou superaram suas metas'
    },
    {
      icon: Globe,
      number: '15+',
      title: 'Países Atendidos',
      description: 'SaaS do Brasil e do mundo confiam em nós'
    }
  ]

  const differentials = [
    {
      icon: Target,
      title: 'Metodologia Exclusiva',
      description: 'Framework proprietário testado em centenas de SaaS com resultados comprovados'
    },
    {
      icon: Zap,
      title: 'Implementação Rápida',
      description: 'Resultados visíveis em 30 dias com estratégias de alta performance'
    },
    {
      icon: Shield,
      title: 'Garantia Total',
      description: 'Se não atingir as metas acordadas, devolvemos 100% do investimento'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Sustentável',
      description: 'Não vendemos milagres, construímos sistemas escaláveis e duradouros'
    }
  ]

  const problems = [
    'Seu CAC está subindo mês após mês?',
    'Taxa de conversão estagnada abaixo de 2%?',
    'Churn rate destruindo seu MRR?',
    'Marketing gerando apenas leads frios?',
    'Concorrentes roubando seus clientes?',
    'Equipe perdida sem estratégia clara?'
  ]

  const solutions = [
    'Redução de CAC em até 60%',
    'Conversões acima de 8%',
    'Churn rate abaixo de 3%',
    'Leads qualificados e quentes',
    'Posicionamento único no mercado',
    'Processos otimizados e automatizados'
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Target className="w-4 h-4" />
            <span className="font-semibold">Por que Blue Ocean?</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Pare de <span className="gradient-text">Desperdiçar</span> Dinheiro
            <br />
            Com Marketing Que <span className="text-red-500">Não Funciona</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos a única agência especializada 100% em SaaS que oferece 
            <span className="font-bold text-primary-600"> garantia de resultados ou seu dinheiro de volta</span>
          </p>
        </motion.div>

        {/* Problem vs Solution */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Problems */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
              <span className="text-3xl mr-3">😰</span>
              Sua Realidade Atual
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-red-700 font-medium">{problem}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <span className="text-3xl mr-3">🚀</span>
              Com Blue Ocean
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-green-700 font-medium">{solution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center card-hover"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-black text-gray-900 mb-2">{achievement.number}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Differentials */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por Que Somos Diferentes de Todas as Outras Agências?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {differentials.map((differential, index) => {
              const IconComponent = differential.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 card-hover"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{differential.title}</h4>
                      <p className="text-gray-600">{differential.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Pronto Para Transformar Seu SaaS em Uma Máquina de Vendas?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Agende uma consultoria gratuita e descubra como triplicar suas vendas em 90 dias
          </p>
          
          <motion.button
            onClick={scrollToContact}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 QUERO MINHA CONSULTORIA GRATUITA
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}