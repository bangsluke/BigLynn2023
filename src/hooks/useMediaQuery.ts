import useMediaQuery from "@mui/material/useMediaQuery";
import ThemingS from "services/ThemingS";

const theme = ThemingS.toolTheme;

export default function useScreenSize() {
	const isXs = useMediaQuery(theme.breakpoints.down("xs"));
	const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
	const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
	const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
	const isXl = useMediaQuery(theme.breakpoints.up("xl"));

	if (isXs) {
		return "xs";
	} else if (isSm) {
		return "sm";
	} else if (isMd) {
		return "md";
	} else if (isLg) {
		return "lg";
	} else if (isXl) {
		return "xl";
	} else {
		return null;
	}
}
