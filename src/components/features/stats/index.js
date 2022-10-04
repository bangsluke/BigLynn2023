// Import { google } from 'googleapis';
// Import Link from 'next/link';

// Export async function getServerSideProps({ query }) {
//   Const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

//   Const sheets = google.sheets({ version: 'v4', auth });

//   Const response = await sheets.spreadsheets.values.get({
//     SpreadsheetId: process.env.SHEET_ID,
//     Range: 'Match Details!A1:E27'
//   });

//   Const posts = response.data.values.flat();
//   Console.log(posts);

//   Return {
//     Props: {
//       Posts
//     }
//   };
// }

// Export default function Post({ posts }) {
//   Return (
//     <article>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((v, i) => (
//           <li key={v}>
//             <Link href={`posts/${i + 2}`}>
//               <a>{v}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </article>
//   );
// }
