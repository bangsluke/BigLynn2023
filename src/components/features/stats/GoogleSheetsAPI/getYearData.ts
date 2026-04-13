import { YearDataType } from "types/types";

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

export async function getYearData() {
	const Config = {
		GoogleSpreadsheetID: "13vUKIiVuYGmoSFvf2TNKi9lLDjgg3-fvDbC9E1GvHuo",
		SheetName: "YearData",
	};

	const { GoogleSpreadsheet } = require("google-spreadsheet");
	const apiKey = process.env.NEXT_PUBLIC_API_KEY || process.env.GOOGLE_SHEETS_API_KEY;
	if (!apiKey) {
		throw new Error("Missing Google Sheets API key. Set NEXT_PUBLIC_API_KEY or GOOGLE_SHEETS_API_KEY.");
	}

	//const creds = require("./biglynn2023-56293908d413.json"); // For now, comment out to allow build
	// const creds = "";

	// Initialize the sheet - doc ID is the long id in the sheets URL
	const doc = new GoogleSpreadsheet(Config.GoogleSpreadsheetID, {
		apiKey,
	});

	// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
	//await doc.useServiceAccountAuth(creds);
	// console.log("API key from 'getYears'", process.env.NEXT_PUBLIC_API_KEY);
	await doc.loadInfo(); // Loads document properties and worksheets

	// console.log("doc details", doc);
	// console.log("doc.title", doc.title);

	// Const sheet = doc.sheetsByIndex[0]; // Or use doc.sheetsById[id] or doc.sheetsByTitle[title]
	const sheet = doc.sheetsByTitle[Config.SheetName];
	// console.log("sheet.title", sheet.title);
	// console.log("sheet.rowCount", sheet.rowCount);

	const rows = await sheet.getRows(); // Return the rows from the 1st sheet
	// console.log("rows", rows);

	const allYears: YearDataType[] = rows
		.map((row: any, index: number) => {
		const rowData: Record<string, unknown> = typeof row?.toObject === "function" ? row.toObject() : row;
		const year = toText(getRowValue(rowData, ["year", "season", "yearLabel"])) || `Year ${index + 1}`;

		// Return the data for each row
			return {
				year,
				columnLetter: toText(getRowValue(rowData, ["columnLetter", "column", "col"])),
				numberPlayers: toText(getRowValue(rowData, ["numberPlayers", "numberOfPlayers", "players", "numPlayers"])),
				totalYearScore: toNumber(getRowValue(rowData, ["totalYearScore", "totalScore", "yearScore"])),
				first: toText(getRowValue(rowData, ["first", "1st", "firstPlace"])),
				second: toText(getRowValue(rowData, ["second", "2nd", "secondPlace"])),
				third: toText(getRowValue(rowData, ["third", "3rd", "thirdPlace"])),
				fourth: toText(getRowValue(rowData, ["fourth", "4th", "fourthPlace"])),
				fifth: toText(getRowValue(rowData, ["fifth", "5th", "fifthPlace"])),
				sixth: toText(getRowValue(rowData, ["sixth", "6th", "sixthPlace"])),
				seventh: toText(getRowValue(rowData, ["seventh", "7th", "seventhPlace"])),
				eighth: toText(getRowValue(rowData, ["eighth", "8th", "eighthPlace"])),
				ninth: toText(getRowValue(rowData, ["ninth", "9th", "ninthPlace"])),
				tenth: toText(getRowValue(rowData, ["tenth", "10th", "tenthPlace"])),
				eleventh: toText(getRowValue(rowData, ["eleventh", "11th", "eleventhPlace"])),
				firstScore: toNumber(getRowValue(rowData, ["firstScore", "1stScore", "firstPoints"])),
				secondScore: toNumber(getRowValue(rowData, ["secondScore", "2ndScore", "secondPoints"])),
				thirdScore: toNumber(getRowValue(rowData, ["thirdScore", "3rdScore", "thirdPoints"])),
				fourthScore: toNumber(getRowValue(rowData, ["fourthScore", "4thScore", "fourthPoints"])),
				fifthScore: toNumber(getRowValue(rowData, ["fifthScore", "5thScore", "fifthPoints"])),
				sixthScore: toNumber(getRowValue(rowData, ["sixthScore", "6thScore", "sixthPoints"])),
				seventhScore: toNumber(getRowValue(rowData, ["seventhScore", "7thScore", "seventhPoints"])),
				eighthScore: toNumber(getRowValue(rowData, ["eighthScore", "8thScore", "eighthPoints"])),
				ninthScore: toNumber(getRowValue(rowData, ["ninthScore", "9thScore", "ninthPoints"])),
				tenthScore: toNumber(getRowValue(rowData, ["tenthScore", "10thScore", "tenthPoints"])),
				eleventhScore: toNumber(getRowValue(rowData, ["eleventhScore", "11thScore", "eleventhPoints"])),
			};
		})
		.filter((yearData: YearDataType) => yearData.year !== "Config Row");

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
