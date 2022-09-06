// Material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box } from '@mui/material';

// Project imports
import LogoSection from '../LogoSection';
// Import SearchSection from './SearchSection';
import MobileSection from './MobileSection';
import ProfileSection from './ProfileSection';
// Import LocalizationSection from './LocalizationSection';
// Import NotificationSection from './NotificationSection';
import { useDispatch, useSelector } from 'store';
import { openDrawer } from 'store/slices/menu';

// Assets
import { IconMenu2 } from '@tabler/icons';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state) => state.menu);

  return (
    <>
      {/* Logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
        <Avatar
          variant="rounded"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            overflow: 'hidden',
            transition: 'all .2s ease-in-out',
            background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
            color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.background.paper,
            '&:hover': {
              background: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
              color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.light
            }
          }}
          onClick={() => dispatch(openDrawer(!drawerOpen))}
          color="inherit"
        >
          <IconMenu2 stroke={1.5} size="20px" />
        </Avatar>
      </Box>

      {/* Header search */}
      {/* <SearchSection /> */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* Live customization & localization */}
      {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <LocalizationSection />
      </Box> */}

      {/* Notification & profile */}
      {/* <NotificationSection /> */}
      <ProfileSection />

      {/* Mobile header */}
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <MobileSection />
      </Box>
    </>
  );
};

export default Header;
