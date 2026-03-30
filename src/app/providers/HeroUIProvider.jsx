import { HeroUIProvider as Provider } from '@heroui/system';

export const HeroUIProvider = ({ children }) => {
  return <Provider>{children}</Provider>;
};
