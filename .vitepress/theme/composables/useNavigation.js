import { useRouter, useData } from 'vitepress';
import { ROUTES } from '../constants/routes.js';

/**
 * Navigation composable for handling page navigation
 * @returns {Object} Navigation methods
 */
export function useNavigation() {
  const router = useRouter();
  const { site } = useData();

  const navigateTo = path => {
    // Get base path from site data
    const base = site.value.base || '/';

    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    // Combine base and path, ensuring no double slashes
    const fullPath =
      base === '/'
        ? normalizedPath
        : `${base.replace(/\/$/, '')}${normalizedPath}`;

    // Use window.location to ensure base path is respected
    // This is more reliable for GitHub Pages deployments
    if (typeof window !== 'undefined') {
      window.location.href = fullPath;
    } else {
      // Fallback to router for SSR
      router.go(fullPath);
    }
  };

  const handleDemoBooking = () => {
    navigateTo(ROUTES.DEMO_BOOKING);
  };

  return {
    navigateTo,
    handleDemoBooking,
    ROUTES,
  };
}
