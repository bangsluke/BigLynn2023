import { Container, Grid, Typography } from '@mui/material';
import ThemingS from 'services/ThemingS';

export default function EventDetailsSection() {
  return (
    <Container>
      <Grid container spacing={ThemingS.themeConfig.gridSpacing}>
        {/* Hold the section header text */}
        <Grid item xs={12} lg={5} md={10}>
          <Grid container spacing={2} sx={{ mb: 0 }}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item>
                  <Typography variant="h5" color="primary">
                    Event Details
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" component="div">
                Big Lynn 2023
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">Everything you need to know about the competitions 27th year...</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Hold the body information */}
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ mb: 0 }}>
            <Grid item xs={12} sx={{ height: '400px' }}>
              Event Details text
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
