import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta name='title' content='Big Lynn 2023' />
				<meta name='description' content='The official website of the 2023 Big Lynn Competition.' />
				<meta name='keywords' content='Golf Competition Stats' />
				<meta name='theme-color' content='#7cadea' />
				<meta property='og:locale' content='en_UK' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://biglynn2023.netlify.app/' />
				<meta property='og:site_name' content='Big Lynn 2023' />
				<meta property='article:publisher' content='bangsluke@gmail.com' />
				<meta property='og:title' content='Big Lynn 2023' />
				<meta property='og:description' content='The official website of the 2023 Big Lynn Competition.' />
				<meta property='og:image' content='https://imgur.com/Pw8wzHl' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
