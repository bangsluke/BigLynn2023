import { ItineraryItem } from "../types/types";

// Links
// MUI Icons - https://mui.com/material-ui/material-icons/

export interface FullItinerary {
	Saturday: ItineraryItem[];
	Sunday: ItineraryItem[];
	Monday: ItineraryItem[];
}

// Define the itinerary information.
const ItineraryInfo: FullItinerary = {
	Saturday: [
		{
			id: 1,
			date: "Sat 15 Jul 2023",
			time: "8:15",
			datetime: 202307150815,
			title: "First Arrival",
			subtitle: "",
			description: "Dave arrives at Stoke by Nayland Hotel. Yet to understand why he arrives so early...",
			url: "https://www.google.co.uk/maps/dir/Stamford+Bridge,+Fulham+Rd.,+London+SW6+1HS/Stoke+by+Nayland+Resort,+Dedham+Vale+AONB,+Keeper's+Lane,+Leavenheath,+Colchester/@51.742419,0.0548923,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x48760f864b976f3d:0x48aa38781ea565f8!2m2!1d-0.1909565!2d51.481663!1m5!1m1!1s0x47d900b5862e7357:0xad04129065912290!2m2!1d0.8658706!2d51.9977424!3e0",
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
			url: "https://www.google.com/maps/dir/?api=1&destination=Stoke+by+Nayland+Resort&origin=Current+Location&travelmode=driving",
			position: "left",
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
			description: "Gainsborough Course (par-71)",
			url: "https://www.stokebynayland.com/gainsborough-course/",
			position: "right",
			backgroundColor: "#00e676",
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
			url: "",
			position: "left",
			backgroundColor: "#81dac9",
			iconName: "AssignmentTurnedInIcon",
		},
		{
			id: 5,
			date: "Sat 15 Jul 2023",
			time: "19:45",
			datetime: 202307151945,
			title: "Dinner",
			subtitle: "",
			description: "Food served in the Lakes Restaurant.",
			url: "https://www.stokebynayland.com/wp-content/uploads/2023/06/Lakes-Dinner-Menu-JULY-23.pdf",
			position: "right",
			backgroundColor: "#7cadea",
			iconName: "LocalDiningIcon",
		},
	],
	Sunday: [
		{
			id: 6,
			date: "Sun 16 Jul 2023",
			time: "07:00?",
			datetime: 202307160700,
			title: "Breakfast",
			subtitle: "",
			description: "They haven't told me when or where this is served or what time yet...",
			url: "",
			position: "left",
			backgroundColor: "#7cadea",
			iconName: "LocalDiningIcon",
		},
		{
			id: 7,
			date: "Sun 16 Jul 2023",
			time: "12:40",
			datetime: 202307161240,
			title: "Round 2",
			subtitle: "",
			description: "Constable Course (par-72)",
			url: "https://www.stokebynayland.com/constable-course/",
			position: "right",
			backgroundColor: "#00e676",
			iconName: "GolfCourseIcon",
		},
		{
			id: 8,
			date: "Sun 16 Jul 2023",
			time: "19:45",
			datetime: 202307161945,
			title: "Dinner",
			subtitle: "",
			description: "Food served in the Lakes Restaurant.",
			url: "https://www.stokebynayland.com/wp-content/uploads/2023/06/Lakes-Dinner-Menu-JULY-23.pdf",
			position: "left",
			backgroundColor: "#7cadea",
			iconName: "LocalDiningIcon",
		},
	],
	Monday: [
		{
			id: 7,
			date: "Mon 17 Jul 2023",
			time: "07:00?",
			datetime: 202307170700,
			title: "Breakfast",
			subtitle: "",
			description: "They haven't told me when or where this is served or what time yet...",
			url: "",
			position: "left",
			backgroundColor: "#7cadea",
			iconName: "LocalDiningIcon",
		},
		{
			id: 8,
			date: "Mon 17 Jul 2023",
			time: "10:00",
			datetime: 202307171000,
			title: "Check out",
			subtitle: "",
			description: "Check out from Stoke by Nayland Hotel",
			url: "",
			position: "right",
			backgroundColor: "#81dac9",
			iconName: "ExitToAppIcon",
		},
		{
			id: 9,
			date: "Mon 17 Jul 2023",
			time: "10:40",
			datetime: 202307171040,
			title: "Round 3",
			subtitle: "",
			description: "Gainsborough Course (par-71)",
			url: "https://www.stokebynayland.com/gainsborough-course/",
			position: "left",
			backgroundColor: "#00e676",
			iconName: "GolfCourseIcon",
		},
		{
			id: 10,
			date: "Mon 17 Jul 2023",
			time: "15:00",
			datetime: 202307171500,
			title: "Leave",
			subtitle: "",
			description: "Piss off home",
			url: "https://www.google.com/maps/dir/?api=1&destination=Home&origin=Current+Location&travelmode=driving",
			position: "right",
			backgroundColor: "#3f87d9",
			iconName: "DirectionsCarIcon",
		},
	],
};

export default ItineraryInfo;
