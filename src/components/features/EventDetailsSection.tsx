import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ThemingS from 'services/ThemingS';

// Styles
const MapBoxWrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  height: '600px',
  width: '100%',
  borderRadius: '16px',
  marginBottom: '30px',
  border: '1px solid var(--jet)',
  overflow: 'hidden'
}));

export default function EventDetailsSection() {
  return (
    <Container>
      <Grid container spacing={ThemingS.themeConfig.gridSpacing} sx={{ height: 'max-content' }}>
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

            <Grid item xs={12} sx={{ height: 'max-content' }}>
              Map
              {/* Add an iframe holding a map to Chelmsford. */}
              <MapBoxWrapper data-mapbox>
                <figure style={{ height: '100%' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.5011337624255!2d0.8636819159960039!3d51.997745682552775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d900b5862e7357%3A0xad04129065912290!2sStoke%20by%20Nayland%20Resort!5e0!3m2!1sen!2suk!4v1665517714971!5m2!1sen!2suk"
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                    width="900"
                    height="600"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', border: 'none', filter: 'grayscale(1) invert(1)' }}
                  ></iframe>
                </figure>
              </MapBoxWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
