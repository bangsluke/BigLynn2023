import { Container, Grid } from "@mui/material";
import SectionHeader from "components/ui/SectionHeader";
import Link from "next/link";
import ThemingS from "services/ThemingS";
import Answer from "./faq/Answer";
import Question from "./faq/Question";

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
							<Question>
								<p>What&#39;s on the Menu?</p>
							</Question>
							<Answer>
								<p>
									{/* TODO: Add a link to the menu */}
									<Link href="mailto:david.rose@blueyonder.co.uk?subject=I'd Like To Complain About Your Language">here</Link>. (Provide
									link to menu if available) here you go. I hear the salmon is particularly good…
								</p>
							</Answer>

							<Question>
								<p>Will there be a sauna?</p>
							</Question>
							<Answer>
								<p>No, unfortunately after the last conversations that occurred in it, HR stepped in and banned saunas</p>
							</Answer>

							<Question>
								<p>How many times has Dave sworn at Big Lynn Events?</p>
							</Question>
							<Answer>
								<p>If you mean the **** word, then Dave has said **** a total of 327 times.</p>
							</Answer>
							<Answer>
								<p>But if you mean ****, then Dave has said **** a total of 249 times.</p>
							</Answer>
							<Answer>
								<p>And don&#39;t get me started on the number of times he&#39;s said ****.</p>
							</Answer>

							<Question>
								<p>Who can I complain to about Dave&#39;s language?</p>
							</Question>
							<Answer>
								<p>
									Fortunately we&#39;ve been able to hire someone to deal with such issues. Please direct all concerns to them{" "}
									<Link href="mailto:david.rose@blueyonder.co.uk?subject=I'd Like To Complain About Your Language">here</Link>.
								</p>
							</Answer>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}
