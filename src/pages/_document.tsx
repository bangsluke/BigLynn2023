import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html style={{ scrollBehavior: "smooth" }}>
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
				<link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
				<link rel='manifest' href='/favicon/site.webmanifest' />
				<link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#5bbad5' />
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
