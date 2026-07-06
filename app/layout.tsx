import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prexea Technology Nigeria Limited | African Technology Innovation',
  description: 'Technology commercialization, agritech innovation, and enterprise solutions connecting global technologies to African markets. Building sustainable solutions for Africa\'s future.',
  keywords: 'African technology, agritech Nigeria, technology commercialization Africa, sustainable agriculture, enterprise technology Africa, climate-smart agriculture, Sentinel-X, crop protection technology',
  authors: [{ name: 'Prexea Technology Nigeria Limited' }],
  openGraph: {
    title: 'Prexea Technology Nigeria Limited | African Technology Innovation',
    description: 'Connecting African markets to transformative technologies. Technology commercialization, agritech innovation, and enterprise solutions designed for Africa\'s future.',
    url: 'https://prexeatech.com',
    siteName: 'Prexea Technology',
    images: [
      {
        url: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Prexea Technology - African Agricultural Innovation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prexea Technology Nigeria Limited | African Technology Innovation',
    description: 'Connecting African markets to transformative technologies. Building sustainable solutions for Africa\'s future.',
    images: ['https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/Prexea_icon.png" type="image/png" />
        <meta name="theme-color" content="#081826" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}