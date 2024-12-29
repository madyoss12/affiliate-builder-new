import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { BarChart2, TrendingUp, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const RevenueSimulator = () => {
  const [numberOfSites, setNumberOfSites] = useState(1);
  const [effortLevel, setEffortLevel] = useState('basic');
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [yearlyRevenue, setYearlyRevenue] = useState(0);

  // Coefficients de revenus basés sur l'effort
  const revenueMultipliers = {
    basic: { min: 100, max: 300 },
    seoBasic: { min: 300, max: 800 },
    seoAdvanced: { min: 800, max: 2000 }
  };

  // Calculer les revenus potentiels
  const calculateRevenue = () => {
    const multiplier = revenueMultipliers[effortLevel];
    const averageRevenue = (multiplier.min + multiplier.max) / 2;
    const monthlyPotential = numberOfSites * averageRevenue;
    
    setMonthlyRevenue(monthlyPotential);
    setYearlyRevenue(monthlyPotential * 12);
  };

  useEffect(() => {
    calculateRevenue();
  }, [numberOfSites, effortLevel]);

  return (
    <section className="px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-4xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Simulez vos Revenus d'Affiliation
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez votre potentiel de gains mensuels en fonction de votre investissement
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              {/* Nombre de sites */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex justify-between mb-2">
                  <label className="text-lg font-medium">Nombre de Sites</label>
                  <span className="font-bold text-indigo-600">{numberOfSites}</span>
                </div>
                <Slider
                  value={[numberOfSites]}
                  onValueChange={(value) => setNumberOfSites(value[0])}
                  max={10}
                  min={1}
                  step={1}
                  className="my-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1 site</span>
                  <span>10 sites</span>
                </div>
              </motion.div>

              {/* Niveau d'effort */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="text-lg font-medium mb-2 block">
                  Niveau d'Effort
                </label>
                <Select 
                  value={effortLevel}
                  onValueChange={setEffortLevel}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez le niveau d'effort" />
                  </SelectTrigger>
                  <SelectContent position="popper" side="bottom" sideOffset={5} className="w-[--radix-select-trigger-width] z-[100] bg-white shadow-lg">
                    <SelectItem value="basic">
                      <div className="flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        <div>
                          <div>Effort Basique</div>
                          <div className="text-sm text-gray-500">2-3h/semaine/site</div>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="seoBasic">
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        <div>
                          <div>SEO de Base</div>
                          <div className="text-sm text-gray-500">5-7h/semaine/site</div>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="seoAdvanced">
                      <div className="flex items-center">
                        <BarChart2 className="w-4 h-4 mr-2" />
                        <div>
                          <div>SEO Avancé</div>
                          <div className="text-sm text-gray-500">10-15h/semaine/site</div>
                        </div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Résultats */}
              <motion.div 
                className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 relative z-[1]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4 text-center">
                  Revenus Potentiels
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">Revenu Mensuel</div>
                    <motion.div 
                      className="text-3xl font-bold text-indigo-600"
                      key={monthlyRevenue}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                    >
                      {monthlyRevenue.toLocaleString()}€
                    </motion.div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">Revenu Annuel</div>
                    <motion.div 
                      className="text-3xl font-bold text-indigo-600"
                      key={yearlyRevenue}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                    >
                      {yearlyRevenue.toLocaleString()}€
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Détails des efforts */}
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <h4 className="font-medium mb-2">Détails par niveau d'effort :</h4>
                <div className="space-y-2">
                  <Alert>
                    <AlertDescription>
                      <div className="flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        <div>
                          <span className="font-medium">Effort Basique :</span> Publication régulière, 
                          contenu basique, promotion simple
                          ({revenueMultipliers.basic.min}€ - {revenueMultipliers.basic.max}€ /site/mois)
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                  <Alert>
                    <AlertDescription>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        <div>
                          <span className="font-medium">SEO de Base :</span> Optimisation SEO de base, 
                          backlinks simples, contenu optimisé
                          ({revenueMultipliers.seoBasic.min}€ - {revenueMultipliers.seoBasic.max}€ /site/mois)
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                  <Alert>
                    <AlertDescription>
                      <div className="flex items-center">
                        <BarChart2 className="w-4 h-4 mr-2" />
                        <div>
                          <span className="font-medium">SEO Avancé :</span> Stratégie SEO complète, 
                          backlinks premium, contenu expert
                          ({revenueMultipliers.seoAdvanced.min}€ - {revenueMultipliers.seoAdvanced.max}€ /site/mois)
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                </div>
              </motion.div>

              {/* Disclaimer */}
              <motion.div 
                className="mt-6 text-sm text-gray-500 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                * Ces estimations sont basées sur des moyennes du marché. 
                Les résultats réels peuvent varier en fonction de nombreux facteurs 
                (niche, qualité du contenu, concurrence, etc.)
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueSimulator;
