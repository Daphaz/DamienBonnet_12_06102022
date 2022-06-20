import { Route, Routes } from 'react-router-dom';

import { Dashboard, Error, Home } from '@/pages';

const routes = [
  {
    name: 'Home',
    path: '/',
    element: Home,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    element: Dashboard,
  },
];

/**
 * @category Routing
 * @description This component is all the logic for routing
 *
 *
 * **First we define an array of object route like**
 *
 * ```
 * const routes = [
 * {
 *  name: 'Dashboard',
 *  path: '/dashboard',
 *  element: Dashboard,
 * }
 * ]
 * ```
 * **and we map on the array for generate all Route**
 *
 * ```tsx
 * return (
 * <Routes>
 *  {
 * routes.map(({name, element: Element, path}) => (
 * <Routes key={name} path={path} element={Element} />
 * ))}
 * </Routes>
 * )
 * ```
 */
export const Root = (): JSX.Element => {
  return (
    <Routes>
      {routes.map(({ name, element: Element, path }) => (
        <Route key={name} path={path} element={<Element />} />
      ))}
      <Route path='*' element={<Error />} />
    </Routes>
  );
};
