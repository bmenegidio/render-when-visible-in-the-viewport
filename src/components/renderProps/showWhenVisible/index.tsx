import { useRef } from 'react';

import { ProviderProps } from '@/components/renderProps/showWhenVisible/types/providerProps';
import { useWhenVisible } from '@/hooks/useWhenVisible';

export function ShowWhenVisibleProvider({ render }: ProviderProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useWhenVisible(ref);

  return <div ref={ref}>{isVisible && render({ isIntersecting: isVisible })}</div>;
}
