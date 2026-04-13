import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	Button,
	Container,
	Drawer,
	IconButton,
	Link,
	List,
	ListItemIcon,
	ListItemText,
	Stack,
	Toolbar,
	Typography,
	useScrollTrigger,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "components/ui/Logo";
import NavigationInfo from "data/furtherYears/NavigationInfo2024";
import { ReactElement, cloneElement, useState } from "react";

const AppBarHeight = {
	desktop: "4rem",
	mobile: "3rem",
};

interface ElevationScrollProps {
	children: ReactElement;
	window?: Window | Node;
}

function ElevationScroll({ children, window }: ElevationScrollProps) {
	const theme = useTheme();
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window!,
	});
	const darkBorder = theme.palette.mode === "dark" ? theme.palette.dark.dark : theme.palette.grey[200];

	return cloneElement(children, {
		elevation: trigger ? 2 : 0,
		style: {
			backgroundColor: theme.palette.background.default,
			borderBottom: trigger ? "none" : "1px solid",
			borderColor: trigger ? "" : darkBorder,
			color: theme.palette.text.dark,
		},
	});
}

const HomeAppBar = ({ ...others }) => {
	const [drawerToggle, setDrawerToggle] = useState<boolean>(false);

	const drawerToggler = (open: boolean) => (event: any) => {
		if (event.type! === "keydown" && (event.key! === "Tab" || event.key! === "Shift")) {
			return;
		}
		setDrawerToggle(open);
	};

	const sortedNavLinks = NavigationInfo.sort(function (a, b) {
		return a.id - b.id;
	});

	const toTopNavButton = sortedNavLinks
		.filter((link) => link.anchor === "top")
		.map((link) => (
			<Button key={link.id} color='inherit' component={Link} href={`#${link.anchor}`}>
				{link.name}
			</Button>
		));

	const navButtonElements = sortedNavLinks
		.filter((link) => link.anchor !== "top")
		.map((link) => {
		return (
			<Button key={link.id} color='inherit' component={Link} href={`#${link.anchor}`}>
				{link.name}
			</Button>
		);
	});

	return (
		<ElevationScroll {...others}>
			<AppBar sx={{ height: { xs: AppBarHeight.mobile, md: AppBarHeight.desktop } }}>
				<Container sx={{ height: { xs: AppBarHeight.mobile, md: AppBarHeight.desktop } }}>
					<Toolbar sx={{ height: { xs: AppBarHeight.mobile, md: AppBarHeight.desktop } }}>
						<Typography component='div' sx={{ flexGrow: 1, textAlign: "left" }} data-testid='app-bar-drawer'>
							<Logo />
						</Typography>
						<Stack direction='row' sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }} spacing={2}>
							{toTopNavButton}
							<Button color='inherit' component={Link} href='/2023'>
								2023
							</Button>
							<Button color='inherit' component={Link} href='/2024'>
								2024
							</Button>
							{navButtonElements}
							<Button component={Link} href='#rules' disableElevation variant='contained' color='secondary'>
								Begin Browsing
							</Button>
						</Stack>
						<Box sx={{ display: { xs: "block", sm: "block", md: "block", lg: "none" } }}>
							<IconButton color='inherit' onClick={drawerToggler(true)} size='large'>
								<MenuIcon />
							</IconButton>
							<Drawer anchor='top' open={drawerToggle} onClose={drawerToggler(false)}>
								{drawerToggle && (
									<Box sx={{ width: "auto" }} role='presentation' onClick={drawerToggler(false)} onKeyDown={drawerToggler(false)}>
										<List>
											<Link style={{ textDecoration: "none" }} href='#top'>
												<ListItemIcon />
												<ListItemText primary='To Top' />
											</Link>
											<Link style={{ textDecoration: "none" }} href='/2023'>
												<ListItemText primary='Go to 2023 Page' />
											</Link>
											<Link style={{ textDecoration: "none" }} href='/2024'>
												<ListItemText primary='Go to 2024 Page' />
											</Link>
											<Link style={{ textDecoration: "none" }} href='#rules'>
												<ListItemIcon />
												<ListItemText primary='Rules' />
											</Link>
											<Link style={{ textDecoration: "none" }} href='#quotes'>
												<ListItemIcon />
												<ListItemText primary='Quotes' />
											</Link>
											<Link style={{ textDecoration: "none" }} href='#statistics'>
												<ListItemIcon />
												<ListItemText primary='Statistics' />
											</Link>
										</List>
									</Box>
								)}
							</Drawer>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</ElevationScroll>
	);
};

export default HomeAppBar;
