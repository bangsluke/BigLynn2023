import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import FadeInWhenVisible from "components/ui/Animation";
import SectionHeader from "components/ui/SectionHeader";
import Link from "next/link";
import ThemingS from "services/ThemingS";

// Styles
const QuestionWrapper = styled("p")(({ theme }) => ({
	fontWeight: 600,
	fontSize: "1.2rem",
	lineHeight: "1.2rem",
	textAlign: "left",
	minHeight: "2rem",
	maxWidth: "100%",
	width: "max-content",
	// BorderRadius: "20px",
	backgroundColor: "#49B9FB",
	padding: "8px 16px",
	borderRadius: "8px",
	color: "white",
	// MarginBottom: "50px",
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
	width: "max-content",
	float: "right",
	right: "0",
	borderRadius: "8px",
	backgroundColor: "#4FD73B",
	color: "white",
	// Display: "inline",
	padding: "8px 16px",
	// Border-radius: 8px;
	// MarginBottom: "50px",
	[theme.breakpoints.down("md")]: {
		fontSize: "0.9rem",
		minHeight: "1rem",
	},
}));

export default function FAQSection() {
	const Styles = {
		ChatBackground: {
			backgroundColor: "#f5f5f5",
			borderRadius: "20px",
			padding: "20px",
			margin: "20px",
		},
	};

	return (
		<Container>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing} sx={{ height: "max-content" }}>
				{/* Hold the section header text */}
				<SectionHeader
					header='FAQ'
					subheader='You still have questions?'
					description='A section dedicated to those who didn&#39;t read the above sections and of course &#39;Mr Question&#39; himself, Keith
								Joseph...'
				/>
				{/* Hold the body information */}
				<Grid item xs={12}>
					<Grid container spacing={2} sx={{ mb: 0 }}>
						<Grid item xs={12} sx={Styles.ChatBackground}>
							<FadeInWhenVisible>
								<QuestionWrapper>What&#39;s on the Menu?</QuestionWrapper>
							</FadeInWhenVisible>
							<FadeInWhenVisible>
								<AnswerWrapper>(Provide link to menu if available) here you go. I hear the salmon is particularly good…</AnswerWrapper>
							</FadeInWhenVisible>
							<FadeInWhenVisible>
								<QuestionWrapper>Will there be a sauna?</QuestionWrapper>
							</FadeInWhenVisible>
							<FadeInWhenVisible>
								<AnswerWrapper>
									No, unfortunately after the last conversations that occurred in it, HR stepped in and banned saunas
								</AnswerWrapper>
							</FadeInWhenVisible>
							<FadeInWhenVisible>
								<QuestionWrapper>How many times has Dave sworn at Big Lynn Events?</QuestionWrapper>
							</FadeInWhenVisible>
							<FadeInWhenVisible>
								<AnswerWrapper>If you mean the **** word, then Dave has said **** a total of 327 times.</AnswerWrapper>
							</FadeInWhenVisible>
							<FadeInWhenVisible>
								<AnswerWrapper>But if you mean ****, then Dave has said **** a total of 249 times.</AnswerWrapper>
							</FadeInWhenVisible>
							<FadeInWhenVisible>
								<AnswerWrapper>And don&#39;t get me started on the number of times he&#39;s said ****.</AnswerWrapper>
							</FadeInWhenVisible>
							<FadeInWhenVisible>
								<QuestionWrapper>Who can I complain to about Dave&#39;s language?</QuestionWrapper>
							</FadeInWhenVisible>
							<FadeInWhenVisible>
								<AnswerWrapper>
									Fortunately we&#39;ve been able to hire someone to deal with such issues. Please direct all concerns to them{" "}
									<Link href="mailto:david.rose@blueyonder.co.uk?subject=I'd Like To Complain About Your Language">here</Link>.
								</AnswerWrapper>
							</FadeInWhenVisible>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}
