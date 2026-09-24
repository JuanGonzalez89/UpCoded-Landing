/**
 * Opciones del formulario guiado (UC-01) con ids estables.
 * El cliente manda solo el id; los textos visibles viven en los diccionarios y
 * el email al equipo usa siempre la etiqueta en español de este archivo.
 */
export const SERVICE_OPTIONS = {
  web: 'Web que genere consultas',
  automation: 'Automatizar un proceso',
  system: 'Sistema o MVP',
  unsure: 'No estoy seguro todavía',
} as const;

export const STAGE_OPTIONS = {
  idea: 'Tengo una idea',
  improve: 'Quiero mejorar algo existente',
  urgent: 'Necesito empezar pronto',
  evaluating: 'Estoy evaluando opciones',
} as const;

export type ServiceId = keyof typeof SERVICE_OPTIONS;
export type StageId = keyof typeof STAGE_OPTIONS;

export const SERVICE_IDS = Object.keys(SERVICE_OPTIONS) as ServiceId[];
export const STAGE_IDS = Object.keys(STAGE_OPTIONS) as StageId[];

export function isServiceId(value: string): value is ServiceId {
  return Object.prototype.hasOwnProperty.call(SERVICE_OPTIONS, value);
}

export function isStageId(value: string): value is StageId {
  return Object.prototype.hasOwnProperty.call(STAGE_OPTIONS, value);
}
