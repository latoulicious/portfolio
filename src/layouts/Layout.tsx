import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { routes } from '@/router/Router'; // Ensure routes are exported

function Layout() {
  const location = useLocation();

  useEffect(() => {
    const matchedRoute = routes.find((route) => route.path === location.pathname);
    if (matchedRoute) {
      document.title = `Arsyds | ${matchedRoute.title}`;
    } else {
      document.title = 'Arsyds';
    }
  }, [location]);

  return <Outlet />;
}

export default Layout;
