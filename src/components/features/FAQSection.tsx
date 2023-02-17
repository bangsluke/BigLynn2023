import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import ThemingS from "services/ThemingS";

// Styles
const QuestionWrapper = styled("p")(({ theme }) => ({
	fontWeight: 600,
	fontSize: "1.2rem",
	lineHeight: "1.2rem",
	textAlign: "right",
	minHeight: "2rem",
	maxWidth: "100%",
	borderRadius: "20px",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.1rem",
		minHeight: "1rem",
		lineHeight: "1rem",
	},
}));

const AnswerWrapper = styled("p")(({ theme }) => ({
	fontWeight: 200,
	fontSize: "1.1rem",
	fontStyle: "italic",
	textAlign: "right",
	minHeight: "2rem",
	maxWidth: "100%",
	borderRadius: "20px",
	// MarginBottom: "50px",
	[theme.breakpoints.down("md")]: {
		fontSize: "0.9rem",
		minHeight: "1rem",
	},
}));

export default function FAQSection() {
	return (
		<Container>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing} sx={{ height: "max-content" }}>
				{/* Hold the section header text */}
				<Grid item xs={12} lg={8} md={10}>
					<Grid container spacing={2} sx={{ mb: 0 }}>
						<Grid item xs={12}>
							<Grid container spacing={1}>
								<Grid item>
									<Typography variant='h5' color='primary'>
										FAQ
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='h2' component='div'>
								You still have questions?
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='body2'>
								A section dedicated to those who didn&#39;t read the above sections and of course &#39;Mr Question&#39; himself, Keith
								Joseph...
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				{/* Hold the body information */}
				<Grid item xs={12}>
					<Grid container spacing={2} sx={{ mb: 0 }}>
						<Grid item xs={12}>
							<QuestionWrapper>What&#39;s on the Menu?</QuestionWrapper>
							<AnswerWrapper>(Provide link to menu if available) here you go. I hear the salmon is particularly good…</AnswerWrapper>
							<br />
							<QuestionWrapper>Will there be a sauna?</QuestionWrapper>
							<AnswerWrapper>
								No, unfortunately after the last conversations that occurred in it, HR stepped in and banned saunas
							</AnswerWrapper>
							<br />
							<QuestionWrapper>How many times has Dave sworn at Big Lynn Events?</QuestionWrapper>
							<AnswerWrapper>If you mean the **** word, then Dave has said **** a total of 327 times.</AnswerWrapper>
							<AnswerWrapper>But if you mean ****, then Dave has said **** a total of 249 times.</AnswerWrapper>
							<AnswerWrapper>And don&#39;t get me started on the number of times he&#39;s said ****.</AnswerWrapper>
							<br />
							<QuestionWrapper>Who can I complain to about Dave&#39;s language?</QuestionWrapper>
							<AnswerWrapper>
								Fortunately we&#39;ve been able to hire someone to deal with such issues. Please direct all concerns to them{" "}
								<Link href="mailto:david.rose@blueyonder.co.uk?subject=I'd Like To Complain About Your Language">here</Link>.
							</AnswerWrapper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}
