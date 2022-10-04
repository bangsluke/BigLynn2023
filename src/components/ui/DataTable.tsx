import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "reqLevel1", headerName: "Req Level 1", width: 140, description: "The level 1 requirement.", sortable: true },
	{ field: "reqLevel2", headerName: "Req Level 2", width: 140 },
	{ field: "reqLevel3", headerName: "Req Level 3", width: 140 },
	{ field: "reqLevel4", headerName: "Req Level 4", width: 140 },
	{ field: "reqName", headerName: "Req Name", width: 180 },
	{ field: "reqDesc", headerName: "Req Description", width: 250 },
	{ field: "reqLink", headerName: "Req Link", width: 90 },
	{ field: "pals", headerName: "PALS", width: 180 },
	{ field: "targetMin", headerName: "Target (Min)", width: 120 },
	{ field: "targetMax", headerName: "Target (Max)", width: 120 },
	{ field: "measurementUnit", headerName: "Measurement Unit", width: 120 },
	{
		field: "fullid",
		headerName: "Full ID",
		width: 200,
		description: "The full line item ID.",
		sortable: false,
		valueGetter: (params: GridValueGetterParams) => `${"ODIN-VTS-VS-" || ""} ${params.row.id || ""}`,
	},

	// { field: "firstName", headerName: "First name", width: 130 },
	// { field: "lastName", headerName: "Last name", width: 130 },
	// {
	// 	Field: "age",
	// 	HeaderName: "Age",
	// 	Type: "number",
	// 	Width: 90,
	// },
	// {
	// 	Field: "fullName",
	// 	HeaderName: "Full name",
	// 	Description: "This column has a value getter and is not sortable.",
	// 	Sortable: false,
	// 	Width: 160,
	// 	ValueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
	// },
];

const rows = [
	{
		id: "00001",
		reqLevel1: "Vehicle Safety",
		reqLevel2: "Passive Safety",
		reqLevel3: "Legislation and Regulations",
		reqLevel4: "North America",
		reqName: "xyz",
		reqDesc: "xyz",
		pals: "L - Lead",
		targetMin: "Pass",
		targetMax: "N/A",
		measurementUnit: "N/A",
	},
	{
		id: "00002",
		reqLevel1: "Vehicle Safety",
		reqLevel2: "Passive Safety",
		reqLevel3: "NCAP",
		reqLevel4: "",
		reqName: "xyz",
		reqDesc: "xyz",
		pals: "A - Amongst Leaders",
		targetMin: "Pass",
		targetMax: "N/A",
		measurementUnit: "N/A",
	},
	{
		id: "00003",
		reqLevel1: "Vehicle Safety",
		reqLevel2: "Business Requirements",
		reqLevel3: "",
		reqLevel4: "",
		reqName: "xyz",
		reqDesc: "xyz",
		pals: "L - Lead",
		targetMin: "",
		targetMax: "",
		measurementUnit: "",
	},
	{
		id: "00004",
		reqLevel1: "Vehicle Safety",
		reqLevel2: "Active Safety",
		reqLevel3: "Legislation and Regulations",
		reqLevel4: "North America",
		reqName: "xyz",
		reqDesc: "xyz",
		pals: "A - Amongst Leaders",
		targetMin: "",
		targetMax: "",
		measurementUnit: "",
	},
	{
		id: "00005",
		reqLevel1: "Vehicle Safety",
		reqLevel2: "Active Safety",
		reqLevel3: "NCAP",
		reqLevel4: "",
		reqName: "xyz",
		reqDesc: "xyz",
		pals: "C - Competitive",
		targetMin: "",
		targetMax: "",
		measurementUnit: "",
	},
	{
		id: "00006",
		reqLevel1: "Vehicle Safety",
		reqLevel2: "Active Safety",
		reqLevel3: "Business Requirements",
		reqLevel4: "",
		reqName: "xyz",
		reqDesc: "xyz",
		pals: "U - Unnaffected",
		targetMin: "",
		targetMax: "",
		measurementUnit: "",
	},
];

export default function DataTable() {
	return (
		<div style={{ height: 500, width: "100%" }}>
			<DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
		</div>
	);
}
