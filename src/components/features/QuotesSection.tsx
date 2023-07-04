import CachedIcon from "@mui/icons-material/Cached";
import { Container, Grid, Typography } from "@mui/material";
import SectionHeader from "components/ui/SectionHeader";
import QuoteArray, { Quote } from "data/QuotesData";
import { useEffect, useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function QuotesSection() {
	// Get a random quote from the array
	const [QuoteArrayIndex, setQuoteArrayIndex] = useState<number>(0);
	const [QuoteToDisplay, setQuoteToDisplay] = useState<Quote>(QuoteArray[QuoteArrayIndex]);

	// Define a function to get a random quote from the array
	function randomizeIndex(currentIndex: number, arrayLength: number) {
		let newIndex = currentIndex;
		while (newIndex === currentIndex) {
			// Make sure the new index is not the same as the current index
			newIndex = Math.floor(Math.random() * arrayLength); // Get a random number between 0 and the length of the array
		}
		return newIndex; // Return the new index
	}

	// Define a function to get a random quote from the array
	const getRandQuote = () => {
		setQuoteArrayIndex(randomizeIndex(QuoteArrayIndex, QuoteArray.length));
		setQuoteToDisplay(QuoteArray[QuoteArrayIndex]);
	};

	// Get a random quote from the array on page load
	useEffect(() => {
		getRandQuote();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<Grid container spacing={0} sx={{ minHeight: "5rem", backgroundColor: "null" }}>
				{/* Hold the section header text */}
				<SectionHeader header='Quotes' subheader='' description='' />

				{/* Hold the quote in a div that when clicked will refresh the quote */}
				<Grid
					item
					xs={12}
					sx={{ mb: 1, backgroundColor: "null", cursor: "pointer", textAlign: "center", padding: 0 }}
					onClick={getRandQuote}>
					<Typography
						variant='h3'
						component='div'
						sx={{ textAlign: "center", fontStyle: "italic", fontWeight: "normal", minHeight: "6rem", padding: 0, margin: 0 }}>
						<p>&quot;{QuoteToDisplay.quote}&quot;</p>
					</Typography>
					<Typography variant='caption' component='div' sx={{ textAlign: "right" }}>
						<p>{QuoteToDisplay.author}</p>
					</Typography>
					<CachedIcon />
				</Grid>
			</Grid>
		</Container>
	);
}
