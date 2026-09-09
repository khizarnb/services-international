import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Ship, Truck, Globe, Award, ClipboardCheck } from 'lucide-react';
import { Section, Container } from '../components/ui/Layout';
import { Button } from '../components/ui/Button';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80" 
            alt="Global Logistics Cargo Ship" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105 transform origin-center animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent"></div>
        </div>
        
        <Container className="relative z-10 pt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="flex h-6 items-center">
                <span className="h-px w-8 bg-primary"></span>
              </span>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Since 1971</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-white mb-6">
              55 Years of <br />
              <span className="text-primary">
                Global Trade Trust
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Empowering businesses across Pakistan with seamless clearing, forwarding, and shipping solutions. We bridge the gap between global markets and local doorsteps through over five decades of unbreakable trust, regulatory expertise, and operational excellence.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button to="/contact" size="lg" icon={ArrowRight}>
                Start an Inquiry
              </Button>
              <Button to="/history" variant="outline" size="lg" className="border-gray-500 text-white hover:bg-white/10 hover:border-white">
                Discover Our Legacy
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Trust & Overview Section */}
      <Section variant="default">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <motion.div variants={fadeInUp} className="relative z-10 rounded-xl overflow-hidden shadow-strong border border-border">
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80" alt="Logistics Team" className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                    <h4 className="text-white text-2xl font-bold mb-2">Unmatched Expertise</h4>
                    <p className="text-gray-300 text-sm max-w-sm leading-relaxed">Handling complex consignments for industry giants, navigating customs seamlessly, and delivering without delay.</p>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0 pointer-events-none"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <motion.div variants={fadeInUp} className="mb-8">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Our Mission</span>
                <h2 className="mb-6">Seamless Operations,<br />Worldwide Reach.</h2>
                <p className="text-lg mb-6 leading-relaxed text-gray-600">
                  We specialize in the import and export of highly complex industrial units, manufacturing plants, machinery, sensitive pharmaceuticals, and consumer goods. Our dedicated departments ensure that whether your cargo arrives by air or sea, it reaches its final destination efficiently and securely.
                </p>
                <p className="text-lg mb-8 leading-relaxed text-gray-600">
                  Based in Karachi, our nationwide delivery infrastructure allows us to clear shipments from the port and deliver them directly to your warehouse anywhere in Pakistan.
                </p>
                <Button to="/services" variant="ghost" className="px-0 hover:bg-transparent text-primary hover:text-primary-hover" icon={ArrowRight}>
                  Explore Our Services
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Core Capabilities */}
      <Section variant="muted" className="border-t border-border">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Why Choose Us</span>
            <h2 className="mb-6">A Complete Logistics Ecosystem</h2>
            <p className="text-lg text-gray-600">We do not just move boxes. We offer a holistic suite of services designed to remove all bureaucratic and physical friction from your supply chain.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-surface p-8 rounded-2xl shadow-subtle border border-border hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Ship className="h-7 w-7" />
              </div>
              <h4 className="mb-3 text-xl">Import/Export Clearing</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">Dedicated teams for sea and air consignments ensure your cargo avoids costly delays at customs, managed personally by our senior experts.</p>
              <Button to="/services" variant="ghost" size="sm" className="px-0 text-primary hover:bg-transparent hover:text-primary-hover">Learn more &rarr;</Button>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-surface p-8 rounded-2xl shadow-subtle border border-border hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Truck className="h-7 w-7" />
              </div>
              <h4 className="mb-3 text-xl">Nationwide Delivery</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">Once cleared, our highly experienced collection and delivery team takes over, optimizing routes to deliver securely to any location in Pakistan.</p>
              <Button to="/services" variant="ghost" size="sm" className="px-0 text-primary hover:bg-transparent hover:text-primary-hover">Learn more &rarr;</Button>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-surface p-8 rounded-2xl shadow-subtle border border-border hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <ClipboardCheck className="h-7 w-7" />
              </div>
              <h4 className="mb-3 text-xl">Regulatory Consulting</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">From Ministry of Health ADCs to IOCO Quotas and Export Rebates, we navigate Pakistan's complex regulatory landscape on your behalf.</p>
              <Button to="/services" variant="ghost" size="sm" className="px-0 text-primary hover:bg-transparent hover:text-primary-hover">Learn more &rarr;</Button>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Team & Leadership Summary */}
      <Section variant="default" className="border-t border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="order-2 lg:order-1">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Our People</span>
              <h2 className="mb-6">Led by Visionaries,<br />Driven by Experts.</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Behind every cleared shipment and successful delivery is a team of dedicated professionals. Founded by the late Saleem Thaver in 1971, our leadership continues to drive the company forward with unwavering integrity and decades of combined industry expertise.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-gray-700">Fazal Abbas Thaver - Chief Executive Officer</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-gray-700">Ali Abbas Thaver - Marketing Operations</span>
                </li>
              </ul>
              <Button to="/history" variant="outline" className="border-gray-300 text-text-primary hover:border-primary hover:text-primary">
                Meet the Full Team & History
              </Button>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-2xl z-0"></div>
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80" alt="Team Trust Hands" className="relative z-10 rounded-2xl shadow-medium aspect-[4/3] object-cover" />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="primary" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-multiply"></div>
        <Container className="relative z-10 text-center max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="mb-6 text-white">Simplify Your Supply Chain Today</h2>
            <p className="text-white/90 text-lg mb-10 leading-relaxed">
              Connect with our Karachi-based experts for personalized clearing, forwarding, and shipping quotes. Experience the peace of mind that comes with 55+ years of trust.
            </p>
            <Button to="/contact" variant="secondary" size="lg" className="shadow-strong hover:bg-white hover:text-secondary hover:shadow-white/20">
              Request Your Free Quote
            </Button>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
