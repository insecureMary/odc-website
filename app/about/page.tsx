import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Star, Users, Building2, Award } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn the story behind ODC Ventures — a business built on a passion for quality tiles, finishings, and expert electrical services.',
};

const stats = [
  { icon: Building2, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '1,000+', label: 'Happy Clients' },
  { icon: Star, value: '10+', label: 'Years in Business' },
  { icon: Award, value: '200+', label: 'Tile Varieties Stocked' },
];

const promises = [
  {
    icon: Star,
    title: 'Uncompromising Quality',
    description:
      "We stock only products that meet our strict quality threshold — tested for durability, finish consistency, and value for money. If we wouldn't install it in our own home, we won't sell it to you.",
  },
  {
    icon: Heart,
    title: 'Customer-First Always',
    description:
      'From your first enquiry to long after installation, our team is available to guide, advise, and resolve any concerns. We measure success by whether our clients are genuinely happy.',
  },
  {
    icon: Award,
    title: 'Reliable & Accountable',
    description:
      "We show up when we say we will and deliver what we promised. Our electrical team's reputation is built on work that passes inspection and stands the test of time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1556784344-ad913b15a6df?auto=format&fit=crop&w=1920&q=70"
            alt="Building under construction"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">Our Story</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">About ODC Ventures</h1>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
              A family-built business with a passion for quality — supplying the materials and expertise that transform buildings into beautiful spaces.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Company story */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimateIn direction="left">
              <div className="relative rounded-2xl overflow-hidden h-96 lg:h-[480px]">
                <Image
                  src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=900&q=80"
                  alt="ODC Ventures tile showroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gold badge */}
                <div className="absolute bottom-5 left-5 bg-gold-500 text-white rounded-xl px-4 py-3">
                  <div className="text-2xl font-black">10+</div>
                  <div className="text-xs font-medium opacity-90">Years of Excellence</div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <p className="text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">Who We Are</p>
              <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mb-6">
                From a Single Showroom to Nigeria&apos;s Trusted Finishing Specialist
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  ODC Ventures was founded over a decade ago by the Odior family with a single vision: to make genuinely beautiful, high-quality tiles accessible to Nigerian homeowners and builders — without the premium price tag that came with imported goods at the time. Starting from a modest showroom in Lagos, we built our reputation one satisfied customer&apos;s at a time, becoming known for honest advice, fair pricing, and products that actually lasted.
                </p>
                <p>
                  As our clients&apos; needs grew, so did we. Over the years, we expanded our range to include premium bathroom sanitaryware, kitchen sinks and taps, bathroom mirrors, showers, jacuzzis, and the full spectrum of finishing accessories. When clients began asking us to not only supply materials but to handle installations, we formalised our electrical services division — bringing the same commitment to quality we applied to our products into every wiring project we undertook.
                </p>
                <p>
                  Today, ODC Ventures is a full-service finishing and electrical solutions company serving homeowners, property developers, architects, and contractors across Nigeria. We stock over 200 tile varieties — including Nigerian-manufactured and imported options — and our electrical team has successfully wired hundreds of residential and commercial buildings. We remain, at heart, a family business: personal, accountable, and genuinely invested in your project&apos;s success.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Work With Us
                <ArrowRight size={17} />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <AnimateIn key={label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mx-auto mb-3">
                    <Icon size={22} className="text-gold-400" />
                  </div>
                  <div className="text-3xl font-black text-white mb-1">{value}</div>
                  <div className="text-white/60 text-sm">{label}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-14">
            <p className="text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">What Guides Us</p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900">Our Mission &amp; Vision</h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimateIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center mb-5">
                  <Target size={22} className="text-gold-400" />
                </div>
                <h3 className="text-navy-900 font-bold text-xl mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide Nigerian homeowners, developers, and businesses with access to premium-quality tiles, finishings, and electrical services at competitive prices — delivered by a team that treats every project with the same care and attention as if it were our own home.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="bg-navy-900 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-5">
                  <Eye size={22} className="text-gold-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Our Vision</h3>
                <p className="text-white/70 leading-relaxed">
                  To be Nigeria&apos;s most trusted one-stop destination for building finishings and electrical solutions — recognised not just for the quality of our products, but for the integrity of our service and the lasting relationships we build with every client.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-14">
            <p className="text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">Our Commitment</p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mb-4">The ODC Promise</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              Three principles that every member of our team lives by, on every project, every day.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promises.map(({ icon: Icon, title, description }, i) => (
              <AnimateIn key={title} delay={i * 0.12}>
                <div className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-gold-200 hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gold-50 group-hover:bg-gold-500 flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                    <Icon size={24} className="text-gold-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-navy-900 font-bold text-lg mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateIn>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-500 mb-7 leading-relaxed">
              Whether you&apos;re tiling a bathroom or wiring an entire estate, our team is ready to help you plan, source, and execute.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                Contact Us <ArrowRight size={17} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
