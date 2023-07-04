// https://stackoverflow.com/a/66828783
import * as Icons from "@mui/icons-material";
import stringSimilarity from "string-similarity";

function useIcons(word: string) {
	//Console.log(Icons); // Comes out as Modules (with the full icon element)

	const iconsNames: any = Object.keys(Icons); // Comes out as an array
	// Console.log(iconsNames);

	const matches: any = stringSimilarity.findBestMatch(word, iconsNames); // Comes out as an object
	// Console.log(matches);
	const bestMatch: string = matches.bestMatch.target; // Comes out as a string
	// Console.log(bestMatch);
	// @ts-ignore
	const Icon: any = Icons[bestMatch];

	// Console.log(Icon); // Comes out as $$typeof: Symbol(react.memo)

	return Icon;
}
export default useIcons;
