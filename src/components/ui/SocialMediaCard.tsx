import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, Link } from '@mui/material';
import useIcons from 'hooks/useIcons';

// Style
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

const SocialMediaCard = (props: { iconName: string; name: string; URL: string }) => {
  const { iconName, name, URL } = props; // Destructure props
  const theme = useTheme();

  const showText = useMediaQuery(theme.breakpoints.up('md'));

  // Dynamically import the MUI Icon - https://stackoverflow.com/a/66828783
  const MUIIcon = useIcons(iconName);
  // Console.log(MUIIcon);

  return (
    <Grid item>
      <FooterLink href={URL} target="_blank" underline="hover">
        <MUIIcon fontSize={showText ? 'large' : 'small'} />
        {showText ? name : null}
      </FooterLink>
    </Grid>
  );
};

export default SocialMediaCard;
