import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Truck, ClipboardCheck, Users, ShieldCheck, Globe, PackageCheck, Map } from 'lucide-react';
import { Section, Container } from '../components/ui/Layout';
import { Card, CardContent } from '../components/ui/Card';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Section variant="inverse" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <Container className="relative z-10 text-center max-w-4xl">
          <h1 className="mb-6 text-white">Comprehensive Logistics Solutions</h1>
          <p className="text-xl text-gray-300 font-medium leading-relaxed">
            From anywhere in the world to your doorstep in Pakistan. Backed by a strong team with 55+ years of unyielding experience in clearing, forwarding, and shipping.
          </p>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Global Reach, Local Expertise</span>
            <h2>Logistics & Operations</h2>
            <p className="text-lg mt-4">We handle your cargo with unmatched precision. Whether it is arriving by sea or air, our nationwide network ensures your shipment is cleared and delivered safely to any location in Pakistan.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Service 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="h-full hover:shadow-medium transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-2xl">Global Import & Export Clearing</h3>
                  <p className="mb-6 leading-relaxed">
                    Under the direct supervision of our deeply experienced team, we manage air and sea consignments originating from anywhere in the world. We specialize in complex clearances, ensuring swift processing through Pakistani customs without unnecessary delays.
                  </p>
                  <div className="bg-surface-muted p-5 rounded-xl border border-border space-y-4">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-text-primary block">Import Department</span>
                        <span className="text-sm">Led by Mr. Javaid Ahmed Khan & Mr. M. NASIR</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-text-primary block">Export Department</span>
                        <span className="text-sm">Led by Mr. Shamsuddin Hanif</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="h-full hover:shadow-medium transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <Map className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-2xl">Nationwide Doorstep Delivery</h3>
                  <p className="mb-6 leading-relaxed">
                    Once cleared, our highly optimized Collection & Delivery team takes over. Armed with years of route-planning expertise, they navigate Pakistan's dynamic logistical challenges to deliver your cargo directly to your factory, warehouse, or doorstep.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-primary" />
                      <span className="font-medium text-text-primary">Secure inland transportation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Plane className="h-5 w-5 text-primary" />
                      <span className="font-medium text-text-primary">Air freight forwarding</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <PackageCheck className="h-5 w-5 text-primary" />
                      <span className="font-medium text-text-primary">End-to-end cargo tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="border-t border-border pt-20">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-5">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Expert Advisory</span>
                <h2 className="mb-6">Consulting Services</h2>
                <p className="text-lg mb-8 leading-relaxed">
                  With 55+ years of deep regulatory knowledge, we don't just move cargo—we navigate the complex bureaucratic landscape for you. We are proud to act as expert consultants for industry leaders, ensuring total compliance and maximum financial efficiency.
                </p>
                <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                  <p className="font-semibold text-primary mb-2">Why trust our consulting?</p>
                  <p className="text-sm">Our legacy team has resolved some of the most complex customs and health ministry bottlenecks in Pakistan's trade history.</p>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-7">
                {/* Changed from Card to standard div to avoid bg-surface conflict */}
                <div className="bg-secondary rounded-2xl shadow-strong relative overflow-hidden p-8 md:p-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <ClipboardCheck className="text-primary h-10 w-10" />
                      <h3 className="mb-0 text-white">Consulting Expertise</h3>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {[
                        "ADC from Ministry of Health",
                        "Export Processing",
                        "IOCO Quota for Annual / Provisional",
                        "Transport LCL / Container",
                        "Export Rebate / Claim",
                        "Cancellation of I/Bond, B/G Guarantees"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-4 bg-white/10 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                          <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                          <span className="text-white font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
