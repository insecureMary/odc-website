import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ODC Ventures | Premium Tiles, Finishings & Electrical Solutions',
    template: '%s | ODC Ventures',
  },
  description:
    'ODC Ventures supplies premium local and imported tiles, luxury bathroom and kitchen finishings, and expert electrical wiring services for residential and commercial buildings across Nigeria.',
  keywords: [
    'tiles Nigeria',
    'bathroom finishings Abuja',
    'kitchen sinks taps Nigeria',
    'electrical wiring Abuja',
    'imported tiles Nigeria',
    'ODC Ventures',
    'floor tiles',
    'porcelain tiles',
    'bathroom accessories Nigeria',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://odcventures.ng',
    siteName: 'ODC Ventures',
    title: 'ODC Ventures | Premium Tiles, Finishings & Electrical Solutions',
    description:
      'Your trusted partner for premium tiles, luxury finishings, and expert electrical services in Nigeria.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ODC Ventures | Premium Tiles, Finishings & Electrical Solutions',
    description: 'Premium tiles, finishings and electrical services in Nigeria.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
