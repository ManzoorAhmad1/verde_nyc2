import RestaurantClient from './RestaurantClient';
import type { Metadata } from 'next';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

async function getPageData() {
  try {
    const res = await fetch(`${API_URL}/pages/restaurant`, { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageData();
  const page = data?.page;
  return {
    title: page?.seoTitle || page?.title || 'Restaurant | Verde NYC',
    description: page?.seoDescription || 'Discover the Verde NYC restaurant experience — Mediterranean cuisine in the heart of New York.',
  };
}

export default async function RestaurantPage() {
  const data = await getPageData();
  return <RestaurantClient pageData={data} />;
}
