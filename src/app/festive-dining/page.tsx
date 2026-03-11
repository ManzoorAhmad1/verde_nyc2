import FestiveDiningClient from './FestiveDiningClient';
import type { Metadata } from 'next';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

async function getPageData() {
  try {
    const res = await fetch(`${API_URL}/pages/festive-dining`, { cache: 'no-store' });
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
    title: page?.seoTitle || page?.title || 'Festive Dining | Verde NYC',
    description: page?.seoDescription || 'Private events and festive dining at Verde NYC.',
  };
}

export default async function FestiveDiningPage() {
  const data = await getPageData();
  return <FestiveDiningClient pageData={data} />;
}
