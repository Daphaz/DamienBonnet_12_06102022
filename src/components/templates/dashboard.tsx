import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

import { usersService } from '@/api/users.service';
import { User } from '@/ts';

import { Layout } from '../layout';

export const DashboardTemplate = () => {
  const [user, setUser] = useState<User | undefined>(undefined);

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
      <h1 className='dashboard__title'>
        Bonjour&nbsp;<span>{user && user.userInfos.firstName}</span>
      </h1>
      <p className='dashboard__subtitle'>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </Layout>
  );
};
