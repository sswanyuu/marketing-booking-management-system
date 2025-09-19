import DefaultTheme from "vitepress/theme";

import "./styles/custom.scss";
import DefaultLayout from "../../src/layouts/DefaultLayout.vue";
export default {
  ...DefaultTheme,
  Layout: DefaultLayout,
};
