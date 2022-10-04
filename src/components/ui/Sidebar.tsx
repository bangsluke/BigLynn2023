import { memo, useMemo } from "react";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LogoSection from "fe/components/ui/LogoSection";
import CustomerContext from "fe/contexts/CustomerContext";
import UIContext from "fe/contexts/UIContext";
import ThemingS from "fe/services/ThemingS";
import MenuList from "./MenuList";
// Import MenuCard from './MenuCard';

interface SidebarProps {
	window?: Window;
}

const Sidebar = ({ window }: SidebarProps) => {
	const theme = useTheme();
	const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
	const { companyName, project } = CustomerContext.useStateContext();

	const logo = useMemo(
		() => (
			<Box sx={{ display: { xs: "block", md: "none" } }}>
				<Box sx={{ display: "flex", p: 2, mx: "auto" }}>
					<LogoSection companyName={companyName} project={project} />
				</Box>
			</Box>
		),
		[companyName, project]
	);

	const uiActions = UIContext.useActionContext();
	const uiState = UIContext.useStateContext();

	const drawer = useMemo(
		() => <MenuList />,
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[matchUpMd]
	);

	const container = window !== undefined ? () => window.document.body : undefined;
	const { drawerWidth, drawerPadding } = ThemingS.themeConfig;
	return (
		<Box component='nav' sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : "auto" }} aria-label='mailbox folders'>
			<Drawer
				container={container}
				variant={matchUpMd ? "persistent" : "temporary"}
				anchor='left'
				open={uiState.drawerOpen}
				onClose={uiActions.toggleDrawerOpen}
				sx={{
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						background: theme.palette.background.default,
						color: theme.palette.text.primary,
						padding: drawerPadding,
						borderRight: "none",
						[theme.breakpoints.up("md")]: {
							top: "88px",
						},
					},
				}}
				ModalProps={{ keepMounted: true }}
				color='inherit'>
				{uiState.drawerOpen && logo}
				{uiState.drawerOpen && drawer}
			</Drawer>
		</Box>
	);
};

export default memo(Sidebar);
