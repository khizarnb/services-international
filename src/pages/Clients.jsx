import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Globe, Award, CheckCircle2, Building2 } from 'lucide-react';
import { Section, Container } from '../components/ui/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Clients() {
  const importClients = [
    { name: "Glaxosmithkline Pakistan Ltd.", desc: "Pharma Raw Material / Vaccines / Machinery", type: "Pharma" },
    { name: "Haleon (Pakistan) Ltd.", desc: "Consumer Products", type: "Consumer" },
    { name: "Bahawalpur Engineering Ltd.", desc: "Machinery / Vehicle Wire Harness (Toyota/Suzuki/Honda)", type: "Automotive" },
    { name: "Helix Pharma", desc: "Pharmaceutical Raw Material / Vaccines / Machinery", type: "Pharma" },
    { name: "Habgen Guar Gums Ltd.", desc: "Machinery / General Import / Temporary Import", type: "Industrial" },
    { name: "Micro Scientific Co", desc: "Sartorius Filters", type: "Scientific" },
    { name: "Black Buck PVT LTD", desc: "Electric Scooters", type: "Automotive" }
  ];

  const exportClients = [
    { name: "Habgen Guar Gums Ltd.", desc: "Guar Gums Exports", type: "Industrial" },
    { name: "Glaxosmithkline Pakistan Ltd.", desc: "Medicine Exports", type: "Pharma" },
    { name: "Haleon Pakistan Limited", desc: "Consumer Product Exports", type: "Consumer" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Section variant="inverse" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <Container className="relative z-10 text-center max-w-4xl">
          <h1 className="mb-6 text-white">Our Valued Clients</h1>
          <p className="text-xl text-gray-300 font-medium leading-relaxed">
            Trusted by the world's most demanding industries. For over 55 years, we have built lasting partnerships based on uncompromising reliability and regulatory expertise.
          </p>
        </Container>
      </Section>

      {/* Trust Factors */}
      <Section variant="muted" className="border-b border-border">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Building2 className="h-8 w-8" />
              </div>
              <h4 className="mb-2">Multinational Scale</h4>
              <p className="text-sm text-gray-600">Handling the rigorous compliance and volume demands of massive multinational corporations.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h4 className="mb-2">Zero-Error Tolerance</h4>
              <p className="text-sm text-gray-600">Specializing in highly sensitive cargo like pharmaceuticals and vaccines where mistakes are not an option.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h4 className="mb-2">Decades of Loyalty</h4>
              <p className="text-sm text-gray-600">Our clients don't just use us once; they partner with us for decades because we consistently deliver.</p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section variant="default">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Import Clients */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Globe className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="mb-0 text-3xl">Import Partners</h3>
                  <p className="text-sm text-gray-500 mt-1">Bringing global quality into Pakistan</p>
                </div>
              </div>
              <div className="space-y-4">
                {importClients.map((client, idx) => (
                  <Card key={idx} className="hover:border-primary/50 hover:shadow-medium transition-all group">
                    <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h5 className="mb-1 text-lg group-hover:text-primary transition-colors">{client.name}</h5>
                        <p className="text-sm text-gray-600">{client.desc}</p>
                      </div>
                      <Badge variant="default" className="shrink-0">{client.type}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Export Clients */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              {/* Changed from Card to div to fix the white background conflict */}
              <div className="bg-secondary rounded-2xl shadow-strong relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 opacity-5 pointer-events-none">
                  <Plane className="w-80 h-80" />
                </div>
                <div className="p-8 md:p-10 relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-700">
                    <div className="bg-primary/20 p-3 rounded-xl text-primary">
                      <Plane className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="mb-0 text-white text-3xl">Export Partners</h3>
                      <p className="text-sm text-gray-400 mt-1">Taking Pakistani excellence worldwide</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 flex-grow">
                    {exportClients.map((client, idx) => (
                      <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group">
                        <div>
                          <h5 className="mb-1 text-white text-lg group-hover:text-primary transition-colors">{client.name}</h5>
                          <p className="text-sm text-gray-300">{client.desc}</p>
                        </div>
                        <Badge variant="primary" className="bg-primary/20 shrink-0">{client.type}</Badge>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 p-6 bg-primary text-secondary rounded-xl text-center font-bold flex flex-col items-center justify-center gap-2 shadow-lg hover:bg-white transition-colors cursor-default">
                    <Globe className="h-6 w-6" />
                    <span className="text-lg">Connecting Local Markets to Global Horizons</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
