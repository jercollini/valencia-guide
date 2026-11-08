import type { ItineraryDay } from '../types'

export const itinerary: ItineraryDay[] = [
  {
    day: 1,
    title: 'El casco histórico',
    summary: 'Catedral, mercados y basílica, todo a pie por el centro.',
    stops: [
      { time: 'Mañana', text: 'Empezad en la Catedral y subid al Miguelete con calma.', placeId: 'catedral' },
      { time: 'Mediodía', text: 'Mercado Central para ver los puestos y tomar algo.', placeId: 'mercado-central' },
      { time: 'Tarde', text: 'Lonja de la Seda y paseo hasta la Basílica de los Desamparados.', placeId: 'lonja' },
    ],
  },
  {
    day: 2,
    title: 'Murallas y arte',
    summary: 'Las puertas medievales y el museo, con un paseo tranquilo.',
    stops: [
      { time: 'Mañana', text: 'Torres de Serranos y subida a la parte alta para ver el río.', placeId: 'torres-serranos' },
      { time: 'Mediodía', text: 'Torres de Quart y paseo por el Barrio del Carmen.', placeId: 'torres-quart' },
      { time: 'Tarde', text: 'Museo de Bellas Artes, con una buena pausa para descansar.', placeId: 'bellas-artes' },
    ],
  },
  {
    day: 3,
    title: 'Jardín, mercado y mar',
    summary: 'El Turia a pie y la playa al atardecer.',
    stops: [
      { time: 'Mañana', text: 'Paseo por el Jardín del Turia hasta el parque Gulliver.', placeId: 'turia' },
      { time: 'Mediodía', text: 'Comida o café en el Mercado de Colón.', placeId: 'mercado-colon' },
      { time: 'Tarde', text: 'Playa de la Malvarrosa para ver el atardecer.', placeId: 'malvarrosa' },
    ],
  },
]
