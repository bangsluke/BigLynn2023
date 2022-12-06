export async function getData() {
	const { GoogleSpreadsheet } = require("google-spreadsheet");

	const creds = require("./biglynn2023-56293908d413.json");

	// Initialize the sheet - doc ID is the long id in the sheets URL
	const doc = new GoogleSpreadsheet("13vUKIiVuYGmoSFvf2TNKi9lLDjgg3-fvDbC9E1GvHuo");

	// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
	await doc.useServiceAccountAuth(creds);

	await doc.loadInfo(); // Loads document properties and worksheets
	console.log(doc.title);

	const sheet = doc.sheetsByIndex[0]; // Or use doc.sheetsById[id] or doc.sheetsByTitle[title]
	console.log(sheet.title);
	console.log(sheet.rowCount);

	const rows = await sheet.getRows(); // Return the rows from the 1st sheet
	const allVideos = rows.map((row: any) => {
		// Return the data for each video (or whatever each row is in your sheet)
		return {
			id: row.Video,
		};
	});
	// This returns the videos
	return allVideos;
}
