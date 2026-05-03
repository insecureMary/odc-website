'use client';

import { Star } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  return (
    <section className="bg-navy-900 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-14">
          <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">Client Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Trusted by homeowners, developers, and businesses across Nigeria.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <AnimateIn key={t.id} delay={i * 0.12}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-gold-500/30 transition-all duration-300 flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/75 text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{t.body}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center shrink-0">
                    <span className="text-gold-400 font-bold text-sm">
                      {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/50 text-xs">{t.role} · {t.location}</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
