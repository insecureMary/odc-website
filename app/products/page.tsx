'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { ProductCard } from '@/components/ui/ProductCard';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { tiles, bathroomProducts, kitchenProducts, electricalServices } from '@/data/products';
import { Layers, Bath, Utensils, Zap } from 'lucide-react';

const tabs = [
  { id: 'tiles', label: 'Tiles', icon: Layers, count: tiles.length },
  { id: 'bathroom', label: 'Bathroom', icon: Bath, count: bathroomProducts.length },
  { id: 'kitchen', label: 'Kitchen', icon: Utensils, count: kitchenProducts.length },
  { id: 'electrical', label: 'Electrical Services', icon: Zap, count: electricalServices.length },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') ?? 'tiles');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && tabs.find(t => t.id === tab)) setActiveTab(tab);
  }, [searchParams]);

  function handleTabChange(tabId: string) {
    setActiveTab(tabId);
    router.replace(`/products?tab=${tabId}`, { scroll: false });
  }

  const activeTabData = tabs.find(t => t.id === activeTab);

  return (
    <>
      {/* Page header */}
      <section className="bg-navy-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">Our Range</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Products &amp; Services</h1>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
              Browse our full range of tiles, bathroom finishings, kitchen products, and electrical services. No prices displayed — contact us for competitive quotes.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Sticky tabs */}
      <div className="sticky top-[68px] z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {tabs.map(({ id, label, icon: Icon, count }) => (
              <button
                key={id}
                onClick={() => handleTabChange(id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all shrink-0 ${
                  activeTab === id
                    ? 'bg-navy-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-navy-900'
                }`}
              >
                <Icon size={15} />
                {label}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                    activeTab === id ? 'bg-gold-500 text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <section className="bg-cream py-14 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-10" key={activeTab}>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-navy-900">{activeTabData?.label}</h2>
                <p className="text-gray-500 text-sm mt-1">
                  {activeTab === 'tiles' && 'Local and imported tiles for every surface and style.'}
                  {activeTab === 'bathroom' && 'Premium sanitaryware, baths, showers, taps, and accessories.'}
                  {activeTab === 'kitchen' && 'Quality sinks, mixer taps, and kitchen accessories.'}
                  {activeTab === 'electrical' && 'Complete electrical wiring services and materials supply.'}
                </p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">
                All prices on request via WhatsApp
              </span>
            </div>
          </AnimateIn>

          {activeTab === 'tiles' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {tiles.map((product, i) => (
                <AnimateIn key={product.id} delay={i * 0.05}>
                  <ProductCard product={product} />
                </AnimateIn>
              ))}
            </div>
          )}

          {activeTab === 'bathroom' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {bathroomProducts.map((product, i) => (
                <AnimateIn key={product.id} delay={i * 0.05}>
                  <ProductCard product={product} />
                </AnimateIn>
              ))}
            </div>
          )}

          {activeTab === 'kitchen' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {kitchenProducts.map((product, i) => (
                <AnimateIn key={product.id} delay={i * 0.05}>
                  <ProductCard product={product} />
                </AnimateIn>
              ))}
            </div>
          )}

          {activeTab === 'electrical' && (
            <>
              <div className="bg-navy-50 border border-navy-100 rounded-2xl p-5 mb-8 flex items-start gap-3">
                <Zap size={20} className="text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-navy-900 font-semibold text-sm mb-1">Full-Service Electrical Solutions</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our certified electrical team handles complete wiring projects for new builds, renovations, and commercial fit-outs. We also supply all electrical materials directly. Contact us to discuss your project scope and get a tailored quote.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {electricalServices.map((service, i) => (
                  <AnimateIn key={service.id} delay={i * 0.05}>
                    <ServiceCard service={service} />
                  </AnimateIn>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
