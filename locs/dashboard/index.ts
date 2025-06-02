import cardTimeAtWork from "./cardTimeAtWork";

const Locators = {
  ...cardTimeAtWork,
} as const;

export default Locators;
export type LocatorKey = keyof typeof Locators;