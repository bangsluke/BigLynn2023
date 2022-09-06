import React, { useState } from 'react';

// Material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Typography, TextField, MenuItem } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// Project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
// Import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// Assets
import CommuteIcon from '@mui/icons-material/Commute';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.secondary.dark,
  minHeight: '15rem',
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  //   Style the forefront circle
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background:
      theme.palette.mode === 'dark'
        ? `linear-gradient(210.04deg, ${theme.palette.secondary.dark} -50.94%, rgba(144, 202, 249, 0) 95.49%)`
        : theme.palette.secondary[800],
    borderRadius: '50%',
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  //   Style the back circle
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background:
      theme.palette.mode === 'dark'
        ? `linear-gradient(140.9deg, ${theme.palette.secondary.dark} -14.02%, rgba(144, 202, 249, 0) 85.50%)`
        : theme.palette.secondary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

const Dropdown = styled(TextField)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : theme.palette.primary.main,
  width: '90%',
  marginTop: '20px',
  marginLeft: '5%',
  zIndex: 10
}));

const bodyStyles = [
  {
    value: '3Door',
    label: '3 Door'
  },
  {
    value: '4Door',
    label: '4 Door'
  },
  {
    value: '5Door',
    label: '5 Door'
  },
  {
    value: 'suv',
    label: 'SUV'
  }
];

const vehicleClasses = [
  {
    value: 'L',
    label: 'L'
  },
  {
    value: 'M',
    label: 'M'
  },
  {
    value: 'N',
    label: 'N'
  }
];

const markets = [
  {
    value: 'EU',
    label: 'EU'
  },
  {
    value: 'US',
    label: 'US'
  },
  {
    value: 'CN',
    label: 'CN'
  }
];

const VehicleSpecificationCard = () => {
  const theme = useTheme();

  const [bodyStyle, setBodyStyle] = useState('suv');
  const [vehicleClass, setVehicleClass] = useState('');
  const [market, setMarket] = useState('');

  const handleChangeBodystyle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBodyStyle(event.target.value);
  };

  const handleChangeVehicleClass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVehicleClass(event.target.value);
  };

  const handleChangeMarket = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMarket(event.target.value);
  };

  return (
    <>
      <CardWrapper border={false} content={false}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between" alignContent="center">
                  {/* Hold the calendar icon */}
                  <Grid item xs={2}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary[800],
                        mt: 1
                      }}
                    >
                      <CommuteIcon
                        sx={{
                          fontSize: '1rem',
                          fontWeight: 500,
                          height: 30,
                          width: 30,
                          color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.secondary[200]
                        }}
                      />
                      {/* <Image src={EventIcon} height={30} width={30} alt="Notification" /> */}
                    </Avatar>
                  </Grid>
                  {/* Hold the card title */}
                  <Grid item xs={10} sx={{ mb: 1.25, marginTop: '1rem' }}>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.secondary[200]
                      }}
                    >
                      Vehicle Specification
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              {/* Hold the dropdowns */}
              <Grid container spacing={gridSpacing}>
                {/* Select Bodystyle */}
                <Grid item xs={6}>
                  <Dropdown
                    id="outlined-select-bodystyle"
                    select
                    label="Select bodystyle"
                    value={bodyStyle}
                    onChange={handleChangeBodystyle}
                    size="small"
                    // HelperText="Please select your vehicle bodystyle"
                  >
                    {bodyStyles.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Dropdown>
                </Grid>

                {/* Vehicle Class */}
                <Grid item xs={6}>
                  <Dropdown
                    id="outlined-select-vehicleClass"
                    select
                    label="Select vehicle class"
                    value={vehicleClass}
                    onChange={handleChangeVehicleClass}
                    size="small"
                    helperText="Please select your vehicle class"
                  >
                    {vehicleClasses.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Dropdown>
                </Grid>

                {/* Market */}
                <Grid item xs={6}>
                  <Dropdown
                    id="outlined-select-market"
                    select
                    label="Select market"
                    value={market}
                    onChange={handleChangeMarket}
                    size="small"
                    helperText="Please select your vehicle class"
                  >
                    {markets.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Dropdown>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </LocalizationProvider>
      </CardWrapper>
    </>
  );
};

export default VehicleSpecificationCard;
