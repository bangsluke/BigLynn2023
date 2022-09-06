// Material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, LinearProgress, Typography } from '@mui/material';

// Project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===========================|| WIDGET STATISTICS - PROJECT TASK CARD ||=========================== //

const DVPTaskCard = () => {
  const theme = useTheme();
  return (
    <MainCard sx={{ bgcolor: theme.palette.primary.light }}>
      <Grid container alignItems="center" spacing={gridSpacing}>
        {/* Total */}
        <Grid item xs={12} lg={3} sm={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" align="left">
                Total DVP Items
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" align="left">
                1,532
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Completed */}
        <Grid item xs={12} lg={3} sm={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" align="left">
                Completed DVP Items
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" align="left">
                120
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LinearProgress
                variant="determinate"
                value={8}
                sx={{
                  bgcolor: theme.palette.success.light,
                  '& .MuiLinearProgress-bar': { bgcolor: theme.palette.success.dark }
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Pending */}
        <Grid item xs={12} lg={3} sm={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" align="left">
                Pending DVP Items
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" align="left">
                1,005
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {/** Had wrong colour, colour is an enum not string */}
              <LinearProgress
                variant="determinate"
                value={66}
                sx={{
                  bgcolor: theme.palette.orange.light,
                  '& .MuiLinearProgress-bar': { bgcolor: theme.palette.orange.main }
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Issues */}
        <Grid item xs={12} lg={3} sm={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" align="left">
                Issue DVP Items
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" align="left">
                407
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LinearProgress
                variant="determinate"
                value={27}
                sx={{
                  bgcolor: theme.palette.error.light,
                  '& .MuiLinearProgress-bar': { bgcolor: theme.palette.error.main }
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default DVPTaskCard;
