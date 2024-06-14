import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '../pages/Home.page';
import { AboutPage } from '../pages/About.page';
import { NotFound } from '@/components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/error',
    element: <NotFound />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
