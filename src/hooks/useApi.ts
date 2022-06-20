import { useCallback, useEffect, useState } from 'react';

import { formatError } from '@/lib';

/**
 * @description This is a custom hook for API management
 * we provide a statement of the request:
 * - loading
 * - error custom message
 * - response
 */
export const useApi = <T>({
  service,
  errorMessage = 'Une erreur est survenue, veuillez contactez un administrateur',
  name,
}: {
  service: () => Promise<T>;
  /**
   * @default "Une erreur est survenue, veuillez contactez un administrateur"
   */
  errorMessage?: string;
  name: string;
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const [response, setResponse] = useState<T | undefined>(undefined);

  const fetcher = useCallback(async () => {
    try {
      const datas = await service();
      setResponse(datas);
    } catch (e) {
      console.error(`Fetcher ${name}: `, formatError(e));
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [service, name, errorMessage]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return {
    loading,
    error,
    response,
  };
};
