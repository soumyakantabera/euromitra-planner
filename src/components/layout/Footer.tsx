import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  explore: [
    { href: '/itineraries', label: 'All Itineraries' },
    { href: '/budget-style', label: 'Budget & Style' },
    { href: '/sustainable', label: 'Sustainable Travel' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/plan', label: 'Plan With Us' },
    { href: '/contact', label: 'Contact' },
  ],
  regions: [
    { href: '/itineraries?region=europe', label: 'Europe' },
    { href: '/itineraries?region=india', label: 'India' },
    { href: '/itineraries?region=china-asia', label: 'China & Asia' },
  ],
};

const socialLinks = [
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Youtube, label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg leading-tight">EuroMitra</span>
                <span className="text-xs text-primary-foreground/60 leading-tight">City | Nature</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              Cityscapes + Nature. Walkable. Sustainable. Attainable. 
              Personalized travel planning from Florence & Kolkata.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Regions</h4>
            <ul className="space-y-3">
              {footerLinks.regions.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-primary-foreground/70">
              <a href="mailto:hello@euromitra.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                hello@euromitra.com
              </a>
              <a href="https://wa.me/393479249860" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +39 347 924 9860
              </a>
            </div>
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} EuroMitra. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
