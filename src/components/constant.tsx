import React from 'react';

export const VENUES: any = [
  {
    id: '1',
    title: 'VERDE RESTAURANT',
    description: 'The distinctively curated rooftop aims to take guests on a culinary journey through the shores of the Mediterranean.',
    image: '/gallery/40A4553-verde-newyork.jpg',
    link: '/milaomakase'
  },
  {
    id: '2',
    title: "VERDY PARTY'S",
    description: " Experience world-class hospitality at VERDYPARTY'S, where bespoke private events come to life. Whether an intimate gathering or a grand celebration for up to 400 guests, each occasion is infused with timeless Mediterranean elegance and meticulous attention to detail.",
    image: '/gallery/40A4575-verde-newyork.jpg',
    link: '/milaomakase'
  },
  {
    id: '3',
    title: 'VERDE LOUPANGE',
    description: 'At VERDE LOUPANGE, intimate charm blends seamlessly with metropolitan energy. Designed for vibrant lounge evenings and thoughtfully curated experiences, this space captures the essence of Parisian artistry and the spirited soul of New York',
    image: '/gallery/40A4625-verde-newyork.jpg',
    link: '/milaomakase'
  },
  {
    id: '4',
    title: 'VERDY BAR',
    description: 'VERDYBAR redefines Sunday Brunch. Join us on our rooftop for a festive experience featuring live music, exquisite Mediterranean fare from chef-designed stations, and an atmosphere dedicated to leisure and lively connection',
    image: '/gallery/40A4697-verde-newyork.jpg',
    link: '/milaomakase'
  }
];

export const INSTAGRAM_POSTS = [
  'https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769652316932-M19U2Q5ET3KUZWB85V7W/image-asset.jpeg',
  'https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769460060172-DCS2WFURNDZVPYX6X3DA/image-asset.jpeg',
  'https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769215038975-SOI0H222HTEGLNGXK001/image-asset.jpeg',
  'https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769042629602-0LTVL48G0ZIYAE0HDQFD/image-asset.jpeg',
  'https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1768332668589-FL0J0JD5M6SE026TS0T2/image-asset.jpeg',
  'https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1768591723858-OXU62MEW8MYWI6CI9H08/image-asset.jpeg'
];

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0ff41a94-383f-417e-9f83-4749a8899761/MILA_light.png" 
    alt="MILA Miami" 
    className={className || "h-12 w-auto"} 
  />
);

export const SocialIcons = {
  Soundcloud: () => <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 12V20M16 14V20M20 16V20M8 10V20M4 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  Facebook: () => <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  Spotify: () => <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.65 14.45c-.15.25-.45.35-.7.2-2.35-1.45-5.3-1.75-8.8-.95-.3.05-.6-.15-.65-.45s.15-.6.45-.65c3.8-.85 7.1-.5 9.7 1.1.25.15.35.45.2.75zm1.25-2.75c-.2.3-.6.4-.9.2-2.7-1.65-6.8-2.15-10-.2-.35.2-.8.1-.95-.25s-.1-.8.25-.95c3.65-2.2 8.2-1.6 11.3.3.3.2.4.6.3.9zm.1-2.95c-3.25-1.95-8.6-2.15-11.7-1.2-.5.15-1.05-.15-1.2-.65s.15-1.05.65-1.2c3.55-1.05 9.45-.8 13.2 1.45.45.25.6.85.35 1.3-.25.45-.85.6-1.3.3z"/></svg>,
  Instagram: () => <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 7.5a4.5 4.5 0 1 0 4.5 4.5 4.5 4.5 0 0 0-4.5-4.5zm0 7.5a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm6.5-9.5a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25zM12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465a4.902 4.902 0 0 1 1.77 1.152 4.902 4.902 0 0 1 1.152 1.77c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.217 1.79-.465 2.428a4.902 4.902 0 0 1-1.152 1.77 4.902 4.902 0 0 1-1.77 1.152c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.217-2.428-.465a4.902 4.902 0 0 1-1.77-1.152 4.902 4.902 0 0 1-1.152-1.77c-.247-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.902 4.902 0 0 1 1.152-1.77 4.902 4.902 0 0 1 1.77-1.152c.637-.247 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2z"/></svg>,
};