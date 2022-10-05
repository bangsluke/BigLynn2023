import { Container, Grid, Typography } from '@mui/material';
import ThemingS from 'services/ThemingS';

export default function UsefulLinksSection() {
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
                    Useful Links
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" component="div">
                Links to other places
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">For further reading if this site still hasn&#39;t given you everything</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Hold the body information */}
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ mb: 0 }}>
            <Grid item xs={12} sx={{ height: '400px' }}>
              Useful links
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
