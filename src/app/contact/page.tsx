'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import { useSeoMetadata } from '../hooks/useSeoMetadata';
import PageLoader from '@/components/PageLoader';

interface ContactItem {
  name?: string;
  description?: string;
  link?: string;
}

interface PageSection {
  type: string;
  heading?: string;
  content?: string;
  images?: string[];
  ctaLink?: string;
  items?: ContactItem[];
}

interface ContactGroup {
  label: string;
  rows: ContactItem[];
}

const SOCIAL_KEYS = ['instagram', 'facebook', 'soundcloud', 'spotify'];

function isSocialItem(item: ContactItem) {
  return SOCIAL_KEYS.some(s => item.name?.toLowerCase().includes(s));
}

function groupItems(items: ContactItem[]): ContactGroup[] {
  const groups: ContactGroup[] = [];
  let current: ContactGroup | null = null;
  for (const item of items) {
    if (isSocialItem(item)) continue;
    const isHeading = item.name && !item.description && !item.link;
    if (isHeading) {
      if (current) groups.push(current);
      current = { label: item.name!, rows: [] };
    } else {
      if (!current) current = { label: '', rows: [] };
      current.rows.push(item);
    }
  }
  if (current) groups.push(current);
  return groups;
}

function ItemValue({ item }: { item: ContactItem }) {
  const cls = 'text-[#666666] font-light border-b border-[#666666]/40 hover:border-[#666666] pb-[1px] transition-colors';
  if (item.link && item.link.trim()) {
    return (
      <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined}
        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined} className={cls}>
        {item.description || 'View'}
      </a>
    );
  }
  if (item.description?.includes('@')) return <a href={`mailto:${item.description}`} className={cls}>{item.description}</a>;
  if (item.description?.startsWith('+') || /^\d/.test(item.description || '')) {
    return <a href={`tel:${item.description?.replace(/\s/g, '')}`} className={cls}>{item.description}</a>;
  }
  return <span className="text-[#666666] font-light">{item.description}</span>;
}

const ICON_MAP: Record<string, JSX.Element> = {
  soundcloud: (
    <svg viewBox="0 0 64 64" width="32" height="32"><path fill="currentColor" d="M43.6,30c-0.6,0-1.2,0.1-1.7,0.3c-0.3-4-3.7-7.1-7.7-7.1c-1,0-2,0.2-2.8,0.5C31.1,23.9,31,24,31,24.3v13.9c0,0.3,0.2,0.5,0.5,0.5c0,0,12.2,0,12.2,0c2.4,0,4.4-1.9,4.4-4.4C48,31.9,46,30,43.6,30z M27.2,25.1c-0.7,0-1.2,0.5-1.2,1.1v11.3c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2V26.2C28.4,25.6,27.8,25.1,27.2,25.1z M22.2,27.8c-0.7,0-1.2,0.5-1.2,1.1v8.5c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2V29C23.4,28.3,22.9,27.8,22.2,27.8z M17.2,30.2c-0.7,0-1.2,0.5-1.2,1.1v4.9c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2v-4.9C18.5,30.7,17.9,30.2,17.2,30.2z" /></svg>
  ),
  facebook: (
    <svg viewBox="0 0 64 64" width="32" height="32"><path fill="currentColor" d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" /></svg>
  ),
  spotify: (
    <svg viewBox="0 0 64 64" width="32" height="32"><path fill="currentColor" d="M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16 M39.3,39.1c-0.3,0.5-0.9,0.6-1.4,0.3c-3.8-2.3-8.5-2.8-14.1-1.5c-0.5,0.1-1.1-0.2-1.2-0.7c-0.1-0.5,0.2-1.1,0.8-1.2c6.1-1.4,11.3-0.8,15.5,1.8C39.5,38,39.6,38.6,39.3,39.1 M41.3,34.7c-0.4,0.6-1.1,0.8-1.7,0.4c-4.3-2.6-10.9-3.4-15.9-1.9c-0.7,0.2-1.4-0.2-1.6-0.8c-0.2-0.7,0.2-1.4,0.8-1.6c5.8-1.8,13-0.9,18,2.1C41.5,33.4,41.7,34.1,41.3,34.7 M41.5,30.2c-5.2-3.1-13.7-3.3-18.6-1.9c-0.8,0.2-1.6-0.2-1.9-1c-0.2-0.8,0.2-1.6,1-1.9c5.7-1.7,15-1.4,21,2.1c0.7,0.4,0.9,1.3,0.5,2.1C43.1,30.4,42.2,30.6,41.5,30.2" /></svg>
  ),
  instagram: (
    <svg viewBox="0 0 64 64" width="32" height="32"><path fill="currentColor" d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z" /></svg>
  ),
};

export default function ContactPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [heroSection, setHeroSection] = useState<PageSection | null>(null);
  const [contactInfo, setContactInfo] = useState<PageSection | null>(null);
  const [mapSection, setMapSection] = useState<PageSection | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageData, setPageData] = useState<{ seoTitle?: string; seoDescription?: string; title?: string } | null>(null);

  useSeoMetadata(pageData);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
        const res = await fetch(`${API_URL}/pages/contact`);
        if (res.ok) {
          const data = await res.json();
          if (data.page && data.page.sections) {
            const sections: PageSection[] = data.page.sections;
            setHeroSection(sections.find(s => s.type === 'hero') || null);
            setContactInfo(sections.find(s => s.type === 'contact_info') || null);
            setMapSection(sections.find(s => s.type === 'text') || null);
            setPageData({
              seoTitle: data.page.seoTitle,
              seoDescription: data.page.seoDescription,
              title: data.page.title,
            });
          }
        }
      } catch (error) {
        console.error('Failed to load contact page', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPageData();
  }, []);

  const items = contactInfo?.items || [];
  const groups = groupItems(items);
  const socials = items.filter(isSocialItem);

  return (
    <>
      {/* <PageLoader isDataLoaded={!isLoading} /> */}
      <div className="contact-page">
        <Header />
        <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

        {/* Commented out Hero Section per user request */}
       

        {/* Contact Info — fully CMS-driven */}
        <section id="contact-info" className="contact-info bg-[#F5EFEA] pt-32 pb-16">
          <div className="text-center mb-4 mt-4 md:mt-0 lg:mb-24">
            <h2 className="text-[26px] md:text-[32px] font-serif tracking-[0.15em] uppercase text-[#3a3a3a]">
              {contactInfo?.heading || 'Contact Us'}
            </h2>
          </div>

          <div className="max-w-[95vw] md:max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-stretch pb-12">
              
              {/* Left Column: Contact Details */}
              <div className="flex-1 lg:w-[45%] xl:w-[40%] pt-0 w-full text-center md:text-left flex flex-col justify-start">
                <div className="flex flex-col gap-12 xl:gap-16 max-w-xl w-full">
                  {groups.map((group, gi) => (
                    <div key={gi} className="flex flex-col w-full text-center md:text-left">
                      {group.label && group.label.trim() !== '' && (
                        <p className="text-[14px] md:text-[15px] tracking-[0.2em] font-medium uppercase text-[#3a3a3a] mb-6 inline-block w-full">
                          {group.label}
                        </p>
                      )}
                      <div className="flex flex-col gap-5 w-full items-center md:items-stretch">
                        {group.rows.map((row, ri) => (
                          <div key={ri} className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-1 md:gap-4 lg:gap-8 w-full text-center md:text-left">
                            {row.name && (
                              <span className={`text-[10px] tracking-[0.15em] md:tracking-[0.2em] leading-relaxed uppercase font-semibold flex-shrink-0 md:whitespace-nowrap mt-1 w-full md:w-auto ${row.name.toLowerCase().includes('address') ? 'text-[#3a3a3a]' : 'text-[#A7A096]'}`}>
                                {row.name}
                              </span>
                            )}
                            <div className="text-[13px] md:text-[14px] lg:text-[15px] leading-[1.6] font-light text-[#666666] flex-1 text-center md:text-right w-full break-words">
                              <ItemValue item={row} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Social Icons */}
                  {socials.length > 0 && (
                    <div className="flex flex-col w-full mt-2 text-center md:text-left">
                      <p className="text-[14px] md:text-[15px] tracking-[0.2em] font-medium uppercase text-[#3a3a3a] mb-6 inline-block w-full">
                        FOLLOW VERDE NYC
                      </p>
                      <div className="flex justify-center md:justify-end gap-5 w-full">
                        {socials.map((social, idx) => {
                          const key = SOCIAL_KEYS.find(s => social.name?.toLowerCase().includes(s)) || '';
                          const href = social.link || social.description || '#';
                          return (
                            <a key={idx} href={href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-[#A7A096] hover:text-[#666666] transition-colors scale-90">
                              {ICON_MAP[key]}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Right Column: Image */}
              <div className="flex-1 w-full lg:w-[55%] xl:w-[60%] overflow-hidden relative hidden md:block mt-8 lg:mt-0 lg:h-auto min-h-[300px] lg:min-h-0">
                <img
                  loading="lazy"
                  decoding="async"
                  src={heroSection?.images?.[0] || 'https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8472.jpg'}
                  alt="Verde NYC Contact"
                  className="w-full h-full object-cover lg:absolute lg:inset-0"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="contact-map w-full bg-[#F5EFEA] pb-16">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[500px]">
            <iframe
              src={mapSection?.ctaLink || "https://maps.google.com/maps?q=Verde+NYC+85+10th+Ave+New+York+NY+10011&output=embed&z=18"}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Verde NYC on Google Maps"
            />
          </div>
        </section>

        <nav className="contact-index-nav">
          <a href="#contact-mila" className="contact-index-item active"><div className="contact-index-indicator" /></a>
          <a href="#contact-info" className="contact-index-item"><div className="contact-index-indicator" /></a>
          <a href="#map" className="contact-index-item"><div className="contact-index-indicator" /></a>
        </nav>

        <Footer />
      </div>
    </>
  );
}
