export async function getYears() {
	const Config = {
		GoogleSpreadsheetID: "13vUKIiVuYGmoSFvf2TNKi9lLDjgg3-fvDbC9E1GvHuo",
		SheetName: "YearData",
	};

	const { GoogleSpreadsheet } = require("google-spreadsheet");

	//const creds = require("./biglynn2023-56293908d413.json"); // For now, comment out to allow build
	// const creds = "";

	// Initialize the sheet - doc ID is the long id in the sheets URL
	const doc = new GoogleSpreadsheet(Config.GoogleSpreadsheetID);

	// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
	//await doc.useServiceAccountAuth(creds);
	// console.log("API key from 'getPlayers'", process.env.NEXT_PUBLIC_API_KEY);
	doc.useApiKey(process.env.NEXT_PUBLIC_API_KEY);

	await doc.loadInfo(); // Loads document properties and worksheets

	// console.log("doc details", doc);
	// console.log("doc.title", doc.title);

	// Const sheet = doc.sheetsByIndex[0]; // Or use doc.sheetsById[id] or doc.sheetsByTitle[title]
	const sheet = doc.sheetsByTitle[Config.SheetName];
	// console.log("sheet.title", sheet.title);
	// console.log("sheet.rowCount", sheet.rowCount);

	const rows = await sheet.getRows(); // Return the rows from the 1st sheet
	// console.log("rows", rows);

	const allYears = rows.map((row: any) => {
		// Return the data for each row
		return {
			year: row.year,
			numberPlayers: row.numberPlayers,
			first: row.first,
			second: row.second,
			third: row.third,
			fourth: row.fourth,
			fifth: row.fifth,
			sixth: row.sixth,
			seventh: row.seventh,
			eighth: row.eighth,
		};
	});

	// Collate the data to be returned
	// const ReturnedDocInfo = {
	// 	title: doc.title,
	// 	sheet: sheet.title,
	// 	rowCount: sheet.rowCount,
	// 	sheetData: allYears,
	// };
	// console.log("ReturnedDocInfo", ReturnedDocInfo);

	// Log the data that is to be returned by this function
	// console.log("allYears", allYears);

	// This returns the data
	return allYears;
}
