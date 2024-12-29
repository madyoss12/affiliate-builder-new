import { useEffect, useState } from 'react'
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

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
        <div 
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Simulez vos Revenus d'Affiliation
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez votre potentiel de gains mensuels en fonction de votre investissement
          </p>
        </div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              {/* Nombre de sites */}
              <div 
                className="mb-8"
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
              </div>

              {/* Niveau d'effort */}
              <div 
                className="mb-8"
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
              </div>

              {/* Résultats */}
              <div 
                className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 relative z-[1]"
              >
                <h3 className="text-xl font-bold mb-4 text-center">
                  Revenus Potentiels
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">Revenu Mensuel</div>
                    <div 
                      className="text-3xl font-bold text-indigo-600"
                    >
                      {monthlyRevenue.toLocaleString()}€
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">Revenu Annuel</div>
                    <div 
                      className="text-3xl font-bold text-indigo-600"
                    >
                      {yearlyRevenue.toLocaleString()}€
                    </div>
                  </div>
                </div>
              </div>

              {/* Détails des efforts */}
              <div 
                className="mt-6"
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
              </div>

              {/* Disclaimer */}
              <div 
                className="mt-6 text-sm text-gray-500 text-center"
              >
                * Ces estimations sont basées sur des moyennes du marché. 
                Les résultats réels peuvent varier en fonction de nombreux facteurs 
                (niche, qualité du contenu, concurrence, etc.)
              </div>
            </CardContent>
          </Card>
      </div>
    </section>
  );
};

export default RevenueSimulator;
