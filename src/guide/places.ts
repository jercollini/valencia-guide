import type { Place } from '../types'

// Imágenes desde Wikimedia Commons (uso libre).
export const places: Place[] = [
  {
    id: 'catedral',
    name: 'Catedral de Valencia (El Miguelete)',
    category: 'Iglesia',
    description:
      'La catedral combina estilos desde el románico hasta el barroco. Desde su torre, El Miguelete, hay buenas vistas de la ciudad.',
    address: 'Plaza de la Reina, s/n, 46001 Valencia',
    lat: 39.4756,
    lng: -0.3751,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Valencia_cathedral_2022_-_north_fa%C3%A7ade_dawn.jpg/960px-Valencia_cathedral_2022_-_north_fa%C3%A7ade_dawn.jpg',
    tip: 'Subir al Miguelete tiene escaleras de caracol; conviene subir sin prisa y con buen calzado.',
  },
  {
    id: 'mercado-central',
    name: 'Mercado Central',
    category: 'Mercado',
    description:
      'Uno de los mercados de abastos más grandes de Europa, con una cúpula de hierro y vidrieras. Puestos de fruta, pescado, embutidos y tapas.',
    address: 'Plaza del Mercado, 31, 46001 Valencia',
    lat: 39.4745,
    lng: -0.3783,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mercat_fa%C3%A7ana5.jpg/960px-Mercat_fa%C3%A7ana5.jpg',
    tip: 'Mejor por la mañana, cuando el ambiente es más animado y hay más producto fresco.',
  },
  {
    id: 'lonja',
    name: 'Lonja de la Seda',
    category: 'Monumento',
    description:
      'Edificio gótico civil del siglo XV, Patrimonio de la Humanidad. Su gran sala de contratación de seda es un espacio muy bonito.',
    address: 'Calle de Xàtiva, 24, 46002 Valencia',
    lat: 39.4669,
    lng: -0.3771,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Valencia%2C_loggia_della_seta%2C_interno%2C_sala_delle_contrattazioni%2C_01%2C0.jpg/960px-Valencia%2C_loggia_della_seta%2C_interno%2C_sala_delle_contrattazioni%2C_01%2C0.jpg',
  },
  {
    id: 'torres-serranos',
    name: 'Torres de Serranos',
    category: 'Monumento',
    description:
      'Una de las antiguas puertas de acceso a la ciudad medieval. Se puede subir a la parte superior para ver el río y los tejados.',
    address: 'Plaza de los Fueros, Valencia',
    lat: 39.4793,
    lng: -0.3759,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Puerta_de_los_Serranos%2C_Valencia%2C_Espa%C3%B1a%2C_2014-06-30%2C_DD_86.JPG/960px-Puerta_de_los_Serranos%2C_Valencia%2C_Espa%C3%B1a%2C_2014-06-30%2C_DD_86.JPG',
  },
  {
    id: 'torres-quart',
    name: 'Torres de Quart',
    category: 'Monumento',
    description:
      'La otra gran puerta medieval de Valencia, con almenas y un aire muy de fortaleza. Está a un paseo de las Torres de Serranos.',
    address: 'Calle Guillén de Castro con calle Quart, Valencia',
    lat: 39.4757,
    lng: -0.384,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Torres_de_Cuart%2C_Valencia%2C_Espa%C3%B1a%2C_2014-06-30%2C_DD_89.JPG/960px-Torres_de_Cuart%2C_Valencia%2C_Espa%C3%B1a%2C_2014-06-30%2C_DD_89.JPG',
    tip: 'Pasead después por el Barrio del Carmen, que queda a un paso.',
  },
  {
    id: 'basilica',
    name: 'Basílica de los Desamparados',
    category: 'Iglesia',
    description:
      'Basílica barroca dedicada a la patrona de Valencia, con una gran cúpula y una fachada muy rica. Frente a ella está la plaza de la Virgen.',
    address: 'Plaza de la Virgen, Valencia',
    lat: 39.4762,
    lng: -0.3748,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mare_de_D%C3%A9u_dels_Desemparats_P1130833.jpg/960px-Mare_de_D%C3%A9u_dels_Desemparats_P1130833.jpg',
  },
  {
    id: 'mercado-colon',
    name: 'Mercado de Colón',
    category: 'Mercado',
    description:
      'Edificio modernista de principios del siglo XX, con vidrieras y mosaicos. Hoy es un lugar ideal para tomar algo y mirar.',
    address: 'Calle de Jorge Juan, 19, 46004 Valencia',
    lat: 39.4689,
    lng: -0.3684,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Mercado_de_Col%C3%B3n%2C_Valencia%2C_Espa%C3%B1a%2C_2014-06-29%2C_DD_09.JPG/960px-Mercado_de_Col%C3%B3n%2C_Valencia%2C_Espa%C3%B1a%2C_2014-06-29%2C_DD_09.JPG',
  },
  {
    id: 'bellas-artes',
    name: 'Museo de Bellas Artes',
    category: 'Museo',
    description:
      'Uno de los museos de arte más importantes de España, con pintura valenciana y española desde el gótico hasta el siglo XX, en un antiguo convento.',
    address: 'Calle de San Pío V, 9, 46010 Valencia',
    lat: 39.4792,
    lng: -0.3708,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Museu_pius1.jpg/960px-Museu_pius1.jpg',
    tip: 'Si os gusta la pintura, tiene colecciones muy completas; reservad al menos una mañana.',
  },
  {
    id: 'turia',
    name: 'Jardín del Turia (parque Gulliver)',
    category: 'Parque',
    description:
      'Antiguo cauce del río Turia convertido en un gran jardín que cruza la ciudad. El parque Gulliver tiene toboganes y un gran gigante tendido para los niños.',
    address: 'Jardín del Turia, entre los puentes del Ángel Custodio y del Reino de Valencia',
    lat: 39.4625,
    lng: -0.3597,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jard%C3%AD_del_T%C3%BAria_de_Val%C3%A8ncia%2C_riuet.JPG/960px-Jard%C3%AD_del_T%C3%BAria_de_Val%C3%A8ncia%2C_riuet.JPG',
    tip: 'Es ideal para caminar o pedalear sin tráfico; es muy llano.',
  },
  {
    id: 'malvarrosa',
    name: 'Playa de la Malvarrosa',
    category: 'Playa',
    description:
      'La playa urbana más conocida de Valencia, con un paseo marítimo y chiringuitos. Es el sitio ideal para cerrar el día con una vista al mar.',
    address: 'Paseo Neptuno, Valencia',
    lat: 39.4792,
    lng: -0.3231,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playa_de_la_Malvarrosa_%28Valencia%29_01.jpg/960px-Playa_de_la_Malvarrosa_%28Valencia%29_01.jpg',
    tip: 'Se llega en metro o en tranvía; el paseo marítimo es muy agradable al atardecer.',
  },
]
