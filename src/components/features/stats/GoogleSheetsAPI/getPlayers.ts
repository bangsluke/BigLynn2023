export async function getPlayers() {
	const { GoogleSpreadsheet } = require("google-spreadsheet");

	//Const creds = require("./biglynn2023-56293908d413.json"); // For now, comment out to allow build
	const creds = "";

	// Initialize the sheet - doc ID is the long id in the sheets URL
	const doc = new GoogleSpreadsheet("13vUKIiVuYGmoSFvf2TNKi9lLDjgg3-fvDbC9E1GvHuo");

	// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
	await doc.useServiceAccountAuth(creds);

	await doc.loadInfo(); // Loads document properties and worksheets
	console.log("doc.title", doc.title);

	// Const sheet = doc.sheetsByIndex[0]; // Or use doc.sheetsById[id] or doc.sheetsByTitle[title]
	const sheet = doc.sheetsByTitle.PlayerData;
	console.log("sheet.title", sheet.title);
	console.log("sheet.rowCount", sheet.rowCount);

	const rows = await sheet.getRows(); // Return the rows from the 1st sheet
	console.log("rows", rows);

	const allPlayers = rows.map((row: any) => {
		// Return the data for each row

		return {
			name: row.player,
		};
	});
	// This returns the data
	console.log("allPlayers", allPlayers);
	return allPlayers;
}
