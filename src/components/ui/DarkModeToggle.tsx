import * as React from "react";
// import { useState, useContext, useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
// import { useTheme } from "@mui/material/styles";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// import { createTheme } from "@mui/material/styles";

// mui.com/material-ui/customization/dark-mode/#main-content
// function ToggleColorMode() {
// 	const [mode, setMode] = useState<"light" | "dark">("light");
// 	const colorMode = useMemo(
// 		() => ({
// 			toggleColorMode: () => {
// 				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
// 			},
// 		}),
// 		[]
// 	);

// 	const theme = useMemo(
// 		() =>
// 			createTheme({
// 				palette: {
// 					mode,
// 				},
// 			}),
// 		[mode]
// 	);

// 	return colorMode;
// }

export default function DarkModeToggle() {
	// const theme = useTheme();
	// const colorMode = useContext(ColorModeContext);
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
				// bgcolor: "background.default",
				color: "text.primary",
				borderRadius: 1,
				p: 3,
			}}>
			<IconButton sx={{ ml: 1 }} color='inherit'>
				{/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'> */}
				{<Brightness7Icon />}
				{/* {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />} */}
			</IconButton>
			{/* {theme.palette.mode} mode */}
		</Box>
	);
}
