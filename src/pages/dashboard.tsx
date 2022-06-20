import { Spinner } from '@/components/common';
import { Layout } from '@/components/layout';
import { DashboardTemplate } from '@/components/templates';

import { useGetUserById } from '@/api/users/hooks';

/**
 * This is the Dashboard page component
 * we using a custom hook for api request
 * - check the state of request
 * - if request is sucess we return the
 * dashboard template with user info property
 *
 * ```tsx
 * export const Dashboard = (): JSX.Element => {
 * const { response: user, error, loading } = useGetUserById();
 *
 * if (loading) {
 *   return (
 *     <Layout>
 *       <Spinner />
 *     </Layout>
 *   );
 * }
 *
 * if (error || !user) {
 *   return (
 *     <Layout>
 *       <h1 className='dashboard__error'>
 *         Une erreur est survenue, veuillez réessayer plus tard.
 *       </h1>
 *     </Layout>
 *   );
 * }
 *
 * return <DashboardTemplate user={user} />;
 *};
 * ```
 */

export const Dashboard = (): JSX.Element => {
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
