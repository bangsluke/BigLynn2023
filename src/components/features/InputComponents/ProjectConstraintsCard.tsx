import React, { useState } from 'react';

// Material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Typography, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Project imports
import MainCard from 'ui-component/cards/MainCard';
// Import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// Assets
import EventIcon from '@mui/icons-material/Event';

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

const ProjectConstraintsCard = () => {
  const theme = useTheme();

  const [dateValue, setDateValue] = useState<string>('today');

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
                      <EventIcon
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
                      Project Constraints
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              {/* Hold the start date picker */}
              <Grid item xs={12}>
                <Grid item sx={{ marginTop: '2rem' }}>
                  <DatePicker
                    label="Pick project start date"
                    value={dateValue}
                    // OnChange={(newValue) => {
                    //   SetDateValue(newValue);
                    // }}
                    onChange={(newValue) => {
                      console.log('Changed');
                    }}
                    renderInput={(params) => <TextField {...params} helperText={params?.inputProps?.placeholder} sx={{ color: 'white' }} />}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </LocalizationProvider>
      </CardWrapper>
    </>
  );
};

export default ProjectConstraintsCard;
