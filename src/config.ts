// Types
import { ConfigProps } from './types/config';

// Basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
// Like '/berry-material-react/react/default'
export const BASE_PATH = '';

export const DASHBOARD_PATH = '/summary';

const config: ConfigProps = {
  fontFamily: `'Roboto', sans-serif`,
  rtlLayout: true,
  borderRadius: 6,
  outlinedFilled: true,
  navType: 'light', // Light, dark
  presetColor: 'default', // Default, theme1, theme2, theme3, theme4, theme5, theme6
  locale: 'en' // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
};

export default config;

// Export const JWT_API = {
//   Secret: 'SECRET-KEY',
//   Timeout: '1 days'
// };

// Export const FIREBASE_API = {
//   ApiKey: 'AIzaSyBernKzdSojh_vWXBHt0aRhf5SC9VLChbM',
//   AuthDomain: 'berry-material-react.firebaseapp.com',
//   ProjectId: 'berry-material-react',
//   StorageBucket: 'berry-material-react.appspot.com',
//   MessagingSenderId: '901111229354',
//   AppId: '1:901111229354:web:a5ae5aa95486297d69d9d3',
//   MeasurementId: 'G-MGJHSL8XW3'
// };

// Export const AUTH0_API = {
//   Client_id: '7T4IlWis4DKHSbG8JAye4Ipk0rvXkH9V',
//   Domain: 'dev-w0-vxep3.us.auth0.com'
// };

// Export const AWS_API = {
//   PoolId: 'us-east-1_AOfOTXLvD',
//   AppClientId: '3eau2osduslvb7vks3vsh9t7b0'
// };
