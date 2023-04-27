import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MainCard from 'components/ui/MainCard';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Props as ChartProps } from 'react-apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const chartOptions: ChartProps = {
	chart: {
		height: 200,
		type: 'area',
		id: 'market-share-area-chart',
		toolbar: {
			show: false
		},
		zoom: {
			enabled: false
		},
		sparkline: {
			enabled: true
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: 2
	},
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.5,
			opacityTo: 0,
			stops: [0, 80, 100]
		}
	},
	legend: {
		show: false
	},
	xaxis: {
		labels: {
			show: true
		}
	},
	yaxis: {
		min: 0,
		max: 95,
		labels: {
			show: false
		}
	}
};

// ===========================|| DASHBOARD ANALYTICS - MARKET SHARE AREA CHART CARD ||=========================== //

const PlayerPositionsChartCard = () => {
	const theme = useTheme();

	const [series] = useState([
		{
			name: 'Andy',
			data: [69, 0, 60, 46, 50, 40, 18, 0, 85.5, 53, 38, 85, 48, 64, 48, 72.5, 85, 80, 0, 23, 0, 0, 16]
		},
		{
			name: 'Ben',
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35]
		},
		{
			name: 'Bill',
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		},
		{
			name: 'Dan',
			data: [21, 0, 34, 53, 35, 54, 59, 39, 33.5, 36, 50, 59, 20, 58, 10, 49.5, 40, 73, 47, 83, 0, 43, 59]
		},
		{
			name: 'Danny',
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36]
		},
		{
			name: 'Dave',
			data: [28, 0, 45, 64, 32, 57, 44, 47, 43.5, 54, 48, 45, 55, 37, 32, 39, 63, 58.5, 54, 41, 0, 23, 54]
		},
		{
			name: 'Gavin',
			data: [15, 0, 0, 27, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		},
		{
			name: 'Keith',
			data: [32, 0, 66, 36, 18, 26, 57, 68, 52.5, 44, 50, 51, 25, 58, 10, 50, 40.5, 52, 30, 16, 0, 83, 79]
		},
		{
			name: 'Luke',
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 80]
		},
		{
			name: 'Mark',
			data: [17, 0, 17, 29, 46, 21, 24, 18, 31.5, 17, 62, 48, 76, 32, 42, 36.5, 32.5, 21, 43, 62, 0, 26, 47]
		},
		{
			name: 'Martin',
			data: [72, 0, 39, 20, 56, 59, 58, 24, 26.5, 53, 31, 47, 63, 51, 20, 72.5, 68, 35.5, 47, 55, 0, 61.5, 30]
		},
		{
			name: 'Phil',
			data: [0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		},
		{
			name: 'Rich',
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36]
		},
		{
			name: 'Ross',
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 95, 50, 0, 51.5, 56]
		}
	]);

	const secondaryMain = theme.palette.secondary.main;
	const errorMain = theme.palette.error.main;
	const primaryDark = theme.palette.primary.dark;

	const [options, setOptions] = useState<ChartProps>(chartOptions);

	useEffect(() => {
		setOptions((prevState: any) => ({
			...prevState,
			colors: [secondaryMain, errorMain, primaryDark],
			tooltip: {
				theme: 'light'
			}
		}));
	}, [secondaryMain, errorMain, primaryDark]);

	return (
		<MainCard sx={{ '&>div': { p: 0, pb: '0px !important' } }}>
			<Box
				sx={{
					p: 3
				}}>
				<Grid container direction='column' spacing={3}>
					<Grid item container spacing={1} alignItems='center'>
						<Grid item>
							<Typography variant='h3'>Player Points</Typography>
						</Grid>
						<Grid item xs zeroMinWidth />
						{/* <Grid item>
              <TrendingDownIcon fontSize="large" color="error" />
            </Grid>
            <Grid item>
              <Typography variant="h3">27, 695.65</Typography>
            </Grid> */}
					</Grid>
					<Grid item xs={12}>
						<Typography sx={{ mt: -2.5, fontWeight: 400 }} color='inherit' variant='h5'>
              Championship points scored per year
						</Typography>
					</Grid>
					<Grid item container justifyContent='space-around' alignItems='center' spacing={3}>
						{/* <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Typography
                    sx={{
                      width: 40,
                      height: 40,
                      color: theme.palette.secondary.main,
                      borderRadius: '12px',
                      padding: 1,
                      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.secondary.light
                    }}
                  >
                    <IconBrandFacebook stroke={1.5} />
                  </Typography>
                </Grid>
                <Grid item sm zeroMinWidth>
                  <Typography variant="h4">+45.36%</Typography>
                </Grid>
              </Grid>
            </Grid> */}
						{/* <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Typography
                    sx={{
                      width: 40,
                      height: 40,
                      color: theme.palette.primary.main,
                      borderRadius: '12px',
                      padding: 1,
                      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.light
                    }}
                  >
                    <IconBrandTwitter stroke={1.5} />
                  </Typography>
                </Grid>
                <Grid item sm zeroMinWidth>
                  <Typography variant="h4">- 50.69%</Typography>
                </Grid>
              </Grid>
            </Grid> */}
						{/* <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Typography
                    sx={{
                      width: 40,
                      height: 40,
                      color: theme.palette.error.main,
                      borderRadius: '12px',
                      padding: 1,
                      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#ffe9e9'
                    }}
                  >
                    <IconBrandYoutube stroke={2} />
                  </Typography>
                </Grid>
                <Grid item sm zeroMinWidth>
                  <Typography variant="h4">+ 16.85%</Typography>
                </Grid>
              </Grid>
            </Grid> */}
						<Grid item xs zeroMinWidth />
					</Grid>
				</Grid>
			</Box>
			<ReactApexChart options={options} series={series} type='area' height={200} />
		</MainCard>
	);
};
export default PlayerPositionsChartCard;
