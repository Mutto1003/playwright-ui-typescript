import en from './en';
import th from './th';

const i18n = {
  en,
  th,
} as const;

export default i18n;
export type Lang = 'en' | 'th';