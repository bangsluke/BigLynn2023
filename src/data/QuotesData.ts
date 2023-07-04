import { v4 as uuid } from "uuid";

export interface Quote {
	key: string;
	quote: string;
	author: string;
}

// Define the array of quotes to display
const QuoteArray: Quote[] = [
	{
		key: uuid(),
		quote: "Golf is a game that is 90% mental and 10% mental.",
		author: "Chi Chi Rodriguez",
	},
	{
		key: uuid(),
		quote:
			"If you are caught on a golf course during a storm and are afraid of lightning, hold up a 1-iron. Not even God can hit a 1-iron.",
		author: "Lee Trevino",
	},
	{
		key: uuid(),
		quote: "Golf is a fascinating game. It has taken me nearly 40 years to discover that I can't play it.",
		author: "Ted Ray",
	},
	{
		key: uuid(),

		quote: "Golf is a game in which you yell 'fore', shoot six, and write down five.",
		author: "Paul Harvey",
	},
	{
		key: uuid(),
		quote: "If you think it's hard to meet new people, try picking up the wrong golf ball.",
		author: "Jack Lemmon",
	},
];

export default QuoteArray;
