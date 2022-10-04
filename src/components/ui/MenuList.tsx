import { memo } from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import {
	IconPlayerPlay,
	IconHelicopterLanding,
	IconFileText,
	IconFileReport,
	IconDotsCircleHorizontal,
	IconInfoCircle,
	IconUsers,
} from "@tabler/icons";
import { NavItemType } from "fe/types/feTypes";
import NavGroup from "fe/components/ui/NavGroup";
import RLEIcon from "fe/images/RLELogo.png";
import VCMIcon from "fe/images/VCMIcon.png";
import SDPIcon from "fe/images/SDPIcon.png";
import BoMIcon from "fe/images/BoMIcon.png";
import BenchmarkingIcon from "fe/images/BenchmarkingIcon.png";

// Constant
const icons = {
	IconPlayerPlay,
	IconHelicopterLanding,
	IconFileText,
	IconDotsCircleHorizontal,
	IconFileReport,
	IconInfoCircle,
	IconUsers,
};

export interface ISidebarIcon {
	src: string;
	alt: string;
	className?: string;
}

const SidebarIcon = styled("img")(({ theme }) => ({
	height: "22px",
}));

const rleIcon = (props: ISidebarIcon) => <SidebarIcon src={RLEIcon.src} alt='RLE Logo' className='sidebarLogos'></SidebarIcon>;
const vcmIcon = (props: ISidebarIcon) => <SidebarIcon src={VCMIcon.src} alt='VCM Logo' className='sidebarLogos'></SidebarIcon>;
const sdpIcon = (props: ISidebarIcon) => <SidebarIcon src={SDPIcon.src} alt='SDP Logo' className='sidebarLogos'></SidebarIcon>;
const bomIcon = (props: ISidebarIcon) => <SidebarIcon src={BoMIcon.src} alt='BoM Logo' className='sidebarLogos'></SidebarIcon>;
const benchmarkingIcon = (props: ISidebarIcon) => (
	<SidebarIcon src={BenchmarkingIcon.src} alt='Benchmarking Logo' className='sidebarLogos'></SidebarIcon>
);

const info = {
	id: "infoPage",
	title: "Information",
	caption: "Tool Explanation",
	type: "group",
	children: [
		{
			id: "info",
			title: "Tool Information",
			type: "item",
			url: "/info",
			icon: icons.IconInfoCircle,
			breadcrumbs: false,
		},
	],
};

const pages = {
	id: "pages",
	title: "Pages",
	caption: "Pages to navigate",
	type: "group",
	children: [
		{
			id: "landing",
			title: "Landing Page",
			type: "item",
			url: "/landing",
			icon: icons.IconHelicopterLanding,
			breadcrumbs: false,
		},
		{
			id: "inputs",
			title: "Inputs",
			type: "item",
			url: "/inputs",
			icon: icons.IconFileText,
			breadcrumbs: false,
		},
		{
			id: "options",
			title: "Options",
			type: "item",
			url: "/options",
			icon: icons.IconDotsCircleHorizontal,
			breadcrumbs: false,
		},
		{
			id: "results",
			title: "Results",
			type: "item",
			url: "/results",
			icon: icons.IconFileReport,
			breadcrumbs: false,
		},
	],
};

const admin = {
	id: "admin",
	title: "Admin",
	caption: "Database admin",
	type: "group",
	children: [
		{
			id: "databaseAdmin",
			title: "Database Admin",
			type: "item",
			url: "/admin",
			icon: icons.IconUsers,
			breadcrumbs: false,
		},
	],
};

const links = {
	id: "links",
	title: "Links",
	caption: "External Site Links",
	type: "group",
	children: [
		{
			id: "RLE",
			title: "RLE",
			caption: "RLE International",
			type: "item",
			url: "https://www.rle.international/?lang=en",
			icon: rleIcon,
			breadcrumbs: false,
		},
		{
			id: "VCM",
			title: "VCM",
			caption: "Vehicle Concept Modeller",
			type: "item",
			// Url: '/sample-page',
			url: "/VCM",
			icon: vcmIcon,
			breadcrumbs: false,
		},
		{
			id: "SDP",
			title: "SDP",
			caption: "Scalable Development Plan",
			type: "item",
			// Url: '/utils/util-color',
			url: "https://sdp.rle.de/#home",
			// Icon: icons.IconPalette,
			// Icon: '/src/assets/images/SDP Logo.png',
			icon: sdpIcon,
			breadcrumbs: false,
		},
		{
			id: "BoM",
			title: "BoM",
			caption: "Smart Bill of Materials",
			type: "item",
			url: "/BoM",
			icon: bomIcon,
			breadcrumbs: false,
		},
		{
			id: "Benchmarking",
			title: "Benchmarking",
			caption: "Benchmarking Tool",
			type: "item",
			url: "/Benchmarking",
			icon: benchmarkingIcon,
			breadcrumbs: false,
		},
	],
};

const menuItems: { items: NavItemType[] } = {
	items: [info, pages, admin, links],
};

const MenuList = () => {
	const navItems = menuItems.items.map((item) => {
		switch (item.type) {
			case "group":
				return <NavGroup key={item.id} item={item} />;
			default:
				return (
					<Typography key={item.id} variant='h6' color='error' align='center'>
						Menu Items Error
					</Typography>
				);
		}
	});

	return <>{navItems}</>;
};

export default memo(MenuList);
