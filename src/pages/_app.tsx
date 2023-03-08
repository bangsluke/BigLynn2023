import MainLayout from "components/ui/MainLayout";
import Head from "next/head";
import { useRef } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "styles/timeline.css";
import ThemeCustomization from "themes";

export const BaseApp = (props: { children: any }) => {
	const appScrollComponent = useRef(null);
	return (
		<PerfectScrollbar
			id='appScrollComponent'
			component='div'
			style={{
				height: "100vh",
				paddingLeft: "0px",
				paddingRight: "0px",
			}}
			ref={appScrollComponent}>
			<ThemeCustomization>
				<Head>
					<meta name='title' content='Big Lynn 2023' />
					<meta name='description' content='The official website of the 2023 Big Lynn Competition.' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
				</Head>
				<MainLayout>{props.children}</MainLayout>
			</ThemeCustomization>
		</PerfectScrollbar>
	);
};

export default function CustomApp(props: { Component: any; pageProps: any }) {
	const { Component, pageProps } = props;
	return (
		<BaseApp>
			<Component {...pageProps} />
		</BaseApp>
	);
}
