import { google } from 'googleapis';

// Export async function getServerSideProps({ query }) {
//   Const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

//   Const sheets = google.sheets({ version: 'v4', auth });

//   Const response = await sheets.spreadsheets.values.get({
//     SpreadsheetId: process.env.SHEET_ID,
//     Range: 'Homepage!B24:F38'
//   });

//   Const dataresponse = response.data.values.flat();
//   Console.log(dataresponse);

//   Return {
//     Props: {
//       Dataresponse
//     }
//   };
// }

// Export default function Stats({ dataresponse }) {
//   Return (
//     <article>
//       <h1>Google Sheets Data</h1>
//       <ul>
//         {/* {dataresponse.map((v, i) => (
//           <li key={v}>
//             <a>{v}</a>
//           </li>
//         ))} */}
//       </ul>
//     </article>
//   );
// }
