'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Rocket, Check, Star, Users, Zap, BarChart, Play, ArrowRight, Code, Palette, Bot } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import RevenueSimulator from '@/components/revenue-simulator'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique d'inscription
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="px-4 pt-20 pb-32 mx-auto max-w-7xl"
      >
        <div className="w-full mx-auto text-center md:w-11/12">
          <motion.h1 
            className="mb-8 text-6xl font-extrabold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Créez des Sites d'Affiliation
            <span className="block text-indigo-600">en Quelques Clics</span>
          </motion.h1>
          <motion.p 
            className="mb-8 text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Générez automatiquement des sites d'affiliation optimisés et rentables sans coder.
            Multiplier vos revenus n'a jamais été aussi simple.
          </motion.p>
          <motion.div 
            className="mb-8 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/register">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Commencer Gratuitement <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg">
                  Voir la Démo <Play className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>Découvrez Affiliate Builder en action</DialogTitle>
                  <DialogDescription>
                    Voyez comment créer un site d'affiliation en moins de 5 minutes.
                  </DialogDescription>
                </DialogHeader>
                <div className="aspect-video bg-gray-100 rounded-lg"></div>
              </DialogContent>
            </Dialog>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              {
                icon: <Rocket className="w-8 h-8 text-indigo-600" />,
                title: "Sites Optimisés SEO",
                description: "Générez des sites parfaitement optimisés pour Google"
              },
              {
                icon: <Code className="w-8 h-8 text-indigo-600" />,
                title: "Sans Code",
                description: "Créez vos sites sans aucune connaissance technique"
              },
              {
                icon: <Palette className="w-8 h-8 text-indigo-600" />,
                title: "Templates Pro",
                description: "Des designs modernes et convertissants"
              },
              {
                icon: <BarChart className="w-8 h-8 text-indigo-600" />,
                title: "Analytics Avancés",
                description: "Suivez vos performances en temps réel"
              },
              {
                icon: <Bot className="w-8 h-8 text-indigo-600" />,
                title: "IA Intégrée",
                description: "Génération de contenu optimisé par l'IA"
              },
              {
                icon: <Zap className="w-8 h-8 text-indigo-600" />,
                title: "Performance",
                description: "Sites ultra-rapides et optimisés"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-indigo-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Revenue Simulator Section */}
      <RevenueSimulator />

      {/* Features Section */}
      <section className="px-4 py-20 mx-auto max-w-7xl">
        <motion.h2 
          className="mb-12 text-4xl font-bold text-center text-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Tout ce dont vous avez besoin pour réussir
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Rocket className="w-12 h-12 mb-4 text-indigo-600" />,
              title: "Sites Optimisés SEO",
              description: "Générez des sites parfaitement optimisés pour Google avec du contenu unique et performant."
            },
            {
              icon: <Zap className="w-12 h-12 mb-4 text-indigo-600" />,
              title: "Templates Professionnels",
              description: "Des designs modernes et convertissants, prêts à l'emploi et personnalisables."
            },
            {
              icon: <BarChart className="w-12 h-12 mb-4 text-indigo-600" />,
              title: "Analytics Avancés",
              description: "Suivez vos performances et optimisez vos revenus avec des données détaillées."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <HoverCard>
                <HoverCardTrigger>
                  <Card className="p-6 cursor-pointer transition-all hover:shadow-lg">
                    {feature.icon}
                    <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{feature.title}</h4>
                    <p className="text-sm">
                      Découvrez plus de détails sur cette fonctionnalité et comment elle peut vous aider à réussir.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section avec animations */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <motion.h2 
            className="mb-12 text-4xl font-bold text-center text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Des tarifs adaptés à vos besoins
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Débutant",
                description: "Pour commencer sereinement",
                price: "29€",
                features: ["3 sites maximum", "Templates basiques", "Support email"]
              },
              {
                name: "Pro",
                description: "Pour les affiliés sérieux",
                price: "79€",
                features: ["10 sites maximum", "Templates premium", "Support prioritaire", "A/B Testing"],
                highlighted: true
              },
              {
                name: "Entreprise",
                description: "Pour les professionnels",
                price: "199€",
                features: ["Sites illimités", "Templates personnalisés", "Support dédié", "API Access"]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className={`p-8 ${plan.highlighted ? 'border-2 border-indigo-600 shadow-xl' : ''}`}>
                  <div className="mb-6">
                    <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                    <p className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600">/mois</span>
                    </p>
                  </div>
                  <ul className="mb-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 mr-2 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.highlighted ? 'bg-indigo-600 hover:bg-indigo-700' : ''}`}
                  >
                    {plan.name === "Entreprise" ? "Nous contacter" : "Choisir ce plan"}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials avec animations */}
      <section className="px-4 py-20 mx-auto max-w-7xl">
        <motion.h2 
          className="mb-12 text-4xl font-bold text-center text-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Ils nous font confiance
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Thomas D.",
              role: "Affiliate Marketer",
              content: "J'ai multiplié mes revenus d'affiliation par 3 en seulement 2 mois grâce à cet outil. La génération automatique de contenu est vraiment impressionnante."
            },
            {
              name: "Sophie M.",
              role: "Blogueuse",
              content: "La simplicité d'utilisation est incroyable. Je peux créer des sites d'affiliation professionnels en quelques minutes seulement."
            },
            {
              name: "Pierre L.",
              role: "E-commerce Manager",
              content: "Les templates sont magnifiques et les performances SEO sont au rendez-vous. Un excellent investissement pour mon business."
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section avec animation */}
      <motion.section 
        className="px-4 py-20 bg-indigo-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <motion.h2 
              className="mb-4 text-4xl font-bold text-white"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
            >
              Prêt à augmenter vos revenus d'affiliation ?
            </motion.h2>
            <motion.p 
              className="mb-8 text-xl text-indigo-100"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Commencez gratuitement dès aujourd'hui. Pas de carte de crédit requise.
            </motion.p>
            <motion.form 
              onSubmit={handleSubmit} 
              className="max-w-md mx-auto"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-white"
                />
                <Button type="submit" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Commencer
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* Footer avec animation */}
      <footer className="px-4 py-12 bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              {
                title: "Produit",
                links: ["Fonctionnalités", "Tarifs", "Témoignages", "FAQ"]
              },
              {
                title: "Ressources",
                links: ["Blog", "Guides", "Tutoriels", "Documentation"]
              },
              {
                title: "Entreprise",
                links: ["À propos", "Carrières", "Contact", "Presse"]
              },
              {
                title: "Légal",
                links: ["Confidentialité", "CGU", "Mentions légales", "RGPD"]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="mb-4 text-lg font-bold text-white">{section.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="hover:text-white cursor-pointer">
                      {link}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p>&copy; 2024 Affiliate Builder. Tous droits réservés.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
