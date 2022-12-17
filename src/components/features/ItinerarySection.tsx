import { Container, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import ThemingS from 'services/ThemingS';

export default function ItinerarySection() {
	useEffect(() => {
		AOS.init({ duration: 1200 });
		AOS.refresh();
	}, []);

	return (
		<Container>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing}>
				{/* Hold the section header text */}
				<Grid item xs={12} lg={5} md={10}>
					<Grid container spacing={2} sx={{ mb: 0 }}>
						<Grid item xs={12}>
							<Grid container spacing={1}>
								<Grid item>
									<Typography variant='h5' color='primary'>
                    Itinerary
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='h2' component='div'>
                What? When? Where?
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='body2'>The planned rounds of golf and key timings</Typography>
						</Grid>
					</Grid>
				</Grid>
				{/* Hold the body information */}
				<Grid item xs={12} sx={{ height: '400px', mb: 0 }}>
					<Typography variant='body1' component='div'>
            Itinerary text - 2 nights&#39; dinner, bed & breakfast at the Stoke by Nayland Hotel, Golf & Spa and 3 rounds of golf (2 on
            Gainsborough Course, 1 on Constable Course)
						<ul data-aos='fade-in' data-aos-duration='3000' data-aos-delay='50'>
              • At 12:40 18 holes on Gainsborough Course (Sat 15 Jul 2023)
						</ul>
						<ul data-aos='fade-in' data-aos-duration='3000' data-aos-delay='100'>
              • From 15:00 Check-in at Stoke by Nayland Hotel, Golf & Spa for 2 nights (Golf Deluxe Twin room) (Sat 15 Jul 2023){' '}
						</ul>
						<ul data-aos='fade-in' data-aos-duration='3000' data-aos-delay='150'>
              • At 20:00 Dinner at The Restaurant, standard menu (Sat 15 Jul 2023){' '}
						</ul>
						<ul data-aos='fade-in' data-aos-duration='3000' data-aos-delay='200'>
              • At 12:40 18 holes on Constable Course (Sun 16 Jul 2023)
						</ul>
						<ul data-aos='fade-in' data-aos-duration='3000' data-aos-delay='250'>
              • At 20:00 Dinner at The Restaurant, standard menu (Sun 16 Jul 2023){' '}
						</ul>
						<ul data-aos='fade-in' data-aos-duration='3000' data-aos-delay='300'>
              • At 10:40 18 holes on Gainsborough Course (Mon 17 Jul 2023){' '}
						</ul>
						<ul data-aos='fade-in' data-aos-duration='3000' data-aos-delay='350'>
              • By 11:00 Check-out of Stoke by Nayland Hotel, Golf & Spa (Mon 17 Jul 2023)
						</ul>
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
}
