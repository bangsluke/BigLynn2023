import { Container, Grid, Typography } from '@mui/material';
import PlayerPointsChartCard from 'components/features/stats/PlayerPointsChartCard';
import ThemingS from 'services/ThemingS';

export default function StatsSection() {
  return (
    <Container>
      <Grid container spacing={ThemingS.themeConfig.gridSpacing}>
        {/* Hold the section header text*/}
        <Grid item xs={12} lg={5} md={10}>
          <Grid container spacing={2} sx={{ mb: 0 }}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item>
                  <Typography variant="h5" color="primary">
                    Statistics
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" component="div">
                The Martin Bangs Collection
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">All the Big Lynn scores and stats since the birth of the competition</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between" spacing={ThemingS.themeConfig.gridSpacing}>
            {/* Show the test data as a table */}
            <Grid item lg={6} md={6} sm={12} xs={12}>
              {/* <TestDataCard /> */}
            </Grid>
            {/* Hold the Project Constraints, Bodystyle and Calculation Iterations cards */}
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Grid container direction="column" spacing={ThemingS.themeConfig.gridSpacing}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  {/* <TotalLineChartCard /> */}
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  {/* <BodystyleCard inputData={inputData} setInputData={setInputData} /> */}
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  {/* <CalculationIterationsCard /> */}
                </Grid>
              </Grid>
            </Grid>
            {/* Hold the Player Scores Chart section card */}
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <PlayerPointsChartCard />
            </Grid>
            {/* Hold the Player Positions Chart section card */}
            <Grid item lg={12} md={12} sm={12} xs={12}>
              {/* <PlayerPositionsChartCard /> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
