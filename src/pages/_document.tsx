import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="title" content="DVP Prototype" />
        <meta name="description" content="Develop your design verification plan using this rapid planning tool." />
        <meta name="keywords" content="DVP Verification Plan Planning" />
        <meta name="theme-color" content="#f25f3a" />
        <meta property="og:locale" content="en_UK" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rle.international/" />
        <meta property="og:site_name" content="DVP Prototype.io" />
        <meta property="article:publisher" content="https://www.rle.international/" />
        <meta property="og:title" content="DVP Prototype" />
        <meta property="og:description" content="Develop your design verification plan using this rapid planning tool." />
        <meta property="og:image" content="https://imgur.com/a/1RCv9KU" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
