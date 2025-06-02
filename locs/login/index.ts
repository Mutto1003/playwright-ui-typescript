import formLogin from './formLogin';

const Locators = {
  ...formLogin,
} as const ;

export default Locators;
export type LocatorKey = keyof typeof Locators;