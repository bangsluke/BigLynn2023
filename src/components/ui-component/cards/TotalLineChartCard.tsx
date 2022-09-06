// Material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, Grid, Typography } from '@mui/material';

// Third party
import dynamic from 'next/dynamic';
// Import { Props as ChartProps } from 'react-apexcharts';

// Const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface TotalLineChartCardProps {
  bgColor?: string;
  // ChartData?: ChartProps;
  title: string;
  percentage: string;
  value: number;
}

// ============================|| TOTAL LINE CHART CARD ||============================ //

const TotalLineChartCard = ({ bgColor, title, percentage, value }: TotalLineChartCardProps) => {
  const theme = useTheme();

  return (
    <Card>
      <Box sx={{ color: '#fff', bgcolor: bgColor || theme.palette.primary.dark }}>
        <Box sx={{ p: 2.5 }}>
          <Grid container direction="column">
            <Grid item container justifyContent="space-between" alignItems="center">
              {value && (
                <Grid item>
                  <Typography variant="h3" color="inherit">
                    {value}
                  </Typography>
                </Grid>
              )}
              {percentage && (
                <Grid item>
                  <Typography variant="body2" color="inherit">
                    {percentage}
                  </Typography>
                </Grid>
              )}
            </Grid>
            {title && (
              <Grid item>
                <Typography variant="body2" color="inherit">
                  {title}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>
        {/* {chartData && (
          // <ReactApexChart
          //   options={chartData.options}
          //   series={chartData.series}
          //   type={chartData.options?.chart?.type}
          //   height={chartData.options?.chart?.height}
          // />
        )} */}
      </Box>
    </Card>
  );
};

export default TotalLineChartCard;
