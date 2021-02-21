import { useState, useEffect } from 'react';

export const useClient = (): boolean => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window === `undefined`) {
      return;
    }

    setIsClient(true);
  }, []);

  return isClient;
};
