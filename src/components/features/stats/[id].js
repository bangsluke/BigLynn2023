import { google } from "googleapis";

export async function getServerSideProps({ query }) {
	// Auth
	const auth = await google.auth.getClient({ scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"] });

	const sheets = google.sheets({ version: "v4", auth });

	// Query

	const { id } = query;
	const range = `Match Details!A${id}:Y${id}`;

	const response = await sheets.spreadsheets.values.get({
		spreadsheetId: process.env.SHEET_ID,
		range,
	});

	// Result

	const [fixID, season, seasonFixID, matchLookUp, player] = response.data.values[0];
	console.log(response.data.values[0]);

	return {
		props: {
			fixID,
			season,
			seasonFixID,
			matchLookUp,
			player,
		},
	};
}

export default function Post({ fixID, season, seasonFixID, matchLookUp, player }) {
	return (
		<article>
			<h1>Fix ID: {fixID}</h1>
			<h2>Season: {season}</h2>
			<h2>SeasonFixID: {seasonFixID}</h2>
			<h2>Match Lookup: {matchLookUp}</h2>
			<h2>Player: {player}</h2>
		</article>
	);
}
