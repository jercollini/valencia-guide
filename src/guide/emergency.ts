import type { EmergencyContact } from '../types'

export const emergencyContacts: EmergencyContact[] = [
  {
    label: 'Emergencias (general, UE)',
    value: '112',
    phone: '112',
    info: 'Número único europeo. Sirve para policía, bomberos y ambulancia.',
  },
  {
    label: 'Policía Local',
    value: '092',
    phone: '092',
  },
  {
    label: 'Policía Nacional',
    value: '091',
    phone: '091',
  },
  {
    label: 'Guardia Civil',
    value: '062',
    phone: '062',
  },
  {
    label: 'Bomberos',
    value: '080',
    phone: '080',
  },
  {
    label: 'Hospital La Fe',
    value: '961 244 000',
    phone: '+34961244000',
    info: 'Avenida Fernando Abril Martorell, 106. Hospital de referencia de la ciudad.',
  },
]

export const emergencyTips: string[] = [
  'Llevad siempre la Tarjeta Sanitaria Europea (TSE) para ser atendidos en la sanidad pública.',
  'Guardad una foto del DNI o pasaporte en el móvil por si lo perdéis.',
  'Las farmacias tienen una cruz verde. Fuera de horario hay farmacias de guardia señalizadas.',
  'Anotad el nombre y la dirección del hotel por si necesitáis pedir ayuda para volver.',
]
