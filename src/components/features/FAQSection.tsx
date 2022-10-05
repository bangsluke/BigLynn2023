import { Container, Grid, Typography } from '@mui/material';
import ThemingS from 'services/ThemingS';

export default function FAQSection() {
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
                    FAQ
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" component="div">
                You still have questions?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                A section dedicated to those who didn&#39;t read the above sections and of course &#39;Mr Question&#39; himself, Keith
                Joseph
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Hold the body information */}
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ mb: 0 }}>
            <Grid item xs={12} sx={{ height: '400px' }}>
              FAQ text
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
