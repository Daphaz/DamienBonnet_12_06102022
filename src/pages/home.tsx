import { Navigate } from 'react-router-dom';

/**
 * This is a redirect component from / to /dashboard
 *
 * ```tsx
 * import { Navigate } from 'react-router-dom';
 *
 * export const Home = (): JSX.Element => {
 * return <Navigate replace to='/dashboard' />;
 * }
 * ```
 */

export const Home = () => {
  return <Navigate replace to='/dashboard' />;
};
