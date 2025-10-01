import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';

import './styles/custom.scss';
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
