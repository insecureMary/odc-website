export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'tiles' | 'bathroom' | 'kitchen' | 'electrical';
  tag?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  details: string[];
}

export const tiles: Product[] = [
  {
    id: 't1',
    name: 'Carrara Marble Effect Tiles',
    description: 'Imported Italian-inspired marble-effect porcelain tiles, ideal for living rooms and entryways.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    category: 'tiles',
    tag: 'Imported',
  },
  {
    id: 't2',
    name: 'Granite Finish Porcelain Tiles',
    description: 'Heavy-duty granite-effect porcelain for outdoor spaces, driveways, and high-traffic commercial areas.',
    image: 'https://images.unsplash.com/photo-1556384182-9ad5a339b552?auto=format&fit=crop&w=800&q=80',
    category: 'tiles',
    tag: 'Bestseller',
  },
  {
    id: 't3',
    name: 'Wood-Look Ceramic Floor Tiles',
    description: 'Warm timber-effect ceramic tiles bringing natural elegance to bedrooms and living spaces.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    category: 'tiles',
  },
  {
    id: 't4',
    name: 'Mosaic Decorative Wall Tiles',
    description: 'Intricate mosaic patterns perfect for kitchen backsplashes, bathroom feature walls, and accent strips.',
    image: 'https://images.unsplash.com/photo-1620113023295-fe56e0a5041e?auto=format&fit=crop&w=800&q=80',
    category: 'tiles',
  },
  {
    id: 't5',
    name: 'Large Format Polished Porcelain (60×120cm)',
    description: 'Oversized polished porcelain slabs that create a seamless, luxurious floor finish with fewer grout lines.',
    image: 'https://images.unsplash.com/photo-1539793369669-cd1e9ba73e41?auto=format&fit=crop&w=800&q=80',
    category: 'tiles',
    tag: 'Premium',
  },
  {
    id: 't6',
    name: 'Outdoor Anti-Slip Terrace Tiles',
    description: 'R11-rated anti-slip tiles purpose-built for balconies, patios, poolsides, and outdoor walkways.',
    image: 'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=800&q=80',
    category: 'tiles',
  },
  {
    id: 't7',
    name: 'Metro Subway Wall Tiles',
    description: 'Classic bevelled subway tiles in gloss white and colour options — timeless for kitchens and bathrooms.',
    image: 'https://images.unsplash.com/photo-1572123322284-6cee30b7ade0?auto=format&fit=crop&w=800&q=80',
    category: 'tiles',
  },
  {
    id: 't8',
    name: 'Terrazzo Inspired Porcelain',
    description: 'Fashionable terrazzo-patterned porcelain tiles bringing artistic character to modern interiors.',
    image: 'https://images.unsplash.com/photo-1604014056727-4c7d76e3d283?auto=format&fit=crop&w=800&q=80',
    category: 'tiles',
    tag: 'New Arrival',
  },
  {
    id: 't9',
    name: 'Matte Black Large Format Tiles',
    description: 'Bold and sophisticated matte-black large format tiles for a dramatic, contemporary statement.',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80',
    category: 'tiles',
    tag: 'Premium',
  },
  {
    id: 't10',
    name: 'Travertine Natural Stone Effect',
    description: 'Authentic travertine-look porcelain tiles delivering the charm of natural stone without the maintenance.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    category: 'tiles',
    tag: 'Nigerian Made',
  },
];

export const bathroomProducts: Product[] = [
  {
    id: 'b1',
    name: 'Wall-Hung Rimless Toilet Suite',
    description: 'Modern wall-hung rimless toilet with soft-close seat and concealed in-wall cistern for a minimalist finish.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    category: 'bathroom',
    tag: 'Bestseller',
  },
  {
    id: 'b2',
    name: 'Freestanding Oval Soaking Bathtub',
    description: 'Elegant sculptural freestanding bathtub in gloss white acrylic — the centrepiece of any luxury bathroom.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    category: 'bathroom',
    tag: 'Premium',
  },
  {
    id: 'b3',
    name: 'Overhead Rainfall Shower System',
    description: 'Ceiling-mounted thermostatic rainfall shower with 300mm head and integrated hand shower.',
    image: 'https://images.unsplash.com/photo-1564540572648-87a5c5d0b03c?auto=format&fit=crop&w=800&q=80',
    category: 'bathroom',
  },
  {
    id: 'b4',
    name: 'Floating Wall Vanity Unit',
    description: 'Wall-mounted vanity cabinet with integrated ceramic basin, soft-close drawers, and optional LED strip lighting.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317702782?auto=format&fit=crop&w=800&q=80',
    category: 'bathroom',
  },
  {
    id: 'b5',
    name: 'LED Illuminated Bathroom Mirror',
    description: 'Frameless anti-fog LED mirror with warm/cool light settings and integrated touch dimmer.',
    image: 'https://images.unsplash.com/photo-1552322607-ed0e6f6c9083?auto=format&fit=crop&w=800&q=80',
    category: 'bathroom',
    tag: 'New Arrival',
  },
  {
    id: 'b6',
    name: '6-Jet Jacuzzi Whirlpool Bath',
    description: 'Premium hydrotherapy whirlpool bath with chromotherapy lighting, 6 adjustable jets, and air massage system.',
    image: 'https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=800&q=80',
    category: 'bathroom',
    tag: 'Premium',
  },
  {
    id: 'b7',
    name: 'Frameless Glass Shower Enclosure',
    description: 'Space-maximising frameless 8mm tempered glass shower enclosure with chrome hardware.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
    category: 'bathroom',
  },
  {
    id: 'b8',
    name: 'Waterfall Basin Mixer Tap',
    description: 'Statement waterfall-style bathroom basin tap in brushed gold or chrome finish.',
    image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=800&q=80',
    category: 'bathroom',
  },
  {
    id: 'b9',
    name: 'Back-to-Wall Close Coupled Toilet',
    description: 'Sleek back-to-wall toilet with concealed pipework and soft-close quick-release seat.',
    image: 'https://images.unsplash.com/photo-1575514535455-16f04c4e1e38?auto=format&fit=crop&w=800&q=80',
    category: 'bathroom',
  },
  {
    id: 'b10',
    name: 'Double Basin His & Hers Vanity',
    description: '1500mm twin-basin vanity unit with open shelving and matching mirror — perfect for master ensuites.',
    image: 'https://images.unsplash.com/photo-1573408301185-9519f94815f3?auto=format&fit=crop&w=800&q=80',
    category: 'bathroom',
    tag: 'Premium',
  },
];

export const kitchenProducts: Product[] = [
  {
    id: 'k1',
    name: 'Stainless Steel Double Bowl Sink',
    description: '1.5 bowl undermount stainless steel kitchen sink with drainer and waste kit included.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    category: 'kitchen',
    tag: 'Bestseller',
  },
  {
    id: 'k2',
    name: 'Pull-Out Spray Kitchen Mixer',
    description: 'Flexible pull-out spray kitchen tap with two flow settings — ideal for rinsing and filling pots.',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=800&q=80',
    category: 'kitchen',
  },
  {
    id: 'k3',
    name: 'Fireclay Farmhouse Kitchen Sink',
    description: 'Classic Belfast-style single bowl fireclay sink in brilliant white — a timeless choice for kitchen islands.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    category: 'kitchen',
    tag: 'Premium',
  },
  {
    id: 'k4',
    name: 'Granite Composite Sink — Anthracite',
    description: 'Ultra-durable 80% granite composite single bowl sink in deep anthracite — heat and scratch resistant.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80',
    category: 'kitchen',
  },
  {
    id: 'k5',
    name: 'Brushed Gold Kitchen Mixer Tap',
    description: 'Luxury high-arc monobloc kitchen mixer tap in brushed gold — pairs beautifully with dark cabinetry.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca4de7?auto=format&fit=crop&w=800&q=80',
    category: 'kitchen',
    tag: 'New Arrival',
  },
  {
    id: 'k6',
    name: 'Wall-Mounted Pot Filler Faucet',
    description: "Articulated wall-mounted pot filler over the hob — the professional chef's convenience at home.",
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    category: 'kitchen',
    tag: 'Premium',
  },
  {
    id: 'k7',
    name: '3-in-1 Filtered Water Kitchen Tap',
    description: 'All-in-one boiling, chilled, and filtered water tap — eliminating the need for a separate filter system.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    category: 'kitchen',
  },
  {
    id: 'k8',
    name: 'Compact Bar & Prep Sink',
    description: "Small secondary stainless sink for kitchen islands, wet bars, and butler's pantries.",
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80',
    category: 'kitchen',
  },
];

export const electricalServices: Service[] = [
  {
    id: 'e1',
    name: 'New Building Electrical Wiring',
    description: 'Complete end-to-end electrical installation for newly constructed residential and commercial buildings.',
    icon: 'Zap',
    details: [
      'Full conduit and cable installation',
      'Distribution boards and consumer units',
      'Lighting and power circuit layout',
      'Compliance with Nigerian Electrical Code',
    ],
  },
  {
    id: 'e2',
    name: 'Apartment & Duplex Wiring',
    description: 'Tailored electrical wiring packages for flats, duplexes, and multi-unit residential developments.',
    icon: 'Building2',
    details: [
      'Unit-by-unit metering and isolation',
      'Dedicated circuits for AC units',
      'Kitchen and laundry power points',
      'Safety RCD protection throughout',
    ],
  },
  {
    id: 'e3',
    name: 'Electrical Rewiring',
    description: 'Safe and thorough replacement of outdated, degraded, or hazardous wiring in existing buildings.',
    icon: 'RefreshCw',
    details: [
      'Fault detection and assessment',
      'Old wiring removal and replacement',
      'Circuit upgrading and isolation',
      'Certificate of compliance on completion',
    ],
  },
  {
    id: 'e4',
    name: 'Distribution Board & Panel Upgrades',
    description: 'Supply and installation of modern distribution boards, circuit breakers, and consumer units.',
    icon: 'LayoutGrid',
    details: [
      'Load capacity assessment',
      'MCB and RCCB installation',
      'Surge protection devices',
      'Labelled and organised boards',
    ],
  },
  {
    id: 'e5',
    name: 'Lighting Design & Installation',
    description: 'Interior and exterior lighting installation including LED downlights, feature lighting, and landscape lighting.',
    icon: 'Lightbulb',
    details: [
      'LED downlight and strip installation',
      'Exterior security and landscape lights',
      'Smart dimmer and switch systems',
      'Emergency and exit lighting',
    ],
  },
  {
    id: 'e6',
    name: 'Generator Wiring & Changeover',
    description: 'Safe generator connection with automatic or manual changeover switches for uninterrupted power.',
    icon: 'Power',
    details: [
      'ATS (Automatic Transfer Switch) installation',
      'Generator cable sizing and routing',
      'Manual changeover panels',
      'Load balancing and earthing',
    ],
  },
  {
    id: 'e7',
    name: 'Solar PV & Inverter Wiring',
    description: 'Complete wiring for solar panel installations, battery systems, and hybrid inverter setups.',
    icon: 'Sun',
    details: [
      'PV array and combiner wiring',
      'Inverter and battery bank connection',
      'Grid-tie and off-grid configurations',
      'System monitoring integration',
    ],
  },
  {
    id: 'e8',
    name: 'Commercial Office Wiring',
    description: 'Structured electrical and data cabling for offices, retail outlets, warehouses, and factories.',
    icon: 'Briefcase',
    details: [
      'Workstation power and data outlets',
      'Server room power and cooling circuits',
      'Three-phase power installations',
      'Cable management and trunking',
    ],
  },
  {
    id: 'e9',
    name: 'CCTV & Security System Installation',
    description: 'Supply and installation of IP cameras, alarm systems, access control, and intercom systems.',
    icon: 'Shield',
    details: [
      'HD and 4K IP camera installation',
      'NVR/DVR setup and configuration',
      'Access control and electric gate wiring',
      'Video intercom systems',
    ],
  },
  {
    id: 'e10',
    name: 'Electrical Materials Supply',
    description: 'Sourcing and supply of all electrical materials — cables, conduits, breakers, sockets, and lighting fixtures.',
    icon: 'Package',
    details: [
      'Armoured and PVC cables',
      'MCBs, RCCBs, and isolators',
      'Switches, sockets, and consumer units',
      'LED fixtures and smart controls',
    ],
  },
];

export const featuredProducts: Product[] = [
  tiles[0],
  bathroomProducts[1],
  tiles[4],
  kitchenProducts[0],
  bathroomProducts[5],
  kitchenProducts[2],
];

export const categoryCards = [
  {
    id: 'tiles',
    title: 'Tiles',
    subtitle: 'Floor, wall & outdoor tiles',
    description: 'Explore our extensive range of local and imported ceramic, porcelain, and natural stone tiles for every surface.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    href: '/products?tab=tiles',
    count: '100+ Varieties',
  },
  {
    id: 'bathroom',
    title: 'Bathroom Finishings',
    subtitle: 'Toilets, baths, showers & more',
    description: 'Transform your bathroom with our curated collection of premium sanitaryware, baths, showers, and taps.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    href: '/products?tab=bathroom',
    count: '80+ Products',
  },
  {
    id: 'kitchen',
    title: 'Kitchen Finishings',
    subtitle: 'Sinks, taps & accessories',
    description: 'Elevate your kitchen with our selection of quality sinks, mixer taps, and accessories from top global brands.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    href: '/products?tab=kitchen',
    count: '50+ Products',
  },
  {
    id: 'electrical',
    title: 'Electrical Services',
    subtitle: 'Wiring, installation & supply',
    description: 'Full-service electrical solutions for homes, offices, and new constructions — including materials supply.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80',
    href: '/products?tab=electrical',
    count: '10+ Services',
  },
];
