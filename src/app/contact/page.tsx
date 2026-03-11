import ContactClient from './ContactClient';
import type { Metadata } from 'next';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

async function getPageData() {
  try {
    const res = await fetch(`${API_URL}/pages/contact`, { cache: 'no-store' });
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
    title: page?.seoTitle || page?.title || 'Contact | Verde NYC',
    description: page?.seoDescription || 'Get in touch with Verde NYC — reservations, events, and general enquiries.',
  };
}

export default async function ContactPage() {
  const data = await getPageData();
  return <ContactClient pageData={data} />;
}
