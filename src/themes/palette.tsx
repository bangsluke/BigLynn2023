// Material-ui
import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// Assets
import defaultColor from "../scss/_themes-vars.module.scss";
// Import theme1 from '../scss/_theme1.module.scss';
// Import theme2 from '../scss/_theme2.module.scss';
// Import theme3 from '../scss/_theme3.module.scss';
// Import theme4 from '../scss/_theme4.module.scss';
// Import theme5 from '../scss/_theme5.module.scss';
// Import theme6 from '../scss/_theme6.module.scss';

// Types
import { ColorProps } from "types/types";

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (navType: PaletteMode, presetColor: string) => {
	let colors: ColorProps;
	switch (presetColor) {
		// Case 'theme1':
		//   Colors = theme1;
		//   Break;
		// Case 'theme2':
		//   Colors = theme2;
		//   Break;
		// Case 'theme3':
		//   Colors = theme3;
		//   Break;
		// Case 'theme4':
		//   Colors = theme4;
		//   Break;
		// Case 'theme5':
		//   Colors = theme5;
		//   Break;
		// Case 'theme6':
		//   Colors = theme6;
		//   Break;
		case "default":
		default:
			colors = defaultColor;
	}

	return createTheme({
		palette: {
			mode: navType,
			common: {
				black: colors.darkPaper,
			},
			primary: {
				light: navType === "dark" ? colors.darkPrimaryLight : colors.primaryLight,
				main: navType === "dark" ? colors.darkPrimaryMain : colors.primaryMain,
				dark: navType === "dark" ? colors.darkPrimaryDark : colors.primaryDark,
				100: navType === "dark" ? colors.darkPrimary100 : colors.primary100,
				200: navType === "dark" ? colors.darkPrimary200 : colors.primary200,
				800: navType === "dark" ? colors.darkPrimary800 : colors.primary800,
			},
			secondary: {
				light: navType === "dark" ? colors.darkSecondaryLight : colors.secondaryLight,
				main: navType === "dark" ? colors.darkSecondaryMain : colors.secondaryMain,
				dark: navType === "dark" ? colors.darkSecondaryDark : colors.secondaryDark,
				200: navType === "dark" ? colors.darkSecondary200 : colors.secondary200,
				800: navType === "dark" ? colors.darkSecondary800 : colors.secondary800,
			},
			error: {
				light: colors.errorLight,
				main: colors.errorMain,
				dark: colors.errorDark,
			},
			orange: {
				light: colors.orangeLight,
				main: colors.orangeMain,
				dark: colors.orangeDark,
			},
			warning: {
				light: colors.warningLight,
				main: colors.warningMain,
				dark: colors.warningDark,
			},
			success: {
				light: colors.successLight,
				200: colors.success200,
				main: colors.successMain,
				dark: colors.successDark,
			},
			grey: {
				50: colors.grey50,
				100: colors.grey100,
				500: navType === "dark" ? colors.darkTextSecondary : colors.grey500,
				600: navType === "dark" ? colors.darkTextTitle : colors.grey900,
				700: navType === "dark" ? colors.darkTextPrimary : colors.grey700,
				900: navType === "dark" ? colors.darkTextPrimary : colors.grey900,
			},
			dark: {
				light: colors.darkTextPrimary,
				main: colors.darkLevel1,
				dark: colors.darkLevel2,
				800: colors.darkBackground,
				900: colors.darkPaper,
			},
			text: {
				primary: navType === "dark" ? colors.darkTextPrimary : colors.grey700,
				secondary: navType === "dark" ? colors.darkTextSecondary : colors.grey500,
				dark: navType === "dark" ? colors.darkTextPrimary : colors.grey900,
				hint: colors.grey100,
			},
			divider: navType === "dark" ? colors.darkTextPrimary : colors.grey200,
			background: {
				paper: navType === "dark" ? colors.darkLevel2 : colors.paper,
				default: navType === "dark" ? colors.darkPaper : colors.paper,
			},
		},
	});
};

export default Palette;
