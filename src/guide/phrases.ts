import type { PhraseGroup } from '../types'

// "pron" es una pronunciación aproximada en español, no fonética exacta.
export const phraseGroups: PhraseGroup[] = [
  {
    group: 'Saludos y cortesía',
    items: [
      { es: 'Buenos días', local: 'Bon dia', pron: 'bon día' },
      { es: 'Buenas tardes', local: 'Bona vesprada', pron: 'bona besprá-da' },
      { es: 'Adiós', local: 'Adéu', pron: 'adéu' },
      { es: 'Por favor', local: 'Per favor', pron: 'per favór' },
      { es: 'Gracias', local: 'Gràcies', pron: 'grásies' },
      { es: 'De nada', local: 'De res', pron: 'de rés' },
      { es: 'Sí / No', local: 'Sí / No', pron: 'sí / no' },
    ],
  },
  {
    group: 'Preguntas útiles',
    items: [
      { es: '¿Dónde está...?', local: 'On està...?', pron: 'on es-tá' },
      { es: 'No entiendo', local: 'No entenc', pron: 'no entén' },
      { es: '¿Cuánto cuesta?', local: 'Quant costa?', pron: 'kuánt kóste' },
    ],
  },
  {
    group: 'En el restaurante',
    items: [
      { es: 'La cuenta, por favor', local: 'El compte, per favor', pron: 'el kómte per favór' },
      { es: 'Quiero una paella', local: 'Vull una paella', pron: 'bull una paélla' },
    ],
  },
]
