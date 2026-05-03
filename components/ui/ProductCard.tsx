import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  showWhatsApp?: boolean;
}

const WHATSAPP_NUMBER = '2348012345678';

function getWhatsAppLink(productName: string) {
  const msg = encodeURIComponent(
    `Hello ODC Ventures, I'm interested in: ${productName}. Please provide pricing and availability.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export function ProductCard({ product, showWhatsApp = true }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-gold-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {product.tag}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-navy-900 text-sm leading-snug mb-1.5 group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <span className="text-xs text-gold-600 font-medium">Contact for price</span>
          {showWhatsApp && (
            <a
              href={getWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
            >
              <MessageCircle size={13} />
              Enquire
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
