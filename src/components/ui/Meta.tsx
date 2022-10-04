import Head from 'next/head';

type MetaProps = {
  title: string;
  description: string;
};

export default function Meta(props: MetaProps) {
  return (
    <Head>
      <meta httpEquiv="content-language" content="en" key="language" />
      <meta charSet="UTF-8" key="charset" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
      <meta name="keywords" content="automotive" key="keywords" />
      <meta name="author" content="Engineering AI" key="author" />
      <meta name="copyright" content="Engineering AI" key="copyright" />
      <meta name="description" content={props.description} key="description" />
      <meta name="robots" content="noindex, nofollow" key="robots" />
      <link rel="icon" href="/favicon.ico" key="favicon" />
      <title key="title">{props.title}</title>;
    </Head>
  );
}
