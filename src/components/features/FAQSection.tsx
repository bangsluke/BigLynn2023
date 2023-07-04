import { Container, Grid } from "@mui/material";
import SectionHeader from "components/ui/SectionHeader";
import Link from "next/link";
import ThemingS from "services/ThemingS";
import Message from "./faq/Message";

export default function FAQSection() {
	const Styles = {
		ChatBackground: {
			backgroundColor: "#f5f5f5",
			borderRadius: "20px",
			padding: "10px",
			margin: "10px",
			maxWidth: "85vw",
		},
	};

	// TODO: Fix the width of this section which is causing the horizontal scroll bar

	return (
		<Container sx={{ maxWidth: "90vw", backgroundColor: "null", overflow: "hidden" }}>
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
							<Message type='question'>
								<p>What&#39;s on the Menu?</p>
							</Message>
							<Message type='answer'>
								<p>
									<Link href='https://www.stokebynayland.com/wp-content/uploads/2023/06/Lakes-Dinner-Menu-JULY-23.pdf' passHref>
										<a target='_blank'>Here you go</a>
									</Link>
									. The menu may change daily. I hear the salmon is particularly good…
								</p>
							</Message>
						</Grid>

						<Grid item xs={12} sx={Styles.ChatBackground}>
							<Message type='question'>
								<p>Where can I buy more golf balls to replace the ones I will inevitably lose?</p>
							</Message>
							<Message type='answer'>
								<p>
									Luckily there is an{" "}
									<Link href='https://www.stokebynayland.com/golf/facilities/retail/' passHref>
										<a target='_blank'>on-site golf shop</a>
									</Link>{" "}
									for this very issue
								</p>
							</Message>
						</Grid>

						<Grid item xs={12} sx={Styles.ChatBackground}>
							<Message type='question'>
								<p>Will there be a private sauna?</p>
							</Message>
							<Message type='answer'>
								<p>No, unfortunately after the last conversations that occurred in one, HR stepped in and banned private saunas</p>
							</Message>
						</Grid>

						<Grid item xs={12} sx={Styles.ChatBackground}>
							<Message type='question'>
								<p>How many times has Dave sworn at Big Lynn Events?</p>
							</Message>
							<Message type='answer'>
								<p>If you mean the **** word, then Dave has said **** a total of 327 times.</p>
							</Message>

							<Message type='answer'>
								<p>But if you mean ****, then Dave has said **** a total of 249 times.</p>
							</Message>

							<Message type='answer'>
								<p>And don&#39;t get me started on the number of times he&#39;s said ****.</p>
							</Message>
						</Grid>

						<Grid item xs={12} sx={Styles.ChatBackground}>
							<Message type='question'>
								<p>Who can I complain to about Dave&#39;s language?</p>
							</Message>
							<Message type='answer'>
								<p>
									Fortunately we&#39;ve been able to hire someone to deal with such issues. Please direct all concerns to them{" "}
									<Link href="mailto:david.rose@blueyonder.co.uk?subject=I'd Like To Complain About Your Language You ****ing Prick">
										here
									</Link>
									.
								</p>
							</Message>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}
