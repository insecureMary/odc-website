'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { categoryCards } from '@/data/products';

export function ProductCategoriesGrid() {
  return (
    <section className="bg-navy-900 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-14">
          <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Everything Your Build Needs
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            From the ground up — browse our four core categories and discover what&apos;s possible for your next project.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categoryCards.map(({ id, title, subtitle, description, image, href, count }, i) => (
            <AnimateIn key={id} delay={i * 0.1}>
              <Link href={href} className="group block relative rounded-2xl overflow-hidden h-80 sm:h-96">
                {/* Background image */}
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-900/40 to-transparent group-hover:from-navy-950 transition-all duration-300" />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-gold-500/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {count}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <p className="text-gold-400 text-xs font-medium tracking-wider uppercase mb-1">{subtitle}</p>
                  <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
                  <p className="text-white/70 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {description}
                  </p>
                  <div className="flex items-center gap-1.5 text-gold-400 text-sm font-semibold">
                    <span>Browse {title}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
