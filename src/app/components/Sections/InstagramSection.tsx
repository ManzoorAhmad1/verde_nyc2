'use client'

import Container from '../Layout/Container'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { useState } from 'react'

const instagramPosts = [
  {
    id: '1',
    image: 'https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769652316932-M19U2Q5ET3KUZWB85V7W/image-asset.jpeg',
    alt: 'Yuzu Blossom Panna Cotta dessert',
    link: 'https://www.instagram.com/p/DUE0PbAjm04/',
    isVideo: false,
  },
  {
    id: '2',
    image: 'https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769460060172-DCS2WFURNDZVPYX6X3DA/image-asset.jpeg',
    alt: 'Verde NYC Lounge atmosphere',
    link: 'https://www.instagram.com/p/DT_JLV4DvB2/',
    isVideo: false,
  },
  {
    id: '3',
    image: 'https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769215038975-SOI0H222HTEGLNGXK001/image-asset.jpeg',
    alt: 'Sunday Brunch at Verde NYC',
    link: 'https://www.instagram.com/p/DT3v95VDhct/',
    isVideo: false,
  },
  {
    id: '4',
    image: 'https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769042629602-0LTVL48G0ZIYAE0HDQFD/image-asset.jpeg',
    alt: 'Night at Verde NYC Lounge',
    link: 'https://www.instagram.com/p/DTyvBbVjho5/',
    isVideo: false,
  },
  {
    id: '5',
    image: 'https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1768591723858-OXU62MEW8MYWI6CI9H08/image-asset.jpeg',
    alt: 'Instagram Reel video',
    link: 'https://www.instagram.com/reel/DTlN2Qmj9s0/',
    isVideo: true,
  },
  {
    id: '6',
    image: 'https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1768332668589-FL0J0JD5M6SE026TS0T2/image-asset.jpeg',
    alt: 'MediterrAsian menu items',
    link: 'https://www.instagram.com/p/DTdh5LpExXe/',
    isVideo: false,
  },
]

export default function InstagramSection() {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null)

  return (
    <section className="section-padding bg-neutral-900">
      <Container>
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
            FOLLOW US ON INSTAGRAM{' '}
            <Link 
              href="https://www.instagram.com/verdenyc/" 
              target="_blank"
              className="text-white hover:text-gray-300 inline-flex items-center gap-2"
            >
              @verdenyc
              <Instagram className="w-5 h-5" />
            </Link>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              target="_blank"
              className="relative aspect-square overflow-hidden group"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              
              {/* Video overlay */}
              {post.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
              
              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                hoveredPost === post.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}