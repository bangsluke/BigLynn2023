import Head from "next/head";

type MetaProps = {
	title: string;
	description: string;
	authorName: string;
	authorEmail: string;
};

export default function MetaData(props: MetaProps) {
	const { title, description, authorName, authorEmail } = props; // Destructure props

	return (
		<Head>
			{/* Title and Description */}
			<title key='title'>{title}</title>;
			<meta name='description' key='description' content={description} />
			<meta name='keywords' content='Golf Competition Stats' />
			{/* Language and Encoding */}
			<meta httpEquiv='content-language' content='en' key='language' />
			<meta charSet='UTF-8' key='charset' />
			{/* Scaling */}
			{/* <meta name='viewport' content='width=device-width, initial-scale=1.0' key='viewport' /> */}
			{/* Author and Ownership */}
			<meta name='author' key='author' content={authorName} />
			<meta name='copyright' key='copyright' content={authorName} />
			{/* Search Engine Optimization */}
			<meta name='robots' key='robots' content='noindex, nofollow' />
			{/* Favicon Details */}
			<link rel='icon' href='/favicon.ico' key='favicon' />
			{/* Theme Information */}
			<meta name='theme-color' content='#7cadea' />
			{/* Open Graph Protocol */}
			<meta property='og:locale' content='en_UK' />
			<meta property='og:type' content='website' />
			<meta property='og:url' content='https://biglynn2023.netlify.app/' />
			<meta property='og:site_name' content={title} />
			<meta property='article:publisher' content={authorEmail} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content='https://imgur.com/Pw8wzHl' />
			<link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
			<link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
			<link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
			{/* <link rel='manifest' href='/favicon/site.webmanifest' /> */}
			<link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#5bbad5' />
			<meta name='msapplication-TileColor' content='#da532c' />
			{/* Fonts - Added in document to get around warning */}
		</Head>
	);
}
