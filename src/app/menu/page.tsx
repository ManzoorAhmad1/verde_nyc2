import MenuClient from './MenuClient';
import type { Metadata } from 'next';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

async function getPageData() {
  try {
    const res = await fetch(`${API_URL}/pages/menu`, { cache: 'no-store' });
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
    title: page?.seoTitle || page?.title || 'Menu | Verde NYC',
    description: page?.seoDescription || 'Explore the Verde NYC menu — Mediterranean cuisine crafted with the finest ingredients.',
  };
}

export default async function MenuPage() {
  const data = await getPageData();
  return <MenuClient pageData={data} />;
}
