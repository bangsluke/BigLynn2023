import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FadeInWhenVisible from 'components/ui/Animation';
import Avatar from 'components/ui/Avatar';
import SubCard from 'components/ui/SubCard';
import useIcons from 'hooks/useIcons';

const LinkCard = (props: { id: number; iconName: string; title: string; description: string; linkURL: string }) => {
  const { iconName, title, description, linkURL } = props; // Destructure props
  const theme = useTheme();

  // Console.log(linkURL);

  // Dynamically import the MUI Icon - https://stackoverflow.com/a/66828783
  const MUIIcon = useIcons(iconName);

  return (
    <Grid item md={4} sm={6}>
      <FadeInWhenVisible>
        <a target="_blank" href={linkURL} rel="noopener noreferrer">
          <SubCard sx={{ minHeight: '16rem' }}>
            <Grid container justifyContent="center" spacing={2}>
              {/* Link icon */}
              <Grid item>
                <Avatar
                  size="xl"
                  variant="rounded"
                  sx={{
                    background: theme.palette.primary.light,
                    color: theme.palette.primary.main
                  }}
                >
                  <MUIIcon fontSize="large" />
                </Avatar>
              </Grid>
              {/* Link title */}
              <Grid item xs={12}>
                <Typography variant="h3">{title}</Typography>
              </Grid>
              {/* Link description */}
              <Grid item xs={12}>
                <Typography variant="body2">{description}</Typography>
              </Grid>
            </Grid>
          </SubCard>
        </a>
      </FadeInWhenVisible>
    </Grid>
  );
};

export default LinkCard;
