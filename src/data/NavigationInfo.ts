import { NavigationAnchor } from "types/index";

// Define the navigation information used for the app bar.
const NavigationInfo: NavigationAnchor[]= [
	{
		id: 1,
		key: crypto.randomUUID(),
		name: 'Event Details',
		anchor: 'eventDetails'
	},
	{
		id: 2,
		key: crypto.randomUUID(),
		name: 'Itinerary',
		anchor: 'itinerary'
	},
	{
		id: 3,
		key: crypto.randomUUID(),
		name: 'Rules',
		anchor: 'rules'
	},
	{
		id: 4,
		key: crypto.randomUUID(),
		name: 'Statistics',
		anchor: 'statistics'
	},
	{
		id: 5,
		key: crypto.randomUUID(),
		name: 'FAQ',
		anchor: 'FAQ'
	},
	{
		id: 6,
		key: crypto.randomUUID(),
		name: 'Useful Links',
		anchor: 'usefulLinks'
	}
];

export default NavigationInfo;
