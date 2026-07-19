export interface NavLink {
  name: string
  href: string
}

export interface Ingredient {
  name: string
  role: string
  color: string
}

export interface Benefit {
  icon: string
  title: string
  desc: string
}

export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  initials: string
  gradient: string
}

export interface FAQItem {
  q: string
  a: string
}
