import { PlayerData } from "types/types";

export async function getPlayerData() {
	// Define the config details for the Google Sheet pulling data from
	const Config = {
		GoogleSpreadsheetID: "13vUKIiVuYGmoSFvf2TNKi9lLDjgg3-fvDbC9E1GvHuo",
		SheetName: "PlayerData",
	};
	const { GoogleSpreadsheet } = require("google-spreadsheet");

	// Initialize the sheet - doc ID is the long id in the sheets URL
	const doc = new GoogleSpreadsheet(Config.GoogleSpreadsheetID);

	// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
	//await doc.useServiceAccountAuth(creds);
	// console.log("API key from 'getPlayerData'", process.env.NEXT_PUBLIC_API_KEY);
	doc.useApiKey(process.env.NEXT_PUBLIC_API_KEY);
	await doc.loadInfo(); // Loads document properties and worksheets
	// console.log("doc details", doc);
	// console.log("doc.title", doc.title);

	// Get the sheet by name
	// Const sheet = doc.sheetsByIndex[0]; // Or use doc.sheetsById[id] or doc.sheetsByTitle[title]
	const sheet = doc.sheetsByTitle[Config.SheetName];
	// console.log("sheet.title", sheet.title);
	// console.log("sheet.rowCount", sheet.rowCount);

	// Get all rows from the sheet and map through them
	const rows = await sheet.getRows(); // Return the rows from the 1st sheet
	// console.log("rows", rows);
	const allPlayers: PlayerData[] = rows.map((row: any) => {
		// Return the data for each row
		return {
			id: row.id,
			fullName: row.fullName,
			firstName: row.firstName,
			secondName: row.secondName,
			apps: row.apps,
			pointsFinishes: row.pointsFinishes,
			wins: row.wins,
			winPercentage: row.winPercentage,
			pointsTotal: row.pointsTotal,
			pointsAverage: row.pointsAverage,
			pointsMin: row.pointsMin,
			pointsMax: row.pointsMax,
			pointsMinYear: row.pointsMinYear,
			pointsMaxYear: row.pointsMaxYear,
			pointsLatest: row.pointsLatest,
			pointsExpected2023Points: row.pointsExpected2023Points,
			handicapLatest: row.handicapLatest,
			handicapMinimum: row.handicapMinimum,
			handicapMaximum: row.handicapMaximum,
			handicapExpected: row.handicapExpected,
			handicapMinimumYear: row.handicapMinimumYear,
			handicapMaximumYear: row.handicapMaximumYear,
			positionAverage: row.positionAverage,
			positionBestFinish: row.positionBestFinish,
			positionWorstFinish: row.positionWorstFinish,
			positionPredicted: row.positionPredicted,
		};
	});

	// Collate the data to be returned for details on the sheet
	// const ReturnedDocInfo = {
	// 	title: doc.title,
	// 	sheet: sheet.title,
	// 	rowCount: sheet.rowCount,
	// 	sheetData: allPlayers,
	// };
	// console.log("1. ReturnedDocInfo from getPlayerData.ts", ReturnedDocInfo);

	// Log the data that is to be returned by this function
	// console.log("allPlayers from getPlayerData.ts", allPlayers);
	// console.log("typeof allPlayers", typeof allPlayers);

	// This returns the data
	return allPlayers;
}
