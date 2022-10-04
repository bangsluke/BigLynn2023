import MainLayout from 'components/ui/MainLayout';
import Head from 'next/head';
import ThemeCustomization from 'themes';

export const BaseApp = (props: { children: any }) => (
  <ThemeCustomization>
    <Head>
      <meta name="title" content="Big Lynn 2023" />
      <meta name="description" content="The official website of the 2023 Big Lynn Competition." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <MainLayout>{props.children}</MainLayout>
  </ThemeCustomization>
);

export default function CustomApp(props: { Component: any; pageProps: any }) {
  const { Component, pageProps } = props;
  return (
    <BaseApp>
      <Component {...pageProps} />
    </BaseApp>
  );
}
