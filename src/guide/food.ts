import type { Dish } from '../types'

// Typical food first; a spot is only named when a long-standing place is
// famous for that dish. Photos from Wikimedia Commons.
export const dishes: Dish[] = [
  {
    id: 'paella',
    name: 'Paella valenciana',
    nameEs: 'Paella de pollo, conejo y judía verde',
    kind: 'Plato',
    description:
      'El plato de Valencia por excelencia: arroz hecho en paellera plana con pollo, conejo, judía verde y garrofó. Nada de mariscos en la versión tradicional.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/01_Paella_Valenciana_original.jpg/960px-01_Paella_Valenciana_original.jpg',
    tip: 'Se pide para comer, nunca en cena, y se prepara para al menos dos personas.',
  },
  {
    id: 'all-i-pebre',
    name: 'All i pebre',
    nameEs: 'Anguila en salsa de ajo y pimienta',
    kind: 'Plato',
    description:
      'Plato tradicional de la Albufera: anguila o pescado en una salsa de ajo, pimentón y pimienta, con mucho sabor y un toque picante.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/All-i-pebre_%28Meliana%29.jpg/960px-All-i-pebre_%28Meliana%29.jpg',
    tip: 'Es un plato de restaurantes de pescado; si no os gusta el pescado, probad otro.',
  },
  {
    id: 'fideua',
    name: 'Fideuà',
    nameEs: 'Fideos tostados con marisco',
    kind: 'Plato',
    description:
      'Como una paella, pero con fideos finos tostados en lugar de arroz. Suele llevar marisco y se sirve con alioli.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Fideua_-_xurde.jpg/960px-Fideua_-_xurde.jpg',
    tip: 'Se prepara con marisco en la costa; sirve bien para compartir en la Malvarrosa.',
  },
  {
    id: 'horchata',
    name: 'Orxata',
    nameEs: 'Horchata de chufa',
    kind: 'Bebida',
    description:
      'Bebida fresca hecha con chufa (un tubérculo), agua y azúcar. Es dulce, refrescante y muy típica del verano valenciano.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Horchata_de_chufa_2.jpg/960px-Horchata_de_chufa_2.jpg',
    tip: 'Se toma fría, muchas veces con fartons para mojar.',
  },
  {
    id: 'fartons',
    name: 'Fartons',
    nameEs: 'Bollos alargados de masa dulce',
    kind: 'Dulce',
    description:
      'Bollos alargados y dulces, de textura esponjosa, que se mojan en la horchata. Son el acompañamiento clásico de la orxata.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Fartons_Polo.jpg/960px-Fartons_Polo.jpg',
    tip: 'La forma tradicional es mojarlos en la horchata fría.',
    spot: { name: 'Horchatería Santa Catalina', area: 'Plaza de Santa Catalina, centro', lat: 39.4738, lng: -0.3763 },
  },
  {
    id: 'bunyols',
    name: 'Bunyols',
    nameEs: 'Buñuelos de calabaza',
    kind: 'Para picar',
    description:
      'Buñuelos fritos de masa de harina con calabaza, que suelen comerse recién hechos y calientes.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Bu%C3%B1ol._Castillo._Vistas.jpg/960px-Bu%C3%B1ol._Castillo._Vistas.jpg',
    tip: 'Mejor por la mañana, recién fritos; se toman con azúcar o con sirope.',
  },
  {
    id: 'agua-de-valencia',
    name: 'Agua de Valencia',
    nameEs: 'Cóctel de cava, zumo de naranja y ginebra',
    kind: 'Bebida',
    description:
      'Cóctel típico de la ciudad, con cava, zumo de naranja y un chorro de ginebra o vodka. Refrescante y con mucho carácter.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Copa_de_Agua_de_Valencia.jpg/960px-Copa_de_Agua_de_Valencia.jpg',
    tip: 'Es más fuerte de lo que parece: tomadlo con calma.',
  },
]
