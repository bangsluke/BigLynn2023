import { FC, ReactNode, useMemo } from 'react';
import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material';
import { styled, Theme, useTheme } from '@mui/material/styles';
import Header from 'components/ui/Header';

interface MainStyleProps {
  theme: Theme;
}

// Styles
const MyLayout = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }: MainStyleProps) => {
  return {
    ...theme.typography.mainContent
  };
});

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme();

  const header = useMemo(
    () => (
      <Toolbar>
        <Header />
      </Toolbar>
    ),
    []
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default
        }}
      >
        {header}
      </AppBar>

      {/* Main content */}
      <MyLayout theme={theme} sx={{ marginTop: '100px' }}>
        {children}
      </MyLayout>
    </Box>
  );
};

export default MainLayout;
