// Basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
// Like '/berry-material-react/react/default'
export const BASE_PATH = '';

export const DASHBOARD_PATH = '/info';

const config = {
  fontFamily: `'Roboto', sans-serif`,
  rtlLayout: true,
  borderRadius: 6,
  outlinedFilled: true,
  navType: 'light', // Light, dark
  presetColor: 'default', // Default, theme1, theme2, theme3, theme4, theme5, theme6
  locale: 'en' // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
};

export default config;
