import BarClient from './BarClient';
import type { Metadata } from 'next';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

async function getPageData() {
  try {
    const res = await fetch(`${API_URL}/pages/bar`, { cache: 'no-store' });
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
    title: page?.seoTitle || page?.title || 'Bar | Verde NYC',
    description: page?.seoDescription || 'Experience the Verde NYC bar — cocktails, brunch, and more.',
  };
}

export default async function BarPage() {
  const data = await getPageData();
  return <BarClient pageData={data} />;
}
