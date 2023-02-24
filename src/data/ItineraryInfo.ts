import { ItineraryItem } from "../types/types";

// Links
// MUI Icons - https://mui.com/material-ui/material-icons/

// Define the itinerary information.
const ItineraryInfo: ItineraryItem[] = [
	{
		id: 1,
		date: "Sat 15 Jul 2023",
		time: "8:15",
		datetime: 202307150815,
		title: "First Arrival",
		subtitle: "",
		description: "Dave arrives at Stoke by Nayland Hotel",
		// TODO: Change below link to Google Maps directions from Dave's house (stamford bridge) to Stoke by Nayland Hotel
		url: "https://www.google.co.uk/maps/dir/51.5868307,0.4655596/Stoke+by+Nayland+Resort,+Keeper's+Ln,+Leavenheath,+Colchester+CO6+4PZ/@51.7935539,0.4342875,10z/data=!3m1!4b1!4m21!1m10!3m9!1s0x47d900b5862e7357:0xad04129065912290!2sStoke+by+Nayland+Resort!5m2!4m1!1i2!8m2!3d51.9977424!4d0.8658706!16s%2Fg%2F1tdqgr84!4m9!1m1!4e1!1m5!1m1!1s0x47d900b5862e7357:0xad04129065912290!2m2!1d0.8658706!2d51.9977424!3e0",
		position: "left",
		backgroundColor: "#3f87d9",
		iconName: "DirectionsCarIcon",
	},
	{
		id: 2,
		date: "Sat 15 Jul 2023",
		time: "11:30",
		datetime: 202307151130,
		title: "Group Arrival",
		subtitle: "",
		description: "Everyone else's meet time at Stoke by Nayland Hotel",
		// TODO: Change below link to Google Maps directions from person who opens the links to Stoke by Nayland Hotel
		url: "https://www.stokebynayland.com/golf/gainsborough-course/",
		position: "right",
		backgroundColor: "#3f87d9",
		iconName: "DirectionsCarIcon",
	},
	{
		id: 3,
		date: "Sat 15 Jul 2023",
		time: "12:40",
		datetime: 202307151240,
		title: "Round 1",
		subtitle: "",
		description: "18 holes on Gainsborough Course",
		url: "https://www.stokebynayland.com/golf/gainsborough-course/",
		position: "left",
		backgroundColor: "#81dac9",
		iconName: "GolfCourseIcon",
	},
	{
		id: 4,
		date: "Sat 15 Jul 2023",
		time: "15:00",
		datetime: 202307151500,
		title: "Check-in",
		subtitle: "",
		description: "Check-in at Stoke by Nayland Hotel, Golf & Spa for 2 nights (Golf Deluxe Twin room)",
		url: "https://www.stokebynayland.com/",
		position: "right",
		backgroundColor: "#00e676",
		iconName: "AssignmentTurnedInIcon",
	},
	{
		id: 5,
		date: "Sat 15 Jul 2023",
		time: "19:45",
		datetime: 202307151945,
		title: "Dinner",
		subtitle: "",
		description: "",
		url: "https://www.stokebynayland.com/",
		position: "left",
		backgroundColor: "#7cadea",
		iconName: "LocalDiningIcon",
	},
];

export default ItineraryInfo;
