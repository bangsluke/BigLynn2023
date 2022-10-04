import React, { ReactElement } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@mui/material';
import Logo from 'components/ui/Logo';
import { IconCalendarEvent, IconCheckupList, IconReportAnalytics, IconQuestionMark } from '@tabler/icons';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationInfo from 'data/NavigationInfo';

// Elevation scroll
interface ElevationScrollProps {
  children: ReactElement;
  window?: Window | Node;
}
function ElevationScroll({ children, window }: ElevationScrollProps) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window!
  });
  const darkBorder = theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200];

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    style: {
      backgroundColor: theme.palette.background.default,
      borderBottom: trigger ? 'none' : '1px solid',
      borderColor: trigger ? '' : darkBorder,
      color: theme.palette.text.dark
    }
  });
}

const InfoPageAppBar = ({ ...others }) => {
  const [drawerToggle, setDrawerToggle] = React.useState<boolean>(false);
  /** Method called on multiple components with different event types */
  const drawerToggler = (open: boolean) => (event: any) => {
    if (event.type! === 'keydown' && (event.key! === 'Tab' || event.key! === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  // Sort the navigation links by the id property - https://www.w3schools.com/jsref/jsref_sort.asp & https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
  const sortedNavLinks = NavigationInfo.sort(function (a, b) {
    return a.id - b.id;
  });

  // Map over the navigation links info to create all links.
  const navButtonElements = sortedNavLinks.map((link) => {
    return (
      <Button key={link.id} color="inherit" component={Link} href={`#${link.anchor}`}>
        {link.name}
      </Button>
    );
  });

  return (
    <ElevationScroll {...others}>
      <MuiAppBar>
        <Container>
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }} data-testid="app-bar-drawer">
              <Logo />
            </Typography>
            <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={2}>
              {navButtonElements}
              <Button component={Link} href="/landing" disableElevation variant="contained" color="secondary">
                Begin Browsing
              </Button>
            </Stack>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                {drawerToggle && (
                  <Box sx={{ width: 'auto' }} role="presentation" onClick={drawerToggler(false)} onKeyDown={drawerToggler(false)}>
                    <List>
                      <Link style={{ textDecoration: 'none' }} href="#eventDetails">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconCalendarEvent />
                          </ListItemIcon>
                          <ListItemText primary="Event Details" />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="#itinerary">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconCheckupList />
                          </ListItemIcon>
                          <ListItemText primary="Itinerary" />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="#stats">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconReportAnalytics />
                          </ListItemIcon>
                          <ListItemText primary="Statistics" />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="#FAQ">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconQuestionMark />
                          </ListItemIcon>
                          <ListItemText primary="FAQ" />
                        </ListItemButton>
                      </Link>
                    </List>
                  </Box>
                )}
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default InfoPageAppBar;
