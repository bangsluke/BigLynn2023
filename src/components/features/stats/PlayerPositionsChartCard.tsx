import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconBrandFacebook, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons';
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
  yaxis: {
    min: 1,
    max: 10,
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
      data: [2, 0, 2, 3, 2, 4, 6, 0, 1, 2, 5, 1, 4, 1, 2, 1, 1, 1, 0, 6, 0, 0, 10]
    },
    {
      name: 'Ben',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8]
    },
    {
      name: 'Bill',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8]
    },
    {
      name: 'Dan',
      data: [5, 0, 5, 2, 4, 3, 1, 3, 4, 5, 2, 2, 6, 2, 5, 4, 5, 2, 3, 1, 0, 5, 3]
    },
    {
      name: 'Danny',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7]
    },
    {
      name: 'Dave',
      data: [4, 0, 3, 1, 5, 2, 4, 2, 3, 1, 4, 6, 3, 5, 3, 5, 3, 3, 2, 5, 0, 7, 5]
    },
    {
      name: 'Gavin',
      data: [7, 0, 0, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Keith',
      data: [3, 0, 1, 4, 6, 5, 3, 1, 2, 4, 2, 3, 5, 2, 5, 3, 4, 4, 6, 7, 0, 1, 2]
    },
    {
      name: 'Luke',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1]
    },
    {
      name: 'Mark',
      data: [5, 0, 5, 2, 4, 3, 1, 3, 4, 5, 2, 2, 6, 2, 5, 4, 5, 2, 3, 1, 0, 5, 3]
    },
    {
      name: 'Martin',
      data: [5, 0, 5, 2, 4, 3, 1, 3, 4, 5, 2, 2, 6, 2, 5, 4, 5, 2, 3, 1, 0, 5, 3]
    },
    {
      name: 'Phil',
      data: [5, 0, 5, 2, 4, 3, 1, 3, 4, 5, 2, 2, 6, 2, 5, 4, 5, 2, 3, 1, 0, 5, 3]
    },
    {
      name: 'Rich',
      data: [5, 0, 5, 2, 4, 3, 1, 3, 4, 5, 2, 2, 6, 2, 5, 4, 5, 2, 3, 1, 0, 5, 3]
    },
    {
      name: 'Ross',
      data: [5, 0, 5, 2, 4, 3, 1, 3, 4, 5, 2, 2, 6, 2, 5, 4, 5, 2, 3, 1, 0, 5, 3]
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
        }}
      >
        <Grid container direction="column" spacing={3}>
          <Grid item container spacing={1} alignItems="center">
            <Grid item>
              <Typography variant="h3">Player Positions</Typography>
            </Grid>
            <Grid item xs zeroMinWidth />
            <Grid item>
              <TrendingDownIcon fontSize="large" color="error" />
            </Grid>
            <Grid item>
              <Typography variant="h3">27, 695.65</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ mt: -2.5, fontWeight: 400 }} color="inherit" variant="h5">
              Department wise monthly sales report
            </Typography>
          </Grid>
          <Grid item container justifyContent="space-around" alignItems="center" spacing={3}>
            <Grid item>
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
            </Grid>
            <Grid item>
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
            </Grid>
            <Grid item>
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
            </Grid>
            <Grid item xs zeroMinWidth />
          </Grid>
        </Grid>
      </Box>
      <ReactApexChart options={options} series={series} type="area" height={200} />
    </MainCard>
  );
};
export default PlayerPositionsChartCard;
