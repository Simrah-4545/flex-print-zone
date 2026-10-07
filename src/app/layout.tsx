import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS_CONFIG } from "@/config/business";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BUSINESS_CONFIG.BUSINESS_NAME} | Flex Printing, Banners & Signage Bareilly`,
  description: `${BUSINESS_CONFIG.BUSINESS_NAME} provides professional flex printing, banners, hoardings, shop boards, vinyl printing & large format advertising in ${BUSINESS_CONFIG.CITY}. Get a free quote today!`,
  keywords: [
    "Flex Printing",
    "Flex Printing Near Me",
    "Flex Printing Bareilly",
    "Flex Banner Printing",
    "Flex Board Printing",
    "Hoarding Printing",
    "Banner Printing Bareilly",
    "Large Format Printing",
    "Vinyl Printing Bareilly",
    "Shop Board Printing",
    "Event Banner Printing",
    "Backlit Flex Printing",
    "Star Flex Printing Bareilly",
  ],
  authors: [{ name: BUSINESS_CONFIG.BUSINESS_NAME }],
  openGraph: {
    title: `${BUSINESS_CONFIG.BUSINESS_NAME} - Your Vision. Our Print.`,
    description: `Professional Flex Banner Printing, Hoardings, Shop Boards, & Vinyl Printing in ${BUSINESS_CONFIG.CITY}. Quality Printing & Bold Impact.`,
    url: `https://${BUSINESS_CONFIG.DOMAIN}`,
    siteName: BUSINESS_CONFIG.BUSINESS_NAME,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_CONFIG.BUSINESS_NAME,
    image: `https://${BUSINESS_CONFIG.DOMAIN}/logo.png`,
    telePhone: BUSINESS_CONFIG.PHONE_NUMBER,
    email: BUSINESS_CONFIG.EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_CONFIG.ADDRESS,
      addressLocality: BUSINESS_CONFIG.CITY,
      addressRegion: BUSINESS_CONFIG.STATE,
      postalCode: BUSINESS_CONFIG.PINCODE,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.3670",
      longitude: "79.4304",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    url: `https://${BUSINESS_CONFIG.DOMAIN}`,
    priceRange: "₹₹",
    sameAs: [BUSINESS_CONFIG.INSTAGRAM_URL, BUSINESS_CONFIG.FACEBOOK_URL],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#090A0D] text-gray-100 min-h-screen selection:bg-[#FFB800] selection:text-black">
        {children}
      </body>
    </html>
  );
}
