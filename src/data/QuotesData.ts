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
	{
		key: uuid(),
		quote: "Christ this salmon is ****ing salty.",
		author: "Dave Rose",
	},
	{
		key: uuid(),
		quote: "The reason the pro tells you to keep your head down is so you can't see him laughing.",
		author: "Phyllis Diller",
	},
	{
		key: uuid(),
		quote: "The only sure rule in golf is: He who has the fastest cart never has to play the bad lie.",
		author: "Mickey Mantle",
	},
	{
		key: uuid(),
		quote: "I have a tip that can take five strokes off anyone's golf game. It's called an eraser.",
		author: "Arnold Palmer",
	},
	{
		key: uuid(),
		quote: "I know I am getting better at golf because I'm hitting fewer spectators.",
		author: "Gerald Ford",
	},
	{
		key: uuid(),
		quote: "If you drink, don't drive. Don't even putt.",
		author: "Dean Martin",
	},
];

export default QuoteArray;
