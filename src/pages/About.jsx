import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, ShieldCheck, TrendingUp, Ship } from 'lucide-react';
import { Section, Container } from '../components/ui/Layout';
import { Card, CardContent } from '../components/ui/Card';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Section variant="inverse" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <Container className="relative z-10 text-center max-w-4xl">
          <h1 className="mb-6 text-white">Our History & Legacy</h1>
          <p className="text-xl text-gray-300 font-medium leading-relaxed">
            From our humble beginnings in 1971 to becoming a cornerstone of Pakistan's logistics industry. This is the story of unyielding dedication, visionary leadership, and over 55 years of trust.
          </p>
        </Container>
      </Section>

      {/* History Detail */}
      <Section variant="default">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Since 1971</span>
              <h2 className="mb-6">A Journey Built on Unshakable Trust</h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Established in 1971 in the bustling heart of Karachi, <strong>Services International</strong> was born with a clear and ambitious mission: to streamline global trade for local and multinational businesses operating in Pakistan.
              </p>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                We began our operations precisely when Pakistan's industrial sector was evolving. Over the decades, we have gained the distinct privilege of dealing in the import of highly specialized industrial units, massive manufacturing plants, delicate machinery, pharmaceuticals (including highly sensitive vaccines), complex chemicals, and commercial vehicles. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our uncompromising commitment to reliability, transparency, and operational excellence has allowed us to navigate the ever-changing landscape of international logistics seamlessly, turning logistical nightmares into competitive advantages for our clients.
              </p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative">
              {/* Changed image to a striking port/container image */}
              <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7fcce28?auto=format&fit=crop&q=80" alt="Karachi Port Containers" className="rounded-2xl shadow-medium border border-border aspect-[4/3] object-cover" />
              <div className="absolute -bottom-10 -left-10 bg-secondary p-8 rounded-2xl shadow-strong text-white border-b-4 border-primary">
                <div className="flex items-center gap-4 mb-2">
                  <Anchor className="h-10 w-10 text-primary" />
                  <p className="text-5xl font-black mb-0 text-white">55+</p>
                </div>
                <p className="font-semibold uppercase tracking-wider text-sm text-gray-300">Years of Karachi Port Expertise</p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 border-t border-border pt-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h4 className="mb-3 text-xl">Integrity First</h4>
              <p className="text-sm text-gray-600 leading-relaxed">We have never compromised on our ethical standards. Transparency in every customs clearance and every forwarded shipment is our guarantee.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h4 className="mb-3 text-xl">Continuous Evolution</h4>
              <p className="text-sm text-gray-600 leading-relaxed">From paper ledgers in 1971 to modern digital tracking today, we continuously adapt to provide state-of-the-art logistics solutions.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                <Ship className="h-8 w-8" />
              </div>
              <h4 className="mb-3 text-xl">Deep Port Relations</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Our decades of daily operations at Karachi Port and Port Qasim give us unparalleled networking and clearance capabilities.</p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Leadership */}
      <Section variant="muted">
        <Container>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">The Visionaries</span>
            <h2 className="mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The strategic minds that have guided Services International through decades of global economic shifts and local industry changes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="h-full border-t-4 border-t-secondary hover:shadow-medium transition-shadow hover:-translate-y-1 duration-300">
                <CardContent className="pt-8 px-8">
                  <h4 className="mb-1 text-xl">Saleem Thaver (late)</h4>
                  <p className="text-xs text-primary font-bold mb-6 uppercase tracking-wider bg-primary/10 inline-block px-3 py-1 rounded-full">Founder</p>
                  <p className="text-sm leading-relaxed text-gray-600">Founded the company in 1971, acting as the visionary driving force behind our evolution. His passion and unyielding principles laid the immovable foundation of trust we operate on today.</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="h-full border-t-4 border-t-primary hover:shadow-medium transition-shadow hover:-translate-y-1 duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
                <CardContent className="pt-8 px-8 relative z-10">
                  <h4 className="mb-1 text-xl">Fazal Abbas Thaver</h4>
                  <p className="text-xs text-primary font-bold mb-6 uppercase tracking-wider bg-primary/10 inline-block px-3 py-1 rounded-full">Chief Executive Officer</p>
                  <p className="text-sm leading-relaxed text-gray-600">Brings a formidable wealth of experience and a transformative, forward-looking vision that inspires our entire organization. He continually drives our company's success forward in a modern era.</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="h-full border-t-4 border-t-secondary hover:shadow-medium transition-shadow hover:-translate-y-1 duration-300">
                <CardContent className="pt-8 px-8">
                  <h4 className="mb-1 text-xl">Ali Abbas Thaver</h4>
                  <p className="text-xs text-primary font-bold mb-6 uppercase tracking-wider bg-primary/10 inline-block px-3 py-1 rounded-full">Marketing Operations</p>
                  <p className="text-sm leading-relaxed text-gray-600">Expertly manages our marketing and client relations operations, bringing fresh, innovative insights and an unwavering commitment to achieving total operational excellence for our partners.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
