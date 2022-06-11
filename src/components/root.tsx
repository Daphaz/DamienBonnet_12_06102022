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

export const Root = () => {
  return (
    <Routes>
      {routes.map(({ name, element: Element, path }) => (
        <Route key={name} path={path} element={<Element />} />
      ))}
      <Route path='*' element={<Error />} />
    </Routes>
  );
};
