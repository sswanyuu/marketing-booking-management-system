import { useRouter } from 'vitepress';
import { ROUTES } from '../constants/routes.js';

/**
 * Navigation composable for handling page navigation
 * @returns {Object} Navigation methods
 */
export function useNavigation() {
  const router = useRouter();

  const navigateTo = path => {
    router.go(path);
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
