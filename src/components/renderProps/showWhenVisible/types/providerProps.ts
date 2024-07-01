import { ReactNode } from 'react';

export type ProviderProps = {
  render: ({ isIntersecting }: { isIntersecting: boolean }) => ReactNode;
};
