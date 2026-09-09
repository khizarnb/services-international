import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Mail, ArrowRight } from 'lucide-react';
import { Section, Container } from './ui/Layout';

export default function Footer() {
  return (
    <footer className="bg-secondary text-text-inverse border-t-4 border-primary">
      <Section variant="inverse" className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            <div className="md:col-span-5 lg:col-span-4">
              <Link to="/" className="flex items-center gap-3 mb-6 inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md">
                <div className="bg-primary p-2 rounded-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="font-bold text-2xl tracking-tight leading-none block text-white">Services</span>
                  <span className="font-bold text-sm tracking-widest uppercase text-primary block leading-none mt-1">International</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Empowering global trade since 1971. Your trusted clearing, forwarding, and shipping partner delivering logistics excellence across Pakistan and beyond.
              </p>
            </div>
            
            <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h4 className="font-semibold text-lg text-white mb-6">Contact Us</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm leading-relaxed">
                      Office No: 12 - 2nd Floor, NAMCO Center,<br />
                      Campbell Street, Karachi, Pakistan.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <a href="mailto:Servicesintel@yahoo.com" className="text-gray-400 text-sm hover:text-primary transition-colors focus-visible:outline-none focus-visible:text-primary">
                      Servicesintel@yahoo.com
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {['Home', 'Our History', 'Services', 'Clients', 'Contact'].map((link) => (
                    <li key={link}>
                      <Link 
                        to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' our ', '')}`} 
                        className="text-gray-400 text-sm hover:text-white flex items-center gap-2 group transition-colors w-fit focus-visible:outline-none focus-visible:text-white"
                      >
                        <ArrowRight className="h-4 w-4 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        <span>{link}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      <div className="bg-secondary-hover py-6">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Services International. All rights reserved.</p>
            <p className="font-medium tracking-wide uppercase text-xs">A Legacy Since 1971</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
