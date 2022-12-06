# Big Lynn 2023

An information page for the Big Lynn 2023 golf competition including details and stats from past years.

## Start Up

Use `yarn dev` to start up the tool and it will be available at http://localhost:3000/

## Google Sheets API

Used the following video to get the sheet working - https://www.youtube.com/watch?v=K6Vcfm7TA5U&t=43s&ab_channel=Fireship.

## Xata

https://xata.io/docs/overview

### Xata Commands

- `xata codegen` - Regenerates the xata.ts file. Do this every time you change the database schema.
- After running, need to add the below to the defaultOptions object;
	`enableBrowser: true, apiKey: `${process.env.XATA_API_KEY} `,`

- `xata browse` - Opens the Xata Studio in your browser. You can use this to browse your data and run queries.
