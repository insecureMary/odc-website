'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1920&q=85"
          alt="Luxury tiled bathroom interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 mt-16">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-medium">Nigeria&apos;s Premium Finishing Specialists</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6"
          >
            Premium Tiles,{' '}
            <span className="text-gold-400">Finishings</span>{' '}
            &amp; Electrical{' '}
            <span className="text-gold-400">Solutions</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl"
          >
            From floor to ceiling — we supply the finest local and imported tiles, luxury bathroom and kitchen finishings, and deliver expert electrical wiring for homes, offices, and new constructions across Nigeria.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-base"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-base backdrop-blur-sm"
            >
              <MessageCircle size={18} />
              Request a Quote
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 flex flex-wrap gap-6 sm:gap-10"
          >
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '200+', label: 'Tile Varieties' },
              { value: '10+', label: 'Years Experience' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-black text-gold-400">{value}</div>
                <div className="text-white/60 text-sm mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-5 border-b-2 border-r-2 border-white/30 rotate-45"
        />
      </motion.div>
    </section>
  );
}
