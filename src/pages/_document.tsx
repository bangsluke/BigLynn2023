import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html style={{ scrollBehavior: "smooth" }}>
			<Head>
				{/* Fonts added in _document.tsx due to warning */}
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
