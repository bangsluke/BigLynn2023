import Head from 'next/head';

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props/#typing-defaultprops
type MetaProps = {
  title: string;
  description: string;
} & typeof defaultMetaProps;

const defaultMetaProps = {
  title: 'DVP Tool',
  description: 'A tool for developing a DVP from vehicle specifications'
};

export default function Meta(props: MetaProps) {
  return (
    <Head>
      <meta httpEquiv="content-language" content="en" key="language" />
      <meta charSet="UTF-8" key="charset" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
      <title key="title">{props.title}</title>;
      <meta name="description" content={props.description} key="description" />
      <meta name="keywords" content="automotive" key="keywords" />
      <meta name="author" content="Engineering AI" key="author" />
      <meta name="copyright" content="Engineering AI" key="copyright" />
      <meta name="robots" content="noindex, nofollow" key="robots" />
      <link rel="icon" href="/favicon.ico" key="favicon" />
    </Head>
  );
}

Meta.defaultProps = defaultMetaProps;
