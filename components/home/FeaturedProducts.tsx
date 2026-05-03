'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { ProductCard } from '@/components/ui/ProductCard';
import { featuredProducts } from '@/data/products';

export function FeaturedProducts() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">Featured Products</p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900">
              Customer Favourites
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-navy-800 hover:text-gold-600 font-semibold text-sm transition-colors shrink-0"
          >
            View All Products
            <ArrowRight size={16} />
          </Link>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProducts.map((product, i) => (
            <AnimateIn key={product.id} delay={i * 0.08}>
              <ProductCard product={product} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
