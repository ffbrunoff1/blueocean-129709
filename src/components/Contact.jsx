import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Phone, Mail, MessageCircle, Send, CheckCircle, AlertCircle, Clock, Target } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    monthlyRevenue: '',
    mainChallenge: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        recipientEmail: "",
        token: token
      }
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      
      if (response.ok) {
        setStatus({
          message: '🚀 Consultoria agendada! Nossa equipe entrará em contato em até 2 horas.',
          isError: false
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          monthlyRevenue: '',
          mainChallenge: '',
          message: ''
        })
      } else {
        throw new Error('Erro no envio')
      }
    } catch (error) {
      setStatus({
        message: 'Erro ao enviar mensagem. Tente novamente ou nos chame no WhatsApp.',
        isError: true
      })
    } finally {
      setIsSubmitting(false)
      recaptchaRef.current.reset()
    }
  }

  const challenges = [
    'CAC muito alto',
    'Conversões baixas',
    'Alto churn rate',
    'Leads de baixa qualidade',
    'Sem estratégia definida',
    'Concorrência agressiva',
    'Equipe sem direção',
    'Outro'
  ]

  const revenueRanges = [
    'Até R$ 10k/mês',
    'R$ 10k - R$ 50k/mês',
    'R$ 50k - R$ 100k/mês',
    'R$ 100k - R$ 500k/mês',
    'R$ 500k - R$ 1M/mês',
    'Acima de R$ 1M/mês'
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-white">
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
            <span className="font-semibold">Consultoria Gratuita</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Pronto Para <span className="gradient-text">Triplicar</span>
            <br />
            Suas Vendas em 90 Dias?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Preencha o formulário abaixo e receba uma consultoria estratégica gratuita 
            personalizada para seu SaaS. Nossa equipe entrará em contato em até 2 horas.
          </p>

          {/* Urgency Banner */}
          <motion.div
            className="bg-red-100 border border-red-200 rounded-xl p-4 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-red-600 font-bold flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2" />
              Apenas 3 vagas disponíveis este mês - Garante já a sua!
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Agende Sua Consultoria Gratuita
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@empresa.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Nome do seu SaaS"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Faturamento Mensal Atual *
                </label>
                <select
                  name="monthlyRevenue"
                  value={formData.monthlyRevenue}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Selecione sua faixa de faturamento</option>
                  {revenueRanges.map((range, index) => (
                    <option key={index} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Principal Desafio *
                </label>
                <select
                  name="mainChallenge"
                  value={formData.mainChallenge}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Qual seu maior desafio hoje?</option>
                  {challenges.map((challenge, index) => (
                    <option key={index} value={challenge}>{challenge}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Conte Mais Sobre Seu Desafio
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Descreva brevemente seu principal problema e o que espera alcançar..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary group flex items-center justify-center space-x-3 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>🚀 QUERO MINHA CONSULTORIA GRATUITA</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                size="invisible"
              />

              {status.message && (
                <motion.div
                  className={`p-4 rounded-lg flex items-center space-x-3 ${
                    status.isError 
                      ? 'bg-red-50 border border-red-200 text-red-700' 
                      : 'bg-green-50 border border-green-200 text-green-700'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.isError ? (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="font-medium">{status.message}</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Benefits */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Direct Contact */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Prefere Falar Direto?</h3>
              
              <div className="space-y-4 mb-6">
                <motion.a
                  href="tel:(61)98373-9088"
                  className="flex items-center space-x-4 hover:bg-white/10 p-3 rounded-lg transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">(61) 98373-9088</div>
                    <div className="text-sm opacity-80">Ligação ou WhatsApp</div>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://wa.me/5561983739088?text=Olá! Gostaria de agendar uma consultoria gratuita para meu SaaS."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:bg-white/10 p-3 rounded-lg transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">WhatsApp Direto</div>
                    <div className="text-sm opacity-80">Resposta em até 5 minutos</div>
                  </div>
                </motion.a>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-center font-semibold">
                  ⚡ Atendimento 24/7 para consultoria de emergência
                </p>
              </div>
            </div>

            {/* What You'll Get */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                O Que Você Vai Receber na Consultoria:
              </h3>
              
              <div className="space-y-4">
                {[
                  'Auditoria completa do seu funil de vendas',
                  'Análise de concorrência e posicionamento',
                  'Identificação de vazamentos de conversão',
                  'Plano de ação para os próximos 90 dias',
                  'Estimativa de ROI e projeção de crescimento',
                  'Acesso ao material exclusivo Blue Ocean'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-800 mb-2 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Garantia de Satisfação
              </h4>
              <p className="text-green-700">
                Se após nossa consultoria você não identificar pelo menos 3 oportunidades 
                claras de crescimento, devolvemos seu tempo e oferecemos uma sessão extra gratuita.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}