import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Typography, Link } from '@mui/material';
import ThemingS from 'services/ThemingS';
import useMediaQuery from '@mui/material/useMediaQuery';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Style
const FooterWrapper = styled('div')(({ theme }) => ({
  marginTop: '20px',
  padding: '20px 0',
  borderRadius: '8px',
  color: '#fff',
  background: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));

const FooterLink = styled(Link)({
  color: '#fff',
  borderRadius: '8px',
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none !important',
  opacity: '0.8',
  '& svg': {
    fontsize: '1.125rem',
    marginRight: 8
  },
  '&:hover': {
    opacity: '1'
  }
});

const InfoPageFooter = () => {
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <FooterWrapper>
        <Container>
          <Grid container alignItems="center" spacing={ThemingS.themeConfig.gridSpacing}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h4" component="div" color="inherit">
                &#169; bangsluke
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Grid
                container
                alignItems="center"
                spacing={2}
                sx={{ justifyContent: 'flex-end', [theme.breakpoints.down('md')]: { justifyContent: 'center' } }}
              >
                <Grid item>
                  <FooterLink href="https://www.stokebynayland.com/" target="_blank" underline="hover">
                    <LanguageIcon fontSize={showText ? 'large' : 'small'} />
                    {showText ? 'Website' : null}
                  </FooterLink>
                </Grid>
                <Grid item>
                  <FooterLink href="https://www.facebook.com/SbNResort" target="_blank" underline="hover">
                    <FacebookIcon fontSize={showText ? 'large' : 'small'} />
                    {showText ? 'Facebook' : null}
                  </FooterLink>
                </Grid>
                <Grid item>
                  <FooterLink href="https://twitter.com/SbNResort" target="_blank" underline="hover">
                    <TwitterIcon fontSize={showText ? 'large' : 'small'} />
                    {showText ? 'Twitter' : null}
                  </FooterLink>
                </Grid>
                <Grid item>
                  <FooterLink href="https://www.instagram.com/SbNResort/" target="_blank" underline="hover">
                    <InstagramIcon fontSize={showText ? 'large' : 'small'} />
                    {showText ? 'Instagram' : null}
                  </FooterLink>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </FooterWrapper>
    </>
  );
};

export default InfoPageFooter;
