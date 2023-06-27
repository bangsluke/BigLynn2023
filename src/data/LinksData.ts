import { LinkData } from "types/types";
import { v4 as uuid } from "uuid";

// Define the data used for the Useful Links section
const LinksData: LinkData[] = [
	{
		id: 1,
		key: uuid(),
		iconName: "MapIcon",
		title: "Gainsborough Course Map",
		description: "Map of the course for planning those wild shots",
		linkURL:
			"https://stokebynayland.com/wp-content/uploads/2020/08/Gainsborough-course-guide.pdf?_ga=2.199130156.2092627377.1665515642-362188512.1665515641",
	},
	{
		id: 2,
		key: uuid(),
		iconName: "MapIcon",
		title: "Constable Course Map",
		description: "Map of the course for planning those wild shots",
		linkURL:
			"https://stokebynayland.com/wp-content/uploads/2020/08/Constable-course-guide.pdf?_ga=2.192230313.2092627377.1665515642-362188512.1665515641",
	},
	{
		id: 3,
		key: uuid(),
		iconName: "ScoreboardIcon",
		title: "Gainsborough Course Scorecard",
		description: "Downloadable scorecard for recording the occasional par",
		linkURL:
			"https://stokebynayland.com/wp-content/uploads/2021/09/Gainsborough-Course-Scorecard-2020-website.pdf?_ga=2.152908730.2092627377.1665515642-362188512.1665515641",
	},
	{
		id: 4,
		key: uuid(),
		iconName: "ScoreboardIcon",
		title: "Constable Course Scorecard",
		description: "Downloadable scorecard for recording those multiple bogeys",
		linkURL:
			"https://stokebynayland.com/wp-content/uploads/2021/09/Constable-Course-Scorecard-2021-website.pdf?_ga=2.192230313.2092627377.1665515642-362188512.1665515641",
	},
	{
		id: 5,
		key: uuid(),
		iconName: "LiveHelpIcon",
		title: "Gainsborough Course Guide",
		description: "Guide to help you through each hole",
		linkURL: "https://www.stokebynayland.com/gainsborough-course/?_ga=2.152908730.2092627377.1665515642-362188512.1665515641",
	},

	{
		id: 6,
		key: uuid(),
		iconName: "LiveHelpIcon",
		title: "Constable Course Guide",
		description: "Guide to help you through each hole",
		linkURL: "https://www.stokebynayland.com/constable-course/?_ga=2.125196297.2092627377.1665515642-362188512.1665515641",
	},

	{
		id: 7,
		key: uuid(),
		iconName: "LocalDiningIcon",
		title: "Lakes Restaurant Menu",
		description: "The main dinner menu",
		// TODO: Update the link to the correct menu in July
		linkURL: "https://www.stokebynayland.com/wp-content/uploads/2023/06/Lakes-Dinner-Menu-June-2023-1.pdf",
	},

	{
		id: 8,
		key: uuid(),
		iconName: "BreakfastDiningIcon",
		title: "Sports Bar Breakfast Menu",
		description: "For those up early enough",
		linkURL: "https://www.stokebynayland.com/wp-content/uploads/2023/05/Sports-Bar-Breakfast-Menu-A5-Final.pdf",
	},

	{
		id: 9,
		key: uuid(),
		iconName: "RestaurantIcon",
		title: "Sports Bar Main Menu",
		description: "For midday dining/pre dinner snacks",
		linkURL: "https://www.stokebynayland.com/wp-content/uploads/2023/05/Sports-Bar-Main-Menu-A4-Final.pdf",
	},

	{
		id: 10,
		key: uuid(),
		iconName: "FastfoodIcon",
		title: "Room Service Food Menu",
		description: "Easy room service for late night snacking",
		linkURL: "https://www.stokebynayland.com/wp-content/uploads/2022/05/Room-Service-menu.pdf",
	},
	{
		id: 11,
		key: uuid(),
		iconName: "LocalbarIcon",
		title: "Room Service Drinks Menu",
		description: "For getting a weird buzz on in your room?",
		linkURL:
			"https://stokebynayland.com/wp-content/uploads/2021/12/SbN-Drinks-Menu.pdf?_ga=2.91780121.2092627377.1665515642-362188512.1665515641",
	},
];

export default LinksData;
