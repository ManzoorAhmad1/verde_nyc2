import Hero from '@/components/Hero';
import VenueGrid from '@/components/VenueGrid';
import ParallaxSection from '@/components/ParallaxSection';
import Philosophy from '@/components/Philosophy';
import InstagramSection from '@/components/InstagramSection';
import Footer from './components/Footer';
import Header from './components/Header';
import MobileNavWrapper from './components/MobileNavWrapper';
import type { Metadata } from 'next';

interface PageSection {
  type: string;
  heading?: string;
  subheading?: string;
  content?: string;
  images?: string[];
  mobileImages?: string[];
  ctaLink?: string;
  ctaText?: string;
  items?: Array<{
    name: string;
    description: string;
    price?: string;
    image?: string;
    link?: string;
  }>;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

async function getHomeData() {
  try {
    const res = await fetch(`${API_URL}/pages/home`, { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomeData();
  const page = data?.page;

  return {
    title: page?.seoTitle || page?.title || 'Verde NYC | Festive Restaurant in New York',
    description: page?.seoDescription || 'Discover Verde NYC in the Meatpacking District: a festive Mediterranean restaurant with refined dining, signature atmosphere, and unforgettable nights.',
  };
}

function renderSection(section: PageSection, index: number) {
  switch (section.type) {
    case 'hero':
      return (
        <Hero 
          key={index}
          image={section.images?.[0]}
          mobileImage={section.mobileImages?.[0]}
          heading={section.heading}
          subheading={section.subheading}
          isLoading={false}
        />
      );

    case 'features':
      return (
        <div key={index} id="mila-venues">
          <VenueGrid
            venues={section.items || []}
            heading={section.heading}
            subheading={section.subheading}
            content={section.content}
          />
        </div>
      );

    case 'parallax':
      return (
        <ParallaxSection
          key={index}
          imageUrl={section.images?.[0] || ''}
          mobileImageUrl={section.mobileImages?.[0]}
          title={section.heading || ''}
          subtitle={section.content || section.subheading || ''}
          speed={0.5}
        />
      );

    case 'text':
      return (
        <Philosophy
          key={index}
          heading={section.heading}
          content={section.content}
          ctaText={section.ctaText}
          ctaLink={section.ctaLink}
        />
      );

    case 'gallery':
      return (
        <InstagramSection
          key={index}
          heading={section.heading}
          subheading={section.subheading}
          images={section.images || []}
          ctaLink={section.ctaLink}
        />
      );

    default:
      return null;
  }
}

export default async function HomePage() {
  const data = await getHomeData();
  const sections: PageSection[] = data?.page?.sections || [];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MobileNavWrapper />
      <main>
        {sections.map((section, index) => renderSection(section, index))}
      </main>
      <Footer />
    </div>
  );
}
