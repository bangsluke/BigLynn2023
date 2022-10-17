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
        <Grid item xs={12} sx={{ height: 'max-content', mb: 0 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ height: 'max-content' }}>
              Event Details text
            </Grid>

            {/* Map and Directions */}
            <Grid item xs={12} sx={{ height: 'max-content' }}>
              Map
              {/* Add an iframe holding a map to Chelmsford. */}
              <MapBoxWrapper data-mapbox sx={{ height: { xs: '20rem', sm: '25rem', md: '30rem' } }}>
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

            {/* Course Information */}
            <Grid item xs={12} sx={{ height: 'max-content' }}>
              Golf Course Detail
              <Typography variant="body1" component="div">
                Created in the early 70s both the Gainsborough and Constable golf courses are well-established amongst lakes and mature
                trees. The designs skilfully incorporate the inherent natural beauty of the land.
              </Typography>
            </Grid>

            <Grid item xs={12} sx={{ height: 'max-content' }}>
              <Typography variant="h3" component="div">
                Gainsborough
              </Typography>
              <Typography variant="h4" component="div">
                Description
              </Typography>
              <Typography variant="body1" component="div">
                The Gainsborough course measures over 7,000 yards with a Par of 71. The undulating terrain and four substantial lakes
                challenge the skills of golfers of all abilities. The 10th requires a drive and second shot over the same lake, when played
                from the back tee, and has been voted one of the most outstanding holes in East Anglia by the Professional Golf Association
                (PGA).
              </Typography>
              <Typography variant="h4" component="div">
                Course Facts
              </Typography>
              <Typography variant="body1" component="div">
                <ul>The amateur course record from the white tees is 63</ul>
                <ul>In competitions during 2017, the 10th hole has only recorded 4 birdies</ul>
                <ul>The 10th hole is the hardest on the course, with an average score score 5.77 for men and 6.64 for ladies</ul>
                <ul>The Gainsborough is 7,098 yards from the black tees and 6,321 yards from the white tees</ul>
              </Typography>
            </Grid>

            <Grid item xs={12} sx={{ height: 'max-content' }}>
              <Typography variant="h3" component="div">
                Constable
              </Typography>
              <Typography variant="h4" component="div">
                Description
              </Typography>
              <Typography variant="body1" component="div">
                The Constable course is also set amongst wooded plantations with several natural water hazards in peaceful countryside. It
                measures 6,544 yards with a Par of 72, and, as with the Gainsborough, the final hole presents a formidable drive over one of
                the large lakes, to a plateau green with the Sports Bar beckoning beyond.
              </Typography>
              <Typography variant="h4" component="div">
                Course Facts
              </Typography>
              <Typography variant="body1" component="div">
                <ul>The amateur course record from the white tees is 70</ul>
                <ul>In competitions during 2017, the 18th hole has only recorded 3 birdies</ul>
                <ul>
                  The 14th hole is the hardest for men with average score 5.27, and the 3rd hole is the hardest for ladies with an average
                  score of 6.14
                </ul>
                <ul>The Constable course is 6,477 yards from the white tees</ul>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
