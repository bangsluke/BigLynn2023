export async function getData() {
	const { GoogleSpreadsheet } = require("google-spreadsheet");

	//const creds = require("./biglynn2023-56293908d413.json"); // For now, comment out to allow build
	// const creds = "";

	// Initialize the sheet - doc ID is the long id in the sheets URL
	const doc = new GoogleSpreadsheet("13vUKIiVuYGmoSFvf2TNKi9lLDjgg3-fvDbC9E1GvHuo");

	// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
	//await doc.useServiceAccountAuth(creds);
	doc.useApiKey(process.env.GOOGLE_SHEETS_API_KEY);

	await doc.loadInfo(); // Loads document properties and worksheets
	console.log("doc.title", doc.title);

	// Const sheet = doc.sheetsByIndex[0]; // Or use doc.sheetsById[id] or doc.sheetsByTitle[title]
	const sheet = doc.sheetsByTitle.PositionData;
	console.log("sheet.title", sheet.title);
	console.log("sheet.rowCount", sheet.rowCount);

	const rows = await sheet.getRows(); // Return the rows from the 1st sheet
	console.log("rows", rows);

	const allPositionData = rows.map((row: any) => {
		// Return the data for each row
		return {
			AndyPosition: row.Andy,
		};
	});
	// This returns the data
	console.log("allData", allPositionData);
	return allPositionData;
}
