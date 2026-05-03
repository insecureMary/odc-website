'use client';

import { ShieldCheck, BadgePercent, Wrench, Store } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Quality Guarantee',
    description:
      'Every product we stock — whether locally manufactured or imported — is handpicked against strict quality standards. We stand behind what we sell and offer after-sale support on all purchases.',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: BadgePercent,
    title: 'Competitive Pricing',
    description:
      'We source directly from manufacturers and trusted importers, cutting out the middleman. This lets us offer premium-grade tiles and finishings at prices that will surprise you — favourably.',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Wrench,
    title: 'Expert Installation',
    description:
      'Our certified electrical team brings years of on-site experience to every project. From single apartments to multi-storey complexes, we wire your building safely and to code.',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: Store,
    title: 'One-Stop Shop',
    description:
      'Tiles, toilets, sinks, taps, electrical materials, and installation services — all from one trusted partner. No need to coordinate between multiple contractors or suppliers.',
    color: 'bg-purple-50 text-purple-700',
  },
];

export function WhyODC() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-14">
          <p className="text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mb-4">
            Built on Quality. Driven by Service.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            For over a decade, ODC Ventures has been the trusted partner for homeowners, developers, and contractors who refuse to compromise on quality.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, description, color }, i) => (
            <AnimateIn key={title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full">
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-navy-900 font-bold text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
