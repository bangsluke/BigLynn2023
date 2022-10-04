import { useTheme, styled } from '@mui/material/styles';
import { Link, Box, Button, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ThemingS from 'services/ThemingS';

// Styles
const HeaderImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  borderRadius: '20px',
  filter: 'drop-shadow(0px 0px 50px rgb(194 76 46 / 30%))',
  transform: 'scale(0.8) translate(0px, -80px)',
  transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%',
  [theme.breakpoints.down('lg')]: {
    transform: 'scale(0.7)'
  }
}));

const HeaderAnimationImage = styled('img')({
  maxWidth: '100%',
  filter: 'drop-shadow(0px 0px 50px rgb(194 76 46 / 30%))',
  transform: 'scaleX(-1) scale(0.8)'
});

const InfoPageHeaderSection = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={ThemingS.themeConfig.gridSpacing}
        sx={{ mt: { xs: 10, sm: 6, md: 10 }, mb: { xs: 2.5, md: 10 }, backgroundColor: 'null' }}
      >
        {/* Hold the header text */}
        <Grid item xs={12} md={5} sx={{ backgroundColor: 'null' }}>
          <Grid
            container
            spacing={ThemingS.themeConfig.gridSpacing}
            sx={{ pr: 10, [theme.breakpoints.down('lg')]: { pr: 0, textAlign: 'center' } }}
          >
            {/* Hold the main bold text */}
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.25rem', sm: '3rem', md: '4rem' },
                    fontWeight: 900,
                    lineHeight: 1.2,
                    textAlign: 'left'
                  }}
                >
                  Main Header Text
                  <Box component="span" sx={{ ml: 2, color: theme.palette.primary.main }}>
                    Hello
                  </Box>
                </Typography>
              </motion.div>
            </Grid>
            {/* Hold the summary text */}
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  color="inherit"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    fontWeight: 400,
                    lineHeight: 1.4,
                    textAlign: 'left'
                  }}
                >
                  Header Description
                </Typography>
              </motion.div>
            </Grid>
            {/* Hold the two option buttons below the text */}
            <Grid item xs={12} sx={{ my: 3.25 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Grid item>
                    <Button component={Link} href="/landing" target="_blank" size="large" variant="contained" color="secondary">
                      Click here
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={Link} href="mailto:luke.bangs@rle.co.uk" target="_blank" size="large" variant="text">
                      Contact Us
                    </Button>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
        {/* Hold the header images */}
        <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box sx={{ position: 'relative', mt: 8.75 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 0.6
              }}
            >
              <HeaderImage src={'/static/info_page_car.png'} alt="Car by Freepik" />
            </motion.div>
            <Box
              sx={{
                position: 'absolute',
                top: '-110px',
                right: theme.direction === 'rtl' ? '170px' : '-170px',
                width: '290px',
                animation: '10s slideY linear infinite'
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.8
                }}
              >
                <HeaderAnimationImage src={'/static/info_page_sports-car.png'} alt="Sport car by Freepik" />
              </motion.div>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: -90,
                left: 300,
                width: 280,
                animation: '10s slideY linear infinite',
                animationDelay: '2s'
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 1
                }}
              >
                <HeaderAnimationImage src={'/static/info_page_hatchback.png'} alt="Hatchback by Freepik" />
              </motion.div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InfoPageHeaderSection;
