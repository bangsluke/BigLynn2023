import { PlayerData } from "types/types";

const toNumber = (value: unknown, fallback = 0): number => {
	const numericValue = Number(value);
	return Number.isFinite(numericValue) ? numericValue : fallback;
};

const toText = (value: unknown): string => {
	if (value === null || value === undefined) {
		return "";
	}
	return String(value).trim();
};

const normaliseKey = (key: string): string => key.toLowerCase().replace(/[^a-z0-9]/g, "");

const getRowValue = (rowData: Record<string, unknown>, candidateKeys: string[]): unknown => {
	const normalisedRowData = Object.entries(rowData).reduce<Record<string, unknown>>((accumulator, [key, value]) => {
		accumulator[normaliseKey(key)] = value;
		return accumulator;
	}, {});

	for (const candidateKey of candidateKeys) {
		const matchedValue = normalisedRowData[normaliseKey(candidateKey)];
		if (matchedValue !== undefined && matchedValue !== null && toText(matchedValue) !== "") {
			return matchedValue;
		}
	}

	return undefined;
};

export async function getPlayerData() {
	// Define the config details for the Google Sheet pulling data from
	const Config = {
		GoogleSpreadsheetID: "13vUKIiVuYGmoSFvf2TNKi9lLDjgg3-fvDbC9E1GvHuo",
		SheetName: "PlayerData",
	};
	const { GoogleSpreadsheet } = require("google-spreadsheet");
	const apiKey = process.env.NEXT_PUBLIC_API_KEY || process.env.GOOGLE_SHEETS_API_KEY;
	if (!apiKey) {
		throw new Error("Missing Google Sheets API key. Set NEXT_PUBLIC_API_KEY or GOOGLE_SHEETS_API_KEY.");
	}

	// Initialize the sheet - doc ID is the long id in the sheets URL
	const doc = new GoogleSpreadsheet(Config.GoogleSpreadsheetID, {
		apiKey,
	});

	// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
	//await doc.useServiceAccountAuth(creds);
	// console.log("API key from 'getPlayerData'", process.env.NEXT_PUBLIC_API_KEY);
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
	const allPlayers: PlayerData[] = rows.map((row: any, index: number) => {
		const rowData: Record<string, unknown> = typeof row?.toObject === "function" ? row.toObject() : row;

		const fullName = toText(getRowValue(rowData, ["fullName", "fullname", "name", "playerName", "player"]));
		const firstName = toText(getRowValue(rowData, ["firstName", "firstname", "first", "forename"]));
		const secondName = toText(getRowValue(rowData, ["secondName", "secondname", "surname", "lastName", "lastname"]));
		const fullNameParts = fullName.split(" ").filter(Boolean);
		const derivedFirstName = firstName || fullNameParts[0] || `Player ${index + 1}`;
		const derivedSecondName = secondName || fullNameParts.slice(1).join(" ");

		// Return the data for each row
		return {
			id: toNumber(getRowValue(rowData, ["id", "playerId", "playerID"]), index + 1),
			fullName: fullName || `${derivedFirstName} ${derivedSecondName}`.trim(),
			firstName: derivedFirstName,
			secondName: derivedSecondName,
			apps: toNumber(getRowValue(rowData, ["apps", "appearances"])),
			pointsFinishes: toNumber(getRowValue(rowData, ["pointsFinishes", "pointsFinish", "pointsfinishes"])),
			wins: toNumber(getRowValue(rowData, ["wins"])),
			winPercentage: toText(getRowValue(rowData, ["winPercentage", "winpercent", "win%"])),
			pointsTotal: toNumber(getRowValue(rowData, ["pointsTotal", "totalPoints"])),
			pointsAverage: toNumber(getRowValue(rowData, ["pointsAverage", "averagePoints"])),
			pointsMin: toNumber(getRowValue(rowData, ["pointsMin", "minimumPoints"])),
			pointsMax: toNumber(getRowValue(rowData, ["pointsMax", "maximumPoints"])),
			pointsMinYear: toNumber(getRowValue(rowData, ["pointsMinYear", "minimumPointsYear"])),
			pointsMaxYear: toNumber(getRowValue(rowData, ["pointsMaxYear", "maximumPointsYear"])),
			pointsLatest: toNumber(getRowValue(rowData, ["pointsLatest", "latestPoints", "points2023", "points2022"])),
			pointsExpected2023Points: toNumber(getRowValue(rowData, ["pointsExpected2023Points", "predicted2024Points", "predictedPoints"])),
			handicapLatest: toNumber(getRowValue(rowData, ["handicapLatest", "latestHandicap", "handicap2023", "handicap2024"])),
			handicapMinimum: toNumber(getRowValue(rowData, ["handicapMinimum", "lowestHandicap"])),
			handicapMaximum: toNumber(getRowValue(rowData, ["handicapMaximum", "highestHandicap"])),
			handicapExpected: toNumber(getRowValue(rowData, ["handicapExpected", "predictedHandicap", "predicted2025Handicap"])),
			handicapMinimumYear: toNumber(getRowValue(rowData, ["handicapMinimumYear", "lowestHandicapYear"])),
			handicapMaximumYear: toNumber(getRowValue(rowData, ["handicapMaximumYear", "highestHandicapYear"])),
			positionAverage: toNumber(getRowValue(rowData, ["positionAverage", "averagePosition"])),
			positionBestFinish: toNumber(getRowValue(rowData, ["positionBestFinish", "bestPosition"])),
			positionWorstFinish: toNumber(getRowValue(rowData, ["positionWorstFinish", "worstPosition"])),
			positionPredicted: toNumber(getRowValue(rowData, ["positionPredicted", "predictedPosition", "predicted2024Position"])),
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
