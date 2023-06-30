import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import Error404Image from "../../public/images/404Image.png";
import ThemingS from "../services/ThemingS";

const FullScreenWrapper = styled(`main`)(() => ({
	// backgroundColor: "blue",
	width: "100%",
	height: "calc(100vh - 100px)",
	display: "flex",
	alignItems: "center",
	alignContent: "center",
}));

const LandingPageContainer = styled(`div`)(() => ({
	// backgroundColor: "red",
	position: "relative",
	margin: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "0px",
	gap: "20px",
	width: "200px",
	height: "max-content",
}));

// https://nextjs.org/docs/advanced-features/custom-error-page
export default function Custom404Page() {
	const router = useRouter();
	return (
		<>
			<FullScreenWrapper>
				<LandingPageContainer>
					<Image src={Error404Image} alt='Big Lynn Error Logo' width='200' height='200' layout='fixed' priority />
					<h2 style={{ fontWeight: 600, fontSize: 18 }}>404 - Page Not Found</h2>
					<div
						style={{
							backgroundColor: ThemingS.COLORS.main,
							color: ThemingS.COLORS.white,
							margin: "3rem auto 0rem auto",
							padding: "0.3rem 1.5rem",
							lineHeight: "0.5",
							borderRadius: "0.5rem",
							cursor: "pointer",
						}}
						onClick={() => router.back()} // Go back to the last visited page
					>
						<h4>Click here to go back</h4>
					</div>
				</LandingPageContainer>
			</FullScreenWrapper>
		</>
	);
}
