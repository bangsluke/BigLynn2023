// Material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography, useMediaQuery, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { gridSpacing } from 'store/constant';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

const ValidationLevelCard = () => {
  const theme = useTheme();
  const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        background:
          theme.palette.mode === 'dark'
            ? `linear-gradient(210.04deg, ${theme.palette.secondary.dark} -50.94%, rgba(144, 202, 249, 0) 95.49%)`
            : theme.palette.secondary[200],
        position: 'relative',
        color: '#000',
        minHeight: '15rem'
      }}
    >
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            position: 'absolute',
            right: 13,
            top: 14,
            color: '#fff',
            '&> svg': { width: 100, height: 100, opacity: '0.5' },
            [theme.breakpoints.down('sm')]: {
              top: 13,
              '&> svg': { width: 80, height: 80 }
            }
          }}
        >
          {/* {primaryIcon} */}
          <SettingsInputComponentIcon />
        </Typography>
        <Grid container direction={matchDownXs ? 'column' : 'row'} spacing={gridSpacing}>
          <Grid item xs={12}>
            <Typography variant="h5" color="inherit">
              Validation Level
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl
              sx={{
                color: '#fff'
              }}
            >
              <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="product" name="radio-buttons-group">
                <FormControlLabel value="program" control={<Radio />} label="Program" disabled />
                <FormControlLabel value="product" control={<Radio />} label="Product" />
                <FormControlLabel value="system" control={<Radio />} label="System" disabled />
                <FormControlLabel value="component" control={<Radio />} label="Component" disabled />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ValidationLevelCard;
