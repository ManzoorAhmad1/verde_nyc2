import GalleryClient from './GalleryClient';
import type { Metadata } from 'next';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

async function getPageData() {
  try {
    const res = await fetch(`${API_URL}/pages/gallery`, { cache: 'no-store' });
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
    title: page?.seoTitle || page?.title || 'Gallery | Verde NYC',
    description: page?.seoDescription || 'Explore the Verde NYC gallery — a curated collection of moments from our restaurant.',
  };
}

export default async function GalleryPage() {
  const data = await getPageData();
  return <GalleryClient pageData={data} />;
}
