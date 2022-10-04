// Import { google } from 'googleapis';

// Export async function getServerSideProps({ query }) {
//   // Auth
//   Const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

//   Const sheets = google.sheets({ version: 'v4', auth });

//   // Query

//   Const { id } = query;
//   Const range = `Match Details!A${id}:Y${id}`;

//   Const response = await sheets.spreadsheets.values.get({
//     SpreadsheetId: process.env.SHEET_ID,
//     Range
//   });

//   // Result

//   Const [fixID, season, seasonFixID, matchLookUp, player] = response.data.values[0];
//   Console.log(response.data.values[0]);

//   Return {
//     Props: {
//       FixID,
//       Season,
//       SeasonFixID,
//       MatchLookUp,
//       Player
//     }
//   };
// }

// Export default function Post({ fixID, season, seasonFixID, matchLookUp, player }) {
//   Return (
//     <article>
//       <h1>Fix ID: {fixID}</h1>
//       <h2>Season: {season}</h2>
//       <h2>SeasonFixID: {seasonFixID}</h2>
//       <h2>Match Lookup: {matchLookUp}</h2>
//       <h2>Player: {player}</h2>
//     </article>
//   );
// }
