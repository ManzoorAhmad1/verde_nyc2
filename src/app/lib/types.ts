export interface NavigationItem {
  name: string
  href: string
  current?: boolean
}

export interface Venue {
  id: string
  title: string
  description: string
  image: string
  link: string
  featured?: boolean
}

export interface InstagramPost {
  id: string
  image: string
  alt: string
  caption: string
  link: string
  type: 'image' | 'video'
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  category: string
  dietary?: string[]
}

export interface ReservationFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  specialRequests?: string
}

export interface NewsletterFormData {
  email: string
}