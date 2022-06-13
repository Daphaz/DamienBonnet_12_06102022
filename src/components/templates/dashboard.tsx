import { usersService } from '@/api/users.service';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Layout } from '../layout';

export const DashboardTemplate = () => {
  const [user, setUser] = useState<any | undefined>(undefined);

  const fetchUser = useCallback(async () => {
    try {
      const data = await usersService.getById();

      setUser(data);
    } catch (e) {
      console.error('FetchUser: ', e);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <Layout>
      <pre>{JSON.stringify(user)}</pre>
    </Layout>
  );
};
