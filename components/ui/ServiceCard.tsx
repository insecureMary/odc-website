import { MessageCircle, Zap, Building2, RefreshCw, LayoutGrid, Lightbulb, Power, Sun, Briefcase, Shield, Package } from 'lucide-react';
import { Service } from '@/data/products';

const iconMap: Record<string, React.ElementType> = {
  Zap, Building2, RefreshCw, LayoutGrid, Lightbulb, Power, Sun, Briefcase, Shield, Package,
};

const WHATSAPP_NUMBER = '2348012345678';

function getWhatsAppLink(serviceName: string) {
  const msg = encodeURIComponent(
    `Hello ODC Ventures, I'd like to enquire about your ${serviceName} service. Please provide more details.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Zap;

  return (
    <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gold-200 transition-all duration-300 p-6 flex flex-col">
      <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-300">
        <Icon size={22} className="text-navy-700 group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="font-semibold text-navy-900 text-base mb-2 group-hover:text-gold-600 transition-colors">
        {service.name}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
        {service.description}
      </p>

      <ul className="space-y-1.5 mb-5">
        {service.details.map((detail, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
            {detail}
          </li>
        ))}
      </ul>

      <a
        href={getWhatsAppLink(service.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors mt-auto"
      >
        <MessageCircle size={15} />
        Get a Quote on WhatsApp
      </a>
    </div>
  );
}
