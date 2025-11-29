import { Metadata } from 'next';

export const siteConfig = {
  name: 'TomSoft',
  title: 'TomSoft – Nowoczesne strony internetowe, sklepy i systemy webowe',
  description: 'Profesjonalne strony internetowe, sklepy eCommerce i systemy dedykowane. React + Next.js, UX/UI Design, optymalizacja SEO i błyskawiczne działanie. TomSoft – tworzymy nowoczesny internet.',
  keywords: [
    'strony internetowe',
    'freelancer web developer',
    'Next.js',
    'React',
    'UX design',
    'SEO',
    'e-commerce',
    'tworzenie stron',
    'TomSoft',
    'web development',
    'sklepy internetowe',
    'systemy dedykowane',
    'UI/UX design',
    'optymalizacja SEO',
    'responsive design',
    'nowoczesne strony',
    'freelancer',
    'programista',
    'developer',
    'Polska',
    'Tomasz Chromy'
  ],
  url: 'https://tomaszchromy.com',
  ogImage: '/og-image.jpg',
  author: 'Tomasz Chromy',
  creator: 'Tomasz Chromy',
  themeColor: '#0D1117',
  locale: 'pl_PL',
  type: 'website',
  email: 'tomasz.chromy@outlook.com',
  foundingYear: '2024',
};

export function generatePageMetadata(
  title?: string,
  description?: string,
  image?: string,
  noIndex?: boolean
): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const pageImage = image || siteConfig.ogImage;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: siteConfig.url,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: '@tomsoft_website',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
    category: 'technology',
    classification: 'Business',
    referrer: 'origin-when-cross-origin',
    colorScheme: 'dark',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: siteConfig.themeColor },
      { media: '(prefers-color-scheme: dark)', color: siteConfig.themeColor },
    ],
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        {
          rel: 'mask-icon',
          url: '/safari-pinned-tab.svg',
          color: siteConfig.themeColor,
        },
      ],
    },
    manifest: '/site.webmanifest',
    other: {
      'msapplication-TileColor': siteConfig.themeColor,
      'msapplication-config': '/browserconfig.xml',
    },
  };
}

// Person Schema - dla freelancera
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteConfig.url}/#person`,
  name: 'Tomasz Chromy',
  jobTitle: 'Freelance Web Developer & Junior Programmer',
  description: 'Freelance Web Developer specjalizujący się w tworzeniu nowoczesnych stron internetowych, sklepów e-commerce i systemów dedykowanych.',
  url: siteConfig.url,
  email: siteConfig.email,
  image: `${siteConfig.url}/og-image.jpg`,
  sameAs: [
    'https://tomaszchromy.com',
    'https://github.com/tomaszchromy',
    'https://linkedin.com/in/tomaszchromy',
  ],
  knowsAbout: [
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'UI/UX Design',
    'SEO Optimization',
    'E-commerce',
    'Tailwind CSS',
    'Node.js',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'TomSoft',
    url: siteConfig.url,
  },
};

// LocalBusiness Schema - dla lepszego SEO lokalnego
export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteConfig.url}/#business`,
  name: 'TomSoft - Tomasz Chromy',
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  image: `${siteConfig.url}/og-image.jpg`,
  logo: `${siteConfig.url}/logo.png`,
  priceRange: '$$',
  currenciesAccepted: 'PLN, EUR',
  paymentAccepted: 'Przelew bankowy, PayPal',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PL',
    addressLocality: 'Polska',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Poland',
    },
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 52.2297,
        longitude: 21.0122,
      },
      geoRadius: '500000',
    },
  ],
  founder: {
    '@id': `${siteConfig.url}/#person`,
  },
  foundingDate: siteConfig.foundingYear,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '15',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Usługi Web Development',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Strony firmowe',
          description: 'Szybkie i SEO-friendly witryny na React + Next.js',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'PLN',
          minPrice: '3500',
          maxPrice: '6500',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sklepy internetowe',
          description: 'Headless eCommerce z integracjami płatności',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'PLN',
          minPrice: '6500',
          maxPrice: '17000',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Systemy dedykowane',
          description: 'SaaS/CRM/ERP dopasowane do firmy',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'PLN',
          minPrice: '17000',
        },
      },
    ],
  },
};

// Main JSON-LD - Organization (zachowane dla kompatybilności)
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: siteConfig.email,
    availableLanguage: ['Polish', 'English'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PL',
    addressRegion: 'Polska',
  },
  sameAs: [
    'https://tomaszchromy.com',
    'https://github.com/tomaszchromy',
    'https://linkedin.com/in/tomaszchromy',
  ],
  founder: {
    '@id': `${siteConfig.url}/#person`,
  },
  foundingDate: siteConfig.foundingYear,
  areaServed: {
    '@type': 'Country',
    name: 'Poland',
  },
};

export const breadcrumbJsonLd = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteConfig.url}${item.url}`,
  })),
});

export const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tworzenie stron internetowych',
  description: 'Profesjonalne tworzenie nowoczesnych stron internetowych, sklepów online i systemów dedykowanych',
  provider: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Poland',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Usługi web development',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Strony firmowe',
          description: 'Szybkie i SEO-friendly witryny na React + Next.js',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sklepy internetowe',
          description: 'Headless eCommerce z integracjami płatności',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Systemy dedykowane',
          description: 'SaaS/CRM/ERP dopasowane do firmy',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UI/UX Design',
          description: 'Makiety, prototypy, design systemy',
        },
      },
    ],
  },
};
