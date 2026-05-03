import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { WhyODC } from '@/components/home/WhyODC';
import { ProductCategoriesGrid } from '@/components/home/ProductCategoriesGrid';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Testimonials } from '@/components/home/Testimonials';
import { CTABanner } from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'ODC Ventures | Premium Tiles, Finishings & Electrical Solutions',
  description:
    "Nigeria's premier supplier of local and imported tiles, luxury bathroom and kitchen finishings, and expert electrical wiring for homes and commercial buildings.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyODC />
      <ProductCategoriesGrid />
      <FeaturedProducts />
      <Testimonials />
      <CTABanner />
    </>
  );
}
