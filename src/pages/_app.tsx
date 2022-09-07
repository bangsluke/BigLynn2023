import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store';
import ThemeCustomization from '../themes';
import NavigationScroll from '../layout/NavigationScroll';
import RTLLayout from 'ui-component/RTLLayout';
import { ConfigProvider } from '../contexts/ConfigContext';
import '../scss/style.scss';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import Snackbar from 'ui-component/extended/Snackbar';
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';
import { LayoutType } from 'types';
const Noop: React.FC = ({ children }) => {
  return <> {children} </>;
};

function MyApp({ Component, pageProps }: AppProps & { Component: { Layout: LayoutType } }) {
  let Layout;
  switch (Component.Layout) {
    case 'authGuard':
      Layout = MainLayout;
      break;
    // Case 'guestGuard':
    //   Layout = GuestGuard;
    //   Break;
    case 'minimalLayout':
      Layout = MinimalLayout;
      break;
    default:
      Layout = Noop;
  }

  return (
    <>
      <Head>
        <meta name="title" content="DVP Prototype" />
        <meta name="description" content="Develop your design verification plan using this rapid planning tool." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persister}> */}
        <ConfigProvider>
          <ThemeCustomization>
            <RTLLayout>
              {/* <Locales> */}
              <NavigationScroll>
                {/* <AuthProvider> */}
                <Layout>
                  <Component {...pageProps} />
                  <Snackbar />
                </Layout>
                {/* </AuthProvider> */}
              </NavigationScroll>
              {/* </Locales> */}
            </RTLLayout>
          </ThemeCustomization>
        </ConfigProvider>
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}

export default MyApp;
