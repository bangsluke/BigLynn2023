import { v4 as uuid } from "uuid";
import { NavigationAnchor } from "../types/types";

// Define the navigation information used for the app bar.
const NavigationInfo: NavigationAnchor[] = [
	{
		id: 1,
		key: uuid(),
		name: "To Top",
		anchor: "top",
	},
	// {
	// 	id: 2,
	// 	key: uuid(),
	// 	name: "Event Details",
	// 	anchor: "eventDetails",
	// },
	// {
	// 	id: 3,
	// 	key: uuid(),
	// 	name: "Itinerary",
	// 	anchor: "itinerary",
	// },
	{
		id: 4,
		key: uuid(),
		name: "Quotes",
		anchor: "quotes",
	},
	{
		id: 5,
		key: uuid(),
		name: "Rules",
		anchor: "rules",
	},
	{
		id: 6,
		key: uuid(),
		name: "Statistics",
		anchor: "statistics",
	},
	// {
	// 	id: 7,
	// 	key: uuid(),
	// 	name: "FAQ",
	// 	anchor: "FAQ",
	// },
	// {
	// 	id: 8,
	// 	key: uuid(),
	// 	name: "Useful Links",
	// 	anchor: "usefulLinks",
	// },
];

export default NavigationInfo;
