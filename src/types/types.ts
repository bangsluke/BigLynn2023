import React, { FunctionComponent, ReactElement } from "react";

declare module "react" {
	interface CSSProperties {
		"--tree-view-color"?: string;
		"--tree-view-bg-color"?: string;
	}
}

// Material-ui
// Import { Theme } from '@mui/material/styles';
import { ChipProps, SnackbarOrigin, SvgIconTypeMap, TableCellProps } from "@mui/material";

import { OverridableComponent } from "@mui/material/OverridableComponent";

// Project imports
import { TablerIcon } from "@tabler/icons";

// Declare module '@mui/styles/defaultTheme' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   Interface DefaultTheme extends Theme {}
// }

export type ArrangementOrder = "asc" | "desc" | undefined;

export type DateRange = { start: number | Date; end: number | Date };

export type GetComparator = (o: ArrangementOrder, o1: string) => (a: KeyedObject, b: KeyedObject) => number;

export type Direction = "up" | "down" | "right" | "left";

export interface TabsProps {
	children?: React.ReactElement | React.ReactNode | string;
	value: string | number;
	index: number;
}

export interface GenericCardProps {
	title?: string;
	primary?: string | number | undefined;
	secondary?: string;
	content?: string;
	image?: string;
	dateTime?: string;
	iconPrimary?: OverrideIcon;
	color?: string;
	size?: string;
}

export type OverrideIcon =
	| (OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
			muiName: string;
	  })
	| React.ComponentClass<any>
	| FunctionComponent<any>
	| TablerIcon;

export interface EnhancedTableHeadProps extends TableCellProps {
	onSelectAllClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
	order: ArrangementOrder;
	orderBy?: string;
	numSelected: number;
	rowCount: number;
	onRequestSort: (e: React.SyntheticEvent, p: string) => void;
}

export interface EnhancedTableToolbarProps {
	numSelected: number;
}

export type HeadCell = {
	id: string;
	numeric: boolean;
	label: string;
	disablePadding?: string | boolean | undefined;
	align?: "left" | "right" | "inherit" | "center" | "justify" | undefined;
};

export type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

export type NavItemTypeObject = { children?: NavItemType[]; items?: NavItemType[]; type?: string };

export type NavItemType = {
	id?: string;
	icon?: GenericCardProps["iconPrimary"];
	target?: boolean;
	external?: string;
	url?: string | undefined;
	type?: string;
	title?: React.ReactNode | string;
	color?: "primary" | "secondary" | "default" | undefined;
	caption?: React.ReactNode | string;
	breadcrumbs?: boolean;
	disabled?: boolean;
	chip?: ChipProps;
};

export type AuthSliderProps = {
	title: string;
	description: string;
};

export interface SnackbarStateProps {
	action: boolean;
	open: boolean;
	message: string;
	anchorOrigin: SnackbarOrigin;
	variant: string;
	alertSeverity: "error" | "warning" | "success";
	transition: string;
	close: boolean;
	actionButton: boolean;
}

export interface ColorPaletteProps {
	color: string;
	label: string;
	value: string;
}

export interface DefaultRootStateProps {
	snackbar: SnackbarStateProps;
}

export interface ColorProps {
	readonly [key: string]: string;
}

export type GuardProps = {
	children: ReactElement | null;
};

export interface StringColorProps {
	id?: string;
	label?: string;
	color?: string;
	primary?: string;
	secondary?: string;
}

export type KeyedObject = {
	[key: string]: string | number | KeyedObject | any;
};

export interface InitialLoginContextProps {
	isLoggedIn: boolean;
	isInitialized?: boolean;
	user?: any;
}

export interface FormInputProps {
	bug: KeyedObject;
	fullWidth?: boolean;
	size?: "small" | "medium" | undefined;
	label: string;
	name: string;
	required?: boolean;
	InputProps?: {
		label: string;
		startAdornment?: React.ReactNode;
	};
}

export type HandleFunction = (i: string, s: string) => Promise<void>;

export type LayoutType = "authGuard" | "guestGuard" | "minimalLayout";
/** ---- Common Functions types ---- */

export type StringBoolFunc = (s: string) => boolean;
export type StringNumFunc = (s: string) => number;
export type NumbColorFunc = (n: number) => StringColorProps | undefined;
export type ChangeEventFunc = (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface NavigationAnchor {
	id: number;
	key: string;
	name: string;
	anchor: string;
}

export interface LinkData {
	id: number;
	key: string;
	iconName: string;
	title: string;
	description: string;
	linkURL: string;
}

export interface PlayerData {
	id: number;
	fullName: string;
	firstName: string;
	secondName: string;
	apps: number;
	pointsFinishes: number;
	wins: number;
	winPercentage: string;
	pointsTotal: number;
	pointsAverage: number;
	pointsMin: number;
	pointsMax: number;
	pointsMinYear: number;
	pointsMaxYear: number;
	pointsLatest: number;
	pointsExpected2023Points: number;
	handicapLatest: number;
	handicapMinimum: number;
	handicapMaximum: number;
	handicapExpected: number;
	positionAverage: number;
	positionBestFinish: number;
	positionWorstFinish: number;
	positionPredicted: number;
}

export interface YearData {
	Year: string;
	ColumnLetter: string;
	NumberPlayers: string;
	"1st": string;
	"2nd": string;
	"3rd": string;
	"4th": string;
	"5th": string;
	"6th": string;
	"7th": string;
	"8th": string;
}

// Define the TabPanelProps type - mui.com/material-ui/react-tabs/
export interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
	backgroundColor?: string;
	dir?: string;
}

// Define the ItineraryItem type
export interface ItineraryItem {
	id: number;
	iconName: string;
	date?: string;
	time: string;
	datetime: number;
	title: string;
	subtitle: string;
	description: string;
	url: string;
	position: "left" | "right";
	backgroundColor: string;
}
