import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '@/pages/Home.page';
import { AboutPage } from '@/pages/About.page';
import { ProjectPage } from '@/pages/Project.page';
import { ErrorPage } from '@/pages/Error.page';

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
    path: '/project',
    element: <ProjectPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
