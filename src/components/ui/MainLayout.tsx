import { AppBar, Box, CssBaseline } from "@mui/material";
import { styled, Theme, useTheme } from "@mui/material/styles";
import { FC, ReactNode } from "react";

interface MainStyleProps {
	theme: Theme;
}

// Styles
const MyLayout = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(({ theme }: MainStyleProps) => {
	return {
		...theme.typography.mainContent,
	};
});

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
	const theme = useTheme();

	// Const header = useMemo(
	// 	() => (
	// 		<Toolbar>
	// 			<Header />
	// 		</Toolbar>
	// 	),
	// 	[]
	// );

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			{/* Header */}
			<AppBar
				enableColorOnDark
				position='fixed'
				color='inherit'
				elevation={0}
				sx={{
					bgcolor: theme.palette.background.default,
				}}>
				{/* {header} */}
			</AppBar>

			{/* Main content */}
			<MyLayout theme={theme} sx={{ marginTop: { xs: "3.5rem", md: "4.5rem" } }}>
				{children}
			</MyLayout>
		</Box>
	);
};

export default MainLayout;
