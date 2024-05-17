import { ThemeProvider } from "@mui/material/styles";
import MainLayout from "components/ui/MainLayout";
import MetaData from "components/ui/MetaData";
import { useRef } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import ThemingS from "services/ThemingS";
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
				marginLeft: "0px",
				marginRight: "0px",
				width: "100vw",
				// xOverflow: "hidden",
			}}
			ref={appScrollComponent}>
			<ThemeProvider theme={ThemingS.toolTheme}>
				<ThemeCustomization>
					<MetaData
						title='Big Lynn'
						description='The official website of the Big Lynn Competition.'
						authorName='Luke Bangs'
						authorEmail='bangsluke@gmail.com'
					/>
					<MainLayout>{props.children}</MainLayout>
				</ThemeCustomization>
			</ThemeProvider>
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
