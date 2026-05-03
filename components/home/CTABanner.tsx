'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';

const WHATSAPP_NUMBER = '2348012345678';
const WHATSAPP_MSG = encodeURIComponent("Hello ODC Ventures, I'm planning a building/renovation project and would like to discuss my requirements.");

export function CTABanner() {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="relative bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl overflow-hidden px-8 py-14 md:px-16 md:py-20 text-center">
            {/* Gold accent rings */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-gold-500/20" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-gold-500/10" />
            <div className="absolute top-1/2 right-8 -translate-y-1/2 w-3 h-3 rounded-full bg-gold-500/40" />
            <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-gold-500/30" />

            <div className="relative">
              <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">Ready to Build?</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                Building or Renovating?<br />
                <span className="text-gold-400">Let&apos;s Talk.</span>
              </h2>
              <p className="text-white/65 text-base max-w-xl mx-auto leading-relaxed mb-8">
                Whether you&apos;re fitting out a single apartment or an entire estate, our team is ready to help you source the right materials and get the work done right — on time, on budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
                >
                  Get in Touch
                  <ArrowRight size={17} />
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
                >
                  <MessageCircle size={17} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
