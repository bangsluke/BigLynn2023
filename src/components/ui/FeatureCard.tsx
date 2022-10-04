import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import FadeInWhenVisible from 'components/ui/Animation';
import SubCard from 'components/ui/SubCard';
import Avatar from 'components/ui/Avatar';
import InstagramIcon from '@mui/icons-material/Instagram';

const FeatureCard = (props: { id: number; title: string; description: string }) => {
  const { title, description } = props; // Destructure props
  const theme = useTheme();

  return (
    <Grid item md={4} sm={6}>
      <FadeInWhenVisible>
        <SubCard sx={{ minHeight: '16rem' }}>
          <Grid container justifyContent="center" spacing={2}>
            {/* Feature icon */}
            <Grid item>
              <Avatar
                size="xl"
                variant="rounded"
                sx={{
                  background: theme.palette.primary.light,
                  color: theme.palette.primary.main
                }}
              >
                <InstagramIcon fontSize="large" />
              </Avatar>
            </Grid>
            {/* Feature title */}
            <Grid item xs={12}>
              <Typography variant="h3">{title}</Typography>
            </Grid>
            {/* Feature description */}
            <Grid item xs={12}>
              <Typography variant="body2">{description}</Typography>
            </Grid>
          </Grid>
        </SubCard>
      </FadeInWhenVisible>
    </Grid>
  );
};

export default FeatureCard;
