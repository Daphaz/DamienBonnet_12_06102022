import { useCallback, useEffect, useState } from 'react';

import { formatError } from '@/lib/utils';

export const useApi = <T>({
  service,
  errorMessage = 'Une erreur est survenue, veuillez contactez un administrateur',
  name,
}: {
  service: () => Promise<T>;
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
