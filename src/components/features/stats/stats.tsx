import { google } from 'googleapis';

export async function getServerSideProps({ query }) {
  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Homepage!B24:F38'
  });

  const dataresponse = response.data.values.flat();
  console.log(dataresponse);

  return {
    props: {
      dataresponse
    }
  };
}

export default function Stats({ dataresponse }) {
  return (
    <article>
      <h1>Google Sheets Data</h1>
      <ul>
        {/* {dataresponse.map((v, i) => (
          <li key={v}>
            <a>{v}</a>
          </li>
        ))} */}
      </ul>
    </article>
  );
}
