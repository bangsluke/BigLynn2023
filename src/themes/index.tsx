import { useMemo, ReactNode } from 'react';

// Material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeOptions, ThemeProvider, Theme } from '@mui/material/styles';

// Project import
import Palette from './palette';
import Typography from './typography';

import componentStyleOverrides from './compStyleOverride';
import customShadows from './shadows';

// Assets
// Import colors from '../scss/_themes-vars.module.scss';

// Types
// Import { ColorProps } from 'types';
import { CustomShadowProps } from 'types/default-theme';
import { TypographyOptions } from '@mui/material/styles/createTypography';

interface Props {
  children: ReactNode;
}

export default function ThemeCustomization({ children }: Props) {
  const fontFamily = `'Roboto', sans-serif`;
  const rtlLayout = true;
  const borderRadius = 6;
  const outlinedFilled = true;
  const navType = 'light'; // Light, dark
  const presetColor = 'default'; // Default, theme1, theme2, theme3, theme4, theme5, theme6
  // Const locale = 'en';

  const theme: Theme = useMemo<Theme>(() => Palette(navType, presetColor), [navType, presetColor]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography: TypographyOptions = useMemo<TypographyOptions>(
    () => Typography(theme, borderRadius, fontFamily),
    [theme, borderRadius, fontFamily]
  );
  const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(() => customShadows(navType, theme), [navType, theme]);

  // Let color: ColorProps;
  // Switch (config.presetColor) {
  //   // Case 'theme1':
  //   //   Color = theme1;
  //   //   Break;
  //   // Case 'theme2':
  //   //   Color = theme2;
  //   //   Break;
  //   // Case 'theme3':
  //   //   Color = theme3;
  //   //   Break;
  //   // Case 'theme4':
  //   //   Color = theme4;
  //   //   Break;
  //   // Case 'theme5':
  //   //   Color = theme5;
  //   //   Break;
  //   // Case 'theme6':
  //   //   Color = theme6;
  //   //   Break;
  //   Case 'default':
  //   Default:
  //     Color = colors;
  // }

  const themeOption = {
    // Colors: color,
    heading: '',
    paper: '',
    backgroundDefault: '',
    background: '',
    darkTextPrimary: '',
    darkTextSecondary: '',
    textDark: '',
    menuSelected: '',
    menuSelectedBack: '',
    divider: ''
    // Customization: config
  };

  // Switch (config.navType) {
  //   Case 'dark':
  //     ThemeOption.paper = color.darkLevel2;
  //     ThemeOption.backgroundDefault = color.darkPaper;
  //     ThemeOption.background = color.darkBackground;
  //     ThemeOption.darkTextPrimary = color.darkTextPrimary;
  //     ThemeOption.darkTextSecondary = color.darkTextSecondary;
  //     ThemeOption.textDark = color.darkTextPrimary;
  //     ThemeOption.menuSelected = color.darkSecondaryMain;
  //     ThemeOption.menuSelectedBack = color.darkSecondaryMain + 15;
  //     ThemeOption.divider = color.darkTextPrimary;
  //     ThemeOption.heading = color.darkTextTitle;
  //     Break;
  //   Case 'light':
  //   Default:
  //     ThemeOption.paper = color.paper;
  //     ThemeOption.backgroundDefault = color.paper;
  //     ThemeOption.background = color.primaryLight;
  //     ThemeOption.darkTextPrimary = color.grey700;
  //     ThemeOption.darkTextSecondary = color.grey500;
  //     ThemeOption.textDark = color.grey900;
  //     ThemeOption.menuSelected = color.secondaryDark;
  //     ThemeOption.menuSelectedBack = color.secondaryLight;
  //     ThemeOption.divider = color.grey200;
  //     ThemeOption.heading = color.grey900;
  //     Break;
  // }

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      direction: rtlLayout ? 'rtl' : 'ltr',
      palette: theme.palette,
      mixins: {
        toolbar: {
          minHeight: '48px',
          padding: '16px',
          '@media (min-width: 600px)': {
            minHeight: '48px'
          }
        }
      },
      typography: themeTypography,
      customShadows: themeCustomShadows
    }),
    [rtlLayout, theme, themeCustomShadows, themeTypography]
  );

  const themes: Theme = createTheme(themeOptions);
  themes.components = useMemo(() => componentStyleOverrides(themes, borderRadius, outlinedFilled), [themes, borderRadius, outlinedFilled]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
