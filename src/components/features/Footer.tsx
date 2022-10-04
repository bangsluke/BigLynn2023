import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';
import ThemingS from 'services/ThemingS';
import SocialMediaInfo from 'data/SocialMediaInfo';
import SocialMediaCard from 'components/ui/SocialMediaCard';

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

const InfoPageFooter = () => {
  const theme = useTheme();

  // Sort the social media links by the id property - https://www.w3schools.com/jsref/jsref_sort.asp & https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
  const sortedLinks: SocialMediaInfoType[] = SocialMediaInfo.sort(function (a, b) {
    return a.id - b.id;
  });

  // Map over the social media links info to create all links.
  const socialMediaElements = sortedLinks.map((link) => {
    return <SocialMediaCard key={link.id} iconName={link.iconName} name={link.name} URL={link.URL} />;
  });

  return (
    <>
      <FooterWrapper>
        <Container>
          <Grid container alignItems="center" spacing={ThemingS.themeConfig.gridSpacing}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle2" component="div" color="inherit">
                &#169; RLE International
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Grid
                container
                alignItems="center"
                spacing={2}
                sx={{ justifyContent: 'flex-end', [theme.breakpoints.down('md')]: { justifyContent: 'center' } }}
              >
                {socialMediaElements}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </FooterWrapper>
    </>
  );
};

export default InfoPageFooter;
