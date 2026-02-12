import { ColorProps } from "types/types";

// Centralized color palette used by MUI theme (was previously sourced via SCSS :export)
const defaultColor: ColorProps = {
	paper: "#ffffff",

	// primary
	primaryLight: "#d1e0f2",
	primaryMain: "#7cadea",
	primaryDark: "#3f87d9",
	primary100: "#e3f2fd",
	primary200: "#d1e0f2",
	primary800: "#3f87d9",

	// secondary
	secondaryLight: "#d1f2eb",
	secondaryMain: "#b7eae0",
	secondaryDark: "#81dac9",
	secondary200: "#c5f7de",
	secondary800: "#12d990",

	// success
	successLight: "#b9f6ca",
	success200: "#69f0ae",
	successMain: "#00e676",
	successDark: "#00c853",

	// error
	errorLight: "#ef9a9a",
	errorMain: "#f44336",
	errorDark: "#c62828",

	// orange
	orangeLight: "#fbe9e7",
	orangeMain: "#ffab91",
	orangeDark: "#d84315",

	// warning
	warningLight: "#fff8e1",
	warningMain: "#ffe57f",
	warningDark: "#ffc107",

	// grey
	grey50: "#fafafa",
	grey100: "#f5f5f5",
	grey200: "#eeeeee",
	grey300: "#e0e0e0",
	grey500: "#9e9e9e",
	grey600: "#757575",
	grey700: "#616161",
	grey900: "#212121",

	// ==============================|| DARK THEME VARIANTS ||============================== //

	// paper & background
	darkBackground: "#1a223f",
	darkPaper: "#111936",

	// dark 800 & 900
	darkLevel1: "#29314f",
	darkLevel2: "#212946",

	// text variants
	darkTextTitle: "#d7dcec",
	darkTextPrimary: "#bdc8f0",
	darkTextSecondary: "#8492c4",

	// primary dark
	darkPrimaryLight: "#e3f2fd",
	darkPrimaryMain: "#2196f3",
	darkPrimaryDark: "#1e88e5",
	darkPrimary100: "#90caf9",
	darkPrimary200: "#90caf9",
	darkPrimary800: "#1565c0",

	// secondary dark
	darkSecondaryLight: "#d1c4e9",
	darkSecondaryMain: "#7c4dff",
	darkSecondaryDark: "#651fff",
	darkSecondary200: "#b39ddb",
	darkSecondary800: "#6200ea",
};

export default defaultColor;

