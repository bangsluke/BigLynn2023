import { Container, Grid, Typography } from '@mui/material';
import ThemingS from 'services/ThemingS';

export default function RulesSection() {
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
                    Rules
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" component="div">
                Big Girls Blouse
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">The official rules and absurdities this group uses to play &#39;golf&#39;</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Hold the body information */}
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ mb: 0 }}>
            <Grid item xs={12} sx={{ height: '400px' }}>
              Rules text
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
