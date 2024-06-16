import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import { HomePage } from '@/pages/Home.page';
import { AboutPage } from '@/pages/About.page';
import { ProjectPage } from '@/pages/Project.page';
import { ErrorPage } from '@/pages/Error.page';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    title: 'Home',
  },
  {
    path: '/about',
    element: <AboutPage />,
    title: 'About',
  },
  {
    path: '/project',
    element: <ProjectPage />,
    title: 'Project',
  },
  {
    path: '/error',
    element: <ErrorPage />,
    title: 'Error',
  },
];

const router = createBrowserRouter([
  {
    element: <Layout />, // Use Layout as the root element
    children: routes,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
