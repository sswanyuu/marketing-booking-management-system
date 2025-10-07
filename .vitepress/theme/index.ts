import DefaultTheme from 'vitepress/theme';

import './styles/custom.scss';

// Add Google Fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao:wght@400;700&display=swap';
document.head.appendChild(link);
import DefaultLayout from './layouts/DefaultLayout.vue';

// Import components
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import Button from './components/Button.vue';
import Input from './components/Input.vue';
import MobileMenu from './components/MobileMenu.vue';

// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  ...DefaultTheme,
  Layout: DefaultLayout,
  enhanceApp({ app }) {
    // Register global components
    app.component('SiteHeader', SiteHeader);
    app.component('SiteFooter', SiteFooter);
    app.component('FeaturesSection', FeaturesSection);
    app.component('Button', Button);
    app.component('Input', Input);
    app.component('MobileMenu', MobileMenu);
  },
};
