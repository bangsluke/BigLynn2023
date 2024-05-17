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
import {
	IconArrowUp,
	IconCalendarEvent,
	IconCheckupList,
	IconLink,
	IconQuestionMark,
	IconQuote,
	IconReportAnalytics,
	IconRuler2,
} from "@tabler/icons";
import NavigationInfo from "data/NavigationInfo";
import Image from "next/image";
import { ReactElement, cloneElement, useState } from "react";

// Define the height of the app bar for desktop and mobile
const AppBarHeight = {
	desktop: "4rem",
	mobile: "3rem",
};

// Elevation scroll
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

const InfoPageAppBar = ({ ...others }) => {
	// Define the state for the drawer toggle
	const [drawerToggle, setDrawerToggle] = useState<boolean>(false);

	// Define the function to toggle the drawer
	const drawerToggler = (open: boolean) => (event: any) => {
		if (event.type! === "keydown" && (event.key! === "Tab" || event.key! === "Shift")) {
			return;
		}
		setDrawerToggle(open);
	};

	// Sort the navigation links by the id property - https://www.w3schools.com/jsref/jsref_sort.asp & https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
	const sortedNavLinks = NavigationInfo.sort(function (a, b) {
		return a.id - b.id;
	});

	// Map over the navigation links info to create all links.
	const navButtonElements = sortedNavLinks.map((link) => {
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
							<Image src='/images/Big-Lynn-Logo.svg' alt='Big Lynn Logo' width='92' height='52' />
						</Typography>
						<Stack direction='row' sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }} spacing={2}>
							{navButtonElements}
							<Button component={Link} href='#eventDetails' disableElevation variant='contained' color='secondary'>
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
												{/* <ListItemButton component='a'> */}
												<ListItemIcon>
													<IconArrowUp />
												</ListItemIcon>
												<ListItemText primary='To Top' />
												{/* </ListItemButton> */}
											</Link>

											<Link style={{ textDecoration: "none" }} href='#eventDetails'>
												{/* <ListItemButton component='a'> */}
												<ListItemIcon>
													<IconCalendarEvent />
												</ListItemIcon>
												<ListItemText primary='Event Details' />
												{/* </ListItemButton> */}
											</Link>
											<Link style={{ textDecoration: "none" }} href='#itinerary'>
												{/* <ListItemButton component='a'> */}
												<ListItemIcon>
													<IconCheckupList />
												</ListItemIcon>
												<ListItemText primary='Itinerary' />
												{/* </ListItemButton> */}
											</Link>
											<Link style={{ textDecoration: "none" }} href='#quotes'>
												{/* <ListItemButton component='a'> */}
												<ListItemIcon>
													<IconQuote />
												</ListItemIcon>
												<ListItemText primary='Quotes' />
												{/* </ListItemButton> */}
											</Link>
											<Link style={{ textDecoration: "none" }} href='#rules'>
												{/* <ListItemButton component='a'> */}
												<ListItemIcon>
													<IconRuler2 />
												</ListItemIcon>
												<ListItemText primary='Rules' />
												{/* </ListItemButton> */}
											</Link>
											<Link style={{ textDecoration: "none" }} href='#statistics'>
												{/* <ListItemButton component='a'> */}
												<ListItemIcon>
													<IconReportAnalytics />
												</ListItemIcon>
												<ListItemText primary='Statistics' />
												{/* </ListItemButton> */}
											</Link>
											<Link style={{ textDecoration: "none" }} href='#FAQ'>
												{/* <ListItemButton component='a'> */}
												<ListItemIcon>
													<IconQuestionMark />
												</ListItemIcon>
												<ListItemText primary='FAQ' />
												{/* </ListItemButton> */}
											</Link>
											<Link style={{ textDecoration: "none" }} href='#usefulLinks'>
												{/* <ListItemButton component='a'> */}
												<ListItemIcon>
													<IconLink />
												</ListItemIcon>
												<ListItemText primary='Useful Links' />
												{/* </ListItemButton> */}
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

export default InfoPageAppBar;
