import { useTheme } from '@mui/material/styles';
import { Button, Card, Grid, Typography, Link } from '@mui/material';
import Avatar from 'components/ui/Avatar';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ThemingS from 'services/ThemingS';

// Const avatarImage = "/assets/images/users";

const ContactCard = (props: {
  id: number;
  imagePath: string;
  contactNumber: string;
  email: string;
  name: string;
  location: string;
  role: string;
}) => {
  const theme = useTheme();

  // Const avatarProfile = avatar && `${avatarImage}/${avatar}`;
  // Const [anchorEl, setAnchorEl] = useState<Element | ((element: Element) => Element) | null | undefined>(null);
  // Const handleClick = (event: React.MouseEvent<SVGSVGElement> | undefined) => {
  // 	SetAnchorEl(event?.currentTarget);
  // };
  // Const handleClose = () => {
  // 	SetAnchorEl(null);
  // };

  return (
    <Card
      sx={{
        p: 2,
        bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
        border: theme.palette.mode === 'dark' ? 'none' : '1px solid',
        borderColor: theme.palette.grey[100]
      }}
    >
      <Grid container spacing={ThemingS.themeConfig.gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={ThemingS.themeConfig.gridSpacing}>
            <Grid
              item
              xs
              zeroMinWidth
              // OnClick={() => {
              // 	If (onActive) onActive();
              // }}
              style={{ cursor: 'pointer' }}
            >
              {/* <Avatar alt={name} size='lg' src={avatarProfile} sx={{ width: 72, height: 72 }} /> */}
              {/* <Avatar alt={name} size="lg" src={imagePath} sx={{ width: 72, height: 72 }} /> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" component="div" textAlign="left">
            {name}
          </Typography>
          <Typography variant="subtitle2" textAlign="left">
            {/* {role} */}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" textAlign="left">
            Email
          </Typography>
          <Typography variant="h6" textAlign="left">
            {/* {email} */}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={ThemingS.themeConfig.gridSpacing}>
            <Grid item xs={6}>
              <Typography variant="subtitle2" textAlign="left">
                Phone
              </Typography>
              <Typography variant="h6" textAlign="left">
                {/* {contactNumber} */}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" textAlign="left">
                Location
              </Typography>
              <Typography variant="h6" textAlign="left">
                {/* {location} */}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                sx={{ width: '100%' }}
                startIcon={<AlternateEmailIcon />}
                component={Link}
                href="mailto:luke.bangs@rle.co.uk"
                target="_blank"
              >
                Contact
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ContactCard;
