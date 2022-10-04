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
import { IconHome2, IconBook, IconMail, IconPlayerPlay } from '@tabler/icons';
import MenuIcon from '@mui/icons-material/Menu';

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

  return (
    <ElevationScroll {...others}>
      <MuiAppBar>
        <Container>
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }} data-testid="app-bar-drawer">
              <Logo />
            </Typography>
            <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={2}>
              <Button color="inherit" component={Link} href="https://www.rle.international/?lang=en" target="_blank">
                RLE International
              </Button>
              <Button
                color="inherit"
                component={Link}
                href="https://git.rle.de/Documentation/QualityControl/-/blob/testing-strategy/Documentation/SUMMARY.md"
                target="_blank"
              >
                Documentation
              </Button>
              <Button color="inherit" component={Link} href="mailto:luke.bangs@rle.co.uk" target="_blank">
                Contact Us
              </Button>
              <Button component={Link} href="/landing" disableElevation variant="contained" color="secondary">
                Begin
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
                      <Link style={{ textDecoration: 'none' }} href="https://www.rle.international/?lang=en" target="_blank">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconHome2 />
                          </ListItemIcon>
                          <ListItemText primary="RLE International" />
                        </ListItemButton>
                      </Link>
                      <Link
                        style={{ textDecoration: 'none' }}
                        href="https://git.rle.de/Documentation/QualityControl/-/blob/testing-strategy/Documentation/SUMMARY.md"
                        target="_blank"
                      >
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconBook />
                          </ListItemIcon>
                          <ListItemText primary="Documentation" />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="mailto:luke.bangs@rle.co.uk" target="_blank">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconMail />
                          </ListItemIcon>
                          <ListItemText primary="Contact Us" />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="/landing">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconPlayerPlay />
                          </ListItemIcon>
                          <ListItemText primary="Begin" />
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
