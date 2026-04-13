declare module "@tabler/icons" {
	import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

	type IconProps = SVGProps<SVGSVGElement> & {
		size?: string | number;
		stroke?: string | number;
	};

	export type TablerIcon = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;

	export const IconArrowUp: TablerIcon;
	export const IconCalendarEvent: TablerIcon;
	export const IconCheckupList: TablerIcon;
	export const IconLink: TablerIcon;
	export const IconQuestionMark: TablerIcon;
	export const IconQuote: TablerIcon;
	export const IconReportAnalytics: TablerIcon;
	export const IconRuler2: TablerIcon;
}
