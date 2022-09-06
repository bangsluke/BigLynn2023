// Material-ui
import { Grid, Slider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

// Project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

const sliderMarksDuration = [
  {
    value: 0,
    label: 'Longest'
  },
  {
    value: 1,
    label: ''
  },
  {
    value: 2,
    label: ''
  },
  {
    value: 3,
    label: ''
  },
  {
    value: 4,
    label: ''
  },
  {
    value: 5,
    label: ''
  },
  {
    value: 6,
    label: ''
  },
  {
    value: 7,
    label: ''
  },
  {
    value: 8,
    label: ''
  },
  {
    value: 9,
    label: ''
  },
  {
    value: 10,
    label: 'Shortest'
  }
];
const sliderMarksResources = [
  {
    value: 0,
    label: 'Most'
  },
  {
    value: 1,
    label: ''
  },
  {
    value: 2,
    label: ''
  },
  {
    value: 3,
    label: ''
  },
  {
    value: 4,
    label: ''
  },
  {
    value: 5,
    label: ''
  },
  {
    value: 6,
    label: ''
  },
  {
    value: 7,
    label: ''
  },
  {
    value: 8,
    label: ''
  },
  {
    value: 9,
    label: ''
  },
  {
    value: 10,
    label: 'Fewest'
  }
];
const sliderMarksRisk = [
  {
    value: 0,
    label: 'Most'
  },
  {
    value: 1,
    label: ''
  },
  {
    value: 2,
    label: ''
  },
  {
    value: 3,
    label: ''
  },
  {
    value: 4,
    label: ''
  },
  {
    value: 5,
    label: ''
  },
  {
    value: 6,
    label: ''
  },
  {
    value: 7,
    label: ''
  },
  {
    value: 8,
    label: ''
  },
  {
    value: 9,
    label: ''
  },
  {
    value: 10,
    label: 'Least'
  }
];

/* eslint-disable no-unused-vars */
const PreferenceSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : theme.palette.primary,
  height: 5,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20
    // BackgroundColor: '#fff'
    // BoxShadow: iOSBoxShadow,
    // '&:focus, &:hover, &.Mui-active': {
    //     BoxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
    //     // Reset on touch devices, it doesn't add specificity
    //     '@media (hover: none)': {
    //         BoxShadow: iOSBoxShadow
    //     }
    // }
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 14,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none'
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000'
    }
  },
  '& .MuiSlider-track': {
    // Border: 'none'
  },
  '& .MuiSlider-rail': {
    // Opacity: 0.5,
    // BackgroundColor: '#bfbfbf'
  },
  '& .MuiSlider-mark': {
    // BackgroundColor: '#bfbfbf',
    // Height: 8,
    // Width: 1,
    // '&.MuiSlider-markActive': {
    //     Opacity: 1,
    //     BackgroundColor: 'currentColor'
    // }
  },
  '& .MuiSlider-markLabel': {
    fontSize: 12,
    fontWeight: 'normal'
  }
}));

const PreferenceSlidersCard = () => {
  const theme = useTheme();
  return (
    <MainCard
      title="Preference Sliders"
      sx={{
        background:
          theme.palette.mode === 'dark'
            ? `linear-gradient(210.04deg, ${theme.palette.secondary.dark} -50.94%, rgba(144, 202, 249, 0) 95.49%)`
            : theme.palette.primary[200],
        color: '#000',
        minHeight: '15rem',
        maxHeight: '15rem',
        padding: '0rem 1rem'
      }}
    >
      <Grid container spacing={gridSpacing}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={3}>
            <Typography id="input-slider">Duration</Typography>
          </Grid>
          <Grid item xs={8}>
            <PreferenceSlider
              defaultValue={7}
              // DefaultValue={props.value}
              step={1}
              min={0}
              max={10}
              marks={sliderMarksDuration}
              color="primary"
              name="durationSlider"
              // OnChange={onChange}
              // GetAriaValueText={valuetext}
              valueLabelDisplay="auto"
              // ValueLabelDisplay="on"
            />
          </Grid>
        </Grid>

        <Grid container spacing={gridSpacing}>
          <Grid item xs={3}>
            <Typography id="input-slider">Resources</Typography>
          </Grid>
          <Grid item xs={8}>
            <PreferenceSlider
              defaultValue={3}
              // DefaultValue={props.value}
              step={1}
              min={0}
              max={10}
              marks={sliderMarksResources}
              color="primary"
              name="resourceSlider"
              // OnChange={onChange}
              // GetAriaValueText={valuetext}
              valueLabelDisplay="auto"
              // ValueLabelDisplay="on"
            />
          </Grid>
        </Grid>

        <Grid container spacing={gridSpacing}>
          <Grid item xs={3}>
            <Typography id="input-slider">Risk</Typography>
          </Grid>
          <Grid item xs={8}>
            <PreferenceSlider
              defaultValue={5}
              // DefaultValue={props.value}
              step={1}
              min={0}
              max={10}
              marks={sliderMarksRisk}
              color="primary"
              name="riskSlider"
              // OnChange={onChange}
              // GetAriaValueText={valuetext}
              valueLabelDisplay="auto"
              // ValueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default PreferenceSlidersCard;
