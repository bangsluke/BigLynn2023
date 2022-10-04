import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ThemingS from "fe/services/ThemingS";
import { useRouter } from "next/router";
import UIContext from "fe/contexts/UIContext";
import { NavItemType } from "fe/types/feTypes";

interface NavItemProps {
	item: NavItemType;
	level: number;
}

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

export default function NavItem({ item, level }: NavItemProps) {
	const theme = useTheme();

	const matchesSM = useMediaQuery(theme.breakpoints.down("lg"));

	const { borderRadius } = ThemingS.themeConfig;

	const uiActions = UIContext.useActionContext();
	const { activeMenuItemId } = UIContext.useStateContext();

	const Icon = item?.icon;
	const itemIcon = item?.icon ? (
		<Icon stroke={1.5} size='20px' />
	) : (
		<FiberManualRecordIcon
			sx={{
				width: activeMenuItemId === item?.id ? 8 : 6,
				height: activeMenuItemId === item?.id ? 8 : 6,
			}}
			fontSize={level > 0 ? "inherit" : "medium"}
		/>
	);

	// let itemTarget: LinkTarget = "_self";
	// if (item.target) {
	// 	itemTarget = "_blank";
	// }

	const router = useRouter();
	const itemHandler = (id: string) => {
		uiActions.setActiveItemMenuId(id);
		router.push(item.url);
		if (matchesSM) {
			uiActions.setDrawerOpen(false);
		}
	};

	return (
		<ListItemButton
			disabled={item.disabled}
			sx={{
				borderRadius: `${borderRadius}px`,
				mb: 0.5,
				alignItems: "flex-start",
				backgroundColor: level > 1 ? "transparent !important" : "inherit",
				py: level > 1 ? 1 : 1.25,
				pl: `${level * 24}px`,
			}}
			selected={activeMenuItemId === item?.id}
			onClick={() => itemHandler(item.id)}>
			<ListItemIcon sx={{ my: "auto", minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
			<ListItemText
				primary={
					<Typography data-testid={item.id} variant={activeMenuItemId === item.id ? "h5" : "body1"} color='inherit'>
						{item.title}
					</Typography>
				}
				secondary={
					item.caption && (
						<Typography variant='caption' sx={{ ...theme.typography.subMenuCaption }} display='block' gutterBottom>
							{item.caption}
						</Typography>
					)
				}
			/>
			{item.chip && (
				<Chip
					color={item.chip.color}
					variant={item.chip.variant}
					size={item.chip.size}
					label={item.chip.label}
					avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
				/>
			)}
		</ListItemButton>
	);
}
