import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/products?tab=tiles', label: 'Tiles' },
  { href: '/products?tab=bathroom', label: 'Bathroom Finishings' },
  { href: '/products?tab=kitchen', label: 'Kitchen Finishings' },
  { href: '/products?tab=electrical', label: 'Electrical Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const WHATSAPP_NUMBER = '2347039181821';
const WHATSAPP_MSG = encodeURIComponent("Hello ODC Ventures, I'd like to make an enquiry.");

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center shrink-0">
              <span className="text-white font-black text-base">ODC</span>
            </div>
            <div>
              <div className="text-white font-bold text-base leading-none">ODC Ventures</div>
              <div className="text-gold-400 text-[10px] tracking-widest uppercase mt-0.5">Tiles · Finishings · Electrical</div>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            Premium tiles, bathroom & kitchen finishings, and expert electrical services for residential and commercial projects across Nigeria.
          </p>
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="white" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/60 hover:text-gold-400 text-sm transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-white/60 text-sm">
              <MapPin size={15} className="text-gold-500 mt-0.5 shrink-0" />
              <span>Plaza C5, STI Building Material Market, Second Rainbow Bus-stop, Amuo-odofin<br />Lagos, Nigeria</span>
            </li>
            <li>
              <a href="tel:+2348012345678" className="flex items-center gap-2.5 text-white/60 hover:text-gold-400 text-sm transition-colors">
                <Phone size={15} className="text-gold-500 shrink-0" />
                +234 703 918 1821
              </a>
            </li>
            <li>
              <a href="tel:+2348098765432" className="flex items-center gap-2.5 text-white/60 hover:text-gold-400 text-sm transition-colors">
                <Phone size={15} className="text-gold-500 shrink-0" />
                +234 803 537 6467
              </a>
            </li>
            <li>
              <a href="mailto:info@odcventures.ng" className="flex items-center gap-2.5 text-white/60 hover:text-gold-400 text-sm transition-colors">
                <Mail size={15} className="text-gold-500 shrink-0" />
                info@odcventures.ng
              </a>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Working Hours</h3>
          <ul className="space-y-2 text-sm text-white/60 mb-6">
            <li className="flex items-center gap-2">
              <Clock size={13} className="text-gold-500 shrink-0" />
              Mon – Fri: 8:00am – 6:00pm
            </li>
            <li className="flex items-center gap-2">
              <Clock size={13} className="text-gold-500 shrink-0" />
              Saturday: 9:00am – 4:00pm
            </li>
            <li className="flex items-center gap-2">
              <Clock size={13} className="text-gold-500 shrink-0" />
              Sunday: Closed
            </li>
          </ul>

          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Follow Us</h3>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors">
              <span className="text-white font-bold text-xs">F</span>
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors">
              <span className="text-white font-bold text-xs">I</span>
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors">
              <span className="text-white font-bold text-xs">T</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <span>© {new Date().getFullYear()} ODC Ventures. All rights reserved.</span>
          <span>Premium Tiles · Finishings · Electrical Services · Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
