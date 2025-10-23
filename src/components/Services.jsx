import React from 'react'
import { motion } from 'framer-motion'
import { Target, TrendingUp, Zap, Users, CheckCircle, ArrowRight, Star, Award, Rocket, Shield } from 'lucide-react'

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const mainServices = [
    {
      icon: Target,
      title: 'Auditoria Completa de Marketing',
      description: 'Análise profunda de todos os seus funis de vendas, identificando vazamentos e oportunidades',
      features: [
        'Análise de conversão por etapa',
        'Mapeamento da jornada do cliente',
        'Identificação de gargalos',
        'Benchmarking com concorrentes',
        'Plano de ação detalhado'
      ],
      duration: '7 dias',
      investment: 'Incluso na consultoria'
    },
    {
      icon: Rocket,
      title: 'Estratégia de Growth Hacking',
      description: 'Implementação de táticas comprovadas para crescimento acelerado e sustentável',
      features: [
        'Otimização de funis de conversão',
        'Automação de marketing avançada',
        'Estratégias de retenção',
        'Testes A/B contínuos',
        'Métricas de performance'
      ],
      duration: '30 dias',
      investment: 'ROI de 5x garantido'
    },
    {
      icon: Users,
      title: 'Geração de Leads Qualificados',
      description: 'Sistema completo para atrair e converter prospects ideais para seu SaaS',
      features: [
        'Campanhas multi-canal',
        'Lead scoring automatizado',
        'Nutrição de leads',
        'Qualificação de MQLs',
        'Integração com CRM'
      ],
      duration: 'Ongoing',
      investment: 'CAC reduzido em 60%'
    }
  ]

  const bonuses = [
    {
      icon: Award,
      title: 'Acesso ao Blue Ocean Academy',
      value: 'R$ 2.997',
      description: 'Curso completo com +50 aulas sobre marketing para SaaS'
    },
    {
      icon: Shield,
      title: 'Garantia Blindada',
      value: 'R$ 10.000',
      description: '90 dias de garantia total ou devolvemos 100% do investimento'
    },
    {
      icon: Star,
      title: 'Consultoria VIP Mensal',
      value: 'R$ 1.497',
      description: 'Sessões estratégicas exclusivas com nossos especialistas'
    }
  ]

  const testimonialStats = [
    { metric: '847%', description: 'Aumento em leads qualificados - TechSaaS' },
    { metric: '432%', description: 'Crescimento em MRR - DataFlow' },
    { metric: '67%', description: 'Redução em CAC - CloudSync' },
    { metric: '91%', description: 'Melhoria em retenção - AI Solutions' }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-500/20 border border-primary-500/30 rounded-full px-4 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 font-semibold">Metodologia Blue Ocean</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            A Fórmula Que <span className="gradient-text">Triplicou</span>
            <br />
            As Vendas de +200 SaaS
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Nossa metodologia proprietária combina growth hacking, automação avançada e 
            estratégias de retenção para transformar seu SaaS em uma máquina de vendas
          </p>

          {/* Urgency Alert */}
          <motion.div
            className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-red-400 font-bold text-lg">
              ⚠️ ATENÇÃO: Apenas 3 vagas disponíveis para consultoria intensiva este mês!
            </p>
          </motion.div>
        </motion.div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-xl mb-6">
                  <IconComponent className="w-8 h-8 text-primary-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Prazo:</span>
                    <span className="text-primary-400 font-semibold">{service.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Resultado:</span>
                    <span className="text-green-400 font-semibold">{service.investment}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonial Stats */}
        <motion.div
          className="bg-primary-500/10 border border-primary-500/20 rounded-2xl p-8 mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Resultados Reais de Clientes Reais
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-black text-primary-400 mb-2">{stat.metric}</div>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bonuses Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-4">
            Mas Espera... Tem Mais! 🎁
          </h3>
          <p className="text-xl text-gray-300 text-center mb-12">
            Além da consultoria completa, você recebe esses bônus exclusivos:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => {
              const IconComponent = bonus.icon
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-6 text-center"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <IconComponent className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">{bonus.title}</h4>
                  <div className="text-2xl font-black text-yellow-400 mb-3">{bonus.value}</div>
                  <p className="text-gray-300 text-sm">{bonus.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Valor Total: R$ 14.491
          </h3>
          <p className="text-xl text-white/90 mb-6">
            Mas hoje você investe apenas R$ 4.997 (3x sem juros)
          </p>
          
          <div className="bg-white/20 rounded-lg p-6 mb-8">
            <h4 className="text-2xl font-bold text-white mb-2">Garantia Blindada de 90 Dias</h4>
            <p className="text-white/90">
              Se não triplicar suas vendas ou não ficar 100% satisfeito, 
              devolvemos todo seu investimento sem perguntas
            </p>
          </div>
          
          <motion.button
            onClick={scrollToContact}
            className="bg-white text-primary-600 px-12 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 QUERO TRIPLICAR MINHAS VENDAS AGORA
            <ArrowRight className="inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Final Urgency */}
        <motion.div
          className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-red-400 font-bold text-lg">
            ⏰ Esta oferta expira em 48 horas ou quando as 3 vagas forem preenchidas!
          </p>
        </motion.div>
      </div>
    </section>
  )
}