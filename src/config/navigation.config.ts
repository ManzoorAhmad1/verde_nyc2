export const mainNavigation = [
  { name: 'HOME', href: '/' },
  { name: 'RESTAURANT', href: '/restaurant' },
  { name: 'BAR', href: '/bar' },
  { name: 'MENU', href: '/menu' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'DINNER PARTY', href: '/dinner-party' },
  { name: 'EVENTS', href: '/events' },
  { name: 'CONTACT', href: '/contact' },
]

export const secondaryNavigation = [
  { name: 'RESERVATIONS', href: '/reserve' },
]

export const mobileNavigation = [
  ...mainNavigation,
  ...secondaryNavigation,
]

export const footerNavigation = {
  main: [
    { name: 'HOME', href: '/' },
    { name: 'RESERVE', href: '/reserve' },
    { name: 'PRESS', href: '/all-press' },
    { name: 'JOIN THE TEAM', href: 'https://www.rivieradininggroup.com/career' },
    { name: 'GIFT CARD', href: '/gift-card' },
    { name: 'CONTACT', href: '/contact' },
  ],
  brands: [
    { name: 'AVA', href: 'https://www.avamediterraegean.com' },
    { name: 'CASA NEOS', href: 'https://www.casa-neos.com' },
    { name: 'CLAUDIE', href: 'https://www.claudierestaurant.com' },
    { name: 'MM', href: 'https://mm-club.com' },
  ],
}