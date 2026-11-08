import type { GuideConfig } from '../types'
import { places } from './places'

export const guide: GuideConfig = {
  brand: 'Viajes J.R. Collini',
  city: 'Valencia',
  country: 'España',
  days: 3,
  repo: 'valencia-guide',
  tagline: 'Vuestra guía, sencilla y a mano.',
  heroImage: places.find((p) => p.id === 'torres-serranos')!.image,
  coords: { lat: 39.4699, lng: -0.3763 },
  timezone: 'Europe/Madrid',
  mapZoom: 14,
  language: 'valenciano',
  intro: {
    itinerary:
      'Una propuesta día a día para aprovechar Valencia sin prisas. Cambiad el orden según el tiempo y las ganas.',
    places:
      'Los lugares más bonitos e importantes de Valencia. Toca «Cómo llegar» para abrir el mapa con la ruta.',
    food:
      'Los sabores de Valencia que no os podéis ir sin probar. Si un local es famoso por un plato, lo indicamos.',
    transport: 'Cómo moverse por Valencia de forma sencilla y cómoda.',
    phrases:
      'Frases básicas en valenciano con una pronunciación aproximada (leedla como si fuera español).',
    emergency: 'Teléfonos importantes. Toca «Llamar» para marcar directamente.',
  },
}
