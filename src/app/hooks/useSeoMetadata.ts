'use client';

import { useEffect } from 'react';

interface SeoMetadata {
  seoTitle?: string;
  seoDescription?: string;
  title?: string; // fallback
}

/**
 * Hook to dynamically update page SEO metadata (title & description)
 * Uses CMS seoTitle/seoDescription if available, falls back to page title
 */
export function useSeoMetadata(pageData: SeoMetadata | null) {
  useEffect(() => {
    if (!pageData) return;

    // Update document title
    const title = pageData.seoTitle || pageData.title;
    if (title) {
      document.title = title.includes('Verde') ? title : `${title} | Verde NYC`;
    }

    // Update meta description
    const description = pageData.seoDescription;
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);

      // Also update og:description
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', description);
    }

    // Update og:title
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', title.includes('Verde') ? title : `${title} | Verde NYC`);
    }
  }, [pageData]);
}
