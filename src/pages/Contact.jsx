import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { Section, Container } from '../components/ui/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Input, Textarea } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Section variant="inverse" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7fcce28?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <Container className="relative z-10 text-center">
          <h1 className="mb-4 text-white">Contact Us</h1>
          <p className="text-lg text-primary font-semibold tracking-wider uppercase">We're Here to Help</p>
        </Container>
      </Section>

      <Section variant="default">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <h2 className="mb-6">Get in Touch with Our Experts</h2>
              <p className="text-lg mb-10 max-w-lg">
                Whether you need a quote for shipping, clearing services, or expert consulting on import/export regulations, our team in Karachi is ready to assist you. Fill out the form or reach us directly.
              </p>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg">Head Office</h4>
                      <p className="text-sm">Office No: 12 - 2nd Floor, NAMCO Center,<br />Campbell Street, Karachi, Pakistan.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg">Import / Export Dept. Email</h4>
                      <a href="mailto:Servicesintel@yahoo.com" className="text-primary font-semibold hover:text-primary-hover transition-colors text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Servicesintel@yahoo.com</a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h3 className="mb-6">Request an Inquiry</h3>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <Input 
                      label="Full Name" 
                      placeholder="John Doe" 
                      type="text"
                    />
                    <Input 
                      label="Email Address" 
                      placeholder="john@example.com" 
                      type="email"
                    />
                    <Textarea 
                      label="Message or Requirement" 
                      placeholder="How can we help you?" 
                    />
                    <Button type="submit" size="lg" className="w-full mt-2" icon={Send}>
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
