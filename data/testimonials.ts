export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  body: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Adeola Martins',
    location: 'Abuja, FCT',
    role: 'Homeowner',
    body: "ODC Ventures completely transformed our home renovation project. We sourced all our tiles and bathroom fittings from them, and the quality is genuinely exceptional — the Italian marble tiles in our sitting room get compliments every single time. Their team was patient with our many questions and the pricing was far more competitive than anywhere else we looked in Abuja.",
    rating: 5,
  },
  {
    id: '2',
    name: 'Chukwuemeka Obi',
    location: 'Lekki, Lagos',
    role: 'Property Developer',
    body: "I've been working with ODC Ventures on multiple estate projects and they've never let me down. The electrical team is meticulous — they wired three blocks of flats for us and passed inspection on the first attempt. What I appreciate most is that they handle everything: tiles, plumbing finishings, and all electrical materials in one place. It simplifies procurement enormously.",
    rating: 5,
  },
  {
    id: '3',
    name: 'Ngozi Adeyemi',
    location: 'Gwarimpa, Abuja',
    role: 'Interior Designer',
    body: "As an interior designer, I recommend ODC Ventures to my clients for both products and electrical services without hesitation. Their showroom selection is fantastic — they stock pieces that genuinely look upscale. The team understands design sensibility and they helped me source a discontinued tile pattern I needed for a client project. Exceptional customer service from start to finish.",
    rating: 5,
  },
  {
    id: '4',
    name: 'Ibrahim Bello',
    location: 'Maitama, Abuja',
    role: 'Business Owner',
    body: "We used ODC Ventures for the full fit-out of our new office complex — tiles throughout, all the bathrooms, kitchen area fittings, and the entire electrical installation. The project was delivered on schedule and the workmanship is top quality. Three months on and everything is working perfectly. I will absolutely use them again for our next development.",
    rating: 5,
  },
];
