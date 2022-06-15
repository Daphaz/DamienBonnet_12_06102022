import { Spinner } from '@/components/common';
import { Layout } from '@/components/layout';
import { DashboardTemplate } from '@/components/templates';

import { useGetUserById } from '@/api/users/hooks';

export const Dashboard = () => {
  const { response: user, error, loading } = useGetUserById();

  if (loading) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  if (error || !user) {
    return (
      <Layout>
        <h1 className='dashboard__error'>
          Une erreur est survenue, veuillez réessayer plus tard.
        </h1>
      </Layout>
    );
  }

  return <DashboardTemplate user={user} />;
};
